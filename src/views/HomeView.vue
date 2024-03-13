<template>
  <div class="grid md:grid-cols-3">
    <main class="px-16 py-6 bg-white-100 md:col-span-3">

      <header>
        <h2 class="text-5xl font-semibold text-gray-400">Recipes</h2>
      </header>

      <div>
        <h4 class="font-bold mt-12 pb-2 border-b border-gray-200">Popular Recipes</h4>

        <div class="mt-8 grid lg:grid-cols-3 md:grid-cols-2  gap-10 ">
          <!-- <pre>{{meals}}</pre> -->

          <!-- cards -->
          <div class="card hover:shadow-lg"  
                v-for="meal of meals" 
                :key="meal.idMeal">

            <router-link :to=" {name: 'mealDetails', params: {id: meal.idMeal}} ">
              <img :src="meal.strMealThumb" :alt="strMeal" class="w-full h-32 sm:h-48 object-cover"> 
            </router-link>

            <div class="m-4">
              <router-link :to=" {name: 'mealDetails', params: {id: meal.idMeal}} ">
                <span class="font-bold">{{ meal.strMeal }} </span><br>
              </router-link>
              <span class="block text-gray-500">Category: {{meal.strCategory}} </span>
            </div>
            <div class="badge">
              <span class=""> {{meal.strArea}} </span>
            </div>

            <div class="flex  md:justify-left m-4">
              <YoutubeBtn :href="meal.strYoutube"> Youtube <i class="fa-brands fa-youtube"></i></YoutubeBtn>
              <router-link :to=" {name: 'mealDetails', params: {id: meal.idMeal}} "
              class="btn text-primary ml-2 border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500">View</router-link>
            </div>
          </div>
        </div>

      </div>
    </main>
  </div>
 <!-- <div class="container  px-8 py-8">
    <div class="grid grid-cols-1 md:grid-cols-5 sm:grid-cols-4 gap-4">
      <div 
      v-for="meal of meals" 
      :key="meal.idMeal"
      >
      <router-link :to=" {name: 'mealDetails', params: {id: meal.idMeal}} ">
        <img :src="meal.strMealThumb" :alt="strMeal" >
      </router-link>
      <div class="mb-4">
        <h3 class="font-bold"> {{ meal.strMeal }} </h3>
      </div>
      <div class="mb-4">
        <YoutubeBtn :href="meal.strYoutube"> Youtube</YoutubeBtn>
        <router-link to="/" class="rounded px-3 py-2 border border-red-600" > 
          View 
        </router-link>
      </div>
    </div>
    </div>
  </div> -->
</template>

<script setup>

 import { computed, onMounted, ref } from 'vue'
 import store from '../store'
 import axiosClient from '../axiosClient.js'
 import YoutubeBtn from '../components/YoutubeBtn.vue'


const meals = ref([]);
const ingredients = ref([]);

onMounted( async() => {
   for (let i = 0;  i < 10; i++) {
     axiosClient.get(`random.php`)
     .then(({data}) => meals.value.push(data.meals[0]))
   }
})

// onMounted( async() => {
//   const response = await axiosClient.get('/list.php?i=list')

//   ingredients.value = response.data
// })

</script>