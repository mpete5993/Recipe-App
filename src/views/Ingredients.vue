<template>
<!-- <pre> {{ingredients}} </pre> -->
  <div class="container mx-auto px-4 py-8">
    <h2 class="text-2xl font-semibold text-gray-800 mb-4">Ingredients</h2>
    <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
      <!-- List item 1 -->
      <router-link 
            :to=" {name: 'ByIngredient', params: {ingredient: ingredient.strIngredient}} " v-for="ingredient of ingredients" 
                :key="ingredient.id">
            <li class="bg-white shadow-md rounded-lg overflow-hidden" 
                >
            <div class="p-4 block">
                <h3 class="text-xl font-semibold text-gray-800 mb-2"> {{ingredient.strIngredient}} </h3>
              <p class="text-gray-600">{{ingredient.strDescription}}  </p>
            </div>
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script setup>
  import {  computed , onMounted, watch, ref} from 'vue'
  import {useRoute} from 'vue-router'
  import store from '../store'
  import axiosClient from '../axiosClient.js'
  import YoutubeBtn from '../components/YoutubeBtn.vue'


  const route = useRoute()
  const ingredients = ref([])

  // const meals = computed(() => store.state.mealsByLetter)

  // watch(route, () => {
  //  store.dispatch('searchMealsByLetter', route.params.letter)
  // })

  onMounted(() => {
    axiosClient.get(`list.php?i=list`)
    .then(({data}) => {
      ingredients.value = data.meals
    })
  })
</script>