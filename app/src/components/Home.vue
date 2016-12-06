<template>
	<div class="container" id="homepage">
	  <div class="row">
	    <div class="col-md-12">
        <img src="../assets/devicer-home-logo.png" class="logo">
	    </div>
	  </div>

	  <div class="row text-left">
       <div class="col-md-6">
          <h2>Willkommen bei DeviceR!</h2>

          <p>
            Sie haben die Möglichkeit, einen Benutzer anzulegen und Ihr
            Feldgerät zu registrieren oder sich an Ihrem bestehenden Profil
            anzumelden, um weitere Feldgeräte zu erfassen.
            <b>Ihr Vorteil:</b> Der Gewährleistungszeitraum registrierter Geräte
            verlängert sich auf 24 Monate.
            <b>Ein weiterer Vorteil des DeviceR Service:</b> Unsere
              Erinnerungsfunktion macht Sie auf anstehende Wartungen oder
              Kalibrierungen der registrierten Feldgeräte aufmerksam.
          </p>

          <router-link to="/registrieren" type="button" class="btn btn-primary btn-lg">Jetzt registrieren!</router-link>
       </div>

       <div class="col-md-6">
         <br />
         <login-form></login-form>
       </div>
	  </div>
	</div>
</template>

<script>
  import LoginForm from './LoginForm'

  export default {
    components: {
      'login-form': LoginForm
    },
    name: 'home',
    data () {
      return {
        error: ''
      }
    }
  }
</script>

<style lang="scss">
  .logo {
    height: 30%;
    width: 30%;
  }

  .ueber {
    font-size: 65px;
    float: left;
  }

  .anmeldung {
     margin-top: 35px;
     width: 198px;
     height: 22px;
     line-height: 22px;
     background-color: rgba(62, 125, 139, 1);
     text-align: left;
     font-size: 18px;
   }

   .username {
     margin-top: 30px;
     color: black;
     text-align: left;
     height: 22px;
     line-height: 22px;
   }

   .password {
     margin-top: 30px;
     color: black;
     text-align: left;
     height: 22px;
     line-height: 22px;
   }

   .registrieren {
     cursor: pointer;
     margin-top: 30px;
     width: 200px;
     color: white;
     background-color: rgba(62, 125, 139, 1);
     text-align: center;
     height: 35px;
     line-height: 35px;
   }

   .einloggen {
     cursor: pointer;
     margin-top: 30px;
     width: 90px;
     color: white;
     background-color: rgba(62, 125, 139, 1);
     text-align: center;
     height: 22px;
     line-height: 22px;
   }

   .forget {
     margin-top: 10px;
     text-align: left;
   }

  .welcome {
    font-size: 22px;
    float: right;
    text-align: left;
  }

  .text {
    font-size: 16px;
    float: right;
    text-align: left;
  }
</style>
