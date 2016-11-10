<style lang="scss">

/*
|--------------------------------------------------------------------------
|   Main navigation component
|--------------------------------------------------------------------------
|   
|   This is the main navigation component for this application
| 
| 
|
*/

</style>

<template>
  <nav class="navbar navbar-default navbar-fixed-top">
    <div class="container">
      <ul class="nav navbar-nav">
        <li><router-link to="/">Home</router-link></li>
        <li v-if="user.authenticated">
          <router-link to="/dashboard">Dashboard</router-link>
        </li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li v-if="!user.authenticated">
          <router-link to="/login">Anmelden</router-link>
        </li>
        <li v-if="user.authenticated" @click="logout()">
          <router-link to="/login">Abmelden</router-link>
        </li>
        <li v-if="!user.authenticated">
          <router-link to="/registrieren">Registrieren</router-link>
        </li>
        <li><router-link to="/kontakt">Kontakt</router-link></li>
      </ul>
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