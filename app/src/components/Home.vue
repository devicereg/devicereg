<template>
	<div class="header">
	  <div class="row">
	    <div class="col-md-offset-10">
	    Sprache:
	      <select class="language">
          <option>Deutsch (DE)</option>
          <option>English (GB)</option>
	      </select>
      </div>
    </div>

	<div class="mid">
	  <div class="row">
	    <div class="col-md-6">
          <img src="../assets/u33.jpg" class="logo">
	    </div>
	    <div class="col-md-6">
	    <div class="ueber">DeviceR</div>
	    </div>
	  </div>

	  <div class="row">
       <div class="col-md-6">

         <div class="welcome">
          Willkommen bei DeviceR!<br>
         </div>

            <div class="text">
              Sie haben die Möglichkeit, einen Benutzer anzulegen und Ihr <br>
              Feldgerät zu registrieren oder sich an Ihrem bestehenden Profil <br>
              anzumelden, um weitere Feldgeräte zu erfassen. <br> <br>
              <b>Ihr Vorteil:</b> Der Gewährleistungszeitraum registrierter Geräte <br>
              verlängert sich auf 24 Monate. <br>
              <b>Ein weiterer Vorteil des DeviceR Service:<b> Unsere <br>
              Erinnerungsfunktion macht Sie auf anstehende Wartungen oder <br>
              Kalibrierungen der registrierten Feldgeräte aufmerksam.
            </div>

           <div class="registrieren button">
              Jetzt registrieren!
           </div>
       </div>

       <div class="col-md-6">
          <div class="anmeldung">Anmeldung</div>
          <form class="formular" action="login" method="post">
          <div class="username"> <img src="../assets/u10.png"> <input placeholder="Benutzername"> </div>
          <div class="password"> <img src="../assets/u12.png"> <input placeholder="Passwort" type="password"> </div>
          <div class="einloggen button"> Login </div>
          <div class="forget"> <a href="placeholder.html"> Passwort vergessen? </a> </div>
          </form>
       </div>

	  </div>
	</div>
</template>

<script>

</script>

<style lang="scss">

.header {
  position: fixed;
  margin-top: 0;
  width: 100%;
  height: 90px;
  line-height: 90px;
  background-color: #283259;
  color: white;
  }

  .language {
  color: black;
  }

  .mid {
  background-color: #BEBEBE;
  }

  .logo {
  height: 109px;
  width: 106px;
  float: right;
  }

  .ueber {
  font-size: 48px;
  float: left;
  font-family: 'Source Sans Pro Bold', 'Source Sans Pro Regular', 'Source Sans Pro';
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
  font-family: 'Source Sans Pro Bold', 'Source Sans Pro Regular', 'Source Sans Pro';
  float: right;
  text-align: left;
  }

  .text {
  font-family: 'Source Sans Pro';
  font-size: 16px;
  float: right;
  text-align: left;
  }

</style>
