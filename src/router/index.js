import Vue from 'vue';
import VueRouter from 'vue-router';
import MainView from '../views/MainView';
import LoginView from '../views/LoginView';
import RegistrationView from '../views/RegistrationView';
import WriteView from '../views/WriteView';
import SellView from '../views/SellView';
import ProductDetail from '../views/ProductDetail';
import WishList from '../views/WishList';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainView,
  },
  {
    path: '/sell',
    name: 'sell',
    component: SellView,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/registration',
    name: '/registration',
    component: RegistrationView,
  },
  {
    path: '/write',
    name: '/write',
    component: WriteView,
  },
  {
    path: '/detail',
    name: 'ProductDetail',
    component: ProductDetail,
  },
  {
    path: '/wish',
    name: 'WishList',
    component: WishList,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;