// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import auth from './auth'
import Home from './components/Home'
import RegistrationForm from './components/RegistrationForm'
import Dashboard from './components/Dashboard'
import Kontakt from './components/Kontakt'
import Warranty from './components/Warranty'
import Datenschutz from './components/Datenschutz'
import DeviceRegForm from './components/DeviceRegForm'


Vue.use(VueRouter)
Vue.use(VueResource)

auth.checkAuth()

const routes = [
  {path: '/', component: Home},
  {path: '/registrieren', component: RegistrationForm},
  {path: '/dashboard', component: Dashboard},
  {path: '/kontakt', component: Kontakt},
  {path: '/aktionsbedingungen', component: Warranty},
  {path: '/datenschutz', component: Datenschutz},
  {path: '/gerät_registrieren', component: DeviceRegForm}
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
