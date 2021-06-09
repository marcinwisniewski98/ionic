import { createRouter, createWebHistory } from '@ionic/vue-router';
import TasksPage from '../pages/TasksPage.vue'

const routes = [
  {
    path: '/',
    redirect: '/tasks'
  },
  {
    path: '/tasks',
    component: TasksPage
  },
  {
    path: '/tasks/:id',
    component: () => import('../pages/TaskDetailsPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
