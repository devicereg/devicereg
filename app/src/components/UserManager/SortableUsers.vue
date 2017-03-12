<template>
  <div>
    <div id="users-table" class="table">
      <div class="table-header col-sm-12">
        <div class="row">
          <div @click="sortBy('email')" class="table-cell col-md-3" :class="{ active: sortKey == 'email' }">
            {{ $t("UserOverview." + "email") }}
            <span class="arrow" :class="sortOrders['email'] > 0 ? 'asc' : 'dsc'"></span>
          </div>
          <div @click="sortBy('company')" class="table-cell col-md-3"
               :class="{ active: sortKey == 'company' }">
            {{ $t("UserOverview." + "company") }}
            <span class="arrow" :class="sortOrders['company'] > 0 ? 'asc' : 'dsc'"></span>
          </div>
          <div @click="sortBy('surname')" class="table-cell" :class="{ active: sortKey == 'surname',
              'col-md-2': role == 'ROLE_ADMIN', 'col-md-3': role == 'ROLE_SUPPORT' }">
            {{ $t("UserOverview." + "surname") }}
            <span class="arrow" :class="sortOrders['surname'] > 0 ? 'asc' : 'dsc'"></span>
          </div>
          <div @click="sortBy('prename')" class="table-cell col-md-2" :class="{ active: sortKey == 'prename' ,
              'col-md-2': role == 'ROLE_ADMIN', 'col-md-3': role == 'ROLE_SUPPORT' }">
            {{ $t("UserOverview." + "prename") }}
            <span class="arrow" :class="sortOrders['prename'] > 0 ? 'asc' : 'dsc'"></span>
          </div>
          <div v-if="role === 'ROLE_ADMIN'" class="table-cell col-md-2">&nbsp;</div>
        </div>
      </div>
      <div class="table-body col-sm-12">
        <transition-group name="user-list" tag="div">
          <div v-for="(user, key) in filteredData"
              v-bind:class="[key % 2 === 0 ? 'even-tr' : 'odd-tr','row table-row user-list-item']"
              v-bind:id="'user_' + user.id"
              v-bind:key="user.id" >
            <div class="col-sm-12">
              <div class="table-row-content row">
                <div class="table-cell col-md-3" v-on:click="router.push('/my-devices')">{{ user.email }}</div>
                <div class="table-cell col-md-3" v-on:click="router.push('/my-devices')">{{ user.company }}</div>
                <div class="table-cell" :class="{ 'col-md-2': role == 'ROLE_ADMIN', 'col-md-3': role == 'ROLE_SUPPORT' }"
                     v-on:click="router.push('/my-devices')">{{ user.surname }}</div>
                <div class="table-cell" :class="{ 'col-md-2': role == 'ROLE_ADMIN', 'col-md-3': role == 'ROLE_SUPPORT' }"
                     v-on:click="router.push('/my-devices')">{{ user.prename }}</div>
                <div  v-if="role === 'ROLE_ADMIN'" class="table-cell col-md-2">
                  <a v-on:click="editUser(user)">
                    <span class="glyphicon glyphicon-edit action-button" aria-hidden="true"></span>
                  </a>
                  <delete-user :user="user"></delete-user>
                </div>
              </div>
            </div>
          </div>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
  import DeleteUser from "./DeleteUser"
  import auth from "../../auth/index.js"

  export default{
    props: [
      'filterKey',
      'users'
    ],
    data() {
      var gridColumns = ['surname', 'prename', 'email', 'company'];
      var sortOrders = {}

      gridColumns.forEach(function (key) {
        sortOrders[key] = 1;
      })

      return {
        role: this.$parent.userRole,
        sortOrders: sortOrders,
        gridColumns: gridColumns,
        sortKey: '',
        gridData: [
          this.users
        ]
      }
    },
    components: {
      'delete-user': DeleteUser
    },
    methods: {
      removeUser: function(user) {
        var index = this.users.indexOf(user);
        this.users.splice(index, 1);

        this.$parent.$parent.$refs.toastr.Add({
          title: this.$t("UI.delete_user_title"),
          msg: this.$t("UI.delete_user_msg"),
          clickClose: true,
          timeout: 8000,
          position: "toast-top-right",
          type: "success"
        });
      },
      sortBy: function (key) {
        this.sortKey = key
        this.sortOrders[key] = this.sortOrders[key] * -1
      },
      editUser: function(user) {
        this.$parent.editUser(user);
      }
    },
    computed: {
      filteredData: function () {
        var sortKey = this.sortKey
        var filterKey = this.filterKey && this.filterKey.toLowerCase()
        var order = this.sortOrders[sortKey] || 1
        var data = this.users

        if (filterKey) {
          data = data.filter(function (row) {
            return Object.keys(row).some(function (key) {
              return String(row[key]).toLowerCase().indexOf(filterKey) > -1
            })
          })
        }

        if (sortKey) {
          data = data.slice().sort(function (a, b) {
            a = String(a[sortKey]).toLowerCase()
            b = String(b[sortKey]).toLowerCase()
            return (a === b ? 0 : a > b ? 1 : -1) * order
          })
        }

        return data
      }
    },
    filters: {
      capitalize: function (str) {
        return str.charAt(0).toUpperCase() + str.slice(1)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../styles/colors';

  .table-header {
    border: 1px solid $primary-link-color;
    background: $primary-link-color;
    color: $btn-txt-color;

    margin: 0;
    .table-cell {
      height: 35px;
      line-height: 35px;
      vertical-align: middle;
      font-weight: bold;
    }
  }

  .active {
    color: $primary-link-color;
    background: white;
    opacity: 1;

    .arrow.asc {
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
      border-bottom: 4px solid $primary-link-color;;
    }

    .arrow.dsc {
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
      border-top: 4px solid $primary-link-color;;
    }
  }

  .table-body {
    margin: 0;
    .table-row {
      background: white;
      margin-top: -1px;
      border: 1px solid $table-borders-color;
    }
    .table-cell {
      min-height: 35px;
      padding-top: 5px;
      padding-bottom: 5px;
    }
    .odd-tr {
      background-color: $table-row-odd-bg-color !important;
    }
  }

  .table-row-content:hover {
    background: $table-row-hover-color;
  }

  /*th {*/
    /*cursor: pointer;*/
    /*-webkit-user-select: none;*/
    /*-moz-user-select: none;*/
    /*-ms-user-select: none;*/
    /*user-select: none;*/
  /*}*/

  th.active .arrow {
    opacity: 1;
  }

  .arrow {
    display: inline-block;
    vertical-align: middle;
    width: 0;
    height: 0;
    margin-left: 5px;
    opacity: 0.56;
  }

  .arrow.asc {
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 4px solid white;
  }

  .arrow.dsc {
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid white;
  }

  .user-list-item {}

  .user-list-enter-active, .user-list-leave-active {
    transition: all 1s;
  }

  .user-list-enter /* .user-list-leave-active for <2.1.8 */ {
    opacity: 0;
    transform: translateX(30px);
  }

  .user-list-leave-to /* .user-list-leave-active for <2.1.8 */ {
    opacity: 0;
    transform: translateX(-30px);
  }

</style>
