<template>
  <footer class="footer">
    <div class="container">
      <ul class="nav navbar-nav">
        <li>
          <router-link to="#">Datenschutz</router-link>
        </li>
        <li>
          <router-link to="#">Nutzungsbedingungen</router-link>
        </li>
        <li>
          <router-link to="#">Impressum</router-link>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
  export default{
    name: 'app-footer'
  }
</script>

<style lang="scss">
  .footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #283259;
  }
  .footer .container .nav {
    display: inline-block;
    height: 100%;
    float: none;
  }
  .footer .container .nav li a{
    background-color: transparent;
    color: #fff;
  }
  .footer .container .nav li a:hover{
    background-color: transparent;
    color: #5bc0de;
  }
</style>
