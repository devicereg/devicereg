<template>
  <div class="container new-password-confirmed">
    <div class="row">
      <h2>Passwort wurde zurückgesetzt</h2>
      <p>Neues Passwort wurde erfolgreich angelegt.</p>
      <p><router-link to="/" type="button" class="btn btn-primary">Zur Anmeldung</router-link></p>
    </div>
  </div>
</template>

<script>
	export default {
	  name: 'password-confirmed'
	}
</script>

<style lang="scss">
  .new-password-confirmed {
    
    h2{
      text-align:center;
      border-bottom:1px solid #ccc;
    }

    p{
      text-align:center;
    }
  }
</style>
