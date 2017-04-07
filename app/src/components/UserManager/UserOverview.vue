<template>
  <div id="my-users-component" v-if="(userRole === 'ROLE_ADMIN' ^ userRole === 'ROLE_SUPPORT') && !onUsersDeviceList">
    <user-registration-modal :user="user" :edit_index="edit_index" :changeEmail="changeEmail" :changePassword="changePassword"></user-registration-modal>
    <div class="col-sm-12">
      <h1> {{$t("UserOverview.title")}} </h1>
    </div>
    <div class="col-sm-4 col-xs-6">
      <filter-users></filter-users>
    </div>
    <div v-if="userRole == 'ROLE_ADMIN'" class="col-sm-4 col-xs-6 pull-right">
      <label> &nbsp; </label>
      <a href="#" id="add-button" class="btn btn-primary btn-block" data-toggle="modal" data-target="#user-registration-modal" v-on:click="clearUser()">
        <span class="glyphicon glyphicon-plus" aria-hidden="true"></span> &nbsp; {{ $t("UserOverview.add_button") }}
      </a>
    </div>
    <div class="col-sm-12 col-xs-12">
      <sortable-users :users="users" :filterKey="filter"></sortable-users>
    </div>
  </div>
  <users-devices :selectedUser="selectedUser" v-else></users-devices>
</template>

<script>
  import auth from "../../auth/index.js"
  import UserRegForm from "./UserRegForm"
  import SortableUsers from "./SortableUsers"
  import FilterUsers from "./FilterUsers"
  import MyDevices from "../MyDevices/MyDevices"

  export default{
    components: {
      'user-registration-modal': UserRegForm,
      'sortable-users': SortableUsers,
      'filter-users': FilterUsers,
      'users-devices': MyDevices
    },
    name: 'user-overview',
    data () {
      return {
        filter: '',
        users: [],
        user: {},
        edit_index: -1,
        changeEmail: false,
        changePassword: false,
        selectedUserId: -1,
        onUsersDeviceList: false
      }
    },
    methods: {
      clearUser() {
        this.user = {
          id: -1,
          role: "",
          gender: "",
          prename: "",
          surname: "",
          language: "",
          phone: "",
          industry_family: "",
          industry_type: "",
          company: "",
          street: "",
          number: "",
          zip: "",
          city: "",
          country: "",
          email: "",
          password: "",
          question: "",
          answer: "",
          agreement: ""
        };
      },
      addUser(user) {
        user.id = this.user.id;
        this.users.unshift(user);
      },
      updateUser(user) {
        this.users.splice(this.edit_index, 0);
        this.users.splice(this.edit_index, 1, user);
      },
      editUser(user) {
        this.changeEmail = false;
        this.changePassword = false;
        this.edit_index = this.users.indexOf(user);
        this.user = JSON.parse(JSON.stringify(user));
        $('#user-registration-modal').modal('show');
      },
      getUserData() {
        auth.getUsers(this);
      },
      showDevicesOfUser(user) {
        this.selectedUser = user;
        this.onUsersDeviceList = true;
      },
      leaveUsersDeviceList() {
        this.selectedUser = null;
        this.onUsersDeviceList = false;
      }
    },
    mounted: function() {
      this.getUserData();
    },
    computed: {
      userRole: function() {
        return auth.getRole();
      }
    }
  }
</script>

<style lang="scss">
  @import '../../styles/colors';

  .action-button {
    margin-left: 1em;
  }

  .breadcrumb {
    background: $body-background;
    margin-left: -2em;
  }

  a {
    color: $primary-link-color;
  }

  #option_placeholder {
    display: none;
  }
</style>
