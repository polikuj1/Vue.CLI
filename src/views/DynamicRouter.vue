<template>
  <h1>動態路由設定</h1>
  <div>
    路徑上要加上/:id，id為自訂的內容。
  </div>
</template>
<script>
import axios from 'axios';

export default {
  created() {
    axios.get('https://randomuser.me/api/')
      .then((res) => {
        console.log(res);
      });
  },
};
</script>
