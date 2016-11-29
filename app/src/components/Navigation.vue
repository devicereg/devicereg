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
          <router-link to="/registrieren">Registrieren</router-link>
        </li>
        
        <li><router-link to="/kontakt">Kontakt</router-link></li>

        <li class="logout-user dropdown" v-if="user.authenticated">
          
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
            <img src="../assets/img/default_avatar.png" class="img-responsive" alt="Image" width="30">
            <span class="caret"></span>
          </a>
          
          <ul class="dropdown-menu">
            <li><router-link to="/edit-profile">Profil bearbeiten</router-link></li>
            <li>
              <a href="#" data-toggle="modal" data-target="#deleteProfile">
                Profil löschen
              </a>
            </li>
            <li role="separator" class="divider"></li>
            <li @click="logout()"><router-link to="/login">Abmelden</router-link></li>
          </ul>

        </li>
      </ul>
    </div>
  </nav>
</template>

<script>

import auth from '../auth'

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
  .navbar{
    .container{
      .navbar-right{
        .dropdown{
          border-left:1px solid #e2e2e2;

          li{
            display:block;
          }

          .dropdown-toggle{
            padding:10px 10px;
            
            img{
              display:inline;
            }
            
          }
        }
      }
    }
  }
</style>
