<template>
	<div class="container-fluid col-md-offset-2 col-md-8" id="homepage">
	  <div class="row">
	    <div class="col-md-12">
        <img src="../assets/home-logo-transparent-bg-v1.png" class="logo">
	    </div>
	  </div>

	  <div class="row text-left">
       <div class="col-md-6">
         <div class="texte">
          <h2>{{ $t("Home.welcome") }}</h2>

          <p>
            {{ $t("Home.info1") }}
            <b>{{ $t("Home.info_advantage") }}</b>
            {{ $t("Home.info2") }}
            <b>{{ $t("Home.info_advantage2") }}</b>
            {{ $t("Home.info3") }}
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
    height: 50%;
    width:50%;
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
      margin-top: 3em;
    }
  }

</style>
