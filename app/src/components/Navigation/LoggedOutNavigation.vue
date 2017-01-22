<template>
  <div id="navbar" class="navbar-collapse collapse">
    <ul class="nav navbar-nav navbar-left">
    </ul>
    <ul class="nav navbar-nav navbar-right">
      <li data-toggle="collapse" data-target="#navbar">
        <router-link to="/registrieren">{{ $t('register') }}</router-link>
      </li>
      <li data-toggle="collapse" data-target="#navbar"><router-link to="/contact">{{ $t('contact') }}</router-link></li>
      <language-switch></language-switch>
    </ul>
  </div>
</template>

<script>
import LanguageSwitch from './LanguageSwitch.vue'
import auth from '../../auth'

export default {
  name: 'logged-out-navigation',
  components: {
    LanguageSwitch
  }
}
</script>
