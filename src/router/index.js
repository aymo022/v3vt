import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: { name: 'goods' },
    component: () => import('@/layouts/BaseLayout.vue'),
    children: [
      //  商品列表
      {
        path: '/goods',
        name: 'goods',
        component: () => import('@/views/Goods/index.vue'),
      },
      //  商品详情
      {
        path: '/goods/:id',
        name: 'goodsDetail',
        component: () => import('@/views/Goods/detail.vue'),
      },
    ],
  },
];

// import baseRouters from './modules/base';

// const routes = [...baseRouters];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return {
      el: '#app',
      top: 0,
      behavior: 'smooth',
    };
  },
});

export default router;
