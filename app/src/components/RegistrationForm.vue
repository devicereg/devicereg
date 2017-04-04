<template>
  <div id="user-registration-component">
    <div class="row">
      <div class="col-sm-12">
        <div class="alert alert-danger fade in" v-if="error">
          <p>{{ error }}</p>
        </div>
      </div>
    </div>
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
            <div class="col-sm-6" :class="{'has-error': errors.has('gender') }">
              <select v-validate="'required'"
                name="gender"
                class="form-control"
                id="register_gender"
                v-model="credentials.gender">
                <option value="" :disabled="true">{{$t("RegistrationForm.choose")}}</option>
                <option>{{$t("RegistrationForm.mr")}}</option>
                <option>{{$t("RegistrationForm.mrs")}}</option>
              </select>
              <span v-show="errors.has('gender')" class="text-danger">{{ errors.first('gender') }}</span>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-4 control-label">
              <label for="register_prename">{{$t("RegistrationForm.prename")}}</label>
            </div>
            <div class="col-sm-6" :class="{'has-error': errors.has('prename') }">
              <input v-validate="'required|alpha'"
                name="prename"
                type="text"
                class="form-control"
                id="register_prename"
                v-model="credentials.prename">
                <span v-show="errors.has('prename')" class="text-danger">{{ errors.first('prename') }}</span>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-4 control-label">
              <label for="register_surname">{{$t("RegistrationForm.surname")}}</label>
            </div>
            <div class="col-sm-6" :class="{'has-error': errors.has('surname') }">
              <input v-validate="'required|alpha'"
                name="surname"
                type="text"
                class="form-control"
                id="register_surname"
                v-model="credentials.surname">
                <span v-show="errors.has('surname')" class="text-danger">{{ errors.first('surname') }}</span>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-4 control-label">
              <label for="register_language">{{$t("language")}}</label>
            </div>
            <div class="col-sm-6" :class="{'has-error': errors.has('language') }">
              <select v-validate="'required'"
                      name="language" class="form-control" id="register_language" v-model="credentials.language">
                <option value="" :disabled="true">{{$t("RegistrationForm.choose")}}</option>
                <option value="de">{{$t("RegistrationForm.german")}}</option>
                <option value="en">{{$t("RegistrationForm.english")}}</option>
              </select>
              <span v-show="errors.has('language')" class="text-danger">{{ errors.first('language') }}</span>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-4 control-label">
              <label for="register_phone">{{$t("phone")}}</label>
            </div>
            <div class="col-sm-6" :class="{'has-error': errors.has('phone') }">
              <input v-validate="'required'"
                     name="phone"
                     type="tel"
                     class="form-control"
                     id="register_phone"
                     v-model="credentials.phone">
              <span v-show="errors.has('phone')" class="text-danger">{{ errors.first('phone') }}</span>
            </div>
          </div>
          <legend>{{$t("RegistrationForm.company_details")}}</legend>
          <div class="form-group row">
            <div class="col-sm-4 control-label">
              <label for="register_industry_family">{{$t("RegistrationForm.industry_family")}}</label>
            </div>
            <div class="col-sm-6" :class="{'has-error': errors.has('industry_family') }">
              <select v-validate="'required'"
                      name="industry_family"
                      class="form-control"
                      id="register_industry_family"
                      v-model="credentials.industry_family">
                <option value="" :disabled="true">{{$t("RegistrationForm.choose")}}</option>
                <option v-bind:value="item.id" v-for="item in industry_family" > {{ item.name }}</option>
              </select>
              <span v-show="errors.has('industry_family')" class="text-danger">{{ errors.first('industry_family') }}</span>
            </div>
          </div>
          <div v-if="credentials.industry_family == 0" class="form-group row">
            <div class="col-sm-4 control-label">
              <label for="register_industry_type">{{$t("RegistrationForm.industry_type_other")}}</label>
            </div>
            <div class="col-sm-6" :class="{'has-error': errors.has('industry_type') }">
              <input v-validate="'required'"
                     name="industry_type"
                     type="text"
                     class="form-control"
                     id="register_industry_type"
                     v-model="credentials.industry_type"
                     :required="credentials.industry_family">
              <span v-show="errors.has('industry_type')" class="text-danger">{{ errors.first('industry_type') }}</span>
            </div>
          </div>
          <div v-else-if="credentials.industry_family != 0" class="form-group row">
            <div class="col-sm-4 control-label">
              <label for="register_industry_type">{{$t("RegistrationForm.industry_type")}}</label>
            </div>
            <div class="col-sm-6" :class="{'has-error': errors.has('industry_type') }">
              <select v-validate="'required'"
                      name="industry_type"
                      class="form-control"
                      id="register_industry_type"
                      v-model="credentials.industry_type"
                      :disabled="credentials.industry_family == -1" :required="credentials.industry_family">
                <option v-bind:value="item.name" v-for="item in industry_types" v-if="item.family_id === credentials.industry_family">{{item.name}}</option>
              </select>
              <span v-show="errors.has('industry_type')" class="text-danger">{{ errors.first('industry_type') }}</span>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-4 control-label">
              <label for="register_company">{{$t("RegistrationForm.company")}}</label>
            </div>
            <div class="col-sm-6" :class="{'has-error': errors.has('company') }">
              <input v-validate="'required'" name="company" type="text" class="form-control" id="register_company" v-model="credentials.company">
              <span v-show="errors.has('company')" class="text-danger">{{ errors.first('company') }}</span>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-4 control-label">
              <label for="register_street">{{$t("RegistrationForm.street")}}</label>
            </div>
            <div class="col-sm-6" :class="{'has-error': errors.has('street') }">
              <input v-validate="'required'"
              name="street"
              type="text"
              class="form-control"
              id="register_street"
              v-model="credentials.street">
              <span v-show="errors.has('street')" class="text-danger">{{ errors.first('street') }}</span>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-4 control-label">
              <label for="register_number">{{$t("RegistrationForm.number")}}</label>
            </div>
            <div class="col-sm-6" :class="{'has-error': errors.has('number') }">
              <input v-validate="'required'"
              name="number"
              type="text"
              class="form-control"
              id="register_number"
              v-model="credentials.number">
              <span v-show="errors.has('number')" class="text-danger">{{ errors.first('number') }}</span>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-4 control-label">
              <label for="register_zip">{{$t("RegistrationForm.zip")}}</label>
            </div>
            <div class="col-sm-6" :class="{'has-error': errors.has('zip') }">
              <input v-validate="'required|numeric'"
              name="zip"
              type="text"
              class="form-control"
              id="register_zip"
              v-model="credentials.zip">
              <span v-show="errors.has('zip')" class="text-danger">{{ errors.first('zip') }}</span>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-4 control-label">
              <label for="register_city">{{$t("city")}}</label>
            </div>
            <div class="col-sm-6" :class="{'has-error': errors.has('city') }">
              <input v-validate="'required|alpha'"
              name="city"
              type="text"
              class="form-control"
              id="register_city"
              v-model="credentials.city">
              <span v-show="errors.has('city')" class="text-danger">{{ errors.first('city') }}</span>
            </div>
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
              <span v-show="errors.has('country')" class="text-danger">{{ errors.first('country') }}</span>
            </div>
          </div>
          <legend>{{$t("RegistrationForm.system_access")}}</legend>
          <div class="form-group row">
            <div class="col-sm-4 control-label">
              <label for="register_user">{{$t("RegistrationForm.user")}}</label>
            </div>
            <div class="col-sm-6" :class="{'has-error': errors.has('user') }">
              <input v-validate="'required|email'" name="user" class="form-control" id="register_user" v-model="credentials.email">
              <span v-show="errors.has('user')" class="text-danger">{{ errors.first('user') }}</span>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-4 control-label">
              <label for="register_user_repeat">{{$t("RegistrationForm.user_repeat")}}</label>
            </div>
            <div class="col-sm-6" :class="{'has-error': errors.has('user_repeat') }">
              <input v-validate="'required|email|confirmed:user'" name="user_repeat" class="form-control" id="register_user_repeat" v-model="credentials.email_repeat">
              <span v-show="errors.has('user_repeat')" class="text-danger">{{ errors.first('user_repeat') }}</span>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-4 control-label">
              <label for="register_password">{{$t("RegistrationForm.password")}}</label>
            </div>
            <div class="col-sm-6" :class="{'has-error': errors.has('password') }">
              <input v-validate="'required|min:6|confirmed:password_repeat'"
                name="password"
                type="password"
                class="form-control"
                id="register_password"
                v-model="credentials.password">
                <span v-show="errors.has('password')" class="text-danger">{{ errors.first('password') }}</span>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-4 control-label">
              <label for="register_password_repeat">{{$t("RegistrationForm.password_repeat")}}</label>
            </div>
            <div class="col-sm-6" :class="{'has-error': errors.has('password_repeat') }">
              <input v-validate="'required|min:6'"
                     name="password_repeat"
                     type="password"
                     class="form-control"
                     id="register_password_repeat"
                     v-model="credentials.password_repeat">
              <span v-show="errors.has('password_repeat')" class="text-danger">{{ errors.first('password_repeat') }}</span>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-4 control-label">
              <label for="register_question">{{$t("RegistrationForm.question")}}</label>
            </div>
            <div class="col-sm-6" :class="{'has-error': errors.has('question') }">
              <input v-validate="'required'"
                name="question"
                type="text"
                class="form-control"
                id="register_question"
                v-model="credentials.question">
              <span v-show="errors.has('question')" class="text-danger">{{ errors.first('question') }}</span>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-4 control-label">
              <label for="register_answer">{{$t("RegistrationForm.answer")}}</label>
            </div>
            <div class="col-sm-6" :class="{'has-error': errors.has('answer') }">
              <input v-validate="'required'"
                name="answer"
                type="text"
                class="form-control"
                id="register_answer"
                v-model="credentials.answer">
              <span v-show="errors.has('answer')" class="text-danger">{{ errors.first('answer') }}</span>
            </div>
          </div>
          <legend>{{$t("RegistrationForm.agreement")}}</legend>
          <div class="form-group row">
            <div class="form-check">
              <div class="col-sm-12 control-label">
                <input v-validate="'required'"
                  name="terms_of_agreement"
                  type="checkbox"
                  class="form-check-input"
                  id="register_agreement"
                  v-model="credentials.agreement">
                <label for="register_agreement" class="form-check-label">
                  {{$t("RegistrationForm.terms_of_agreement")}}
                </label></br>
                <span v-show="errors.has('terms_of_agreement')" class="text-danger">{{ errors.first('terms_of_agreement') }}</span>
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
</template>

