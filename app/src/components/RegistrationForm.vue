<template>
	<div class="container registration-form">
		<div class="row">
			<div class="col-md-12">
				<div class="alert alert-danger fade in" v-if="error">
					<p>{{ error }}</p>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="registration-header-titles">
				<div class="col-md-12">
					<h2>Nutzer registrieren</h2>
				</div>
		</div></div>
		<div class="row">
			<div class="col-md-10">
				<form role="form">
					<legend>Personenangaben</legend>
					<div class="row">
						<div class="form-group">
							<div class="col-md-4 control-label">
								<label for="deviceR-login_user">Anrede</label></div>
							<div class="col-md-4">
								<select
									type="text"
									class="form-control"
									id="deviceR-login_gender"
									v-model="credentials.gender" required>
									<option value="">Bitte wählen Sie</option>
									<option>Herr</option>
    							<option>Frau</option>
								</select>
							</div></div></div>
							<br>
					<div class="row">
						<div class="form-group">
							<div class="col-md-4 control-label">
								<label for="deviceR-login_user">Vorname</label></div>
							<div class="col-md-4">
								<input
									type="text"
									class="form-control"
									id="deviceR-login_prename"
									v-model="credentials.prename" required>
							</div></div></div>
							<br>
					<div class="row">
						<div class="form-group">
							<div class="col-md-4 control-label">
								<label for="deviceR-login_user">Nachname</label></div>
							<div class="col-md-4">
								<input
									type="text"
									class="form-control"
									id="deviceR-login_surname"
									v-model="credentials.surname" required>
							</div></div></div>
							<br>
					<div class="row">
						<div class="form-group">
							<div class="col-md-4 control-label">
								<label for="deviceR-login_user">Sprache</label></div>
							<div class="col-md-4">
								<select
									type="text"
									class="form-control"
									id="deviceR-login_language"
									v-model="credentials.language" required>
									<option value="">Bitte wählen Sie</option>
									<option>Deutsch</option>
									<option>Englisch</option>
								</select>
							</div></div></div>
							<br>
					<div class="row">
						<div class="form-group">
							<div class="col-md-4 control-label">
								<label for="deviceR-login_user">Telefonnummer</label></div>
							<div class="col-md-4">
								<input
									type="tel"
									class="form-control"
									id="deviceR-login_phone"
									v-model="credentials.phone" required>
							</div></div></div>
							<br>
					<legend>Firmenangaben</legend>
					<div class="row">
						<div class="form-group">
							<div class="col-md-4 control-label">
								<label for="deviceR-login_user">Branchentyp</label></div>
							<div class="col-md-4">
								<select
								type="text"
								class="form-control"
								id="deviceR-login_branche_typ"
								v-model="credentials.branche_typ" required>
								<option value="">Bitte wählen Sie</option>
								<option>Elektro</option>
								<option>Strom</option>
							</select>
						</div></div></div>
						<br>
					<div class="row">
						<div class="form-group">
							<div class="col-md-4 control-label">
								<label for="deviceR-login_user">Firmenname</label></div>
							<div class="col-md-4">
								<input
								type="text"
								class="form-control"
								id="deviceR-login_company"
								v-model="credentials.company" required>
							</div></div></div>
							<br>
					<div class="row">
						<div class="form-group">
							<div class="col-md-4 control-label">
								<label for="deviceR-login_user">Straße</label></div>
							<div class="col-md-4">
								<input
								type="text"
								class="form-control"
								id="deviceR-login_street"
								v-model="credentials.street" required>
							</div></div></div>
							<br>
					<div class="row">
						<div class="form-group">
							<div class="col-md-4 control-label">
								<label for="deviceR-login_user">Hausnummer</label></div>
							<div class="col-md-4">
								<input
								type="text"
								class="form-control"
								id="deviceR-login_number"
								v-model="credentials.number" required>
						</div></div></div>
						<br>
					<div class="row">
						<div class="form-group">
							<div class="col-md-4 control-label">
								<label for="deviceR-login_user">Postleitzahl</label></div>
							<div class="col-md-4">
								<input
								type="number"
								class="form-control"
								id="deviceR-login_zip"
								v-model="credentials.zip" required>
						</div></div></div>
						<br>
					<div class="row">
						<div class="form-group">
							<div class="col-md-4 control-label">
								<label for="deviceR-login_user">Stadt</label></div>
							<div class="col-md-4">
								<input
								type="text"
								class="form-control"
								id="deviceR-login_city"
								v-model="credentials.city" required>
						</div></div></div>
						<br>
					<div class="row">
						<div class="form-group">
							<div class="col-md-4 control-label">
								<label for="deviceR-login_user">Land</label></div>
							<div class="col-md-4">
								<select
									type="text"
									class="form-control"
									id="deviceR-login_country"
									v-model="credentials.country" required>
									<option value="">Bitte wählen Sie</option>
									<option>Deutschland</option>
									<option>Österreich</option>
									<option>Schweiz</option>
								</select>
							</div></div></div>
							<br>
					<legend>Systemzugang</legend>
					<div class="row">
						<div class="form-group">
							<div class="col-md-4 control-label">
								<label for="deviceR-login_user">Benutzername (Email-Adresse)</label></div>
							<div class="col-md-4">
								<input
									type="email"
									class="form-control"
									id="deviceR-login_user"
									v-model="credentials.username" required>
							</div></div></div>
							<br>
					<div class="row">
						<div class="form-group">
							<div class="col-md-4 control-label">
								<label for="deviceR-login_password">Passwort</label></div>
							<div class="col-md-4">
								<input
									type="password"
									data-minlength="6"
									class="form-control"
									id="deviceR-login_password"
									v-model="credentials.password" required>
							</div></div></div>
							<br>
					<div class="row">
						<div class="form-group">
							<div class="col-md-4 control-label">
								<label for="deviceR-login_question">Geheimfrage</label></div>
							<div class="col-md-4">
								<input
									type="text"
									class="form-control"
									id="deviceR-login_question"
									v-model="credentials.question" required>
							</div></div></div>
							<br>
					<div class="row">
						<div class="form-group">
							<div class="col-md-4 control-label">
								<label for="deviceR-login_answer">Antwort</label></div>
							<div class="col-md-4">
								<input
									type="text"
									class="form-control"
									id="deviceR-login_answer"
									v-model="credentials.answer" required>
							</div></div></div>
							<br>
					<legend>Einverständniserklärung</legend>
					<div class="row">
						<div class="form-check">
							<div class="col-md-12 control-label">
		    				<label class="form-check-label"></label>
		      			<input
									type="checkbox"
									class="form-check-input"
									id="deviceR-login_agreement"
									v-model="credentials.agreement"
									required> Ich habe die Nutzungsbedingungen, die Datenschutzerklärung und die Gewährleistungsbedingungen verstanden und akzeptiere
	  				</div></div></div>
						<br>
						<div class="row">
							<div class="col-md-1">
								<button class="btn btn-primary" @click="submit()">Registrieren</button>
						</div></div>
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
					gender: '',
					prename: '',
					surname: '',
					language: '',
					phone: '',
					branche_family: '',
					branche_typ: '',
					company: '',
					street: '',
					number: '',
					zip: '',
					city: '',
					country: '',
	    		username: '',
	    		password: '',
					question: '',
					answer: '',
					agreement:''
	    	},
	    	error: ''
	    }
	  },
	  methods: {
	  	submit() {
	  		var credentials = {
					gender: this.credentials.gender,
					prename: this.credentials.prename,
					surname: this.credentials.surname,
					language: this.credentials.language,
					phone: this.credentials.phone,
					branche_family: this.credentials.branche_family,
					branche_typ: this.credentials.branche_typ,
					company: this.credentials.company,
					street: this.credentials.street,
					number: this.credentials.number,
					zip: this.credentials.zip,
					city: this.credentials.city,
					country: this.credentials.country,
	  			username: this.credentials.username,
	  			password: this.credentials.password,
					question: this.credentials.question,
					answer: this.credentials.answer,
					agreement: this.credentials.agreement
	  		}

	  		auth.signup(this, credentials, '/dashboard')
	  	}
	  }
	}
</script>

<style lang="scss">
  .registration-form{
		margin-left: 10em;
    .registration-header-titles{
      margin-bottom: 100px;
			text-align: left;
    }
		.row{
			legend{
				text-align: left
			}
			.form-group{
				text-align: left;
				#input{
					width: 1260px;
				}
			}
			.form-check{
				text-align: left;
			}
		}
  }
</style>
