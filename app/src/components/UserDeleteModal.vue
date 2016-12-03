<template>

	<div class="modal fade" id="deleteProfile" tabindex="-1" role="dialog">
	  <div class="modal-dialog" role="document">
	    <div class="modal-content">

	      <div class="modal-header">
	        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
	        	<span aria-hidden="true">&times;</span>
	        </button>

	        <img src="../assets/img/default_avatar.png" width="50">

	        <h4 class="modal-title">
	        	Profil id#<span>{{ credentials.id }}</span> löschen
	        </h4>
	      </div>

	      <div class="modal-body">
        	Soll dieses Profil wirklich gelöscht werden ?
			    <ul>
        		<li><span>Nachname: </span> {{ credentials.lastname }} </li>
        		<li><span>Vorname: </span> {{ credentials.name }} </li>
        		<li><span>E-Mail Adresse: </span> {{ credentials.email }} </li>
        		<li><span>Straße: </span> {{ credentials.street }} </li>
        		<li><span>Hausnummer: </span> {{ credentials.housenumber }} </li>
        		<li><span>Postleitzahl: </span> {{ credentials.zip }} </li>
        		<li><span>Ort: </span> {{ credentials.city }} </li>
        	</ul>
        	<input type="hidden" v-model="credentials.id">
	      </div>

	      <div class="modal-footer">
	        <button type="button" class="btn btn-default" data-dismiss="modal">
	        	Abbrechen
	        </button>

	        <button type="button" class="btn btn-danger" @click="submit()">
	        	Löschen
	        </button>
	      </div>

	    </div><!-- /.modal-content -->
	  </div><!-- /.modal-dialog -->
	</div><!-- /.modal -->

</template>

<script>

	import auth from '../auth'
	import jwt from 'jsonwebtoken'

	export default {
	  name: 'delete-modal',
	  data () {
	    return {
	    	credentials: jwt.verify(localStorage.getItem('id_token'), 'DeviceR rocks as well!'),
	    	error: ''
	    }
	  },
	  methods: {
	  	submit() {
	  		var credentials = {
	  			id: this.credentials.id
	  		}

	  		$('#deleteProfile').modal('hide')
	  		auth.delete(this, credentials)
	  	}
	  }
	}
</script>

<style lang="scss">

	.modal{
		.modal-header{
			text-align:left;

			.modal-title{
				display:inline-block;
				margin-left:15px;

				span{
					color:#C9302C;
					font-weight:bold;
				}
			}
		}


		.modal-body{
			text-align:left;

			img{
				display:inline-block;
			}

			ul{
				margin-top:20px;

				li{
					display:block !important;

					span{
						font-weight:bold;
						width:200px;
						display:inline-block;
					}
				}
			}
		}

	}

</style>
