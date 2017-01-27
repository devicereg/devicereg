<template>
  <div id="my-users-component">
    <user-registration-modal :user="user"></user-registration-modal>
    <div class="row">
      <div class="col-sm-8">
        <h1> {{$t("UserOverview.title")}} </h1>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-8">
        <filter-users :categories="categories"></filter-users>
      </div>
      <div class="col-sm-4">
        <a href="#" id="add-button" class="btn btn-primary btn-block" data-toggle="modal" data-target="#user-registration-modal" v-on:click="clearUser()">
          <span class="glyphicon glyphicon-plus" aria-hidden="true"></span> &nbsp; {{ $t("UserOverview.add_button") }}
        </a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <sortable-users :users="users" :categories="categories" :filterKey="filter" :categoryFilter="cat_filter"></sortable-users>
      </div>
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
        cat_filter: 'all',
        categories: [],
        users: [],
        user: {}
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
        //auth.updateUser(this. user); TODO: updateUser auth.js
        var index = this.users.indexOf(user);
        this.users.splice(index, 1, user);
      },
      editUser(user) {
        this.user = user;
        $('#user-registration-modal').modal('show');
      },
      getUserData() {
        auth.getUsers(this);
      },
      stripeTable: function () {
        $( ".table-row-content" ).removeClass( "odd");
        $( ".table-row-content:odd" ).addClass( "odd");
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
