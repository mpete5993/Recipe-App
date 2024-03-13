<template>
	<!-- <pre>{{meal}}</pre> -->
	<div class="grid grid-cols-3 m-4 rounded shadow-md bg-gray-100">
		<div class="col-span-2 ">
			<div class="container mx-auto px-1 py-1">
			    <div class="bg-white  overflow-hidden">
			      <img :src="meal.strMealThumb" :alt="strMeal"  class="w-full h-96 object-cover object-center">
			      <div class="p-6">
			        <h2 class="text-3xl font-semibold text-gray-800 mb-2">{{meal.strMeal}}</h2>
			        <div class="text-gray-600 mb-4">
			        	Category: <span class="font-semibold">{{meal.strCategory}}</span> <br>
			        	Tags: <span class="font-semibold"> {{meal.strTags}}</span></div>
			        <p class="text-gray-700 leading-relaxed">
			          {{meal.strInstructions}}
			        </p>
			      </div>
			      <div class="px-6 py-4 bg-gray-200">
			      	<div class="m-4">
						<YoutubeBtn :href="meal.strYoutube"> Watch  <i class="fa-brands fa-youtube"></i> </YoutubeBtn>
					<a 
						:href="meal.strSource" 
						target="_blank" 
						class="btn text-primary border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500 m-1">  View Original Source  </a>
						</div>
					        
					      </div>
					    </div>
					  </div>
				</div>
		<div class="col-span-1">
			<div class="container mx-auto px-4 py-8">
			    <h2 class="text-2xl font-semibold text-gray-800 mb-4">Ingredients</h2>
			    <ul class="list-disc list-inside">
			    	<template v-for="(el, ind) of new Array(20)">
					<li v-if="meal[`strIngredient${ind + 1}`]" 
					class="text-gray-800 mb-2 bg-secondary-100 text-secondary-200 text-xs  font-bold rounded-full p-2">
					 {{ind + 1}}. {{meal[`strIngredient${ind + 1}`]}} 
					</li>
				</template>
			      <!-- Add more list items as needed -->
			    </ul>
			  </div>

			  <div class="container mx-auto px-4 py-8">
			    <h2 class="text-2xl font-semibold text-gray-800 mb-4">Measures</h2>
			    <ul class="list-disc list-inside">
			    	<template v-for="(el, ind) of new Array(20)">
					<li v-if="meal[`strMeasure${ind + 1}`]" 
					class="text-gray-800 mb-2 bg-secondary-100 text-secondary-200 text-xs  font-bold rounded-full p-2">
					 {{ind + 1}}. {{meal[`strMeasure${ind + 1}`]}} 
					</li>
				</template>
			      <!-- Add more list items as needed -->
			    </ul>
			  </div>
		</div>
	</div>
</template>

<script setup>
	import {ref, computed, onMounted} from 'vue';
	import { useRoute} from 'vue-router'
	 import axiosClient from '../axiosClient.js'
	 import YoutubeBtn from '../components/YoutubeBtn.vue'

	const route = useRoute();
	const meal = ref({})

	onMounted(() => {
		// keyword.value = route.params.name

		axiosClient.get(`lookup.php?i=${route.params.id}`)

		.then(({data}) => {
			meal.value = data.meals[0] || {}
		})

		// if (keyword.value) {
		// 	searchMeals()
		// }
	})

</script>