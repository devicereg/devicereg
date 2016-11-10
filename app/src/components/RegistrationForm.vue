<style lang="scss">

/**
 *--------------------------------------------------------------------------
 *	Vue-component for registration-form
 *--------------------------------------------------------------------------
 *
 * 	This is the Vue-component for the registration-form.
 *
 * 	This file includes the HTML template, sass-stylesheet 
 * 	and javascript for the registration-form.
 *
 */

.registration-form{
	
}

</style>

<template>
	<div class="container registration-form">
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
				<div class="alert alert-danger fade in" v-if="error">
					<p>{{ error }}</p>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-md-offset-4 col-lg-offset-4">

				<form role="form">
					<legend>Registrierung</legend>
				
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
				
					
					<button class="btn btn-primary" @click="submit()">Registrieren</button>
				</form>

			</div>
		</div>
	</div>
</template>

<script>
	
	import auth from '../auth'

	export default {
	  name: 'registration-form',
	  data () {
	    return {
	    	credentials: {
	    		username: '',
	    		password: ''
	    	},
	    	error: ''
	    }
	  },
	  methods: {
	  	submit() {
	  		var credentials = {
	  			username: this.credentials.username,
	  			password: this.credentials.password
	  		}

	  		auth.signup(this, credentials, '/dashboard')
	  	}
	  }
	}
</script>