<template>
  <div id="my-devices-component">
    <device-registration-modal></device-registration-modal>
    <div class="row">
      <div class="col-sm-8">
        <h1> {{$t("MyDevices.title")}} </h1>
      </div>
      <div class="col-sm-2 form-group-sm text-right" id="cat_filter">
        <select class="form-control" v-model="cat_filter">
          <option id="option_placeholder" value="placeholder" disabled>{{ $t("MyDevices.filter_by") }}</option>
          <option value="all">{{ $t("MyDevices.all_categories") }}</option>
          <option v-bind:value="cat.id" v-for="cat in categories">{{cat.name}}</option>
        </select>
      </div>
      <div class="col-sm-2">
        <a href="#" id="add-button" class="btn btn-primary pull-right" data-toggle="modal" data-target="#device-registration-modal">
          <span class="glyphicon glyphicon-plus" aria-hidden="true"></span> &nbsp; {{ $t("MyDevices.add_button") }}
        </a>
        <!-- Create Device on seperate page -->
        <!--router-link to="/device/create" id="add-button" class="btn btn-primary pull-right">
          <span class="glyphicon glyphicon-plus" aria-hidden="true"></span> &nbsp; {{ $t("MyDevices.add_button") }}
        </router-link-->
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>{{$t("MyDevices.label")}}</th>
              <th>{{$t("MyDevices.technology")}}</th>
              <th>{{$t("MyDevices.category")}}</th>
              <th>{{$t("MyDevices.device_description")}}</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          <tr v-for="device in devices" v-if="device.category_id == cat_filter
                            || cat_filter == 'all' || cat_filter == 'placeholder'">
            <td>{{device.devicelabel}}</td>
            <td>{{device.technology}}</td>
            <td>{{device.category_id}}</td>
            <td>{{device.comment}}</td>
            <td>
              <a @click="getDevices()">
                <span class="glyphicon glyphicon-eye-open action-button" aria-hidden="true"></span>
              </a>
              <router-link to="/my-devices">
                <span class="glyphicon glyphicon-edit action-button" aria-hidden="true"></span>
              </router-link>
              <a @click="deleteDevice(device)">
                <span class="glyphicon glyphicon-trash action-button" aria-hidden="true"></span>
              </a>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
  @import '../styles/_colors';

  h1 {
    font-weight: bold;
  }

  #add-button,#cat_filter {
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

  @media (max-width: 767px) {

    h1 {
      font-size: 1.5em;
    }
  }
</style>
<script>
  import auth from "../auth/index.js"
  import DeviceRegForm from "./DeviceRegForm"

  export default{
    components: {
      'device-registration-modal': DeviceRegForm
    },
    name: 'my-devices',
    data () {
      return {
        selected: '0',
        categories: [],
        cat_filter: 'placeholder',
        devices: []
      }
    },
    methods: {
      editDevice(device) {
        var index = this.devices.indexOf(device);
        this.devices.splice(index, 1);
      },
      deleteDevice(device) {
        var self = this;
        this.$swal({
          title: this.$t("MyDevices.delete.title"),
          text: this.$t("MyDevices.delete.text"),
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3e7d8b",
          confirmButtonText: this.$t("MyDevices.delete.confirm"),
          cancelButtonText: this.$t("MyDevices.delete.cancel"),
          cancelButtonColor: "#9c9c9c"
        }).then(function(device) {
          auth.deleteDevice(self, {id: device.id});

          var index = self.devices.indexOf(device);
          self.devices.splice(index, 1);
        })
      },
      getDeviceData() {
        auth.getDevices(this);
      },
      getCategories() {
        auth.getCategories(this);
      }
    },
    mounted: function() {
      this.getDeviceData();
      this.getCategories();
    }
  }
</script>
