<template>
	<div class="container dashboard">
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
				<div>
					<h1>Welcome {{ username }}</h1>
					<h2>This is your Dashboard</h2>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import auth from '../auth'

	export default {
	  name: 'dashboard',
	  data () {
	    return {
	    	username: localStorage.getItem('username')
	    }
	  }
	}
</script>

<style lang="scss">
  .dashboard{
    h1{
      font-size:52px;
    }
  }

</style>