<script>
	import auth from '../auth'
  import Vue from 'vue'
	export default {
	  name: 'registration-form',
	  data () {
	    return {
	    	credentials: {
          role: "ROLE_USER",
					gender: '',
					prename: '',
					surname: '',
					language: '',
					phone: '',
					industry_family: '-1',
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
	    	industry_family: [
          {id: 0, name: 'Andere (Eingabe erforderlich)'},
          {id: 1, name: 'Metall Minen'},
          {id: 2, name: 'Öl und Gas'},
          {id: 3, name: 'Allgemein Hoch- und Tiefbau'},
          {id: 4, name: 'Elektrische Arbeitsmittel'},
          {id: 5, name: 'Lebensmittel-/Getränkeindustrie'},
          {id: 6, name: 'Textilien'},
          {id: 7, name: 'Zellstoff Papier'},
          {id: 8, name: 'Pharmazeutika'},
          {id: 9, name: 'Raffinierung'},
          {id: 10, name: 'Chemie oder Petrochemie'},
          {id: 11, name: 'Reifenhersteller und indust. Schläuche'},
          {id: 12, name: 'Zement, Glas'},
          {id: 13, name: 'Eisen, Stahl'},
          {id: 14, name: 'Automotive'},
          {id: 15, name: 'Maschinen'},
          {id: 16, name: 'Herst. Elektr. und Ind. App.'},
          {id: 17, name: 'Elektronik'},
          {id: 18, name: 'Semicon'},
          {id: 19, name: 'Elektrisch'},
          {id: 20, name: 'Luft- und Raumfahrt'},
          {id: 21, name: 'Strom'},
          {id: 22, name: 'Wasser, Abwasser'},
          {id: 23, name: 'Fernmeldewesen'},
          {id: 24, name: 'Ges. allg. Handelswaren Maschinen'},
          {id: 25, name: 'Gesamte Handelwaren Sonstiges'},
          {id: 26, name: 'Sonstige Ges. Handelsver. und Branchen'},
          {id: 27, name: 'Ingenieur und Architekt'},
          {id: 28, name: 'Gebäudeautomatisierung'},
          {id: 29, name: 'Abfallwirtschaft'},
          {id: 30, name: 'Medizin'},
          {id: 31, name: 'Bildung'},
          ],

        industry_types: [
          {family_id: 1, name: 'Metall, Minen'},
          {family_id: 1, name: 'Kohle'},
          {family_id: 1, name: 'Diamanten'},
          {family_id: 1, name: 'Gold'}
          ],

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
        ],
	    	error: ''
	    }
	  },
	  methods: {
	  	submit() {
        var credentials = {
          role: "ROLE_USER",
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
          email_repeat: this.credentials.email_repeat,
          password: this.credentials.password,
          password_repeat: this.credentials.password_repeat,
          question: this.credentials.question,
          answer: this.credentials.answer,
          agreement: this.credentials.agreement
        }
        this.$validator.validateAll().then(success => {
                if (!success) {
                    //Jump to the first incorrect field. No idea how to implement, need help :/
                } else {
                auth.signup(this, credentials, '/my-devices')
                this.$parent.$refs.toastr.Add({
                    title: this.$t("UI.register_user_title"),
                    msg: this.$t("UI.register_user_msg"),
                    clickClose: false,
                    timeout: 8000,
                    position: "toast-top-right",
                    type: "success"
                });
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
    #register_phone_prefix{

    }
    #register_phone{

    }

  }
</style>
