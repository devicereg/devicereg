<template>

    <div class="row">
      <div class="col-sm-8">
        <h1>{{ $t("ResetPassword.reset_password") }}</h1>
        <p>{{ $t("ResetPassword.paragraph") }}</p>
        <form role="form">
          <div class="form-group">
            <div class="input-group col-sm-8" :class="{'has-error': errors.has('emailReset') }">
             <span class="input-group-addon">
               <i class="glyphicon glyphicon-envelope"></i>
             </span>
              <input
                name="emailReset"
                v-validate="'required|email'"
                class="form-control"
                id="email_reset"
                :placeholder="$t('ResetPassword.email')"
                v-model="credentials.email"
              >

            </div>
            <span v-show="errors.has('emailReset')" class="text-danger">{{ errors.first('emailReset') }}</span>
          </div>

          <button class="btn btn-primary pull-left" @click="submit()">
            {{ $t("ResetPassword.reset_password_button") }}
          </button>
        </form>
      </div>
    </div>

</template>

<script>

	import auth from '../auth'
  import Vue from 'vue'
	export default {
	  name: 'reset-password',
	  data () {
	    return {
        credentials: {
          email: ''
        }
	    }
	  },
	  methods: {
	  	submit() {
	  		var credentials = {
	  			email: this.credentials.email
	  	}
      this.$validator.validateAll().then(success => {
              if (!success) {
                  //Jump to the first incorrect field. No idea how to implement, need help :/
              } else {
              auth.resetPassword(this, credentials, this.$parent.$refs.toastr)
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

<style scoped lang="scss">

  h1 {
    font-weight: bold;
  }

  @media (max-width: 767px) {

    h1 {
      font-size: 1.5em;
    }
  }
</style>
