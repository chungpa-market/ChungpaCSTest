import Vue from 'vue';
import VueRouter from 'vue-router';
import MainView from '../views/MainView';
import LoginView from '../views/LoginView';
import RegistrationView from '../views/RegistrationView';
import WriteView from '../views/WriteView';
import SellView from '../views/SellView';
import ShareView from '../views/ShareView'
import BuyView from '../views/BuyView'
import ProductDetail from '../views/ProductDetail';
import WishList from '../views/WishList';
import TransactionHistory from '../views/TransactionHistory';
import MyPage from '../views/MyPage';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainView,
    meta: {
      title: '청파마켓',
    },
  },
  {
    path: '/sell',
    name: 'sell',
    component: SellView,
    meta: {
      title: '팔아요',
    },
  },
  {
    path: '/buy',
    name: 'buy',
    component: BuyView,
  },
  {
    path: '/share',
    name: 'share',
    component: ShareView,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: {
      title: '로그인',
    },
  },
  {
    path: '/registration',
    name: '/registration',
    component: RegistrationView,
    meta: {
      title: '상품등록',
    },
  },
  {
    path: '/write',
    name: '/write',
    component: WriteView,
    meta: {
      title: 'write',
    },
  },
  {
    path: '/detail',
    name: 'ProductDetail',
    component: ProductDetail,
    meta: {
      title: '상품상세',
    },
  },
  {
    path: '/wish',
    name: 'WishList',
    component: WishList,
    meta: {
      title: '찜목록',
    },
  },
  {
    path: '/mypage',
    name: 'MyPage',
    component: MyPage,
    meta: {
      title: '마이페이지',
    },
  },
  {
    path: '/transactionhistory',
    name: 'TransactionHistory',
    component: TransactionHistory,
    meta: {
      title: '판매내역',
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

const DEFAULT_TITLE = 'chungpa';
router.afterEach((to) => {
  const title = to.meta.title === undefined ? DEFAULT_TITLE : to.meta.title;
  Vue.nextTick(() => {
    document.title = title;
  });
});

export default router;
