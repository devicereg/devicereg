<template>
  <nav id="top-navigation" class="navbar navbar-default navbar-fixed-top">
    <div class="container">
      <div class="navbar-collapse collapse">
        <ul  class="nav navbar-nav navbar-right">
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"> Sprache <span class="caret"></span></a>
            <ul class="dropdown-menu" role="menu">
              <li><span class="lang-sm lang-lbl-full" lang="de"></span></li>
              <li><span class="lang-sm lang-lbl-full" lang="en"></span></li>
            </ul>
          </li>
        </ul>
        <ul class="nav navbar-nav">
          <li v-if="user.authenticated">
            <router-link to="/dashboard">Dashboard</router-link>
          </li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li v-if="!user.authenticated">
            <router-link to="/registrieren">Registrieren</router-link>
          </li>
          <li><router-link to="/contact">Kontakt</router-link></li>
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

console.log(localStorage.getItem('username'))

export default {
  name: 'navigation',
  data() {
    return { user: auth.user }
  },
  methods: {
    logout(){
      auth.logout()
    }
  }
}

</script>

<style lang="scss">
  @import '../styles/_colors';

  .navbar#top-navigation {
    background-color: $deep-space-sparkle;
    .container {
      .navbar-collapse {
        .navbar-right {
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
