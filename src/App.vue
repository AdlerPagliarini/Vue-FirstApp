<template>
  <div id="app">
    <img src="./assets/logo.png">
    <br/>
    <br/>
    <router-link to="/user">Users | </router-link>
    <router-link to="/">Vue Fundamentals | </router-link>
    <router-link to="/hello">Hello CLI </router-link>
    <br/>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
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
</style>
