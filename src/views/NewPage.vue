<template>
<div>
    <h1>我是新頁面</h1>
    <div class="row">
      <div class="col-4">
        <router-link to="/newPage/1">元件A</router-link> <br>
        <router-link to="/newPage/2">元件B</router-link>
      </div>
      <div class="col-8">

      </div>
    </div>
    <router-view></router-view>
</div>
</template>
