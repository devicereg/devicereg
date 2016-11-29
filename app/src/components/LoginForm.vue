<template>
	<div class="login-form">
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">

				<form role="form" v-if="!user.authenticated">
					<legend>Anmeldung</legend>

					<div class="form-group">
						<label for="deviceR-login_email">E-Mail Adresse</label>
						<input
							type="email"
							class="form-control"
							id="deviceR-login_email"
							v-model="credentials.email"
							placeholder="E-Mail Adresse"
							required
						>
					</div>

					<div class="form-group">
						<label for="deviceR-login_password">Passwort</label>
						<input
							type="password"
							class="form-control"
							id="deviceR-login_password"
							v-model="credentials.password"
							placeholder="Passwort"
							required
						>
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
