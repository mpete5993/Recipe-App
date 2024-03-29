import axiosClient from '../axiosClient.js'

export function searchMeals({ commit }, keyword) {
	axiosClient.get(`search.php?s=${keyword}`)
	.then(({data}) => {
		// debugger;
		commit('setSearchedMeals', data.meals)
	})
}

export function searchMealsByLetter({ commit }, letter) {
	axiosClient.get(`search.php?f=${letter}`)
	.then(({data}) => {
		// debugger;
		commit('setMealsByLetter', data.meals)
	})
}


export function searchMealsByIngredient({ commit }, ing) {
	axiosClient.get(`filter.php?i=${ing}`)
	.then(({data}) => {
		// debugger;
		commit('setMealsByIngredient', data.meals)
	})
}