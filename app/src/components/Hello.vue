<template>
  <div class="hello">
    <div class="top">

  <div class = "welcome">
    <h1>Willkommen bei DeviceR!</h1>
    <p>Sie haben die Möglichkeit, einen Benutzer anzulegen und anschließend ein</p>
    <p>Durchflussmessgerät zu registrieren oder sich mit Ihrem bestehenden Profil</p>
    <p>anzumelden um weitere Geräte hinzuzufügen oder diese zu verwalten.</p>
    <p><u><b>Ihr Vorteil:</b></u> Der <b>Gewährleistungszeitraum</b> registrierter Geräte verlängert   sich auf <b>24 Monate</b>.</p>
    <p> </p>
    <p>Ein weiterer Nutzen unseres Services: Unsere <b>Erinnerungsfunktion</b> macht sie auf</p>
    <p>anstehende Wartungen oder Kalibrierungen Ihrer registrierten Durchflussmessgeräte aufmerksam.</p>
  </div>

  <div class ="login">
    <h2>Anmeldung</h2>
      <div>
        <input type="text" placeholder="Benutzername" id="username" />
      </div>

      <div>
        <input type="password" placeholder="Kennwort" id="password" />
      </div>
      <br>
      <div>
        <button> Einloggen </button>
      </div>
      <br>
      <div>
        <a href="test.html" >Kennwort vergessen? </a>
      </div>

      <div>
        <a href="test.html" >Nutzer registrieren </a>
      </div>

  </div>

</div>
  </div>
</template>

<style>
.login {
 float: right;
}

.welcome {
  float: left;
}
</style>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
