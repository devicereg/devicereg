<template>
	<div class="container home">
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
				<div class="alert alert-danger fade in" v-if="error">
					<p>{{ error }}</p>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 home-header-titles">
				<h1>Welcome to DeviceR</h1>
				<h2>At vero eos et accusam et justo duo dolores et ea rebum.</h2>

				<p>
				Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
				</p>
			</div>
		</div>
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-md-offset-4 col-lg-offset-4">
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
