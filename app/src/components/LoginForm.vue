<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
	<div class="login-form">
    <div class="row">
      <div class="col-xs-12">
        <div class="alert alert-danger" v-if="error">
          <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
          <p>
            <strong>{{ $t("LoginForm.login_fail") }}</strong>
          </p>
          <p>{{ error }}</p>
        </div>
        <form id="user-login-form" class="form-horizontal" role="form" v-if="!user.authenticated" v-on:submit="submitForm">
          <div class="login_up">
            <h1>{{ $t("LoginForm.registration") }}</h1>
            <div class="form-group col-sm-12">
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
            <div class="form-group col-sm-12">
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
            <div class="form-group">
  						<div class="checkbox_signIn col-sm-12">
                <input type="checkbox" id="stay-logged-in"/>
                <label for="stay-logged-in">{{ $t("LoginForm.remember_me") }}</label>
              </div>
            </div>
            <div class="form-group">
              <div class="col-sm-10">
                <button type="submit" class="btn btn-primary"> {{ $t("LoginForm.sign_in") }}</button>
                <router-link to="#"> | {{ $t("LoginForm.forgot") }}</router-link>
              </div>
            </div>
          </div>

		  <div class="form-group">
			<div class="col-sm-10 col-sm-offset-2">
              <input type="checkbox" id="stay-logged-in">
              <label for="stay-logged-in">Angemeldet bleiben</label>
			</div>
		  </div>
		  <div class="form-group">
			<div class="col-sm-offset-2 col-sm-10">
			  <button class="btn btn-primary" @click="submit()">Anmelden</button>
			  <router-link to="/reset-password"> | Passwort vergessen? </router-link>
			</div>
		  </div>
		</form>


        <button class="btn btn-warning" @click="logout()" v-else>{{ $t("LoginForm.logout") }}</button>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">

  .login_up {
    margin-top: -20px;
  }

  form.user-login-form {
    margin-left: 1em;
  }

	h2 {
	margin-bottom: 15px;
	}

	.checkbox_signIn {
		margin-left: 3em;
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

        auth.login(this, credentials, 'my-devices')
	  	},

	  	logout() {
	  		auth.logout()
	  	}
	  }
	}
</script>
