<template>
  <div class="container reset-password-form">
    <div class="row">

      <form role="form">
        <legend>Neues Passwort anlegen <span>( {{ credentials.prename }} {{ credentials.surname }} )</span></legend>
        
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>

        <div class="form-group">
          <label for="password">Passwort</label>
          <input 
            type="password" 
            class="form-control" 
            id="password" 
            placeholder="Passwort"
            v-model="credentials.password"
            required
          >
          <label for="repeat_password">Passwort wiederholen</label>
          <input 
            type="password" 
            class="form-control" 
            id="repeat_password" 
            placeholder="Passwort wiederholen"
            v-model="credentials.repeat_password"
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
              msg: "Die eingegebenen Passwörter stimmen nicht überein. Bitte prüfen Sie Ihre Eingaben.",
              title: "Passwort zurücksetzen",
              clickClose: false,
              timeout: 8000,
              position: "toast-top-right",
              type: "error"
          });
        }
        else
        {
  	  		auth.createNewPassword(this, credentials, '/new-password-confirmed', this.$parent.$refs.toastr)
        }
	  	}
	  }
	}
</script>

<style lang="scss">
  .reset-password-form {
    form{
      legend{
        border-bottom:1px solid #ccc;

        span{
          font-weight:normal;
          font-size:16px;
        }
      }
    }
  }
</style>
