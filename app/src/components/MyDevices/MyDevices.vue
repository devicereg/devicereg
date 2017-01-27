<template>
  <div id="my-devices-component">
    <device-registration-modal :device="device" :categories="categories"></device-registration-modal>
    <div class="row">
      <div class="col-sm-8">
        <h1> {{$t("MyDevices.title")}} </h1>
      </div>
      <div class="col-sm-4">
        <a href="#" id="add-button" class="btn btn-primary btn-block" data-toggle="modal" data-target="#device-registration-modal" v-on:click="clearDevice()">
          <span class="glyphicon glyphicon-plus" aria-hidden="true"></span> &nbsp; {{ $t("MyDevices.add_button") }}
        </a>
      </div>
    </div>
    <div class="row">
      <filter-input-elements :categories="categories"></filter-input-elements>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <sortable-devices :devices="devices" :categories="categories" :filterKey="filter" :categoryFilter="cat_filter"></sortable-devices>
      </div>
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
    data () {
      return {
        filter: '',
        cat_filter: 'all',
        categories: [],
        devices: [],
        device: {}
      }
    },
    methods: {
      clearDevice() {
        this.device = {
          id: -1,
          technology: '',
          category_id: '',
          devicelabel: '',
          serialnumber: '',
          procmedium: '', //Process fluid, e.g.H2O
          comment: '',
          mInterval: '', //Interval for maintenance schedule
          mBeginning: '', //start date of recieving notifications about maintenance schedules
          calibration: 0, //boolean, true if calibration desired
          maintenance: 0, //boolean, true if maintenance desired
          maintenanceMsg: 0, //boolean, true if notifications about maintenance schedule desired
          cInterval: '', //Interval for calibration schedule
          calibrationMsg: 0, //boolean, true if notifications about calibration schedule desired
          cBeginning: '' //start date of recieving notifications about calibration schedules
        };
      },
      addDevice(device) {
        auth.createDevice(this, device);
        device.id = this.device.id;
        this.devices.unshift(device);
      },
      updateDevice(device) {
        auth.updateDevice(this. device);
        var index = this.devices.indexOf(device);
        this.devices.splice(index, 1, device);
      },
      editDevice(device) {
        this.device = device;
        $('#device-registration-modal').modal('show');
      },
      getDeviceData() {
        auth.getDevices(this);
      },
      getCategories() {
        auth.getCategories(this);
      },
      stripeTable: function () {
        $( ".table-row-content" ).removeClass( "odd");
        $( ".table-row-content:odd" ).addClass( "odd");
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
