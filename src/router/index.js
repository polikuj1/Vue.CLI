import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/newPage',
    name: '新頁面',
    component: () => import('../views/NewPage.vue'),
    // router的巢狀結構，子路由的路徑不需要加上/，否則會帶回到根目錄
    children: [
      {
        path: '1',
        component: () => import('../views/componentA.vue'),
      },
      {
        path: '2',
        component: () => import('../views/componentB.vue'),
      },
      {
        path: 'dynamicRouter',
        component: () => import('../views/DynamicRouter.vue'),
      },
    ],
  },
  {
    path: '/nameView',
    component: () => import('../views/namedView.vue'),
    children: [
      {
        path: 'c2d',
        components: {
          left: () => import('../views/componentC.vue'),
          right: () => import('../views/componentD.vue'),
        },
      },
      {
        path: 'd2c',
        components: {
          left: () => import('../views/componentD.vue'),
          right: () => import('../views/componentC.vue'),
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
