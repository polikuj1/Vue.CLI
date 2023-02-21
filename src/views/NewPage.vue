<template>
<div>
    <h1>我是新頁面</h1>
    <div class="row">
      <div class="col-4">
        <router-link to="/newPage/1">元件A</router-link> <br>
        <router-link to="/newPage/2">元件B</router-link>
      </div>
      <div class="col-4">
        <router-link :to="`/newPage/dynamicRouter/${id}`">
          動態路由網站 <p>隨機使用者的seed資料|{{ id }}</p>
          <button type="button" @click="getUser">更換使用者</button>
        </router-link>
      </div>
      <div class="col-4">
        <router-link to="/newPage/routerNav">路由方法介紹</router-link>
      </div>
    </div>
    <router-view></router-view>
</div>
</template>

<script>
import axios from 'axios';

export default {
  created() {
    this.getUser();
  },
  data() {
    return {
      id: '',
    };
  },
  methods: {
    getUser() {
      console.log('取得使用者資料');
      axios.get('https://randomuser.me/api/')
        .then((res) => {
          this.id = res.data.info.seed;
        });
    },
  },
};
</script>
