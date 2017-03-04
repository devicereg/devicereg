<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
	<div class="login-form">
      <!-- UI Message no User -->
      <form id="user-login-form" class="form-horizontal" role="form" v-if="!user.authenticated" v-on:submit.prevent="submitForm">
          <h1>{{ $t("LoginForm.registration") }}</h1>
          <div class="form-group row">
            <div class="col-xs-12">
              <div class="input-group">
                <span class="input-group-addon">
                  <i class="glyphicon glyphicon-envelope"></i>
                </span>
                <input
                  type="email"
                  class="form-control"
                  id="login_email"
                  v-model="credentials.email"
                  v-bind:placeholder="$t('email')"
                  required
                  />
              </div>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-xs-12">
              <div class="input-group ">
                <span class="input-group-addon">
                  <i class="glyphicon glyphicon-lock" aria-hidden="true"></i>
                </span>
                <input
                  type="password"
                  class="form-control"
                  id="login_password"
                  v-model="credentials.password"
                  v-bind:placeholder="$t('password')"
                  required
                 />
              </div>
            </div>
          </div>
          <div class="form-group row">
            <div class="checkbox_signIn col-xs-12">
              <input type="checkbox" id="stay-logged-in"/>
              <label for="stay-logged-in">{{ $t("LoginForm.remember_me") }}</label>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-10">
              <button type="submit" class="btn btn-primary"> {{ $t("LoginForm.sign_in") }}</button>
              <router-link to="/reset-password"> | {{ $t("LoginForm.forgot") }}</router-link>
            </div>
          </div>
		    </form>


        <button class="btn btn-warning" @click="logout()" v-else>{{ $t("LoginForm.logout") }}</button>
      </div>
</template>
<style scoped lang="scss">

  h1 {
    font-weight: bold;
  }

	h2 {
	  margin-bottom: 15px;
	}

  @media (max-width: 767px) {

    h1 {
      font-size: 1.5em;
    }
  }
</style>
<script>
	import auth from '../auth'

	export default {
	  name: 'login-form',
	  data () {
	    return {
	    	credentials: {
	    		email: '',
	    		password: ''
	    	},
	    	error: '',
	    	user: auth.user
	    }
	  },
	  methods: {
	  	submitForm() {
        var credentials = {
          email: this.credentials.email,
          password: this.credentials.password
        }
        auth.login(this, credentials, this.$parent.$parent.$refs.toastr) //, this.$parent.$refs.config.lang)
	  	},

	  	logout() {
	  		auth.logout()
	  	}
	  }
	}
</script>
