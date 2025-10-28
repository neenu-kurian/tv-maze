import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ShowDetailView from '../views/ShowDetailView.vue';
import NotFoundView from '@/views/NotFoundView.vue';

const routes = [
  {
    path: '/',
    component: HomeView,
    name: 'home',
  },
  {
    path: '/show/:id',
    component: ShowDetailView,
    name: 'show-detail',
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFoundView,
    name: 'not-found',
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
