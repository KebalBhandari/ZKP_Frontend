<template>
  <section class="h-screen">
    <div class="h-full">
      <div class="flex h-full flex-wrap items-center justify-center lg:justify-between">
        <div
          class="hidden md:block shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12"
        >
          <img
            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            class="w-full"
            style="max-height: 250px"
            alt="Sample image"
          />
        </div>

        <div class="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
          <form @submit.prevent="submitLogin">
            <div class="flex flex-row items-center justify-center lg:justify-center">
              <div class="text-center">
                <img
                  class="mx-auto w-20"
                  style="max-width: 250px"
                  src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                  alt="logo"
                />
              </div>
            </div>

            <div
              class="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300 dark:before:border-neutral-500 dark:after:border-neutral-500"
            >
              <p class="mx-4 mb-0 text-center font-semibold dark:text-white">Login</p>
            </div>

            <div class="relative mb-6" data-twe-input-wrapper-init>
              <input
                type="text"
                v-model="email"
                class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                id="email"
                placeholder="Email address"
              />
              <label
                for="email"
                class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[1.15rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
                >Email Address
              </label>
            </div>

            <div class="relative mb-6" data-twe-input-wrapper-init>
              <input
                v-model="password"
                type="password"
                class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                id="password"
                placeholder="Password"
              />
              <label
                for="password"
                class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[1.15rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
                >Password
              </label>
            </div>

            <div class="text-center lg:text-left">
              <button
                type="submit"
                class="inline-block w-full rounded bg-primary px-7 pb-2 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                data-twe-ripple-color="light"
              >
                Login
              </button>

              <p class="mb-0 mt-2 pt-1 text-sm font-semibold">
                Don't have an account?
                <a
                  href="/Signup"
                  class="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                  >Register</a
                >
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import srp from 'secure-remote-password/client'
import axios from 'axios'
import router from '@/router'

export default {
  data() {
    return {
      email: '',
      password: '',
      clientEphemeral: null, // Store the ephemeral values for SRP
    }
  },
  methods: {
    async submitLogin() {
      try {
        // Step 1: Input validation
        if (!this.email || !this.password) {
          this.$swal({
            icon: 'error',
            title: 'Missing Fields',
            text: 'Please enter your email and password.',
            showConfirmButton: true,
          })
          return
        }

        // Step 2: Generate ephemeral values (A and a)
        const clientEphemeral = srp.generateEphemeral()
        const A = clientEphemeral.public

        // Step 3: Send A to the server to start authentication
        const startResponse = await axios.post('/api/authenticate/start', {
          email: this.email,
          A,
        })

        // Extract salt and server public ephemeral (B) from server response
        const { salt, B } = startResponse.data

        if (!salt || !B) {
          throw new Error('Invalid server response during authentication start')
        }

        // Step 4: Derive the private key and compute session proof (M1)
        const privateKey = srp.derivePrivateKey(salt, this.email, this.password)
        const session = srp.deriveSession(
          clientEphemeral.secret, // 'a'
          B, // Server public ephemeral
          salt,
          this.email,
          privateKey,
        )
        const M1 = session.proof

        // Step 5: Send M1 to the server for verification
        const finishResponse = await axios.post('/api/authenticate/finish', {
          email: this.email,
          M1,
        })

        const { M2 } = finishResponse.data
        const ClientPublicData = clientEphemeral.public

        srp.verifySession(ClientPublicData, session, M2)
        this.$swal({
          icon: 'success',
          title: 'Login Successful!',
          text: 'Welcome back!',
          showConfirmButton: false,
          timer: 2000,
        })
        router.push('Home')
        // Step 6: Verify server proof (M2)
      } catch (error) {
        console.error('Login failed:', error)

        // Handle errors and display appropriate message
        let errorMessage = 'Login failed. Please try again.'

        if (error.response) {
          if (error.response.status === 404) {
            errorMessage = 'User not found. Please check your email.'
          } else if (error.response.status === 401) {
            errorMessage = 'Invalid credentials. Please try again.'
          } else if (error.response.status === 500) {
            errorMessage = 'Server error. Please try again later.'
          } else {
            errorMessage = error.response.data.error || error.message
          }
        } else {
          errorMessage = error.message || 'An unknown error occurred.'
        }

        this.$swal({
          icon: 'error',
          title: 'Login Failed!',
          text: errorMessage,
          showConfirmButton: true,
        })
      }
    },
  },
}
</script>
