import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginViewAlt from '../views/LoginViewAlt.vue';
import AboutView from '../views/AboutView.vue';
import SignupViewAlt from '../views/SignupViewAlt.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginViewAlt,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupViewAlt,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
