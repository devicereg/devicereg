<template>
  <footer class="footer">
    <div class="container">
      <ul class="nav navbar-nav">
        <li><router-link to="/datenschutz">Datenschutz</router-link></li>
        <li><router-link to="/terms-of-use">Nutzungsbedingungen</router-link></li>
        <li><router-link to="/impressum">Impressum</router-link></li>
        <li><router-link to="/aktionsbedingungen">Aktionsbedingungen</router-link></li>
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
    margin-top: 55px;
    width: 100%;
    background-color: $primary-bg-color;
    overflow: auto;

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

  @media only screen
  and (max-width: 767px) {

    .footer {
      display: none;
    }
  }






</style>
