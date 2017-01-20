<template>
  <div id="navbar" class="navbar-collapse collapse">
    <ul class="nav navbar-nav navbar-left">
      <!--li>
        <router-link to="/"><strong> {{ $t('home') }} </strong></router-link>
      </li-->
    </ul>
    <ul class="nav navbar-nav navbar-right">
      <li data-toggle="collapse" data-target="#navbar">
        <router-link to="/registrieren"><strong> {{ $t('register') }} </strong></router-link>
      </li>
      <li data-toggle="collapse" data-target="#navbar"><router-link to="/contact"><strong> {{ $t('contact') }} </strong></router-link></li>
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
