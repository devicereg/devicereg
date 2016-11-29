<template>
	<div class="container user-edit-form">
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
				<div class="alert alert-danger fade in" v-if="error">
					<p>{{ error }}</p>
				</div>
			</div>
		</div>
		<div class="row">

				<form role="form">
					<legend>Profil bearbeiten</legend>

					<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">

						<input type="hidden" v-model="credentials.id">

						<div class="form-group">
							<label for="deviceR-login_lastname">Nachname*</label>
							<input
								type="text"
								class="form-control"
								id="deviceR-login_lastname"
								v-model="credentials.lastname"
								placeholder="Nachname*"
								required
							>
						</div>

						<div class="form-group">
							<label for="deviceR-login_name">Vorname*</label>
							<input
								type="text"
								class="form-control"
								id="deviceR-login_name"
								v-model="credentials.name"
								placeholder="Vorname*"
								required
							>
						</div>

						<div class="form-group">
							<label for="deviceR-login_email">E-Mail Adresse*</label>
							<input
								type="email"
								class="form-control"
								id="deviceR-login_email"
								v-model="credentials.email"
								placeholder="E-Mail Adresse*"
								required
							>
						</div>
				
					</div>
					<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">

						<div class="form-group">
							<label for="deviceR-login_street">Straße*</label>
							<input
								type="text"
								class="form-control"
								id="deviceR-login_street"
								v-model="credentials.street"
								placeholder="Straße*"
								required
							>
						</div>

						<div class="form-group">
							<label for="deviceR-login_housenumber">Hausnummer*</label>
							<input
								type="text"
								class="form-control"
								id="deviceR-login_housenumber"
								v-model="credentials.housenumber"
								placeholder="Hausnummer*"
								required
							>
						</div>

						<div class="form-group">
							<label for="deviceR-login_zip">Postleitzahl*</label>
							<input
								type="text"
								class="form-control"
								id="deviceR-login_zip"
								v-model="credentials.zip"
								placeholder="Postleitzahl*"
								required
							>
						</div>

						<div class="form-group">
							<label for="deviceR-login_city">Ort*</label>
							<input
								type="text"
								class="form-control"
								id="deviceR-login_city"
								v-model="credentials.city"
								placeholder="Ort*"
								required
							>
						</div>
						
					</div>
					
					<div class="row">
						<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
							<button class="btn btn-block btn-primary" @click="submit()">Aktualisieren</button>	
						</div>
					</div>
				</form>
		</div>
	</div>
</template>

<script>

	import auth from '../auth'
	import jwt from 'jsonwebtoken'

	export default {
	  name: 'user-edit-form',
	  data () {
	    return {
	    	credentials: jwt.verify(localStorage.getItem('id_token'), 'DeviceR rocks as well!'),
	    	error: ''
	    }
	  },
	  methods: {
	  	submit() {
	  		var credentials = {
	  			id: this.credentials.id,
	  			lastname: this.credentials.lastname,
	    		name: this.credentials.name,
	    		street: this.credentials.street,
	    		housenumber: this.credentials.housenumber,
	    		zip: this.credentials.zip,
	    		city: this.credentials.city,
	  			email: this.credentials.email
	  		}

	  		auth.update(this, credentials, '/dashboard')
	  	}
	  }
	}
</script>

<style lang="scss">
  
</style>
