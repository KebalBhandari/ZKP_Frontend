<script setup>
import Login from '../components/userLogin.vue'
import { onMounted } from 'vue'
import { Input, Ripple, initTWE } from 'tw-elements'

onMounted(() => {
  initTWE({ Input, Ripple }, { allowReinits: true })
})
</script>

<template>
  <main>
    <Login />
  </main>
</template>
