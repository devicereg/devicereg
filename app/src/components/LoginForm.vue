<template>
	<div class="login-form">
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">

				<form class="form-horizontal" role="form" v-if="!user.authenticated">
					<legend>Anmeldung</legend>
					<div class="form-group">
						<label class="control-label col-sm-2" for="deviceR-login_user"><img src="../assets/u10.png"></label>
						<div class="col-sm-10">
							<input
									type="text"
									class="form-control"
									id="deviceR-login_user"
									v-model="credentials.username"
									placeholder="Benutzername"
							>
						</div>
					</div>
					<div class="form-group">
						<label class="control-label col-sm-2" for="deviceR-login_password"><img src="../assets/u12.png"></label>
						<div class="col-sm-10">
							<input
									type="password"
									class="form-control"
									id="deviceR-login_password"
									v-model="credentials.password"
									placeholder="Passwort">
						</div>
					</div>
					<div class="form-group">
						<div class="col-sm-offset-2 col-sm-10">
							<div class="checkbox">
								<label><input type="checkbox"> Angemeldet bleiben </label>
							</div>
						</div>
					</div>
					<div class="form-group">
						<div class="col-sm-offset-2 col-sm-10">
							<button class="btn btn-primary" @click="submit()">Anmelden</button>
							<router-link to="#"> | Passwort vergessen? </router-link>
						</div>
					</div>

				</form>
				<button class="btn btn-warning" @click="logout()" v-else>Abmelden</button>

			</div>
		</div>
	</div>
</template>

<script>

	import auth from '../auth'

	export default {
	  name: 'login-form',
	  data () {
	    return {
	    	credentials: {
	    		username: '',
	    		password: ''
	    	},
	    	error: '',
	    	user: auth.user
	    }
	  },
	  methods: {
	  	submit() {
	  		var credentials = {
	  			username: this.credentials.username,
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
