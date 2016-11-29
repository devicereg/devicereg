<template>
  <div id="app">
    <delete-modal v-if="user.authenticated"></delete-modal>
    <navigation></navigation>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>

import auth from './auth'
import Home from './components/Home'
import Navigation from './components/Navigation'
import AppFooter from './components/AppFooter'
import Dashboard from './components/Dashboard'
import Bootstrap from './components/Bootstrap'
import Contact from './components/Contact'
import TermsOfUse from './components/TermsOfUse'
import Impressum from './components/Impressum'
import Translations from './components/Translations'
import DeleteProfileModal from './components/UserDeleteModal'
import Bootstrap from './components/Bootstrap.vue'
import Kontakt from './components/Kontakt'


export default {
  name: 'app',
  components: {
    Home,
    Navigation,
    AppFooter,
    Dashboard,
    'delete-modal': DeleteProfileModal,
    Bootstrap,
    Contact,
    TermsOfUse,
    Impressum,
    Translations
  }
    Kontakt
  },
  data() {
    return { user: auth.user }
  },
}
</script>

<style lang="scss">
  @import './styles/_colors';

  html {
    background: $background;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 85px;
    margin-bottom: 85px;
    background: $background;
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
