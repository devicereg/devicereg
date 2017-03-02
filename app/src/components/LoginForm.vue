<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
	<div class="login-form">
      <!-- UI Message no User -->
      <form id="user-login-form" class="form-horizontal" role="form" v-if="!user.authenticated" v-on:submit.prevent="submitForm">
          <h1>{{ $t("LoginForm.registration") }}</h1>
          <div class="form-group row">
            <div class="col-xs-12">
              <div class="input-group">
                <span class="input-group-addon">
                  <i class="glyphicon glyphicon-envelope"></i>
                </span>
								<div :class="{'has-error': errors.has('login_email') }">
                	<input
										name="login_email"
                  	v-validate="'required|email'"
                  	class="form-control"
                  	id="login_email"
                  	v-model="credentials.email"
                  	v-bind:placeholder="$t('email')"
                  />
								</div>
								<span v-show="errors.has('login_email')" class="text-danger">{{ errors.first('login_email') }}</span>
              </div>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-xs-12">
              <div class="input-group ">
                <span class="input-group-addon">
                  <i class="glyphicon glyphicon-lock" aria-hidden="true"></i>
                </span>
								<div :class="{'has-error': errors.has('password') }">
                	<input
										name="password"
										v-validate="'required'"
                  	type="password"
                  	class="form-control"
                  	id="login_password"
                  	v-model="credentials.password"
                  	v-bind:placeholder="$t('password')"
                 	/>
							 </div>
							 <span v-show="errors.has('password')" class="text-danger">{{ errors.first('password') }}</span>
              </div>
            </div>
          </div>
          <div class="form-group row">
            <div class="checkbox_signIn col-xs-12">
              <input type="checkbox" id="stay-logged-in"/>
              <label for="stay-logged-in">{{ $t("LoginForm.remember_me") }}</label>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-10">
              <button type="submit" class="btn btn-primary"> {{ $t("LoginForm.sign_in") }}</button>
              <router-link to="/reset-password"> | {{ $t("LoginForm.forgot") }}</router-link>
            </div>
          </div>
		    </form>


        <button class="btn btn-warning" @click="logout()" v-else>{{ $t("LoginForm.logout") }}</button>
      </div>
</template>
<style scoped lang="scss">

  h1 {
    font-weight: bold;
  }

	h2 {
	  margin-bottom: 15px;
	}

  @media (max-width: 767px) {

    h1 {
      font-size: 1.5em;
    }
  }
</style>
<script>
	import auth from '../auth'
	import Vue from 'vue'

	export default {
	  name: 'login-form',
	  data () {
	    return {
	    	credentials: {
	    		email: '',
	    		password: ''
	    	},
	    	error: '',
	    	user: auth.user
	    }
	  },
	  methods: {
	  	submitForm() {
        var credentials = {
          email: this.credentials.email,
          password: this.credentials.password
        }
				this.$validator.validateAll().then(success => {
								if (!success) {
										//Jump to the first incorrect field. No idea how to implement, need help :/
								} else {
									auth.login(this, credentials, 'my-devices', this.$parent.$parent.$refs.toastr)
								}
						});
	  	},

	  	logout() {
	  		auth.logout()
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
