<template>
	<div class="login-form">
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">

				<div class="alert alert-danger" v-if="error">
					<button 
						type="button" 
						class="close" 
						data-dismiss="alert" 
						aria-hidden="true"
					>
						&times;
					</button>

					<p><strong>Anmeldung Fehlgeschlagen!</strong></p>
					<p>{{ error }}</p>
				</div>

				<form class="form-horizontal" role="form" v-if="!user.authenticated">
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
