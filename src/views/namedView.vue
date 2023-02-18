<template>
  <h1>命名視圖</h1>
  <div class="row">
    <div class="col-6">
      <!-- 這邊使用的標籤是router-view，沒有要前往其他分頁 -->
      <router-view name="left"></router-view>
    </div>
    <div class="col-6">
      <router-view name="right"></router-view>
    </div>
  </div>
</template>
