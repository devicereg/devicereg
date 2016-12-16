<template>
  <div id="navbar" class="navbar-collapse collapse">
    <ul class="nav navbar-nav navbar-left">
      <li>
        <router-link to="/my-devices"><strong> {{ $t('my_devices') }} </strong></router-link>
      </li>
    </ul>
    <ul class="nav navbar-nav navbar-right">
      <li>
        <router-link to="/contact"><strong> {{ $t('contact') }} </strong></router-link>
      </li>
      <language-switch></language-switch>
      <li class="logout-user" @click="logout()">
        <router-link to="/login"><strong> {{ $t('logout') }} </strong></router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import LanguageSwitch from './LanguageSwitch.vue'
import auth from '../../auth'

export default {
  name: 'logged-in-navigation',
  data() {
    return { user: auth.user }
  },
  components: {
    LanguageSwitch
  },
  methods: {
    logout(){
      auth.logout()
    },
  }
}
</script>
