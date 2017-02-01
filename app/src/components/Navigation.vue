<template>
  <nav id="top-navigation" class="navbar navbar-default navbar-fixed-top">
    <div class="container-fluid col-sm-offset-1 col-md-offset-2 col-sm-10 col-md-8">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <div class="navbar-brand">
          <router-link to="/" v-if="!user.authenticated">
            <img class="img img-responsive" src="../assets/devicer-nav-logo-test.png" alt="DeviceR"/>
          </router-link>
          <router-link to="/my-devices" v-if="user.authenticated">
            <img class="img img-responsive" src="../assets/devicer-nav-logo-test.png" alt="DeviceR"/>
          </router-link>
        </div>
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
    .container-fluid {
      .navbar-header {
        button.navbar-toggle {
          background: $primary-bg-color;
          border-color: $body-background;
          .icon-bar {
            background: $body-background !important;
          }

          &:hover {
            background: $body-background;
            .icon-bar {
              background: $btn-primary-bg !important;
            }
          }
        }

        .navbar-brand {
          margin-left: 0.33em;
          padding: 0px;
          img {
            height: 100%;
            padding: 5px;
            width: auto;
          }
        }
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
          li a {
            background-color: transparent;
            font-weight: bold;
            color: #fff;

            &:hover {
              color: $primary-link-color;
            }
          }
        }
      }
    }
  }
</style>
