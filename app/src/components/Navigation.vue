<template>
  <div class="navigation">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/bye">Goodbye</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'navigation',
  data () {
    return {}
  }
}
</script>
