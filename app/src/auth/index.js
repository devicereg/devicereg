import {router} from '../main'

const API_URL = 'http://localhost:3001/'
const LOGIN_URL = API_URL + 'authenticate/'
const SIGNUP_URL = API_URL + 'users/'

export default {
	user: { authenticated: false },

	/**
	 * Method for user login
	 *
	 * @param      {object}  context   The context
	 * @param      {json}    creds     The creds
	 * @param      {string}  redirect  The redirect
	 */
	login(context, creds, redirect)
	{
		context.$http.post(LOGIN_URL, creds).then((response) => {

			localStorage.setItem('id_token', response.data.id_token)
			localStorage.setItem('username', creds.username)

			this.user.authenticated = true

			if(redirect)
			{
				router.push(redirect)
			}

		}, (err) => {
			context.error = err
		})
	},

	/**
	 * Method for user registration
	 *
	 * @param      {object}  context   The context
	 * @param      {json}  	 creds     The creds
	 * @param      {string}  redirect  The redirect
	 */
	signup(context, creds, redirect)
	{
	    context.$http.post(SIGNUP_URL, creds).then((response) => {

			localStorage.setItem('id_token', response.data.id_token)
			localStorage.setItem('username', creds.username)

	      	this.user.authenticated = true

			if(redirect)
			{
				router.push(redirect)
			}

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
		localStorage.removeItem('id_token')
		localStorage.removeItem('username')
		this.user.authenticated = false

		router.push("/")
	},

	/**
	 * This method checks if the user is authenticated
	 *
	 * @return  void
	 */
	checkAuth()
	{
		var jwt = localStorage.getItem('id_token')

		if(jwt)
		{
			this.user.authenticated = true
		}
		else
		{
			this.user.authenticated = false
		}
	},

	/**
	 * Gets the auth header.
	 *
	 * @return     {Object}  The auth header.
	 */
	getAuthHeader()
	{
		return { 'Authorization': 'Bearer' + localStorage.getItem('id_token') }
	}
}
