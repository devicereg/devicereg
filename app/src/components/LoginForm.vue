<template>
	<div class="login-form">
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">

				<form role="form" v-if="!user.authenticated">
					<legend>Anmeldung</legend>

					<div class="form-group">
						<label for="deviceR-login_user">Benutzername</label>
						<input
							type="text"
							class="form-control"
							id="deviceR-login_user"
							v-model="credentials.username"
							placeholder="Benutzername"
						>
					</div>

					<div class="form-group">
						<label for="deviceR-login_password">Passwort</label>
						<input
							type="password"
							class="form-control"
							id="deviceR-login_password"
							v-model="credentials.password"
							placeholder="Passwort">
					</div>

					<button class="btn btn-primary" @click="submit()">Anmelden</button>
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
