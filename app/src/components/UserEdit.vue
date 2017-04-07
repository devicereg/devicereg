<template>
  <div id="user-edit-component">
    <div class="col-sm-12">
     <div class="row">
       <div class="col-sm-8">
         <h1 class="registration-header-title">{{$t("UserEdit.user_management")}}</h1>
       </div>
     </div>
      <form id="user-edit-form" role="form" v-on:submit.prevent="submit">
          <input type="hidden" v-model="credentials.id">
          <legend>{{$t("UserEdit.personal_details")}}</legend>
          <div class="form-group row">
            <div class="col-sm-4 control-label">
              <label for="register_prename">{{$t("UserEdit.prename")}}</label>
            </div>
            <div class="col-sm-6">
              <div class="input-group">
                <input
                  v-validate="'required'"
                  name="prename"
                  type="text"
                  class="form-control"
                  id="register_prename"
                  v-model="credentials.prename" disabled/>
                <span class="input-group-btn">
                  <button class="btn btn-default glyphicon glyphicon-edit btn-primary" type="button" v-on:click="toggle('register_prename')"></button>
                </span>
              </div>
              <span v-show="errors.has('prename')" class=" text-danger">{{ errors.first('prename') }}</span>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-4 control-label">
              <label for="register_surname">{{$t("UserEdit.surname")}}</label>
            </div>
            <div class="col-sm-6">
              <div class="input-group">
                <input
                  v-validate="'required'"
                  name="surname"
                  class="form-control"
                  id="register_surname"
                  v-model="credentials.surname" disabled>
                <span class="input-group-btn">
                  <button class="btn btn-default glyphicon glyphicon-edit btn-primary" type="button" v-on:click="toggle('register_surname')"></button>
                </span>
              </div>
              <span v-show="errors.has('surname')" class="text-danger">{{ errors.first('surname') }}</span>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-4 control-label">
              <label for="register_user">{{$t("UserEdit.user")}}</label>
            </div>
            <div class="col-sm-6">
              <div class="input-group">
                <input v-validate="'required|email'" name="user" type="email" class="form-control" id="register_user" v-model="credentials.email" required disabled>
                <span class="input-group-btn">
                  <button class="btn btn-default glyphicon glyphicon-edit btn-primary" type="button" v-on:click="toggle('register_user')"></button>
                </span>
              </div>
              <span v-show="errors.has('user')" class="text-danger">{{ errors.first('user') }}</span>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-4 control-label">
              <label for="register_phone">{{$t("phone")}}</label>
            </div>
            <div class="col-sm-6">
              <div class="input-group">
                <input
                  v-validate="'required|numeric'"
                  name="phone"
                  class="form-control"
                  id="register_phone"
                  v-model="credentials.phone"  disabled>
                <span class="input-group-btn">
                  <button class="btn btn-default glyphicon glyphicon-edit btn-primary" type="button" v-on:click="toggle('register_phone')"></button>
                </span>
              </div>
              <span v-show="errors.has('phone')" class="text-danger">{{ errors.first('phone') }}</span>
            </div>
          </div>
          <legend>{{$t("UserEdit.company_details")}}</legend>
          <div class="form-group row">
            <div class="col-sm-4 control-label">
              <label for="register_company">{{$t("UserEdit.company")}}</label>
            </div>
            <div class="col-sm-6">
              <div class="input-group">
                <input v-validate="'required'" name="company" type="text" class="form-control" id="register_company" v-model="credentials.company" disabled>
                <span class="input-group-btn">
                  <button class="btn btn-default glyphicon glyphicon-edit btn-primary" type="button"v-on:click="toggle('register_company')"></button>
                </span>
              </div>
              <span v-show="errors.has('company')" class="text-danger">{{ errors.first('company') }}</span>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-4 control-label">
              <label for="register_street">{{$t("UserEdit.street")}}</label>
            </div>
            <div class="col-sm-6">
              <div class="input-group">
                <input
                  v-validate="'required'"
                  name="street"
                  class="form-control"
                  id="register_street"
                  v-model="credentials.street" disabled>
                <span class="input-group-btn">
                  <button class="btn btn-default glyphicon glyphicon-edit btn-primary" type="button" v-on:click="toggle('register_street')"></button>
                </span>
              </div>
              <span v-show="errors.has('street')" class="text-danger">{{ errors.first('street') }}</span>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-4 control-label">
              <label for="register_number">{{$t("UserEdit.number")}}</label>
            </div>
            <div class="col-sm-6">
              <div class="input-group">
                <input
                  v-validate="'required'"
                  name="number"
                  class="form-control"
                  id="register_number"
                  v-model="credentials.number" disabled>
                <span class="input-group-btn">
                  <button class="btn btn-default glyphicon glyphicon-edit btn-primary" type="button" v-on:click="toggle('register_number')"></button>
                </span>
              </div>
              <span v-show="errors.has('number')" class="text-danger">{{ errors.first('number') }}</span>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-4 control-label">
              <label for="register_zip">{{$t("UserEdit.zip")}}</label>
            </div>
            <div class="col-sm-6">
              <div class="input-group">
                <input
                  v-validate="'required'"
                  name="zip"
                  class="form-control"
                  id="register_zip"
                  v-model="credentials.zip" disabled>
                <span class="input-group-btn">
                  <button class="btn btn-default glyphicon glyphicon-edit btn-primary" type="button" v-on:click="toggle('register_zip')"></button>
                </span>
              </div>
              <span v-show="errors.has('zip')" class="text-danger">{{ errors.first('zip') }}</span>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-4 control-label">
              <label for="register_city">{{$t("city")}}</label>
            </div>
            <div class="col-sm-6">
              <div class="input-group">
                <input
                  v-validate="'required|alpha'"
                  name="city"
                  class="form-control"
                  id="register_city"
                  v-model="credentials.city" disabled>
                <span class="input-group-btn">
                  <button class="btn btn-default glyphicon glyphicon-edit btn-primary" type="button" v-on:click="toggle('register_city')"></button>
                </span>
              </div>
              <span v-show="errors.has('city')" class="text-danger">{{ errors.first('city') }}</span>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-4 control-label">
              <label for="register_country">{{$t("country")}}</label>
            </div>
            <div class="col-sm-6">
              <div class="input-group">
                <select v-validate="'required'" name="country" class="form-control" id="register_country" v-model="credentials.country" disabled>
                  <option value="" :disabled="true">{{$t("RegistrationForm.choose")}}</option>
                  <option  v-for="item in country" > {{ $t(item.name) }}</option>
                </select>
                <span class="input-group-btn">
                  <button class="btn btn-default glyphicon glyphicon-edit btn-primary" type="button" v-on:click="toggle('register_country')"></button>
                </span>
              </div>
              <span v-show="errors.has('country')" class="text-danger">{{ errors.first('country') }}</span>
            </div>
          </div>
          <br/>
          <div class="row">
            <div class="col-sm-offset-4 col-xs-6 col-sm-3">
              <button class="btn btn-block btn-lg btn-cancel" v-on:click="getUserData()">{{$t("cancel")}}</button>
            </div>
            <div class="col-xs-6 col-sm-3">
              <input type="submit" class="btn btn-block btn-lg btn-primary" value="Aktualisieren"/>
            </div>
          </div>
      </form>
    </div>
  </div>
</template>

<script>

	import auth from '../auth'
	import jwt from 'jsonwebtoken'
  import Vue from 'vue'
	export default {
	  name: 'user-view',
	  data () {
	    return {
	    	credentials: jwt.verify(localStorage.getItem('id_token'), 'DeviceR rocks as well!'),
        users: [],
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
        var self = this;
        var credentials = {
          id: this.credentials.id,
          role: this.credentials.role,
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
          if (success) {
            auth.update(self, credentials, '/user/edit')
          }
        });
	  	},
	  	toggle(inputID){
	  	   $("#" + inputID).attr('disabled', function(_, attr){ return !attr});
	  	},
	  	getUserData() {
	  	  auth.getUsers(this);
	  	  var user;
	  	  for (user in this.users) {
	  	    console.log("user id: ", user.id);
	  	    if (user.id == this.credentials.id) {
	  	      this.credentials = user;
	  	    }
	  	  }
	  	}
	  },
    computed: {
      lang: function () {
        return Vue.config.lang;
      }
    },
    mounted: function() {
      this.$validator.setLocale(this.lang);
      this.getUserData();
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
