<template>
  <div>
    <table class="table table-hover">
      <thead class="table-header">
      <tr>
        <th v-for="key in gridColumns" @click="sortBy(key)" :class="{ active: sortKey == key }">
          {{ $t("MyDevices." + key) }}
          <span class="arrow" :class="sortOrders[key] > 0 ? 'asc' : 'dsc'"></span>
        </th>
        <th>&nbsp;</th>
      </tr>
      </thead>
      <transition-group name="device-list" tag="tbody">
        <tr v-for="device in filteredData" v-bind:key="device.id" class="device-list-item">
          <td v-for="key in gridColumns">{{ device[key] }}</td>
          <td>
            <a @click="editDevice(device)">
              <span class="glyphicon glyphicon-edit action-button" aria-hidden="true"></span>
            </a>
            <delete-device :device="device"></delete-device>
          </td>
        </tr>
      </transition-group>
    </table>
  </div>
</template>

<script>
  import DeleteDevice from "./DeleteDevice"
  import auth from "../../auth/index.js"

  export default{
    props: [
      'filterKey',
      'categoryFilter',
      'devices'
    ],
    data() {
      var gridColumns = ['devicelabel', 'technology', 'category', 'device_description'];
      var sortOrders = {}

      gridColumns.forEach(function (key) {
        sortOrders[key] = 1;
      })

      return {
        sortOrders: sortOrders,
        gridColumns: gridColumns,
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
      removeDevice: function(device) {
        var index = this.devices.indexOf(device);
        this.devices.splice(index, 1);
      },
      sortBy: function (key) {
        this.sortKey = key
        this.sortOrders[key] = this.sortOrders[key] * -1
      },
      editDevice: function(device) {
        this.$parent.editDevice(device);
      }
    },
    computed: {
      filteredData: function () {
        var sortKey = this.sortKey
        var filterKey = this.filterKey && this.filterKey.toLowerCase()
        var order = this.sortOrders[sortKey] || 1
        var data = this.devices
        var categoryFilter = this.categoryFilter;

        if (categoryFilter && categoryFilter != 'all') {
          data = data.filter(function (row) {
            return row.category_id === categoryFilter;
          })
        }

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

        console.debug(data)

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

  table {
    border: 1px solid $darker-light-gray;
    background: white;
  }

  th {
    border: inherit;
  }

  td {
    border: inherit;
  }

  .table-header {
    background: $primary-bg-color;
    color: $btn-txt-color;
  }

  th {
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  th.active {
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

  .device-list-item {}

  .device-list-enter-active, .device-list-leave-active {
    transition: all 1s;
  }

  .device-list-enter /* .device-list-leave-active for <2.1.8 */ {
    opacity: 0;
    transform: translateX(30px);
  }

  .device-list-leave-to /* .device-list-leave-active for <2.1.8 */ {
    opacity: 0;
    transform: translateX(30px);
  }

</style>
