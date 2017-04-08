import {router} from '../main'

var os = require('os');
var jwt = require('jsonwebtoken');

var config = require('../../../mockserver/config.json');

const API_URL 					          = 'http://' + os.hostname() + ':3001/';
const LOGIN_URL 				          = API_URL 	+ 'sessions/create/';
const SIGNUP_URL 				          = API_URL 	+ 'user/create';
const UPDATE_URL 				          = API_URL 	+ 'user/update';
const DELETE_URL 				          = API_URL 	+ 'user/delete';
const RESET_PASSWORD_URL 		      = API_URL 	+ 'reset-user-password';
const CREATE_NEW_PASSWORD_URL 	  = API_URL 	+ 'create-new-password';
const CREATE_DEVICE_URL 		      = API_URL 	+ 'device/create';
const UPDATE_DEVICE_URL 		      = API_URL 	+ 'device/update';
const DELETE_DEVICE_URL 		      = API_URL 	+ 'device/delete';
const GET_DEVICES_URL 			      = API_URL 	+ 'devices';
const GET_DEVICES_OF_USER_URL		  = API_URL 	+ 'user/devices';
const GET_USERS_URL 			        = API_URL 	+ 'users';
const GET_CATEGORIES_URL 		      = API_URL 	+ 'categories';
const GET_CATEGORIES_OF_USER_URL  = API_URL 	+ 'user/categories';
const CREATE_CATEGORY_URL 		    = API_URL 	+ 'category/create';
const GET_TECHNOLOGIES_URL        = API_URL   + 'technologies';

var Vue = require('vue')

