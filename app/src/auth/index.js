import {router} from '../main'

var os = require('os')

const API_URL = 'http://' + os.hostname() + ':3001/'
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
			localStorage.setItem('gender', creds.gender)
			localStorage.setItem('prename', creds.prename)
			localStorage.setItem('surname', creds.surname)
			localStorage.setItem('language', creds.language)
			localStorage.setItem('phone', creds.phone)
			localStorage.setItem('industry_family', creds.industry_family)
			localStorage.setItem('industry_typ', creds.industry_typ)
			localStorage.setItem('company', creds.company)
			localStorage.setItem('street', creds.street)
			localStorage.setItem('number', creds.number)
			localStorage.setItem('zip', creds.zip)
			localStorage.setItem('city', creds.city)
			localStorage.setItem('country', creds.country)
			localStorage.setItem('question', creds.question)
			localStorage.setItem('answer', creds.answer)
			localStorage.setItem('agreement', creds.agreement)

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
