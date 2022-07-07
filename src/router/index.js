import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: 'converter'
  },
  {
    path: '/converter',
    name: 'converter',
    component: () => import(/* webpackChunkName: "converter" */ '../views/CurrencyConverterView.vue')
  },
  {
    path: '/currencies',
    name: 'currencies',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "currencies" */ '../views/CurrenciesListView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
