<template>
  <nav class="bg-white-200  text-gray-200 p-4 border-b-1 shadow">
  <div class="container mx-auto flex justify-between items-center">
    <router-link :to=" {name: 'home'} " class="text-gray-500 text-lg font-semibold">Recipes</router-link>

    <!-- Hamburger menu button for mobile -->
    <button class="text-white focus:outline-none md:hidden">
      <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
      </svg>
    </button>

    <!-- Navbar links -->
    <div class="hidden md:flex space-x-4 ">
      <router-link :to=" { name: 'ByName', params: '' } " class="text-gray-500">Search </router-link>
      <!-- <router-link :to=" { name: 'ByLetter', params: '' } "  class="text-gray-500">Meals by Letter</router-link> -->
      <router-link :to=" { name: 'ingredient' } "  class="text-gray-500">Ingredients</router-link>
      
    </div>
  </div>
</nav>
</template>

<script setup>
  // import WelcomeItem from './WelcomeItem.vue'
</script>