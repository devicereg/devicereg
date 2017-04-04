<template>
  <div id="my-devices-component">
    <device-registration-modal :device="device" :edit_index="edit_index" :custom_category="custom_category" :categories="categories"></device-registration-modal>
    <div v-if="selectedUser.id != -1" class="col-sm-12">
      <a v-on:click="goBackToUserOverview()"> {{$t("back")}} </a>
      <h1> {{ this.selectedUser.prename + $t("MyDevices.title_sufix")}} </h1>
    </div>
    <div v-else class="col-sm-12">
      <h1> {{$t("MyDevices.title")}} </h1>
    </div>
    <div class="col-sm-8">
      <filter-input-elements :categories="categories"></filter-input-elements>
    </div>
    <div class="col-sm-4">
      <label> &nbsp; </label>
      <a href="#" id="add-button" class="btn btn-primary btn-block" data-toggle="modal" data-target="#device-registration-modal" v-on:click="clearDevice()">
        <span class="glyphicon glyphicon-plus" aria-hidden="true"></span> &nbsp; {{ $t("MyDevices.add_button") }}
      </a>
    </div>
    <div class="col-sm-12">
      <sortable-devices :devices="devices" :categories="categories" :filterKey="filter" :categoryFilter="cat_filter"></sortable-devices>
    </div>
  </div>
</template>

<script>
  import auth from "../../auth/index.js"
  import DeviceRegForm from "./DeviceRegForm"
  import SortableDevices from "./SortableDevices"
  import FilterInputElements from "./FilterInputElements"

  export default{
    components: {
      'device-registration-modal': DeviceRegForm,
      'sortable-devices': SortableDevices,
      'filter-input-elements': FilterInputElements
    },
    name: 'my-devices',
    props: {
      selectedUser: {
        type: Object,
        default: function () { return { id: -1 } }
        }
    },
    data () {
      return {
        filter: '',
        cat_filter: 'all',
        categories: [],
        custom_category: false,
        custom_category_name: "",
        devices: [],
        device: {},
        edit_index: -1
      }
    },
    methods: {
      clearDevice() {
        this.custom_category = false;
        this.custom_category_name = "";
        this.device = {
          id: -1,
          technology_id: -1,
          technology: '',
          category_id: '',
          devicelabel: '',
          serialnumber: '',
          procmedium: '', //Process fluid, e.g.H2O
          comment: '',
          tag: '',
          mInterval: '', //Interval for maintenance schedule
          mBeginning: '', //start date of recieving notifications about maintenance schedules
          calibration: false, //boolean, true if calibration desired
          maintenance: false, //boolean, true if maintenance desired
          maintenanceMsg: 0, //boolean, true if notifications about maintenance schedule desired
          cInterval: '', //Interval for calibration schedule
          calibrationMsg: 0, //boolean, true if notifications about calibration schedule desired
          cBeginning: '' //start date of recieving notifications about calibration schedules
        };
      },
      addDevice(device) {
        device.id = this.device.id;
        this.devices.unshift(device);
      },
      updateDevice(device) {
        this.devices.splice(this.edit_index, 0);
        this.devices.splice(this.edit_index, 1, device);
      },
      editDevice(device) {
        this.custom_category = false;
        this.custom_category_name = "";
        this.edit_index = this.devices.indexOf(device);
        console.log("Current INDEX of EDITED device: " + this.edit_index);
        this.device = JSON.parse(JSON.stringify(device));
        $('#device-registration-modal').modal('show');
      },
      getDeviceData() {
        if (this.selectedUser.id != -1) {
          auth.getDevicesOfUser(this, this.selectedUser.id);
        } else {
          auth.getDevices(this);
        }

      },
      getCategories() {
        if (this.selectedUser.id != -1) {
          console.log("SELECTED ID:    ", this.selectedUser.id);
          auth.getCategoriesOfUser(this, this.selectedUser.id);
        } else {
          auth.getCategories(this);
        }
      },
      goBackToUserOverview() {
        this.$parent.leaveUsersDeviceList();
      }
    },
    mounted: function() {
      this.getDeviceData();
      this.getCategories();
    }
  }
</script>

<style lang="scss">
  @import '../../styles/colors';

  .toast-error {
    background: $error-toast-color;
  }

  .toast-success {
    background: $success-toast-color;
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
