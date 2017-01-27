<template>
  <div id="user-registration-component">
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
        <p><b>{{$t("RegistrationForm.hint")}}</b> {{$t("RegistrationForm.hint_message")}}</p>
        <br/>
        <form  id="user-registration-form" role="form" v-on:submit.prevent="submit">
          <legend>{{$t("RegistrationForm.personal_details")}}</legend>
          <div class="form-group row">
            <div class="col-sm-4 control-label">
              <label for="register_gender">{{$t("RegistrationForm.gender")}}</label>
            </div>
            <div class="col-sm-6">
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
            <div class="col-sm-6">
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
            <div class="col-sm-6">
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
            <div class="col-sm-6">
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
            <div class="col-sm-6">
              <input name="phone"
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
            <div class="col-sm-6">
              <select name="industry_family"
                      class="form-control"
                      id="register_industry_family"
                      v-model="credentials.industry_family" required>
                <option value="">{{$t("RegistrationForm.choose")}}</option>
                <option>Andere</option>
                <option>Elektro</option>
                <option>Strom</option>
              </select>
            </div>
          </div>
        <div class="form-group row">
          <div class="col-sm-4 control-label">
            <label for="register_industry_type">{{$t("RegistrationForm.industry_type")}}</label>
          </div>
          <div class="col-sm-6">
            <input name="industry_type"
            type="text"
            class="form-control"
            id="register_industry_type"
            v-model="credentials.industry_type"  :disabled="!credentials.industry_family" :required="credentials.industry_family">
          </div>
        </div>
          <div class="form-group row">
            <div class="col-sm-4 control-label">
              <label for="register_company">{{$t("RegistrationForm.company")}}</label>
            </div>
            <div class="col-sm-6">
              <input name="company" type="text" class="form-control" id="register_company" v-model="credentials.company" required>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-4 control-label">
              <label for="register_street">{{$t("RegistrationForm.street")}}</label>
            </div>
            <div class="col-sm-6">
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
            <div class="col-sm-6">
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
            <div class="col-sm-6">
              <input name="zip"
              type="text"
              pattern="[0-9]{5}"
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
            <div class="col-sm-6">
              <select name="country" class="form-control" id="register_country" v-model="credentials.country" required>
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
            <div class="col-sm-6">
              <input name="user" type="email" class="form-control" id="register_user" v-model="credentials.email" required>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-4 control-label">
              <label for="register_user_repeat">{{$t("RegistrationForm.user_repeat")}}</label>
            </div>
            <div class="col-sm-6">
              <input name="user_repeat" type="email" class="form-control" id="register_user_repeat" v-model="credentials.email_repeat" required>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-4 control-label">
              <label for="register_password">{{$t("RegistrationForm.password")}}</label>
            </div>
            <div class="col-sm-6">
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
              <label for="register_password_repeat">{{$t("RegistrationForm.password_repeat")}}</label>
            </div>
            <div class="col-sm-6">
              <input name="password_repeat"
                     type="password"
                     data-minlength="6"
                     class="form-control"
                     id="register_password_repeat"
                     v-model="credentials.password_repeat" required>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-4 control-label">
              <label for="register_question">{{$t("RegistrationForm.question")}}</label>
            </div>
            <div class="col-sm-6">
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
            <div class="col-sm-6">
              <input name="answer"
                type="text"
                class="form-control"
                id="register_answer"
                v-model="credentials.answer" required>
            </div>
          </div>
          <legend>{{$t("RegistrationForm.agreement")}}</legend>
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
          <div class="form-group row">
            <div class="col-sm-offset-4 col-xs-6 col-sm-3">
              <router-link to="/" type="button" class="btn btn-block btn-lg btn-cancel">{{$t("cancel")}}</router-link>
            </div>
            <div class="col-xs-6 col-sm-3">
              <button type="submit" class="btn btn-block btn-lg btn-primary">{{$t("RegistrationForm.register")}}</button>
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
					industry_family_other: '',
					industry_type: '',
					company: '',
					street: '',
					number: '',
					zip: '',
					city: '',
					country: '',
	    		email: '',
	    		email_repeat: '',
	    		password: '',
					password_repeat: '',
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
          industry_family_other: this.credentials.industry_family_other,
          industry_type: this.credentials.industry_type,
          company: this.credentials.company,
          street: this.credentials.street,
          number: this.credentials.number,
          zip: this.credentials.zip,
          city: this.credentials.city,
          country: this.credentials.country,
          email: this.credentials.email,
          email_repeat: this.credentials.email_repeat,
          password: this.credentials.password,
          password_repeat: this.credentials.password_repeat,
          question: this.credentials.question,
          answer: this.credentials.answer,
          agreement: this.credentials.agreement

        }

        if(this.credentials.password != this.credentials.password_repeat){
          this.$parent.$refs.toastr.Add({
              msg: this.$t("Passwörter stimmen nicht überein!"),
              title: this.$t("Passwort"),
              clickClose: false,
              timeout: 8000,
              position: "toast-top-right",
              type: "error"
          });
        }
        else{
          auth.signup(this, credentials, '/my-devices')
        }

      }
	  }
  }
</script>

<style lang="scss">
  @import "../styles/_colors";

  h1 {
    font-weight: bold;
  }

  .btn-cancel {
    color: $btn-txt-color;
    background: $btn-secondary-color;
  }

  @media (max-width: 767px) {

    h1 {
      font-size: 1.5em;
    }
  }


</style>
