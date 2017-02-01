<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
    <div class="row">
      <div class="col-sm-8">
        <h1>{{ $t("CreateNewPassword.header") }}<span>( {{ credentials.prename }} {{ credentials.surname }} )</span></h1><form>
        <div class="form-group">
          <div class="input-group ">
            <span class="input-group-addon">
              <i class="glyphicon glyphicon-lock" aria-hidden="true"></i>
            </span>
              <input
                type="password"
                class="form-control"
                id="password"
                v-bind:placeholder="$t('CreateNewPassword.password')"
                v-model="credentials.password"
                required
              >
            </div>
          </div>
        <div class="form-group">
          <div class="input-group ">
            <span class="input-group-addon">
              <i class="glyphicon glyphicon-lock" aria-hidden="true"></i>
            </span>
          <input
            type="password"
            class="form-control"
            id="repeat_password"
            v-bind:placeholder="$t('CreateNewPassword.password_repeat')"
            v-model="credentials.repeat_password"
            required
          >
          </div>
        </div>

        <button class="btn btn-primary pull-left" @click="submit()">
          {{ $t("CreateNewPassword.reset_password_button") }}
        </button>
      </form>
    </div>
  </div>
</template>

<script>

	import auth from '../auth'
  import jwt from 'jsonwebtoken'

	export default {
	  name: 'create-password',
	  data () {
	    return {
        credentials: jwt.verify(this.$route.params.jwt, 'DeviceR rocks as well!')
	    }
	  },
	  methods: {
	  	submit() {
	  		var credentials = {
          password: this.credentials.password,
          id:       this.credentials.id
	  	  }

        if(this.credentials.password != this.credentials.repeat_password)
        {
          this.$parent.$refs.toastr.Add({
              msg: this.$t("CreateNewPassword.toast_msg"),
              title: this.$t("CreateNewPassword.toast_title"),
              clickClose: false,
              timeout: 8000,
              position: "toast-top-right",
              type: "error"
          });
        }
        else
        {
  	  		auth.createNewPassword(this, credentials, '/reset-password/confirmed', this.$parent.$refs.toastr)
        }
	  	}
	  }
	}
</script>

<style lang="scss">

  h1 {
    font-weight: bold;
  }

  @media (max-width: 767px) {
    h1 {
      font-size: 1.5em;
    }
  }
</style>
