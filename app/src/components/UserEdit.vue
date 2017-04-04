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
            <div class="col-sm-6" :class="{'has-error': errors.has('gender') }">
              <select
                v-validate="'required'"
                name="gender"
                class="form-control"
                id="register_gender"
                v-model="credentials.gender">
                <option value="">{{$t("RegistrationForm.choose")}}</option>
                <option>{{$t("RegistrationForm.mr")}}</option>
                <option>{{$t("RegistrationForm.mrs")}}</option>
              </select>
            </div>
            <span v-show="errors.has('gender')" class="text-danger">{{ errors.first('gender') }}</span>
          </div>
          <div class="form-group row">
            <div class="col-sm-4 control-label">
              <label for="register_prename">{{$t("RegistrationForm.prename")}}</label>
            </div>
            <div class="col-sm-6" :class="{'has-error': errors.has('prename') }">
              <input
                v-validate="'required'"
                name="prename"
                class="form-control"
                id="register_prename"
                v-model="credentials.prename">
            </div>
            <span v-show="errors.has('prename')" class="text-danger">{{ errors.first('prename') }}</span>
          </div>
          <div class="form-group row">
            <div class="col-sm-4 control-label">
              <label for="register_surname">{{$t("RegistrationForm.surname")}}</label>
            </div>
            <div class="col-sm-6" :class="{'has-error': errors.has('surname') }">
              <input
                v-validate="'required'"
                name="surname"
                class="form-control"
                id="register_surname"
                v-model="credentials.surname">
            </div>
            <span v-show="errors.has('surname')" class="text-danger">{{ errors.first('surname') }}</span>
          </div>
          <div class="form-group row">
            <div class="col-sm-4 control-label">
              <label for="register_language">{{$t("language")}}</label>
            </div>
            <div class="col-sm-6" :class="{'has-error': errors.has('language') }">
              <select v-validate="'required'" name="language" class="form-control" id="register_language" v-model="credentials.language">
                <option value="">{{$t("RegistrationForm.choose")}}</option>
                <option>{{$t("RegistrationForm.german")}}</option>
                <option>{{$t("RegistrationForm.english")}}</option>
              </select>
            </div>
            <span v-show="errors.has('language')" class="text-danger">{{ errors.first('language') }}</span>
          </div>
          <div class="form-group row">
            <div class="col-sm-4 control-label">
              <label for="register_phone">{{$t("phone")}}</label>
            </div>
            <div class="col-sm-6" :class="{'has-error': errors.has('phone') }">
              <input
                v-validate="'required|numeric'"
                name="phone"
                class="form-control"
                id="register_phone"
                v-model="credentials.phone">
            </div>
            <span v-show="errors.has('phone')" class="text-danger">{{ errors.first('phone') }}</span>
          </div>
          <legend>{{$t("RegistrationForm.company_details")}}</legend>
          <div class="form-group row">
            <div class="col-sm-4 control-label">
              <label for="register_company">{{$t("RegistrationForm.company")}}</label>
            </div>
            <div class="col-sm-6" :class="{'has-error': errors.has('company') }">
              <input v-validate="'required'" name="company" class="form-control" id="register_company" v-model="credentials.company">
            </div>
            <span v-show="errors.has('company')" class="text-danger">{{ errors.first('company') }}</span>
          </div>
          <div class="form-group row">
            <div class="col-sm-4 control-label">
              <label for="register_street">{{$t("RegistrationForm.street")}}</label>
            </div>
            <div class="col-sm-6" :class="{'has-error': errors.has('street') }">
              <input
                v-validate="'required'"
                name="street"
                class="form-control"
                id="register_street"
                v-model="credentials.street">
            </div>
            <span v-show="errors.has('street')" class="text-danger">{{ errors.first('street') }}</span>
          </div>
          <div class="form-group row">
            <div class="col-sm-4 control-label">
              <label for="register_number">{{$t("RegistrationForm.number")}}</label>
            </div>
            <div class="col-sm-6" :class="{'has-error': errors.has('number') }">
              <input
                v-validate="'required'"
                name="number"
                class="form-control"
                id="register_number"
                v-model="credentials.number">
            </div>
            <span v-show="errors.has('number')" class="text-danger">{{ errors.first('number') }}</span>
          </div>
          <div class="form-group row">
            <div class="col-sm-4 control-label">
              <label for="register_zip">{{$t("RegistrationForm.zip")}}</label>
            </div>
            <div class="col-sm-6" :class="{'has-error': errors.has('zip') }">
              <input
                v-validate="'required'"
                name="zip"
                class="form-control"
                id="register_zip"
                v-model="credentials.zip">
            </div>
            <span v-show="errors.has('zip')" class="text-danger">{{ errors.first('zip') }}</span>
          </div>
          <div class="form-group row">
            <div class="col-sm-4 control-label">
              <label for="register_city">{{$t("city")}}</label>
            </div>
            <div class="col-sm-6" :class="{'has-error': errors.has('city') }">
              <input
                v-validate="'required|alpha'"
                name="city"
                class="form-control"
                id="register_city"
                v-model="credentials.city">
            </div>
            <span v-show="errors.has('city')" class="text-danger">{{ errors.first('city') }}</span>
          </div>
          <div class="form-group row">
            <div class="col-sm-4 control-label">
              <label for="register_country">{{$t("country")}}</label>
            </div>
            <div class="col-sm-6" :class="{'has-error': errors.has('country') }">
              <select v-validate="'required'" name="country" class="form-control" id="register_country" v-model="credentials.country">
                <option value="" :disabled="true">{{$t("RegistrationForm.choose")}}</option>
                <option  v-for="item in country" > {{ $t(item.name) }}</option>
              </select>
            </div>
            <span v-show="errors.has('country')" class="text-danger">{{ errors.first('country') }}</span>
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
  import Vue from 'vue'
	export default {
	  name: 'user-edit-form',
	  data () {
	    return {
	    	credentials: jwt.verify(localStorage.getItem('id_token'), 'DeviceR rocks as well!'),
	    	error: '',
        country: [
         {name: "Countries.GB"},
         {name: "Countries.DE"},
         {name: "Countries.FR"},
         {name: "Countries.PL"},
         {name: "Countries.AT"},
         {name: "Countries.ES"},
         {name: "Countries.SE"},
         {name: "Countries.CH"},
         {name: "Countries.IT"},
         {name: "Countries.BE"},
         {name: "Countries.BG"},
         {name: "Countries.HR"},
         {name: "Countries.CY"},
         {name: "Countries.ZC"},
         {name: "Countries.DK"},
         {name: "Countries.EE"},
         {name: "Countries.GR"},
         {name: "Countries.HU"},
         {name: "Countries.LV"},
         {name: "Countries.LT"},
         {name: "Countries.LU"},
         {name: "Countries.MT"},
         {name: "Countries.NL"},
         {name: "Countries.PT"},
         {name: "Countries.IE"},
         {name: "Countries.RO"},
         {name: "Countries.SK"},
         {name: "Countries.SI"},
         {name: "Countries.AL"},
         {name: "Countries.AD"},
         {name: "Countries.BA"},
         {name: "Countries.IS"},
         {name: "Countries.LIE"},
         {name: "Countries.MD"},
         {name: "Countries.MC"},
         {name: "Countries.ME"},
         {name: "Countries.MK"},
         {name: "Countries.SM"},
         {name: "Countries.RS"},
         {name: "Countries.TR"},
         {name: "Countries.FI"}
       ]
	    }
	  },
	  methods: {
	  	submit() {
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
          this.$validator.validateAll().then(success => {
                  if (!success) {
                      //Jump to the first incorrect field. No idea how to implement, need help :/
                  }
                  else {
                    auth.update(this, credentials, '/dashboard')
                  }
          });
	  	}
	  },
    computed: {
      lang: function () {
        return Vue.config.lang;
      }
    },
    mounted: function() {
      this.$validator.setLocale(this.lang);
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
