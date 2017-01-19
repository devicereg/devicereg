<template>
  <div id="my-devices-component">
    <device-registration-modal></device-registration-modal>
    <div class="row">
      <div class="col-sm-8">
        <h1> {{$t("MyDevices.title")}} </h1>
      </div>
      <div class="col-sm-4">
        <a href="#" id="add-button" class="btn btn-primary btn-block" data-toggle="modal" data-target="#device-registration-modal">
          <span class="glyphicon glyphicon-plus" aria-hidden="true"></span> &nbsp; {{ $t("MyDevices.add_button") }}
        </a>
      </div>
    </div>
    <div class="row">
      <filter-input-elements></filter-input-elements>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <sortable-devices :devices="devices" :filterKey="filter" :categoryFilter="cat_filter"></sortable-devices>
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
        selected_device_id: -1,
        devices: []
      }
    },
    methods: {
      addDevice(device) {
          auth.createDevice(this, device);
          device.id = this.selected_device_id;

          this.devices.unshift(device);
      },
      updateDevice(device) {
        var index = this.devices.indexOf(device);
        this.devices.replace(index, device);
      },
      editDevice(device) {
        this.selected_device_id = device.id;

        $('#device-registration-modal').modal('show');
        $('#device-registration-form #id').val(device.id);
        $('#device-registration-form #technology').val(device.technology);
        $('#device-registration-form #category').val(device.category);
        $('#device-registration-form #devicelabel').val(device.devicelabel);
        $('#device-registration-form #serialnumber').val(device.serialnumber);
        $('#device-registration-form #procmedium').val(device.procmedium);
        $('#device-registration-form #comment').val(device.comment);
        $('#device-registration-form #mInterval').val(device.mInterval);
        $('#device-registration-form #mBeginning').val(device.mBeginning);
        $('#device-registration-form #calibration').val(device.calibration);
        $('#device-registration-form #maintenance').val(device.maintenance);
        $('#device-registration-form #maintenanceMsg').val(device.maintenanceMsg);
        $('#device-registration-form #cInterval').val(device.cInterval);
        $('#device-registration-form #calibrationMsg').val(device.calibrationMsg);
        $('#device-registration-form #cBeginning').val(device.cBeginning);
      },
      getDeviceData() {
        auth.getDevices(this);
      },
    },
    mounted: function() {
      this.getDeviceData();
    },
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
