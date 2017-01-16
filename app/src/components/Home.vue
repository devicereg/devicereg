<template>
	<div id="homepage">
	  <div class="row">
	    <div class="col-xs-offset-2 col-lg-offset-4 col-sm-offset-3 col-lg-4 col-sm-6 col-xs-8">
        <img src="../assets/home-logo-transparent-bg-v1.png" class="img img-responsive">
	    </div>
	  </div>

	  <div class="row text-left">
       <div class="col-md-6">
         <div class="texte">
          <h1>{{ $t("Home.welcome") }}</h1>

          <p>
            {{ $t("Home.info1") }}<br/>
            <b>{{ $t("Home.info_advantage") }}</b>
            {{ $t("Home.info2") }}<br/>
            <b>{{ $t("Home.info_advantage2") }}</b>
            {{ $t("Home.info3") }}
          </p>

          <router-link to="/registrieren" type="button" class="btn btn-primary">{{ $t("Home.register_now") }}</router-link>
       </div>
       </div>

       <div class="col-md-6">
         <br />
         <login-form></login-form>
       </div>
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

  h1 {
    font-weight: bold;
  }

  @media (max-width: 767px) {

    h1 {
      font-size: 1.5em;
    }
  }
</style>
