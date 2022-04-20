import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import DishesView from '../views/DishesView.vue'
import LifestyleView from '../views/LifestyleView.vue'
import InfoView from '../views/InfoView.vue'
import RecipeView from '../views/RecipeView.vue'
import DeepInfoView from '../views/DeepInfoView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AboutView
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterView
  },
  {
    path: '/dishes',
    name: 'Dishes',
    component: DishesView
  },
  {
    path: '/lifestyle',
    name: 'Lifestyle',
    component: LifestyleView
  },
  {
    path: '/info',
    name: 'Info',
    component: InfoView
  },
  {
    path: '/recipe',
    name: 'Recipe',
    component: RecipeView

  },
  {
    path: '/information',
    name: 'Information',
    component: DeepInfoView

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  base: process.env.BASE_URL,
  routes
})

export default router
