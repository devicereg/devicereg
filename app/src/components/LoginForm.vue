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
					<legend>{{ $t("LoginForm.registration") }}</legend>
					<div class="form-group">
						<label class="control-label col-sm-2" for="login_email">
              <span class="glyphicon glyphicon-envelope" aria-hidden="true"></span>
						</label>
						<div class="col-sm-10">
							<input
								type="email"
								class="form-control"
								id="login_email"
								v-model="credentials.email"
								placeholder="E-Mail Adresse"
								required
							>
						</div>
					</div>
					<div class="form-group">
						<label class="control-label col-sm-2" for="login_password">
              <span class="glyphicon glyphicon-lock" aria-hidden="true"></span>
						</label>
						<div class="col-sm-10">
							<input
								type="password"
								class="form-control"
								id="login_password"
								v-model="credentials.password"
								placeholder="Passwort"
								required
							>
						</div>
          </div>
					<div class="form-group">
						<div class="col-sm-10 col-sm-offset-2">
              <input type="checkbox" id="stay-logged-in">
              <label for="stay-logged-in">{{ $t("LoginForm.remember_me") }}</label>
						</div>
					</div>
					<div class="form-group">
						<div class="col-sm-offset-2 col-sm-10">
							<button class="btn btn-primary" @click="submit()"> {{ $t("LoginForm.sign_in") }}</button>
							<router-link to="#"> | {{ $t("LoginForm.forgot") }} </router-link>
						</div>
					</div>
				</form>

				<button class="btn btn-warning" @click="logout()" v-else>{{ $t("LoginForm.logout") }}</button>
			</div>
		</div>
	</div>
</template>
<style lang="scss">

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
