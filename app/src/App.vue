<template>
  <div id="app">
    <navigation></navigation>
    <router-view></router-view>
  </div>
</template>

<script>

import Home from './components/Home'
import Navigation from './components/Navigation'
import Dashboard from './components/Dashboard'
import Bootstrap from './components/Bootstrap.vue'
import Kontakt from './components/Kontakt'
import TermsOfUse from './components/TermsOfUse'


export default {
  name: 'app',
  components: {
    Home,
    Navigation,
    Dashboard,
    Bootstrap,
    Kontakt,
    TermsOfUse
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
  margin-top:100px;
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
