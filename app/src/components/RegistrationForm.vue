<template>
	<div class="container-fluid col-sm-offset-2 col-sm-8 text-left registration-form">
		<div class="row">
			<div class="col-sm-12">
				<div class="alert alert-danger fade in" v-if="error">
					<p>{{ error }}</p>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-sm-12 text-left">
        <h1 class="registration-header-title">{{$t("RegistrationForm.title")}}</h1>
				<form id="user-registration-form" role="form">
					<legend><h4>{{$t("RegistrationForm.personal_details")}}</h4></legend>
					<div class="form-group row">
            <div class="col-sm-4 control-label">
              <label for="register_gender">{{$t("RegistrationForm.gender")}}</label>
            </div>
            <div class="col-sm-4">
              <select name="gender"
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
              <input name="prename"
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
              <input name="surname"
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
              <select name="language" class="form-control" id="register_language" v-model="credentials.language" required>
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
              <input name="phone"
                type="tel"
                class="form-control"
                id="register_phone"
                v-model="credentials.phone" required>
            </div>
          </div>
					<legend><h4>{{$t("RegistrationForm.company_details")}}</h4></legend>
					<div class="form-group row">
            <div class="col-sm-4 control-label">
              <label for="register_industry_family">{{$t("RegistrationForm.industry_family")}}</label>
            </div>
            <div class="col-sm-4">
              <select name="industry_family"
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
            <input name="industry_type"
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
              <input name="company" type="text" class="form-control" id="register_company" v-model="credentials.company" required>
            </div>
          </div>
					<div class="form-group row">
            <div class="col-sm-4 control-label">
              <label for="register_street">{{$t("RegistrationForm.street")}}</label>
            </div>
            <div class="col-sm-4">
              <input name="street"
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
              <input name="number"
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
              <input name="zip"
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
              <input name="city"
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
              <select name="country" class="form-control" id="register_country" v-model="credentials.country" required>
                <option value="">{{$t("RegistrationForm.choose")}}</option>
                <option>Deutschland</option>
                <option>Österreich</option>
                <option>Schweiz</option>
              </select>
            </div>
          </div>
					<legend><h4>{{$t("RegistrationForm.system_access")}}</h4></legend>
					<div class="form-group row">
            <div class="col-sm-4 control-label">
              <label for="register_user">{{$t("RegistrationForm.user")}}</label>
            </div>
            <div class="col-sm-4">
              <input name="user" type="email" class="form-control" id="register_user" v-model="credentials.email" required>
            </div>
          </div>
					<div class="form-group row">
            <div class="col-sm-4 control-label">
              <label for="register_password">{{$t("RegistrationForm.password")}}</label>
            </div>
            <div class="col-sm-4">
              <input name="password"
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
              <input name="question"
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
              <input name="answer"
                type="text"
                class="form-control"
                id="register_answer"
                v-model="credentials.answer" required>
            </div>
          </div>
					<legend><h4>{{$t("RegistrationForm.agreement")}}</h4></legend>
					<div class="form-group row">
						<div class="form-check">
							<div class="col-sm-12 control-label">
		      			<input name="terms_of_agreement"
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
          <br />
          <div class="form-group row" style="margin-bottom: 100px; margin-top:50px;">
            <div class="col-sm-offset-4 col-sm-2">
              <button type="button" class="btn btn-block btn-lg btn-cancel">{{$t("cancel")}}</button>
            </div>
            <div class="col-sm-2">
              <button type="submit" class="btn btn-block btn-lg btn-primary" @click="submit()">{{$t("RegistrationForm.register")}}</button>
            </div>
          </div>
				</form>

			</div>
		</div>
	</div>
</template>

<script>
	import auth from '../auth'

	$("#user-registration-form").validate({
    invalidHandler : function() {
       $('html, body').animate({
            scrollTop: $("#user-registration-form").offset().top // scroll top to your form on error
        }, 2000);
   }
});


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
        if ($("#user-registration-form").valid()) {
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
	}
</script>

<style lang="scss">
  .registration-header-title {
    margin-bottom: 1em;
  }
</style>
