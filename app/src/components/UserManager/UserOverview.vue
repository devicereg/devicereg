<template>
  <div id="my-users-component">
    <user-registration-modal :user="user"></user-registration-modal>
    <div class="col-sm-12">
      <h1> {{$t("UserOverview.title")}} </h1>
    </div>
    <div class="col-sm-8">
      <filter-users :categories="categories"></filter-users>
    </div>
    <div class="col-sm-4">
      <a href="#" id="add-button" class="btn btn-primary btn-block" data-toggle="modal" data-target="#user-registration-modal" v-on:click="clearUser()">
        <span class="glyphicon glyphicon-plus" aria-hidden="true"></span> &nbsp; {{ $t("UserOverview.add_button") }}
      </a>
    </div>
    <div class="col-sm-12">
      <sortable-users :users="users" :filterKey="filter"></sortable-users>
    </div>
  </div>
</template>

<script>
  import auth from "../../auth/index.js"
  import UserRegForm from "./UserRegForm"
  import SortableUsers from "./SortableUsers"
  import FilterUsers from "./FilterUsers"

  export default{
    components: {
      'user-registration-modal': UserRegForm,
      'sortable-users': SortableUsers,
      'filter-users': FilterUsers
    },
    name: 'user-overview',
    data () {
      return {
        filter: '',
        users: [],
        user: {},
        edit_index: -1
      }
    },
    methods: {
      clearUser() {
        this.user = {
          id: "",
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
        //auth.createUser(this, user); TODO: createUser auth.js
        user.id = this.user.id;
        this.users.unshift(user);
      },
      updateUser(user) {
        this.users.splice(this.edit_index, 0);
        this.users.splice(this.edit_index, 1, device);
      },
      editUser(user) {
        this.edit_index = this.devices.indexOf(user);
        this.user = JSON.parse(JSON.stringify(user));
        $('#user-registration-modal').modal('show');
      },
      getUserData() {
        auth.getUsers(this);
      }
    },
    mounted: function() {
      this.getUserData();
    }
  }
</script>

<style lang="scss">
  @import '../../styles/colors';

  #add-button {
    margin-top: 2em;
  }

  .action-button {
    margin-left: 1em;
  }

  a {
    color: $primary-link-color;
  }
  #option_placeholder {
    display: none;
  }
</style>
