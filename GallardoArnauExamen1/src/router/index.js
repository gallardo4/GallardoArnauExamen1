import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/exercici1',
      name: 'ex1',
      component: () => import('@/views/Ex1View.vue'),
      children: [
        {
          path: ':productId',
          name: 'productDetail',
          component: () => import('@/components/exercici1/ProductDetail.vue')
        }
      ]
    },
    {
      path: '/exercici2',
      name: 'ex2',
      component: () => import('@/views/Ex2View.vue'),
    },
    {
      path: '/exercici3',
      name: 'ex3',
      component: () => import('@/views/Ex3View.vue'),
    },
  ],
})

export default router