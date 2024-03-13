import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '../components/DefaultLayout.vue'
import HomeView from '../views/HomeView.vue'
import Ingredients from '../views/Ingredients.vue'
import MealsByName from '../views/MealsByName.vue'
import MealsByLetter from '../views/MealsByLetter.vue'
import MealsByIngredients from '../views/MealsByIngredients.vue'
import MealDetails from '../views/MealDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '/',
          name: 'home',
          component: HomeView
        },
        {
          path: '/by-name/:name?',
          name: 'ByName',
          component: MealsByName
        },
        {
          path: '/by-letter/:letter?',
          name: 'ByLetter',
          component: MealsByLetter
        },
        {
          path: '/ingredient/',
          name: 'ingredient',
          component: Ingredients
        },
        {
          path: '/by-ingredient/:ingredient',
          name: 'ByIngredient',
          component: MealsByIngredients
        }, 
        {
          path: '/meal/:id',
          name: 'mealDetails',
          component: MealDetails
        }
      ]
    }
    
  ]
})

export default router
