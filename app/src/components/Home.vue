<template>
	<div class="container" id="homepage">
	  <div class="row">
	    <div class="col-md-12">
        <img src="../assets/devicer-home-logo.png" class="logo">
	    </div>
	  </div>

	  <div class="row text-left">
       <div class="col-md-6">
         <div class="texte">
          <h2>{{ $t("Home.welcome") }}</h2>

          <p>
            {{ $t("Home.info") }}
          </p>

          <router-link to="/registrieren" type="button" class="btn btn-primary btn-lg">{{ $t("Home.register_now") }}</router-link>
       </div>
       </div>

       <div class="col-md-6">
         <br />
         <login-form></login-form>
       </div>
	  </div>
    <div class="dropup">
      <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">
        <span class="caret"></span></button>
      <ul class="dropdown-menu">
        <li><router-link to="/datenschutz">Datenschutz</router-link></li>
        <li><router-link to="/terms-of-use">Nutzungsbedingungen</router-link></li>
        <li><router-link to="/impressum">Impressum</router-link></li>
        <li><router-link to="/aktionsbedingungen">Aktionsbedingungen</router-link></li>
      </ul>
    </div>

	</div>
</template>

<script>
  import LoginForm from './LoginForm'

  export default {
    components: {
      'login-form': LoginForm
    },
    name: 'home',
    data () {
      return {
        error: ''
      }
    }
  }
</script>

<style lang="scss">
  @import '../styles/_colors';

  .logo {
    height: 30%;
    width: 30%;
  }

  .dropup {
    display: none;
  }

  @media only screen
  and (max-width: 767px) {

    .dropup {
      display: inline-block;
    }

    .texte {
      display: none;
    }
  }

</style>
