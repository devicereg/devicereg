<template>
  <div>
    <table class="table table-striped">
      <thead>
      <tr>
        <th v-for="key in gridColumns" @click="sortBy(key)" :class="{ active: sortKey == key }">
          {{ $t("MyDevices." + key) }}
          <span class="arrow" :class="sortOrders[key] > 0 ? 'asc' : 'dsc'"></span>
        </th>
        <th>&nbsp;</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="device in filteredData">
        <td v-for="key in gridColumns">{{ device[key] }}</td>
        <td>
          <router-link to="/my-devices">
            <span class="glyphicon glyphicon-edit action-button" aria-hidden="true"></span>
          </router-link>
          <delete-device device="device"></delete-device>
        </td>
      </tr>
      </tbody>
    </table>
    <form id="search">
      Search <input name="query" v-model="filterKey">
    </form>
  </div>
</template>

<script>
  import DeleteDevice from "./DeleteDevice"
  import auth from "../../auth/index.js"

  export default{
    data() {
      var gridColumns = ['devicelabel', 'technology', 'category', 'device_description'];
      var sortOrders = {}

      gridColumns.forEach(function (key) {
        sortOrders[key] = 1;
      })

      return {
        devices: [],
        sortOrders: sortOrders,
        gridColumns: gridColumns,
        filterKey: '',
        sortKey: '',
        gridData: [
          this.devices
        ]
      }
    },
    components: {
      'delete-device': DeleteDevice
    },
    methods: {
      getDeviceData() {
        auth.getDevices(this);
      },
      removeDevice: function(device) {
        var index = this.devices.indexOf(device);
        this.devices.splice(index, 1);
      },
      sortBy: function (key) {
        this.sortKey = key
        this.sortOrders[key] = this.sortOrders[key] * -1
      },
    },
    mounted: function() {
      this.getDeviceData();
    },
    computed: {
      filteredData: function () {
        var sortKey = this.sortKey
        var filterKey = this.filterKey && this.filterKey.toLowerCase()
        var order = this.sortOrders[sortKey] || 1
        var data = this.devices

        if (filterKey) {
          data = data.filter(function (row) {
            return Object.keys(row).some(function (key) {
              return String(row[key]).toLowerCase().indexOf(filterKey) > -1
            })
          })
        }
        if (sortKey) {
          data = data.slice().sort(function (a, b) {
            a = a[sortKey]
            b = b[sortKey]
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
    },
  }
</script>

<style lang="scss">
  @import '../../styles/colors';

  th {
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  th.active {
  }

  th.active .arrow {
    opacity: 1;
  }

  .arrow {
    display: inline-block;
    vertical-align: middle;
    width: 0;
    height: 0;
    margin-left: 5px;
    opacity: 0.66;
  }

  .arrow.asc {
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 4px solid $primary-bg-color;
  }

  .arrow.dsc {
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid $primary-bg-color;
  }
</style>
