<template>
  <footer class="footer">
    <div class="container">
      <ul class="nav navbar-nav">
        <li><router-link to="/datenschutz"><strong>{{$t("privacy_policy")}}</strong></router-link></li>
        <li><router-link to="/terms-of-use"><strong>{{$t("site_policy")}}</strong></router-link></li>
        <li><router-link to="/impressum"><strong>{{$t("legal_disclosure")}}</strong></router-link></li>
        <li><router-link to="/aktionsbedingungen"><strong>{{$t("terms_of_warranty")}}</strong></router-link></li>
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
    z-index: 100;
    position: fixed;
    bottom: 0;
    margin-top: 55px;
    width: 100%;
    background-color: $primary-bg-color;
    overflow: auto;
    text-align: center;

    .container {
      .nav {
        display: inline-block;
        height: 100%;
        float: none;

        li a {
          background-color: transparent;
          color: #fff;

          &:hover {
            color: $primary-link-color;
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

  router-link-active{
    color: $primary-link-color;
  }
</style>
