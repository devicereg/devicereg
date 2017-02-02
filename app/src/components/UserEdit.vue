<template>
  <div id="user-edit-component">
      <div class="row">
        <div class="col-sm-12">
          <div class="alert alert-danger fade in" v-if="error">
            <p>{{ error }}</p>
          </div>
        </div>
      </div>
      <form id="user-edit-form" role="form">
        <div class="col-sm-12 text-left">
          <h1 class="registration-header-title">{{$t("edit_profile")}}</h1>
          <input type="hidden" v-model="credentials.id">

          <legend>{{$t("RegistrationForm.personal_details")}}</legend>
          <div class="form-group row">
            <div class="col-sm-4 control-label">
              <label for="register_gender">{{$t("RegistrationForm.gender")}}</label>
            </div>
            <div class="col-sm-6">
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
            <div class="col-sm-6">
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
            <div class="col-sm-6">
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
            <div class="col-sm-6">
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
            <div class="col-sm-6">
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
              <label for="register_company">{{$t("RegistrationForm.company")}}</label>
            </div>
            <div class="col-sm-6">
              <input type="text" class="form-control" id="register_company" v-model="credentials.company" required>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-4 control-label">
              <label for="register_street">{{$t("RegistrationForm.street")}}</label>
            </div>
            <div class="col-sm-6">
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
            <div class="col-sm-6">
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
            <div class="col-sm-6">
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
            <div class="col-sm-6">
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
            <div class="col-sm-6">
              <select class="form-control" id="register_country" v-model="credentials.country" required>
                <option value="">{{$t("RegistrationForm.choose")}}</option>
                <option>Deutschland</option>
                <option>Österreich</option>
                <option>Schweiz</option>
              </select>
            </div>
          </div>

          <!--
          <legend>{{$t("RegistrationForm.system_access")}}</legend>
          <div class="form-group row">
            <div class="col-sm-4 control-label">
              <label for="register_user">{{$t("RegistrationForm.user")}}</label>
            </div>
            <div class="col-sm-6">
              <input type="email" class="form-control" id="register_user" v-model="credentials.email" required>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-4 control-label">
              <label for="register_password">{{$t("RegistrationForm.password")}}</label>
            </div>
            <div class="col-sm-6">
              <input
                type="password"
                data-minlength="6"
                class="form-control"
                id="register_password"
                v-model="credentials.password" required>
            </div>
          </div>-->
          <br />
          <div class="form-group row">
            <div class="col-sm-offset-4 col-xs-6 col-sm-3">
              <button class="btn btn-block btn-lg btn-cancel">{{$t("cancel")}}</button>
            </div>
            <div class="col-xs-6 col-sm-3">
              <button class="btn btn-block btn-lg btn-primary" @click="submit()">Aktualisieren</button>
            </div>
          </div>
        </div>
      </form>
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
        if ($("#user-edit-form").valid()) {
          var credentials = {
            id: this.credentials.id,
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

          auth.update(this, credentials, '/dashboard')
        }
	  	}
	  }
	}
</script>

<style lang="scss">
  .registration-header-title {
    margin-bottom: 1em;
    font-weight: bold;
  }

  @media (max-width: 767px) {

    h1 {
      font-size: 1.5em;
    }
  }
</style>
