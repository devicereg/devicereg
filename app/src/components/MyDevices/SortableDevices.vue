<template>
  <div>
    <div id="devices-table-desktop" class="table desktop-table">
      <div class="table-header col-sm-12">
        <div class="row">
          <div @click="sortBy('devicelabel')" class="table-cell col-md-2 col-sm-2 col-xs-2" :class="{ active: sortKey == 'devicelabel' }">
            {{ $t("MyDevices." + "devicelabel") }}
            <span class="arrow" :class="sortOrders['devicelabel'] > 0 ? 'asc' : 'dsc'"></span>
          </div>
          <div @click="sortBy('technology')" class="table-cell col-md-2 col-sm-2 col-xs-2" :class="{ active: sortKey == 'technology' }">
            {{ $t("MyDevices." + "technology") }}
            <span class="arrow" :class="sortOrders['technology'] > 0 ? 'asc' : 'dsc'"></span>
          </div>
          <div @click="sortBy('category')" class="table-cell col-md-2 col-sm-2 col-xs-2" :class="{ active: sortKey == 'category' }">
            {{ $t("MyDevices." + "category") }}
            <span class="arrow" :class="sortOrders['category'] > 0 ? 'asc' : 'dsc'"></span>
          </div>
          <div @click="sortBy('comment')" class="table-cell col-md-4 col-sm-4 col-xs-4"
               :class="{ active: sortKey == 'comment' }">
            {{ $t("MyDevices." + "device_description") }}
            <span class="arrow" :class="sortOrders['comment'] > 0 ? 'asc' : 'dsc'"></span>
          </div>
          <div class="table-cell col-sm-2 col-md-2">&nbsp;</div>
        </div>
      </div>
      <div class="table-body col-sm-12">
        <transition-group name="device-list" tag="div">
          <div v-for="(device, key) in filteredData"
              v-bind:class="[key % 2 === 0 ? 'even-tr' : 'odd-tr','row table-row device-list-item']"
              v-bind:id="'device_' + device.id"
              v-bind:key="device.id">
            <div class="col-sm-12">
              <div class="table-row-content row">
                <div class="table-cell col-md-2 col-sm-2 col-xs-2 device-label">{{ device.devicelabel }}</div>
                <div class="table-cell col-md-2 col-sm-2 col-xs-2">
                  {{ device.technology }}
                </div>
                <div v-for="category in categories" v-if="category.id==device.category_id" class="table-cell col-md-2 col-sm-2 col-xs-2">
                  {{ category.name }}
                </div>
                <div class="table-cell col-md-4 col-sm-4 col-xs-4">{{ device.comment }}</div>
                <div class="table-cell col-md-2 col-sm-2 col-xs-2">
                  <a v-on:click="toggleDetail(device.id)">
                    <span class="glyphicon glyphicon-eye-open action-button" aria-hidden="true"></span>
                  </a>
                  <a v-on:click="editDevice(device)">
                    <span class="glyphicon glyphicon-edit action-button" aria-hidden="true"></span>
                  </a>
                  <delete-device :device="device"></delete-device>
                </div>
                <div id="device-detail-view" class="row">
                  <div class="col-sm-12 hide" v-bind:id="'details_' + device.id">
                    <td colspan="5">
                      <div class="row">
                        <div class="col-xs-12">
                          <li>{{ $t("DeviceRegForm.serial_number")}}: {{device.serialnumber}}</li>
                             <li>{{ $t("DeviceRegForm.process_fluid")}}: {{device.procmedium}}</li>
                             <li>{{ $t("DeviceRegForm.comment")}}: {{device.comment}}</li>
                             <li>{{ $t("DeviceRegForm.maintenance")}}:{{device.mBeginning}}, {{device.mInterval}}, {{device.maintenanceMsg}} </li>
                          <li>{{ $t("DeviceRegForm.calibration")}}: {{device.cBeginning}}, {{device.cIntervall}}, {{device.calibrationMsg}}</li>
                        </div>
                      </div>
                    </td>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition-group>
      </div>
    </div>
    <div id="devices-table-mobile" class="table mobile-table">
      <div class="table-header col-sm-12 col-xs-12">
        <div class="row">
          <div @click="sortBy('devicelabel')" class="table-cell col-sm-6 col-xs-6" :class="{ active: sortKey == 'devicelabel' }">
            {{ $t("MyDevices." + "devicelabel") }}
            <span class="arrow" :class="sortOrders['devicelabel'] > 0 ? 'asc' : 'dsc'"></span>
          </div>
          <div class="table-cell col-sm-6 col-md-6">&nbsp;</div>
        </div>
      </div>
      <div class="table-body col-sm-12 col-xs-12">
        <transition-group name="device-list" tag="div">
          <div v-for="(device, key) in filteredData"
              v-bind:class="[key % 2 === 0 ? 'even-tr' : 'odd-tr','row table-row device-list-item']"
              v-bind:id="'device_' + device.id"
              v-bind:key="device.id">
            <div class="col-sm-12 col-xs-12">
              <div class="table-row-content row">
                <div class="table-cell col-sm-6 col-xs-6 device-label">{{ device.devicelabel }}</div>
                <div class="table-cell col-sm-6 col-xs-6">
                  <a v-on:click="toggleDetail(device.id)">
                    <span class="glyphicon glyphicon-eye-open action-button" aria-hidden="true"></span>
                  </a>
                  <a v-on:click="editDevice(device)">
                    <span class="glyphicon glyphicon-edit action-button" aria-hidden="true"></span>
                  </a>
                  <delete-device :device="device"></delete-device>
                </div>
                <div id="device-detail-view" class="row">
                  <div class="col-sm-12 hide" v-bind:id="'details_' + device.id">
                    <td colspan="5">
                      <div class="row">
                        <div class="col-xs-12">
                          <li>{{ $t("DeviceRegForm.serial_number")}}: {{device.serialnumber}}</li>
                             <li>{{ $t("DeviceRegForm.process_fluid")}}: {{device.procmedium}}</li>
                             <li>{{ $t("DeviceRegForm.comment")}}: {{device.comment}}</li>
                             <li>{{ $t("DeviceRegForm.maintenance")}}:{{device.mBeginning}}, {{device.mInterval}}, {{device.maintenanceMsg}} </li>
                          <li>{{ $t("DeviceRegForm.calibration")}}: {{device.cBeginning}}, {{device.cIntervall}}, {{device.calibrationMsg}}</li>
                        </div>
                      </div>
                    </td>
                  </div>
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
  import DeleteDevice from "./DeleteDevice"
  import auth from "../../auth/index.js"

  export default{
    props: [
      'filterKey',
      'categoryFilter',
      'categories',
      'devices'
    ],
    data() {
      var gridColumns = ['devicelabel', 'technology', 'category', 'comment'];
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
        ],
      }
    },
    components: {
      'delete-device': DeleteDevice
    },
    methods: {
      toggleDetail: function(id) {
        var detailView = $("#details_" + id);
        var parentRow = $("#device_" + id);

        detailView.insertAfter(parentRow)
        detailView.toggleClass('hide')
      },
      removeDevice: function(device) {
        var index = this.devices.indexOf(device);
        this.devices.splice(index, 1);
        var taostr = (this.$parent.selectedUser.id == -1) ? this.$parent.$parent.$refs.toastr : this.$parent.$parent.$parent.$refs.toastr
        taostr.Add({
          title: this.$t("UI.delete_device_title"),
          msg: this.$t("UI.delete_device_msg"),
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

  .device-label {
    font-weight: bold;
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
    transform: translateX(-30px);
  }

  .mobile-table {
    display: none;
  }

  @media (max-width: 767px) {
    .desktop-table {
      display: none;
    }

    .mobile-table {
      display: block;
    }

    .action-button {
      font-size: 1.5em;
    }
  }

</style>
