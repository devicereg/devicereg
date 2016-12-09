<template>
  <div class="container reset-password-form">
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div class="alert alert-danger fade in" v-if="error">
          <p>{{ error }}</p>
        </div>
      </div>
    </div>
    <div class="row">

      <form role="form">
        <legend>{{ $t("ResetPassword.reset_password") }}</legend>
        
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>

        <div class="form-group">
          <input 
            type="email" 
            class="form-control" 
            id="email_reset" 
            :placeholder="$t('ResetPassword.email')"
            v-model="credentials.email"
            required
          >
        </div>
      
        <button class="btn btn-primary pull-right" @click="submit()">
          {{ $t("ResetPassword.reset_password") }}
        </button>
      </form>
    </div>
  </div>
</template>

<script>

	import auth from '../auth'

	export default {
	  name: 'reset-password',
	  data () {
	    return {
        credentials: {
          email: ''
        },
	    	
	    	error: ''
	    }
	  },
	  methods: {
	  	submit() {
	  		var credentials = {
	  			email: this.credentials.email
	  	}

	  		auth.resetPassword(this, credentials)
	  	}
	  }
	}
</script>

<style lang="scss">
  .reset-password-form {
    form{
      legend{
        border-bottom:1px solid #ccc;
      }
    }
  }
</style>
