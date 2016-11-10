// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import auth from './auth'
import RegistrationForm from './components/RegistrationForm'
import LoginForm from './components/LoginForm'
import Dashboard from './components/Dashboard'
import Kontakt from './components/Kontakt'


Vue.use(VueRouter)
Vue.use(VueResource)

auth.checkAuth()

const routes = [
  {path: '/registrieren', component: RegistrationForm},
  {path: '/login', component: LoginForm},
  {path: '/dashboard', component: Dashboard}
  {path: '/kontakt', component: Kontakt}
]

export const router = new VueRouter({
  history: true,
  root: '/',
  routes: routes
})

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  http:{
  	root: '/',
  	headers: {
  		Authorization: auth.getAuthHeader()
  	}
  },
  render: h => h(App)
})
