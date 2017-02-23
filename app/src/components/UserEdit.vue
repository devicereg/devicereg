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
            <div class="col-sm-6 input-group">
              <input
                type="text"
                class="form-control"
                id="register_prename"
                v-model="credentials.prename" required disabled>
              <span class="input-group-btn">
                <button class="btn btn-default glyphicon glyphicon-edit btn-primary" type="button" v-on:click="toggle('register_prename')"></button>
              </span>
             </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-4 control-label">
              <label for="register_surname">{{$t("UserEdit.surname")}}</label>
            </div>
            <div class="col-sm-6 input-group">
              <input
                type="text"
                class="form-control"
                id="register_surname"
                v-model="credentials.surname" required disabled>
              <span class="input-group-btn">
                <button class="btn btn-default glyphicon glyphicon-edit btn-primary" type="button" v-on:click="toggle('register_surname')"></button>
              </span>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-4 control-label">
              <label for="register_user">{{$t("UserEdit.user")}}</label>
            </div>
            <div class="col-sm-6 input-group">
              <input name="user" type="email" class="form-control" id="register_user" v-model="credentials.email" required disabled>
              <span class="input-group-btn">
                <button class="btn btn-default glyphicon glyphicon-edit btn-primary" type="button" v-on:click="toggle('register_user')"></button>
              </span>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-4 control-label">
              <label for="register_phone">{{$t("phone")}}</label>
            </div>
            <div class="col-sm-6 input-group">
              <input
                type="tel"
                class="form-control"
                id="register_phone"
                v-model="credentials.phone" required disabled>
              <span class="input-group-btn">
                <button class="btn btn-default glyphicon glyphicon-edit btn-primary" type="button" v-on:click="toggle('register_phone')"></button>
              </span>
            </div>
          </div>
          <legend>{{$t("UserEdit.company_details")}}</legend>
          <div class="form-group row">
            <div class="col-sm-4 control-label">
              <label for="register_company">{{$t("UserEdit.company")}}</label>
            </div>
            <div class="col-sm-6 input-group">
              <input type="text" class="form-control" id="register_company" v-model="credentials.company" required disabled>
              <span class="input-group-btn">
                <button class="btn btn-default glyphicon glyphicon-edit btn-primary" type="button"v-on:click="toggle('register_company')"></button>
              </span>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-4 control-label">
              <label for="register_street">{{$t("UserEdit.street")}}</label>
            </div>
            <div class="col-sm-6 input-group">
              <input
                type="text"
                class="form-control"
                id="register_street"
                v-model="credentials.street" required disabled>
              <span class="input-group-btn">
                <button class="btn btn-default glyphicon glyphicon-edit btn-primary" type="button" v-on:click="toggle('register_street')"></button>
              </span>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-4 control-label">
              <label for="register_number">{{$t("UserEdit.number")}}</label>
            </div>
            <div class="col-sm-6 input-group">
              <input
                type="text"
                class="form-control"
                id="register_number"
                v-model="credentials.number" required disabled>
              <span class="input-group-btn">
                <button class="btn btn-default glyphicon glyphicon-edit btn-primary" type="button" v-on:click="toggle('register_number')"></button>
              </span>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-4 control-label">
              <label for="register_zip">{{$t("UserEdit.zip")}}</label>
            </div>
            <div class="col-sm-6 input-group">
              <input
                type="number"
                class="form-control"
                id="register_zip"
                v-model="credentials.zip" required disabled>
              <span class="input-group-btn">
                <button class="btn btn-default glyphicon glyphicon-edit btn-primary" type="button" v-on:click="toggle('register_zip')"></button>
              </span>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-4 control-label">
              <label for="register_city">{{$t("city")}}</label>
            </div>
            <div class="col-sm-6 input-group">
              <input
                type="text"
                class="form-control"
                id="register_city"
                v-model="credentials.city" required disabled>
              <span class="input-group-btn">
                <button class="btn btn-default glyphicon glyphicon-edit btn-primary" type="button" v-on:click="toggle('register_city')"></button>
              </span>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-4 control-label">
              <label for="register_country">{{$t("country")}}</label>
            </div>
            <div class="col-sm-6 input-group">
              <select class="form-control" id="register_country" v-model="credentials.country" required disabled>
                <option value="">{{$t("RegistrationForm.choose")}}</option>
                <option>Deutschland</option>
                <option>Österreich</option>
                <option>Schweiz</option>
              </select>
              <span class="input-group-btn">
                <button class="btn btn-default glyphicon glyphicon-edit btn-primary" type="button" v-on:click="toggle('register_country')"></button>
              </span>
            </div>
          </div>
          <br/>
          <div class="row">
            <div class="col-sm-offset-4 col-xs-6 col-sm-3">
              <button class="btn btn-block btn-lg btn-cancel">{{$t("cancel")}}</button>
            </div>
            <div class="col-xs-6 col-sm-3">
              <input class="btn btn-block btn-lg btn-primary" value="Aktualisieren"/>
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
	  name: 'user-view',
	  data () {
	    return {
	    	credentials: jwt.verify(localStorage.getItem('id_token'), 'DeviceR rocks as well!')
	    }
	  },
	  methods: {
	  	submit() {
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
          auth.update(this, credentials, '/user/edit')
	  	},
	  	toggle(inputID){
	  	   $("#" + inputID).attr('disabled', function(_, attr){ return !attr});
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
