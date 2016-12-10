<template>
  <li class="dropdown">
    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
      {{ $t('language') }} <span class="caret"></span>
    </a>
    <ul class="dropdown-menu">
      <li @click='setLang("de")'><a> {{ $t('german') }} </a></li>
      <li @click='setLang("en")'><a> {{ $t('english') }} </a></li>
    </ul>
  </li>
</template>

<script>
var Vue = require('vue')

export default {
  name: 'language-switch',
  methods: {
    setLang(lang){
      Vue.config.lang = lang
    }
  }
}
</script>
