<template>
	<div class="grid grid-cols-3 px-8 py-2">
		<div class="col-span-3">
			<input type="text" class="rounded border-2 border-gray-200 w-full focus:outline-none" placeholder="Search for meals.."
		v-model="keyword"
		@change="searchMeals">
		</div>
	</div>
	<div class="grid grid-cols-3">
		<div class="col-span-2">
			<div class="flex gap-2  px-8 py-2">
	     Sort by: <router-link :to="{ name: 'ByLetter', params: {letter}}" v-for="letter of letters" :key="letter" >
	       <h2 class="font-bold">{{letter}}</h2>
	     </router-link>
	   </div>
		</div>
	</div>

	<main class="px-16 py-6 bg-white-100 md:col-span-3">
      <div>

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
</template>

<script setup>

	import {ref, computed, onMounted} from 'vue';
	import { useRoute} from 'vue-router'
	import store from '../store'

	import YoutubeBtn from '../components/YoutubeBtn.vue'


	const route = useRoute();
	const letters = 'ABCDEFJHIJKLMNOPQRSTWXYZ'.split("");
	const keyword = ref('')
	const ingredients = ref([])

	const meals = computed (() => store.state.searchedMeals);

	function searchMeals ( ) {
		if(keyword.value) {
			store.dispatch('searchMeals', keyword.value)
		}
		else {
			store.commit('setSearchedMeals', [])
		}
		
	}

	onMounted(() => {
		keyword.value = route.params.name

		if (keyword.value) {
			searchMeals()
		}
	})


</script>