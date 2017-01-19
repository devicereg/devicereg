<template>
	<div class="container-fluid col-sm-offset-2 col-sm-8 text-left dashboard">
		<div class="row">
			<div class="col-md-12">
				<div>
					<h1>{{ $t("Dashboard.welcome") }} {{ user.prename }} {{ user.surname }}</h1>
					<h2>{{ $t("Dashboard.message") }}</h2>
					<div class="row">
						<div class="col-md-6">
							<div class="thumbnail tile tile-wide tile-clouds">
								<a href="#/my-devices" >
									<h3 class="tile-text">{{ $t("Dashboard.my_devices") }}</h3>
								</a>
							</div>
						</div>
						<div class="col-md-6">
							<div class="thumbnail tile tile-wide tile-orange">
								<a href="#/user/edit" >
									<h3 class="tile-text">{{ $t("Dashboard.my_profile") }}</h3>
								</a>
							</div>
						</div>
					</div>
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
		.thumbnail{
			border-radius: 10px;
			height: 150px;
		}
		h3{
			text-align: center;
			margin-top: 50px;
			height: 80px;
		}
  }

</style>
