<template>
	<div class="container home">
		<div class="row">
			<div class="col-xs-12">
				<div class="alert alert-danger fade in" v-if="error">
					<p>{{ error }}</p>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-xs-12 home-header-titles">
				<h1>Willkommen bei DeviceR!</h1>
        <p>Sie haben die Möglichkeit, einen Benutzer anzulegen und anschließend ein Durchflussmessgerät zu registrieren oder
          sich mit Ihrem bestehenden Profilanzumelden um weitere Geräte hinzuzufügen oder diese zu verwalten.
        </p>
        <h3>Ihr Vorteil</h3>
        <p>
          Der <b>Gewährleistungszeitraum</b> registrierter Geräte verlängert   sich auf <b>24 Monate</b>.
        </p>
        <p>
          Ein weiterer Nutzen unseres Services: Unsere <b>Erinnerungsfunktion</b> macht sie auf
          anstehende Wartungen oder Kalibrierungen Ihrer registrierten Durchflussmessgeräte aufmerksam.
        </p>
			</div>
		</div>
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-4 col-md-offset-4">
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
  .home{
    .row{
      .home-header-titles{
        margin-bottom:60px;

        h1{
          margin:0;
        }

        h2{
          margin-top:0;
          margin-bottom:30px;
        }
      }
    }
  }
</style>
