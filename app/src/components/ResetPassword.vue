<template>

    <div class="row">
      <div class="col-sm-8">
        <h1>{{ $t("ResetPassword.reset_password") }}</h1>
        <p>{{ $t("ResetPassword.paragraph") }}</p>
        <form role="form">
          <div class="form-group">
            <div class="input-group col-sm-8">
             <span class="input-group-addon">
               <i class="glyphicon glyphicon-envelope"></i>
             </span>
              <input
                type="email"
                class="form-control"
                id="email_reset"
                :placeholder="$t('ResetPassword.email')"
                v-model="credentials.email"
                required
              >
            </div>
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

	  		auth.resetPassword(this, credentials, this.$parent.$refs.toastr)
	  	}
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
