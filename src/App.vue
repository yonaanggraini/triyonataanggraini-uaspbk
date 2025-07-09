<template>
  <div id="app">
    <Navbar />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from '@/components/AppNavbar.vue'
import Footer from '@/components/Footer.vue'


</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
  padding: 2rem 0;
}
</style>
