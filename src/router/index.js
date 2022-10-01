import Vue from 'vue';
import VueRouter from 'vue-router';
import LoginView from '../LoginView.vue';
import SellView from '../views/SellView.vue';
import ProductDetail from '../views/ProductDetail.vue';
import WishList from '../views/WishList.vue';
import RegistrationView from '../views/RegistrationView.vue';
import WriteView from '../views/WriteView';

Vue.use(VueRouter);

const routes = [
  {
    path: '/about',
    name: 'about',
    component: AboutView,
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
    path: '/detail',
    name: 'ProductDetail',
    component: ProductDetail,
  },
  {
    path: '/wish',
    name: 'WishList',
    component: WishList,
  },
  {
    path: '/registration',
    name: 'registration',
    component: RegistrationView,
  },
  {
    path: '/write',
    name: 'write',
    component: WriteView,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
