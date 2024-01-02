import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import DonateNowView from '../views/DonateNowView.vue';
import DonationHistoryView from '../views/DonationHistoryView.vue';

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    meta: {
      hideNavbar: false,
    },
  },
  {
    path: '/',
    name: 'login',
    component: LoginView,
    meta: {
      hideNavbar: true,
    },
  },
  {
    path: '/donate',
    name: 'donate',
    component: DonateNowView,
  },
  {
    path: '/history',
    name: 'history',
    component: DonationHistoryView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
