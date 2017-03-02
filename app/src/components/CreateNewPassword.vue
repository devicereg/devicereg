<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
    <div class="row">
      <div class="col-sm-8">
        <h1>{{ $t("CreateNewPassword.header") }}<span>( {{ credentials.prename }} {{ credentials.surname }} )</span></h1><form>
        <div class="form-group">
          <div class="input-group ">
            <span class="input-group-addon">
              <i class="glyphicon glyphicon-lock" aria-hidden="true"></i>
            </span>
            <div :class="{'has-error': errors.has('password') }">
              <input
                v-validate="'required|confirmed:password_repeat'"
                name="password"
                type="password"
                class="form-control"
                id="password"
                v-bind:placeholder="$t('CreateNewPassword.password')"
                v-model="credentials.password">
            </div>
            <span v-show="errors.has('password')" class="text-danger">{{ errors.first('password') }}</span>
          </div>
        </div>
        <div class="form-group">
          <div class="input-group ">
            <span class="input-group-addon">
              <i class="glyphicon glyphicon-lock" aria-hidden="true"></i>
            </span>
            <div :class="{'has-error': errors.has('password_repeat') }">
              <input
              v-validate="'required'"
              name="password_repeat"
              type="password"
              class="form-control"
              id="repeat_password"
              v-bind:placeholder="$t('CreateNewPassword.password_repeat')"
              v-model="credentials.repeat_password">
            </div>
            <span v-show="errors.has('password_repeat')" class="text-danger">{{ errors.first('password_repeat') }}</span>
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
  import Vue from 'vue'
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
        this.$validator.validateAll().then(success => {
                if (!success) {
                    //Jump to the first incorrect field. No idea how to implement, need help :/
                }
                else {
                  auth.createNewPassword(this, credentials, '/reset-password/confirmed', this.$parent.$refs.toastr)
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

  h1 {
    font-weight: bold;
  }

  @media (max-width: 767px) {
    h1 {
      font-size: 1.5em;
    }
  }
</style>
