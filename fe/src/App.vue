<template>
  <div id="app">
  
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <ball-menu>
      <a href="#" class="menu-item"> <i class="fa fa-book"></i> </a>
      <a href="#" class="menu-item"> <i class="fa fa-user-circle"></i> </a>
      <a href="#" class="menu-item"> <i class="fa fa-code"></i> </a>
    </ball-menu>
    <div id="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import BallMenu from './components/ball-menu'
export default {
  components: {BallMenu},
  name: 'app'
}
</script>

<style lang="scss">

html, body {
    margin: 0;
    height: 100%;
    background: #00000F;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
