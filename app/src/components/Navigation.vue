<template>
  <nav id="top-navigation" class="navbar navbar-default navbar-fixed-top">
    <div class="container">
      <div class="navbar-collapse collapse">
        <ul class="nav navbar-nav navbar-left">
          <li v-if="user.authenticated">
            <router-link to="/dashboard">Dashboard</router-link>
          </li>
          <li v-if="!user.authenticated">
            <router-link to="/">Home</router-link>
          </li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li v-if="!user.authenticated">
            <router-link to="/registrieren">Registrieren</router-link>
          </li>
          <li><router-link to="/contact">Kontakt</router-link></li>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> Sprache <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li @click='setLang("de")'><a>Deutsch</a></li>
              <li @click='setLang("en")'><a>Englisch</a></li>
            </ul>
          </li>
          <li class="logout-user" v-if="user.authenticated" @click="logout()">
            <router-link to="/login">Abmelden</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>

import auth from '../auth'
var Vue = require('vue')

export default {
  name: 'navigation',
  data() {
    return { user: auth.user }
  },
  methods: {
    logout(){
      auth.logout()
    },
    setLang(lang){
      Vue.config.lang = lang
    }
  }
}

</script>

<style lang="scss">
  @import '../styles/_colors';

  .navbar#top-navigation {
    background-color: $primary-bg-color;
    .container {
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
