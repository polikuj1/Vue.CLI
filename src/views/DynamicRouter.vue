<template>
  <h1>動態路由設定</h1>
  <div class="row">
    <div class="col-6">
    路徑上要加上/:id，id為自訂的內容。
    </div>
    <div class="col-6">
    <h4>取得此用戶的個人資料</h4>
    <p>信箱: {{ email }}</p>
    <p>{{ id }}</p>
    <button type="button" @click="getRoute">更新id</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  created() {
    this.api();
  },
  data() {
    return {
      email: '',
      id: '',
    };
  },
  watch: {
    id() {
      this.api();
    },
  },
  computed: {
    userId() {
      console.log('我是計算');
      return this.$route.params.id;
    },
  },
  methods: {
    api() {
      // 藉由網址傳過來的id資料去打API，取得此ID相對應的個人資料之類
      console.log(this.$route.params);
      const seed = this.$route.params.id;
      this.id = this.$route.params.id;
      // 後面接上?seed=變數，為你要取得的指定資料
      axios.get(`https://randomuser.me/api/?seed=${seed}`)
        .then((res) => {
          console.log(res);
          this.email = res.data.results[0].email;
        });
    },
    getRoute() {
      this.id = this.$route.params.id;
    },
  },
};
</script>
