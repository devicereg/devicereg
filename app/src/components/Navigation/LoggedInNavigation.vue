<template>
  <div id="navbar" class="navbar-collapse collapse">
    <ul class="nav navbar-nav navbar-left">
      <li data-toggle="collapse" data-target="#navbar" v-if="userRole === 'ROLE_ADMIN' ^ userRole === 'ROLE_SUPPORT'">
        <router-link to="/user-overview">{{ $t('user_overview') }}</router-link>
      </li>
      <li data-toggle="collapse" data-target="#navbar" v-if="userRole === 'ROLE_USER'">
        <router-link to="/my-devices">{{ $t('my_devices') }}</router-link>
      </li>
    </ul>
    <ul class="nav navbar-nav navbar-right">
      <li data-toggle="collapse" data-target="#navbar">
        <router-link to="/contact">{{ $t('contact') }}</router-link>
      </li>
      <language-switch></language-switch>
      <li class="dropdown" data-toggle="collapse" data-target="#navbar">
        <a class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <span class="glyphicon glyphicon-user"></span>
          <span class="caret"></span>
        </a>
        <ul class="dropdown-menu" role="menu">
          <li data-toggle="collapse" data-target="#navbar">
            <router-link to="/user/edit">{{ $t('edit_profile') }}</router-link>
          </li>
          <li data-toggle="collapse" data-target="#navbar" @click="deleteProfile()"><a>{{ $t('delete_profile') }}</a></li>
          <li data-toggle="collapse" data-target="#navbar" @click="logout()">
            <router-link to="/login">{{ $t('logout') }}</router-link>
          </li>
        </ul>
      </li>
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
  },
  computed: {
    userRole: function() {
      return auth.getRole();
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

</style>-->
