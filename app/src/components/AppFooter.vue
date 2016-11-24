<template>
  <footer class="footer">
    <div class="container">
      <ul class="nav navbar-nav">
        <li>
          <router-link to="/datenschutz">Datenschutz</router-link>
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
  @import '../styles/_colors';

  .footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: $deep-space-sparkle;

    .container {
      .nav {
        display: inline-block;
        height: 100%;
        float: none;

        li a {
          background-color: transparent;
          color: #fff;

          &:hover {
            color: #5bc0de;
          }
        }
      }
    }
  }
</style>
