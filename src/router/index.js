import { createRouter, createWebHistory } from 'vue-router';
import DisplayData from '../components/DisplayData.vue';

const routes = [
  { path: '/display', component: DisplayData, name: 'DisplayData' },
  // другие маршруты...
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;