import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import jwt from 'jsonwebtoken'
import App from './App'
import auth from './auth'
import VueSweetAlert from 'vue-sweetalert'


Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VueSweetAlert)
auth.checkAuth()

const routes = [
  {
    path: '/',
    name: 'home',
    component: require('./components/Home'),
    meta: { authenticated: false }
  },
  {
    path: '/registrieren',
    name: 'register',
    component: require('./components/RegistrationForm'),
    meta: { authenticated: false }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: require('./components/Dashboard'),
    meta: { authenticated: true }
  },
  {
    path: '/contact',
    name: 'contact',
    component: require('./components/Contact'),
    meta: { authenticated: false }
  },
  {
    path: '/terms-of-use',
    name: 'terms-of-use',
    component: require('./components/TermsOfUse'),
    meta: { authenticated: false }
  },
  {
    path: '/impressum',
    name: 'imprint',
    component: require('./components/Impressum'),
    meta: { authenticated: false }
  },
  {
    path: '/aktionsbedingungen',
    name: 'warranty',
    component: require('./components/Warranty'),
    meta: { authenticated: false }
  },
  {
    path: '/datenschutz',
    name: 'datenschutz',
    component: require('./components/Datenschutz'),
    meta: { authenticated: false }
  },
  {
    path: '/my-devices',
    name: 'my-devices',
    component: require('./components/MyDevices/MyDevices'),
    meta: { authenticated: true }
  },
  {
    path: '/device/create',
    name: 'device-create',
    component: require('./components/MyDevices/DeviceRegForm'),
    meta: { authenticated: true }
  },
  {
    path: '/user/edit',
    name: 'user-edit',
    component: require('./components/UserEdit'),
    meta: { authenticated: true }
  },
  {
    path: '/reset-password',
    name: 'reset-password',
    component: require('./components/ResetPassword'),
    meta: { authenticated: false }
  },
  {
    path: '/reset-password/:jwt',
    name: 'confirm-reset-password',
    component: require('./components/CreateNewPassword'),
    meta: { authenticated: false }
  },
  {
    path: '/reset-password/confirmed',
    name: 'reset-password-confirmed',
    component: require('./components/NewPasswordConfirmed'),
    meta: { authenticated: false }
  },
  {
    path: '/user-overview',
    name: '/user-overview',
    component: require('./components/UserManager/UserOverview'),
    meta: { authenticated: false }
  },
  {
    path: '/user-create',
    name: '/user-create',
    component: require('./components/UserManager/UserRegForm'),
    meta: { authenticated: false }
  }
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
