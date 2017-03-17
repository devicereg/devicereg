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
            <div class="col-sm-4 con  trol-label">
              <label for="register_gender">{{$t("RegistrationForm.gender")}}</label>
            </div>
            <div class="col-sm-6">
              <select name="gender"
                class="form-control"
                id="register_gender"
                v-model="credentials.gender" required>
                <option value="" :disabled="true">{{$t("RegistrationForm.choose")}}</option>
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
                <option value="" :disabled="true">{{$t("RegistrationForm.choose")}}</option>
                <option value="de">{{$t("RegistrationForm.german")}}</option>
                <option value="en">{{$t("RegistrationForm.english")}}</option>
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
            <!--
            Two input forms are not responisve yet!
            <div class="col-sm-2">
              <input name="phone_prefix"
                     type="tel"
                     class="form-control"
                     id="register_phone_prefix"
                     v-model="credentials.phone" required>
            </div>
            <div class="col-sm-4">
              <input name="phone"
                     type="tel"
                     class="form-control"
                     id="register_phone"
                     v-model="credentials.phone" required>
            </div>-->
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
                      v-model="credentials.industry_family"
                      required>
                <option value="" :disabled="true">{{$t("RegistrationForm.choose")}}</option>
                <option v-bind:value="item.id" v-for="item in industry_family" > {{ item.name }}</option>
              </select>
            </div>
          </div>
          <div v-if="credentials.industry_family == 0" class="form-group row">
            <div class="col-sm-4 control-label">
              <label for="register_industry_type">{{$t("RegistrationForm.industry_type_other")}}</label>
            </div>
            <div class="col-sm-6">
              <input name="industry_type"
                     type="text"
                     class="form-control"
                     id="register_industry_type"
                     v-model="credentials.industry_type"
                     :required="credentials.industry_family">
            </div>
          </div>
          <div v-else-if="credentials.industry_family != 0" class="form-group row">
            <div class="col-sm-4 control-label">
              <label for="register_industry_type">{{$t("RegistrationForm.industry_type")}}</label>
            </div>
            <div class="col-sm-6">
              <select name="industry_type"
                      class="form-control"
                      id="register_industry_type"
                      v-model="credentials.industry_type"
                      :disabled="credentials.industry_family == -1" :required="credentials.industry_family">
                <option v-bind:value="item.name" v-for="item in industry_types" v-if="credentials.industry_family == item.id">{{item.name}}</option>
              </select>
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
                <option value="" :disabled="true">{{$t("RegistrationForm.choose")}}</option>
                <option  v-for="item in country" > {{ $t(item.name) }}</option>

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
</template>

<script>
	import auth from '../auth'

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
					//industry_family_other: '',
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
          {family_id: '-1', name: 'Mteall, Minen'},
          {family_id: '1', name: 'Kohle'},
          {family_id: '1', name: 'Diamanten'},
          {family_id: '1', name: 'Gold'}
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
          //industry_family_other: this.credentials.industry_family_other,
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

        if(this.credentials.password != this.credentials.password_repeat || this.credentials.email != this.credentials.email_repeat){
          this.$parent.$refs.toastr.Add({
              title: this.$t("UI.password_or_email_mismatch_title"),
              msg: this.$t("UI.password_or_email_mismatch_msg"),
              clickClose: false,
              timeout: 8000,
              position: "toast-top-right",
              type: "error"
          });
        }
        else{
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
    #register_phone_prefix{

    }
    #register_phone{

    }

  }


</style>
