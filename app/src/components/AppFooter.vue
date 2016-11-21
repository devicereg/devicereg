<template>
  <footer class="footer">
    <div class="container">
      <ul class="nav navbar-nav">
        <li><router-link to="/">Home</router-link></li>
        <li v-if="user.authenticated">
          <router-link to="/dashboard">Dashboard</router-link>
        </li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li v-if="!user.authenticated">
          <router-link to="/registrieren">Registrieren</router-link>
        </li>
        <li><router-link to="/kontakt">Kontakt</router-link></li>
        <li class="logout-user" v-if="user.authenticated" @click="logout()">
          <router-link to="/login">Abmelden</router-link>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
  import auth from '../auth'

  export default{
    name: 'app-footer',
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
  .footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 60px;
    background-color: #f5f5f5;
  }
</style>
