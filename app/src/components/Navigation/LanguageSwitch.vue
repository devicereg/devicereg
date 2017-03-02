<template>
  <li id="lang-dropdown" class="dropdown" data-toggle="collapse" data-target="#navbar">
    <a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
      <strong>{{ $t('language') }} </strong><span class="caret"></span>
    </a>
    <ul class="dropdown-menu" role="menu">
      <li data-toggle="collapse" @click='setLang("de")'><a><strong> {{ $t('german') }} </strong></a></li>
      <li data-toggle="collapse" @click='setLang("en")'><a><strong> {{ $t('english') }} </strong></a></li>
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

  @media all and (min-width: 845px) {
    li.dropdown:hover ul.dropdown-menu {
      display: block;
      margin-top: 0;
    }
  }

  ul.dropdown-menu {
    padding: 0;
    margin: 0;

    li {
      margin: 0;
      color: $primary-bg-color;

      &:hover {
        background-color: $body-background;
      }
    }
  }
</style>
