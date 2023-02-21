<template>
  <div>
    <div class="col-12">
      <button type="button" @click="getRoute" class="btn btn-info">getRoute取得路由屬性</button>
      <button type="button" @click="getRouter">getRouter取得路由方法</button>
      <br>
      <button type="button" @click="push">push切換頁面(有歷史紀錄可以回上頁)</button>
      <button type="button" @click="replace">replace切換頁面(無歷史紀錄)</button>
      <br>
      <button type="button" @click="go">go可以前往上頁或下頁</button>
      <br>
      <button type="button" @click="addRoute">addRoute新增一個路由</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    getRoute() {
      console.log(this.$route);
    },
    getRouter() {
      console.log(this.$router);
    },
    push() {
      this.$router.push('dynamicRouter/:id');
    },
    replace() {
      this.$router.replace('dynamicRouter/:id');
    },
    go() {
      this.$router.go(-1);
    },
    addRoute() {
      // 新的路徑名稱，但對應到的頁面元件一樣是about，
      this.$router.addRoute({
        path: '/newAbout',
        // ./目前目錄下的aboutview元件
        component: () => import('./AboutView.vue'),
      });
    },
  },
};
</script>
