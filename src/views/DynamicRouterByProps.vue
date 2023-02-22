<template>
  <h1>動態路由設定</h1>
  <div>
    路徑上要加上/:id，id為自訂的內容。
  </div>
</template>

<script>
import axios from 'axios';

export default {
  // 記得要寫porps，才能從router那裏接受資料，
  props: ['id'],
  created() {
    console.log(this.id);
    const seed = this.id;
    // 後面接上?seed=變數，為你要取得的指定資料
    axios.get(`https://randomuser.me/api/?seed=${seed}`)
      .then((res) => {
        console.log(res);
      });
  },
};
</script>
