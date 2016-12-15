<template>
	<div class="container-fluid col-md-offset-2 col-md-8 text-left dashboard">
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
				<div>
					<h1>Welcome {{ user.prename }} {{ user.surname }}</h1>
					<h2>This is your Dashboard</h2>
          <p>
            <router-link to="/my-devices">Geräteübersicht</router-link>
          </p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import auth from '../auth'
	import jwt from 'jsonwebtoken'

	export default {
	  name: 'dashboard',
	  data () {
	    return {
	    	user: jwt.verify(localStorage.getItem('id_token'), 'DeviceR rocks as well!')
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
