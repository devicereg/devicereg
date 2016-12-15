<template>
  <li class="dropdown">
    <a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
      {{ $t('language') }} <span class="caret"></span>
    </a>
    <ul class="dropdown-menu" role="menu">
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

<style scoped lang="scss">
  @import '../../styles/_colors';

  li.dropdown:hover ul.dropdown-menu {
    display: block;
    margin-top: 0;
  }

  ul.dropdown-menu {
    padding: 0;
    margin: 0;

    li {
      margin: 0;

      &:hover {
        background-color: $gray;
      }
    }
  }
</style>
