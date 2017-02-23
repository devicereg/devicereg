<template>
  <footer class="footer">
    <div class="container">
      <nav class="navbar navbar-inverse navbar-fixed-bottom">
        <div class="container-fluid row">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <img class="img img-responsive" src="../assets/footer-icon.png"/>
            </button>
          </div>
          <div class="collapse navbar-collapse" id="myNavbar">
            <ul class="nav navbar-nav">
              <li data-toggle="collapse" data-target="#myNavbar"><router-link to="/datenschutz"><strong>{{$t("privacy_policy")}}</strong></router-link></li>
              <li data-toggle="collapse" data-target="#myNavbar"><router-link to="/terms-of-use"><strong>{{$t("site_policy")}}</strong></router-link></li>
              <li data-toggle="collapse" data-target="#myNavbar"><router-link to="/impressum"><strong>{{$t("legal_disclosure")}}</strong></router-link></li>
              <li data-toggle="collapse" data-target="#myNavbar"><router-link to="/aktionsbedingungen"><strong>{{$t("terms_of_warranty")}}</strong></router-link></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </footer>
</template>

<script>
  export default{
    name: 'app-footer',
    methods: {
      handleBreakpoint() {
        if ($(window).width() < 845) {
          $("[data-target='#myNavbar']").attr("data-toggle", "collapse");
          $(".dropdown-toggle").attr("data-toggle", "dropdown");
        } else {
          $("[data-target='#myNavbar']").attr("data-toggle", "");
          $(".dropdown-toggle").attr("data-toggle", "");
        }
      }
    },
    mounted: function() {
      this.handleBreakpoint();
      window.addEventListener('resize', this.handleBreakpoint)
    }
  }
</script>

<style lang="scss" scoped>
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

     .navbar {
        background-color: $primary-bg-color;
      }

      .navbar-toggle {
        float: none;
        margin-right: 0;
      }

      button.navbar-toggle {
        background: $primary-bg-color;
        border-color: $body-background;
          .icon-bar {
            background: $body-background !important;
          }
      }

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

  @media (max-width: 845px) {

    .footer {
      .container {
        .navbar {
          border-top: 0px;
          border-top-color: transparent;
          background: transparent;
          .container-fluid {
            .navbar-header {
              background: transparent;
              .navbar-toggle {
                background: transparent;
                border-color: transparent;
                bottom: -12px;
                margin:0px;
                position:relative;

                img {
                  width: 70%;
                  height: auto;
                  margin: 0 auto;
                }
              }
            }
            .navbar-collapse {
              background: $primary-bg-color;
            }
          }
        }
      }
    }
  }

  router-link-active{
    color: $primary-link-color;
  }
</style>
