<template>
  <div>
    404
  </div>
</template>

<script>
export default {
  // 進入404後，自動重新導向其他頁面
  created() {
    setTimeout(() => {
      this.$router.push({
        name: 'home',
      });
    }, 3000);
  },
};
</script>
