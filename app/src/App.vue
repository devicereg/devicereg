<template>
  <div id="app">
    <navigation></navigation>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>

import Home from './components/Home'
import Navigation from './components/Navigation'
import AppFooter from './components/AppFooter'
import Dashboard from './components/Dashboard'
import Bootstrap from './components/Bootstrap'
import Kontakt from './components/Kontakt'
import Translations from './components/Translations'


export default {
  name: 'app',
  components: {
    Home,
    Navigation,
    AppFooter,
    Dashboard,
    Bootstrap,
    Kontakt,
    Translations
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
