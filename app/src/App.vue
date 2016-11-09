<template>
  <div id="app">
    <img src="./assets/logo.png">
    <navigation></navigation>
    <router-view></router-view>
    <NaviFooter></NaviFooter>
  </div>
</template>

<script>
import Navigation from './components/Navigation'
import NaviFooter from './components/NaviFooter'

export default {
  name: 'app',
  components: {
    Navigation,
    NaviFooter
  }
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

h1, h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
