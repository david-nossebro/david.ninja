<template>
  <div id="app">
    <circle-menu class="the-menu" type="bottom" :number="4" animate="animated jello" mask='black' btn='true' circle>
      <a slot="item_1" class="fa fa-twitter fa-lg"></a>
      <a slot="item_2" class="fa fa-weixin fa-lg"></a>
      <a slot="item_3" class="fa fa-weibo fa-lg"></a>
      <a slot="item_4" class="fa fa-github fa-lg"></a>
    </circle-menu>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.the-menu {
  float: left;
}
</style>
