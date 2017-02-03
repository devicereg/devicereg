import {router} from '../main'

var os = require('os');

const API_URL 					= 'http://' + os.hostname() + ':3001/';
const LOGIN_URL 				= API_URL 	+ 'sessions/create/';
const SIGNUP_URL 				= API_URL 	+ 'user/create';
const UPDATE_URL 				= API_URL 	+ 'user/update';
const DELETE_URL 				= API_URL 	+ 'user/delete';
const RESET_PASSWORD_URL 		= API_URL 	+ 'reset-user-password';
const CREATE_NEW_PASSWORD_URL 	= API_URL 	+ 'create-new-password';
const CREATE_DEVICE_URL 		= API_URL 	+ 'device/create';
const UPDATE_DEVICE_URL 		= API_URL 	+ 'device/update';
const DELETE_DEVICE_URL 		= API_URL 	+ 'device/delete';
const GET_DEVICES_URL 			= API_URL 	+ 'devices';
const GET_CATEGORIES_URL 		= API_URL 	+ 'categories';
const CREATE_CATEGORY_URL 		= API_URL 	+ 'category/create';

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
	login(context, creds, redirect)
	{
		context.$http.post(LOGIN_URL, creds).then((response) => {

			localStorage.setItem('id_token', response.data.id_token);
			this.user.authenticated = true;

			if(redirect)
			{
				router.push(redirect)
			}

		}, (err) => {
			context.error = err.body.message
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

			if(redirect)
			{
				router.push(redirect)
			}

	    }, (err) => {
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

			//@TODO implement UPDATE method

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

	    	console.log(response.data.message);
	    	this.logout()

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
		var jwt = localStorage.getItem('id_token');

		this.user.authenticated = !!jwt;
	},

	/**
	 * Gets the auth header.
	 *
	 * @return     {Object}  The auth header.
	 */
	getAuthHeader()
	{
		return { 'Authorization': 'Bearer' + localStorage.getItem('id_token') }
	},

	createDevice(context, data, redirect)
  	{
	    context.$http.post(CREATE_DEVICE_URL, data).then((response) => {
        var responseBody = response.body;
        context.selected_device_id = responseBody.id;
        console.log(context.selected_device_id);

	      if(redirect)
	      {
	        router.push(redirect)
	      }

	    }, (err) => {
	      context.error = err
	    });
  	},

	updateDevice(context, data, redirect)
  	{
	    context.$http.post(UPDATE_DEVICE_URL, data).then((response) => {

	      if(redirect)
	      {
	        router.push(redirect)
	      }

	    }, (err) => {
	      context.error = err
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

  	createDevice(context, data)
    {
      context.$http.post(CREATE_DEVICE_URL, data).then((response) => {
        context.device.id = response.body.id;
        context.deviceCreated();
        }, (err) => {
          context.error = err
      });
    },

  /**
   * Method for removing a device
   *
   * @param      {object}  context   The context
   * @param      {JSON}    data      The device- and user-id
   * @param      {string}  redirect  The redirect
   */
  deleteDevice(context, data)
  {
    context.$http.post(DELETE_DEVICE_URL, data).then((response) => {

    }, (err) => {
      context.error = err
      toastr.Add({
        msg: "SUCCESS",
        clickClose: false,
        timeout: 8000,
        position: "toast-top-right",
        type: "error"
      });
    });
  },

  getDevices(context)
  {
    context.$http.get(GET_DEVICES_URL).then((response) => {
      context.devices = response.body;
    }, (err) => {
      context.error = err;
    });
  },

  getCategories(context)
  {
    context.$http.get(GET_CATEGORIES_URL).then((response) => {
      context.categories = response.body;
    }, (err) => {
      context.error = err;
    });
  },

  createNewCategory(context, data)
  {
	context.$http.post(CREATE_CATEGORY_URL, data).then((response) => {
    context.device.category_id = response.body.id;
	  context.categoryCreated();
	}, (err) => {
	  context.error = err;
    });
  }
}
