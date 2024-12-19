<script setup>
import SignUp from '../components/userSignup.vue'
import { onMounted } from 'vue'
import { Input, Ripple, initTWE } from 'tw-elements'

onMounted(() => {
  initTWE({ Input, Ripple }, { allowReinits: true })
})
</script>

<template>
  <main>
    <SignUp />
  </main>
</template>
