<template>
  <nav id="top-navigation" class="navbar navbar-default navbar-fixed-top">
    <div class="container">
      <div class="nav-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <img class="img-circle" src="../assets/logo_navbar.png">
      </div>
      <LoggedOutNavigation v-if="!user.authenticated"></LoggedOutNavigation>
      <LoggedInNavigation v-if="user.authenticated"></LoggedInNavigation>
    </div>
  </nav>
</template>

<script>
import LoggedInNavigation from './Navigation/LoggedInNavigation.vue'
import LoggedOutNavigation from './Navigation/LoggedOutNavigation.vue'
import auth from '../auth'
var Vue = require('vue')

export default {
  name: 'navigation',
  components: {
    LoggedInNavigation,
    LoggedOutNavigation
  },
  data() {
    return { user: auth.user }
  },
  methods: {
    logout(){
      auth.logout()
    },
  }
}

</script>

<style lang="scss">
  @import '../styles/_colors';

  .navbar#top-navigation {
    background-color: $primary-bg-color;
    .container {
      .nav-header>img{
        float: left;
        display: inline-block;
        width: 48px;
        height: 48px;
      }
      .navbar-collapse {
        .navbar-right {
          .dropdown {
            .dropdown-menu {
              background: $primary-bg-color;
              border-radius: 0;
              li {
                color: $body-background;
              }
            }
          }
          .logout-user {
            border-left: 1px solid #e2e2e2;
            padding-left: 10px;
          }
        }
        .nav {
          padding-left: 0;
          margin: 7.5px -15px;
          display: inline-block;
          height: 100%;
          float: none;

          li a {
            background-color: transparent;
            color: #fff;

            &:hover {
              color: #5bc0de;
            }
          }
        }
      }
    }
  }
</style>