export default {
	name: 'authentication',
	user: { authenticated: false },

	/**
	 * Method for user login
	 *
	 * @param      {object}  context   The context
	 * @param      {JSON}    creds     The creds
	 * @param      {string}  redirect  The redirect
	 */
	login(context, creds, toastr)
	{
		context.$http.post(LOGIN_URL, creds).then((response) => {
      const token = response.data.id_token;
			localStorage.setItem('id_token', token);
			this.user.authenticated = true;
      const data = jwt.verify(localStorage.getItem('id_token'), config.secret);
      if (data.language === "en" || data.language === "de") {
        Vue.config.lang = data.language;
      }
      var redirect = (data.role !== "ROLE_USER") ? 'user-overview' : 'my-devices';
      router.push(redirect);

		}, (err) => {
			context.error = err.body.message;
			toastr.Add({
				title: context.$t("UI.login_error_title"),
				msg: context.$t("UI.login_error_msg"),
				clickClose: true,
				timeout: 8000,
				position: "toast-top-right",
				type: "error"
			});
		})
	},

	/**
	 * Method for user registration
	 *
	 * @param      {object}  context   The context
	 * @param      {JSON}  	 creds     The creds
	 * @param      {string}  redirect  The redirect
	 */
	signup(context, creds, redirect)
	{
	    context.$http.post(SIGNUP_URL, creds).then((response) => {

			localStorage.setItem('id_token', response.data.id_token);
      this.user.authenticated = true;

      const data = jwt.verify(localStorage.getItem('id_token'), config.secret);
      if (data.language === "en" || data.language === "de") {
        Vue.config.lang = data.language;
      }

			if(redirect)
			{
				router.push(redirect)
			}

	    }, (err) => {
	    	context.error = err;
	    })
  	},

	/**
	 * Method for user registration
	 *
	 * @param      {object}  context   The context
	 * @param      {JSON}  	 creds     The creds
	 * @param      {string}  redirect  The redirect
	 */
	createUser(context, creds)
	{
    context.$http.post(SIGNUP_URL, creds).then((response) => {
      context.user.id = response.body.id;
      console.log("USER ID:   ", response.body.id);
      context.userCreated();

    },
      (err) => {
        context.error = err;
      })
  },


  	/**
	 * Method for user update
	 *
	 * @param      {object}  context   The context
	 * @param      {JSON}  	 creds     The creds
	 * @param      {string}  redirect  The redirect
	 */
	update(context, creds, redirect)
	{
	    context.$http.post(UPDATE_URL, creds).then((response) => {

			if(redirect)
			{
				router.push(redirect)
			}

	    }, (err) => {
	    	context.error = err
	    })
  	},

  	/**
	 * Method for user delete
	 *
	 * @param      {object}  context   The context
 	 * @param      {int}   	 id     	The creds
	 */
	delete(context, id)
	{
	    context.$http.post(DELETE_URL, id).then((response) => {
	    	this.logout()
	    }, (err) => {
	    	context.error = err
	    })
  	},

  	/**
	 * Method for user delete
	 *
	 * @param      {object}  context   The context
 	 * @param      {int}   	 id     	The creds
	 */
	deleteUser(context, id)
	{
    context.$http.post(DELETE_URL, id).then((response) => {

    }, (err) => {
      context.error = err
    })
  },

	/**
	 * Method for user logout
	 *
	 * @returns  void
	 */
	logout()
	{
		localStorage.removeItem('id_token');
		localStorage.removeItem('username');
		this.user.authenticated = false;

		router.push("/")
	},

	/**
	 * This method checks if the user is authenticated
	 *
	 * @return  void
	 */
	checkAuth()
	{
		let jwt = localStorage.getItem('id_token');

		this.user.authenticated = !!jwt;
	},

	/**
	 * Gets the auth header.
	 *
	 * @return     {Object}  The auth header.
	 */
	getAuthHeader()
	{
		return { 'Authorization': 'Bearer ' + localStorage.getItem('id_token') }
	},

	updateDevice(context, data, toastr)
  	{
	    context.$http.post(UPDATE_DEVICE_URL, data,  { headers: this.getAuthHeader() }).then((response) => {

	    }, (err) => {
	      context.error = err;
	    });
  	},

  	/**
  	 * Reset user password
  	 *
  	 * @param      {object}  context  The context
  	 * @param      {string}  email    The email
  	 * @param      {object}  toastr   Toast object
  	 */
  	resetPassword(context, email, toastr)
  	{
  		context.$http.post(RESET_PASSWORD_URL, email).then((response) => {

	    	console.log(response.data.message);

	    	toastr.Add({
	            msg: response.data.message,
	            title: "Passwort zurücksetzen",
	            clickClose: false,
	            timeout: 8000,
	            position: "toast-top-right",
	            type: "success"
	        });

	    }, (err) => {

	    	toastr.Add({
	            msg: err.data.message,
	            title: "Passwort zurücksetzen",
	            clickClose: false,
	            timeout: 8000,
	            position: "toast-top-right",
	            type: "error"
	        });
	    })
  	},

  	/**
  	 * Create new user password
  	 *
  	 * @param      {object}  context  	The context
  	 * @param      {object}  data    	The data object
  	 * @param      {string}  redirect   Redirect route
  	 * @param      {object}  toastr   	Toast object
  	 */
  	createNewPassword(context, data, redirect, toastr)
  	{
  		context.$http.post(CREATE_NEW_PASSWORD_URL, data).then((response) => {

  			if(redirect)
			{
				router.push(redirect)
			}

	    }, (err) => {

	    	toastr.Add({
	            msg: err.data.message,
	            title: "Passwort zurücksetzen",
	            clickClose: false,
	            timeout: 8000,
	            position: "toast-top-right",
	            type: "error"
	        });
	    })
  	},

  	createDevice(context, data, toastr)
    {
      context.$http.post(CREATE_DEVICE_URL, data, { headers: this.getAuthHeader() }).then((response) => {
        context.device.id = response.body.id;
        context.deviceCreated();

       }, (err) => {
          context.error = err;
      });
    },

  /**
   * Method for removing a device
   *
   * @param      {object}  context   The context
   * @param      {JSON}    data      The device- and user-id
   * @param      {string}  redirect  The redirect
   */
  deleteDevice(context, data, toastr)
  {
    context.$http.post(DELETE_DEVICE_URL, data, { headers: this.getAuthHeader() }).then((response) => {
    }, (err) => {
      context.error = err;
    });
  },

  getDevices(context)
  {
    context.$http.get(GET_DEVICES_URL, { headers: this.getAuthHeader() }
    ).then((response) => {
      context.devices = response.body;
    });
  },

  getDevicesOfUser(context, userId)
  {
    var data = {id: userId};
    context.$http.post(GET_DEVICES_OF_USER_URL, data, { headers: this.getAuthHeader() }).then((response) => {
      console.log("Users devices:   ", response.body);
      context.devices = response.body;
    });
  },

  getUser(context, userId)
  {
    context.$http.get(GET_USERS_URL).then((response) => {
      var users = response.body;
      for (var i = 0; i < users.length; i++) {
        if (users[i].id == userId) {
          context.credentials = users[i];
        }
      }
    }, (err) => {
      context.error = err;
    });
  },

  getUsers(context)
  {
    context.$http.get(GET_USERS_URL).then((response) => {
      console.log("context: ", context);
      context.users = response.body;
    }, (err) => {
      context.error = err;
    });
  },

  getCategories(context)
  {
    context.$http.get(GET_CATEGORIES_URL, { headers: this.getAuthHeader() }
    ).then((response) => {
      context.categories =response.body;
    }, (err) => {
      context.error = err;
    });
  },

  getCategoriesOfUser(context, userId)
  {
    var data = {id: userId};
    context.$http.post(GET_CATEGORIES_OF_USER_URL, data, { headers: this.getAuthHeader() }).then((response) => {
      console.log("Users categories:   ", response.body);
      context.categories = response.body;
    }, (err) => {
      context.error = err;
    });
  },

  createNewCategory(context, data)
  {
	  context.$http.post(CREATE_CATEGORY_URL, data, { headers: this.getAuthHeader() }).then((response) => {
      context.device.category_id = response.body.id;
      context.categoryCreated();
	  }, (err) => {
	    context.error = err;
    });
  },

  getTechnologies(context)
  {
    context.$http.get(GET_TECHNOLOGIES_URL).then((response) => {
      context.technologies = response.body;
    }, (err) => {
      context.error = err;
    });
  },

  getRole()
  {
    const data = jwt.verify(localStorage.getItem('id_token'), config.secret);
    return data.role;
  }
}
