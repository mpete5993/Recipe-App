<template>
  <div class="bg-gray-100 h-100">
    <NavBar />
  </div>
  <main>
    <RouterView />
  </main>
</template>

<script setup>
  import NavBar from './NavBar.vue'
</script>


