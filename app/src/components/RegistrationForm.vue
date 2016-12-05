<template>
	<div class="container registration-form">
		<div class="row">
			<div class="col-sm-12">
				<div class="alert alert-danger fade in" v-if="error">
					<p>{{ error }}</p>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-sm-12 text-left">
        <h2 class="registration-header-title">{{$t("RegistrationForm.title")}}</h2>
				<form role="form">
					<legend>{{$t("RegistrationForm.personal_details")}}</legend>
					<div class="form-group row">
            <div class="col-sm-3 control-label">
              <label for="register_gender">{{$t("RegistrationForm.gender")}}</label>
            </div>
            <div class="col-sm-5">
              <select
                class="form-control"
                id="register_gender"
                v-model="credentials.gender" required>
                <option value="">{{$t("RegistrationForm.choose")}}</option>
                <option>{{$t("RegistrationForm.mr")}}</option>
                <option>{{$t("RegistrationForm.mrs")}}</option>
              </select>
            </div>
          </div>
					<div class="form-group row">
            <div class="col-sm-4 control-label">
              <label for="register_prename">{{$t("RegistrationForm.prename")}}</label>
            </div>
            <div class="col-sm-4">
              <input
                type="text"
                class="form-control"
                id="register_prename"
                v-model="credentials.prename" required>
            </div>
          </div>
					<div class="form-group row">
            <div class="col-sm-4 control-label">
              <label for="register_surname">{{$t("RegistrationForm.surname")}}</label>
            </div>
            <div class="col-sm-4">
              <input
                type="text"
                class="form-control"
                id="register_surname"
                v-model="credentials.surname" required>
            </div>
          </div>
					<div class="form-group row">
            <div class="col-sm-4 control-label">
              <label for="register_language">{{$t("language")}}</label>
            </div>
            <div class="col-sm-4">
              <select class="form-control" id="register_language" v-model="credentials.language" required>
                <option value="">{{$t("RegistrationForm.choose")}}</option>
                <option>{{$t("RegistrationForm.german")}}</option>
                <option>{{$t("RegistrationForm.english")}}</option>
              </select>
            </div>
          </div>
					<div class="form-group row">
            <div class="col-sm-4 control-label">
              <label for="register_phone">{{$t("phone")}}</label>
            </div>
            <div class="col-sm-4">
              <input
                type="tel"
                class="form-control"
                id="register_phone"
                v-model="credentials.phone" required>
            </div>
          </div>
					<legend>{{$t("RegistrationForm.company_details")}}</legend>
					<div class="form-group row">
            <div class="col-sm-4 control-label">
              <label for="register_industry_family">{{$t("RegistrationForm.industry_family")}}</label>
            </div>
            <div class="col-sm-4">
              <select
              class="form-control"
              id="register_industry_family"
              v-model="credentials.industry_family" required>
              <option value="">{{$t("RegistrationForm.choose")}}</option>
              <option>Elektro</option>
              <option>Strom</option>
            </select>
          </div>
        </div>
				<div class="form-group row">
          <div class="col-sm-4 control-label">
            <label for="register_industry_type">{{$t("RegistrationForm.industry_type")}}</label>
          </div>
          <div class="col-sm-4">
            <input
            type="text"
            class="form-control"
            id="register_industry_type"
            v-model="credentials.industry_type" required>
          </div>
        </div>
					<div class="form-group row">
            <div class="col-sm-4 control-label">
              <label for="register_company">{{$t("RegistrationForm.company")}}</label>
            </div>
            <div class="col-sm-4">
              <input type="text" class="form-control" id="register_company" v-model="credentials.company" required>
            </div>
          </div>
					<div class="form-group row">
            <div class="col-sm-4 control-label">
              <label for="register_street">{{$t("RegistrationForm.street")}}</label>
            </div>
            <div class="col-sm-4">
              <input
              type="text"
              class="form-control"
              id="register_street"
              v-model="credentials.street" required>
            </div>
          </div>
					<div class="form-group row">
            <div class="col-sm-4 control-label">
              <label for="register_number">{{$t("RegistrationForm.number")}}</label>
            </div>
            <div class="col-sm-4">
              <input
              type="text"
              class="form-control"
              id="register_number"
              v-model="credentials.number" required>
            </div>
          </div>
					<div class="form-group row">
            <div class="col-sm-4 control-label">
              <label for="register_zip">{{$t("RegistrationForm.zip")}}</label>
            </div>
            <div class="col-sm-4">
              <input
              type="number"
              class="form-control"
              id="register_zip"
              v-model="credentials.zip" required>
            </div>
          </div>
					<div class="form-group row">
            <div class="col-sm-4 control-label">
              <label for="register_city">{{$t("city")}}</label>
            </div>
            <div class="col-sm-4">
              <input
              type="text"
              class="form-control"
              id="register_city"
              v-model="credentials.city" required>
            </div>
          </div>
					<div class="form-group row">
            <div class="col-sm-4 control-label">
              <label for="register_country">{{$t("country")}}</label>
            </div>
            <div class="col-sm-4">
              <select class="form-control" id="register_country" v-model="credentials.country" required>
                <option value="">{{$t("RegistrationForm.choose")}}</option>
                <option>Deutschland</option>
                <option>Österreich</option>
                <option>Schweiz</option>
              </select>
            </div>
          </div>
					<legend>{{$t("RegistrationForm.system_access")}}</legend>
					<div class="form-group row">
            <div class="col-sm-4 control-label">
              <label for="register_user">{{$t("RegistrationForm.user")}}</label>
            </div>
            <div class="col-sm-4">
              <input type="email" class="form-control" id="register_user" v-model="credentials.email" required>
            </div>
          </div>
					<div class="form-group row">
            <div class="col-sm-4 control-label">
              <label for="register_password">{{$t("RegistrationForm.password")}}</label>
            </div>
            <div class="col-sm-4">
              <input
                type="password"
                data-minlength="6"
                class="form-control"
                id="register_password"
                v-model="credentials.password" required>
            </div>
          </div>
					<div class="form-group row">
            <div class="col-sm-4 control-label">
              <label for="register_question">{{$t("RegistrationForm.question")}}</label>
            </div>
            <div class="col-sm-4">
              <input
                type="text"
                class="form-control"
                id="register_question"
                v-model="credentials.question" required>
            </div>
          </div>
					<div class="form-group row">
            <div class="col-sm-4 control-label">
              <label for="register_answer">{{$t("RegistrationForm.answer")}}</label>
            </div>
            <div class="col-sm-4">
              <input
                type="text"
                class="form-control"
                id="register_answer"
                v-model="credentials.answer" required>
            </div>
          </div>
					<legend>{{$t("RegistrationForm.agreement")}}</legend>
					<div class="row">
						<div class="form-check">
							<div class="col-sm-12 control-label">
		      			<input
									type="checkbox"
									class="form-check-input"
									id="register_agreement"
									v-model="credentials.agreement"
									required>
                <label for="register_agreement" class="form-check-label">
                  {{$t("RegistrationForm.terms_of_agreement")}}
                </label>
	  				  </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-1">
              <button class="btn btn-primary" @click="submit()">{{$t("RegistrationForm.register")}}</button>
            </div>
          </div>
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
					industry_family: '',
					industry_type: '',
					company: '',
					street: '',
					number: '',
					zip: '',
					city: '',
					country: '',
	    		email: '',
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
					industry_family: this.credentials.industry_family,
					industry_type: this.credentials.industry_type,
					company: this.credentials.company,
					street: this.credentials.street,
					number: this.credentials.number,
					zip: this.credentials.zip,
					city: this.credentials.city,
					country: this.credentials.country,
	  			email: this.credentials.email,
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
  .registration-header-title {
    margin-bottom: 1em;
  }
</style>
