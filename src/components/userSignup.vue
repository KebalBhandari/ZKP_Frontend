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
          <form @submit.prevent="submitSignup">
            <div class="flex flex-row items-center justify-center lg:justify-center">
              <div class="text-center">
                <img
                  class="mx-auto w-20"
                  src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                  alt="logo"
                />
              </div>
            </div>

            <div
              class="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300 dark:before:border-neutral-500 dark:after:border-neutral-500"
            >
              <p class="mx-4 mb-0 text-center font-semibold dark:text-white">Sign Up</p>
            </div>

            <div class="relative mb-6" data-twe-input-wrapper-init>
              <input
                type="text"
                v-model="username"
                class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                id="username"
                placeholder="Username"
              />
              <label
                for="username"
                class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[1.15rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
              >
                Username
              </label>
            </div>

            <div class="relative mb-6" data-twe-input-wrapper-init>
              <input
                type="email"
                v-model="email"
                class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                id="signupEmail"
                placeholder="Email address"
              />
              <label
                for="signupEmail"
                class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[1.15rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
              >
                Email Address
              </label>
            </div>

            <div class="relative mb-6" data-twe-input-wrapper-init>
              <input
                type="password"
                v-model="password"
                class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                id="signupPassword"
                placeholder="Password"
              />
              <label
                for="signupPassword"
                class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[1.15rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
              >
                Password
              </label>
            </div>

            <div class="text-center lg:text-left">
              <button
                type="submit"
                class="inline-block w-full rounded bg-primary px-7 pb-2 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                data-twe-ripple-color="light"
              >
                Sign Up
              </button>

              <p class="mb-0 mt-2 pt-1 text-sm font-semibold">
                Already have an account?
                <a
                  href="/Login"
                  class="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                  >Login</a
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
import { derivePrivateKey, deriveVerifier } from 'secure-remote-password/client'
import crypto from 'crypto-browserify'
import axios from 'axios'

export default {
  name: 'SignupForm',
  data() {
    return {
      username: '',
      email: '',
      password: '',
    }
  },
  methods: {
    async submitSignup() {
      try {
        // Step 1: Input validation
        if (!this.username || !this.email || !this.password) {
          this.$swal({
            icon: 'error',
            title: 'Missing Fields',
            text: 'Please fill in all required fields.',
            showConfirmButton: true,
          })
          return
        }

        // Step 2: Generate salt
        const salt = crypto.randomBytes(16).toString('hex')

        // Step 3: Generate SRP private key and verifier
        const privateKey = derivePrivateKey(salt, this.email, this.password)
        const verifier = deriveVerifier(privateKey)

        // Step 4: Send salt and verifier to the server
        const response = await axios.post('/api/register', {
          username: this.username,
          email: this.email,
          salt: salt,
          verifier: verifier.toString('hex'),
        })

        // Step 5: Handle success
        if (response.data.status === 'Registration successful') {
          this.$swal({
            icon: 'success',
            title: 'Registration Successful!',
            text: 'Your account has been created.',
            showConfirmButton: false,
            timer: 2000,
            customClass: {
              popup: 'small-swal-popup', // Class for the popup container
              title: 'small-swal-title', // Class for the title
              content: 'small-swal-content', // Class for the content
            },
          })
        } else {
          throw new Error('Unexpected response from server')
        }
      } catch (error) {
        // Step 6: Handle errors
        let errorMessage = 'Registration failed. Please try again.'

        if (error.response) {
          // Handle specific backend errors
          if (error.response.status === 409) {
            errorMessage = 'User Email already exists!'
          } else if (error.response.status === 400) {
            errorMessage = 'Invalid input. Please check your data.'
          } else if (error.response.status === 500) {
            errorMessage = 'Server error. Please try again later.'
          } else {
            errorMessage = error.response.data.error || 'Something went wrong!'
          }
        } else if (error.message) {
          // General errors
          errorMessage = error.message
        }

        this.$swal({
          icon: 'error',
          title: 'Registration Failed!',
          text: errorMessage,
          showConfirmButton: true,
          timer: 2000,
          customClass: {
            popup: 'small-swal-popup', // Class for the popup container
            title: 'small-swal-title', // Class for the title
            content: 'small-swal-content', // Class for the content
          },
        })
      }
    },
  },
}
</script>
