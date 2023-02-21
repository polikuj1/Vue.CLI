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
        // ../上一層目錄的views資料夾
        component: () => import('../views/componentA.vue'),
      },
      {
        path: '2',
        component: () => import('../views/componentB.vue'),
      },
      {
        // 動態路由，後面接上/:自訂義名稱。
        path: 'dynamicRouter/:id',
        component: () => import('../views/DynamicRouter.vue'),
      },
      {
        // 動態路由，後面接上/:自訂義名稱。
        path: 'dynamicRouterByProps/:id',
        component: () => import('../views/DynamicRouterByProps.vue'),
        props: (route) => {
          console.log(route);
          // 當使用箭頭函式要回傳物件字面值，必須將內容包覆在大括號(圓括號)內
          return {
            id: route.params.id,
          };
        },
      },
      {
        path: 'routerNav',
        component: () => import('../views/routerNavagation.vue'),
      },
      {
        // *代表捕獲所有的路徑，當路徑不存在時，可以渲染一個錯誤警告
        path: '*',
        component: Error,
      },
    ],
  },
  {
    path: '/nameView',
    component: () => import('../views/namedView.vue'),
    // 具名視圖，對應名字去渲染對應的元件
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
