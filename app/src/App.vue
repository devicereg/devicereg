<template>
  <div id="app">
    <delete-modal v-if="user.authenticated"></delete-modal>
    <navigation></navigation>
    <router-view></router-view>
  </div>
</template>

<script>

import auth from './auth'
import Home from './components/Home'
import Navigation from './components/Navigation'
import Dashboard from './components/Dashboard'
import DeleteProfileModal from './components/UserDeleteModal'
import Bootstrap from './components/Bootstrap.vue'
import Kontakt from './components/Kontakt'


export default {
  name: 'app',
  components: {
    Home,
    Navigation,
    Dashboard,
    'delete-modal': DeleteProfileModal,
    Bootstrap,
    Kontakt
  },
  data() {
    return { user: auth.user }
  },
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
