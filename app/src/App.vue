<template>
  <div id="app">
    <vue-toastr ref="toastr"></vue-toastr>
    <delete-modal v-if="user.authenticated"></delete-modal>
    <navigation></navigation>
    <router-view class="container-fluid col-sm-offset-1 col-md-offset-2 col-sm-10 col-md-8" style="margin-bottom: 100px;"></router-view>
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
import UserEdit from './components/UserEdit'
import DeviceRegForm from './components/MyDevices/DeviceRegForm'
import DeleteProfileModal from './components/UserDeleteModal'
import MyDevices from './components/MyDevices/MyDevices'
import Toastr from 'vue-toastr'

export default {
  name: 'app',
  components: {
    auth,
    Home,
    Navigation,
    AppFooter,
    Dashboard,
    'delete-modal': DeleteProfileModal,
    Bootstrap,
    Contact,
    TermsOfUse,
    Impressum,
    Translations,
    UserEdit,
    DeviceRegForm,
    MyDevices,
    'vue-toastr': Toastr
  },
  data() {
    return { user: auth.user }
  },
}
</script>

<style lang="scss">
  @import './styles/_colors';
  $font-family-sans-serif: 'Source Sans Pro', 'Avenir', Helvetica, Arial, sans-serif;

  html {
    background: $body-background;
  }

  #app {
    font-family: $font-family-sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin: 85px 0;
    background: $body-background;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;

    &.list {
      list-style-type: disc;
    }
  }

  li {
    margin: 0 10px;
  }

  a {
    color: $primary-link-color;

    &:hover {
      cursor: pointer;
    }
  }
</style>
