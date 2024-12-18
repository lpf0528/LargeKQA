import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/Home.vue';
import AboutPage from '@/views/About.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
];

const router = createRouter({
  history: createWebHistory(), // 使用 HTML5 的 history 模式
  routes,
});

export default router;
