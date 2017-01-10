<template>
  <div id="navbar" class="navbar-collapse collapse">
    <ul class="nav navbar-nav navbar-left">
      <li>
        <router-link to="/my-devices"><strong> {{ $t('my_devices') }} </strong></router-link>
      </li>
    </ul>
    <ul class="nav navbar-nav navbar-right">
      <li>
        <router-link to="/contact"><strong> {{ $t('contact') }} </strong></router-link>
      </li>
      <language-switch></language-switch>
      <li class="dropdown">
        <a class="dropdown-toggle" data-toggle="dropdown">
          <span class="glyphicon glyphicon-user"></span>
        </a>
        <ul class="dropdown-menu" role="menu">
          <li>
            <router-link to="/user/edit"><strong> {{ $t('edit_profile') }} </strong></router-link>
          </li>
          <li @click="deleteProfile()"><a><strong> {{ $t('delete_profile') }} </strong></a></li>
          <li @click="logout()">
            <router-link to="/login"><strong> {{ $t('logout') }} </strong></router-link>
          </li>

        </ul>
      </li>
      <!--<li class="logout-user" @click="logout()">
        <router-link to="/login"><strong> {{ $t('logout') }} </strong></router-link>
      </li>-->
    </ul>
  </div>
</template>

<script>
import LanguageSwitch from './LanguageSwitch.vue'
import auth from '../../auth'
import jwt from 'jsonwebtoken'

export default {
  name: 'logged-in-navigation',
  data() {
    return {
       user: auth.user ,
       credentials: jwt.verify(localStorage.getItem('id_token'), 'DeviceR rocks as well!')
     }
  },
  components: {
    LanguageSwitch
  },
  methods: {
    logout(){
      auth.logout()
    },
    deleteProfile(){
      var self = this;
      this.$swal({
        title: this.$t("DeleteUserAlert.title"),
        text: this.$t("DeleteUserAlert.text"),
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3e7d8b",
        confirmButtonText: this.$t("DeleteUserAlert.confirm"),
        cancelButtonText: this.$t("DeleteUserAlert.cancel"),
        cancelButtonColor: "#9c9c9c"
      }).then(function() {
        var credentials = {
          id: self.credentials.id
        }
        auth.delete(self, credentials)
      })

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
      color: $primary-bg-color;

      &:hover {
        background-color: $body-background;
      }
    }
  }

</style>
