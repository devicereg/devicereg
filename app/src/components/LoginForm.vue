<template>
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
          <form class="form-horizontal" role="form" v-if="!user.authenticated">
            <div class="login_up">
            <h2>{{ $t("LoginForm.registration") }}</h2>
            <div class="input-group">
                <span class="input-group-addon">
                <i class="glyphicon glyphicon-envelope"></i>
                </span>
                <input
                  type="email"
                  class="form-control"
                  id="login_email"
                  v-model="credentials.email"
                  placeholder="E-Mail Adresse"
                  required
                >
            </div>
            <div class="lock input-group">
                <span class="input-group-addon">
                <i class="glyphicon glyphicon-lock" aria-hidden="true"></i>
                </span>
                <input
                  type="password"
                  class="form-control"
                  id="login_password"
                  v-model="credentials.password"
                  placeholder="Passwort"
                  required
                >
            </div>
            <div class="checkbox_signIn">
              <div class="form-group">
                <div class="col-sm-10 ">
                  <input type="checkbox" id="stay-logged-in">
                  <label for="stay-logged-in">{{ $t("LoginForm.remember_me") }}</label>
                </div>
              </div>
              <div class="form-group">
                <div class="col-sm col-sm-10">
                  <button class="btn btn-primary" @click="submit()"> {{ $t("LoginForm.sign_in") }}</button>
                  <router-link to="#"> | {{ $t("LoginForm.forgot") }} </router-link>
                </div>
              </div>
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

	h2 {
	margin-bottom: 15px;
	}
	.lock {
		margin-top: 10px;
	}
	.checkbox_signIn {
		margin-left: 3em;
		margin-top: 10px;
	}
	router-link {
	color: &primary-link-color;
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
	  	submit() {
	  		var credentials = {
	  			email: this.credentials.email,
	  			password: this.credentials.password
	  		}

	  		auth.login(this, credentials, 'dashboard')
	  	},

	  	logout() {
	  		auth.logout()
	  	}
	  }
	}
</script>
