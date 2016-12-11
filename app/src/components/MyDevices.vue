<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12 text-left">
        <div class="row">
          <div class="col-sm-6">
            <h2> {{$t("MyDevices.title")}} </h2>
          </div>
          <div class="col-sm-6">
            <router-link to="#" id="add-button" class="btn btn-primary pull-right">
              <span class="glyphicon glyphicon-plus" aria-hidden="true"></span> &nbsp; {{ $t("MyDevices.add_button") }}
            </router-link>
          </div>
        </div>

        <table class="table table-striped">
          <thead>
          <tr>
            <th>{{$t("MyDevices.technology")}}</th>
            <th>{{$t("MyDevices.device_description")}}</th>
            <th>{{$t("MyDevices.category")}}</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="device in devices">
            <td>{{device.technology}}</td>
            <td>{{device.description_data}}</td>
            <td>{{device.category}}</td>
            <td>
              <router-link to="#">
                <span class="glyphicon glyphicon-eye-open action-button" aria-hidden="true"></span>
              </router-link>
              <router-link to="#">
                <span class="glyphicon glyphicon-edit action-button" aria-hidden="true"></span>
              </router-link>
              <a @click="deleteDevice(device.id)">
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

  #add-button {
    margin-top: 2em;
  }

  .action-button {
    margin-left: 1em;
  }

  a {
    color: $primary-link-color;
  }
</style>
<script>
  import mockDevices from "./MockData/devices.json"

  export default{
    name: 'my-devices',
    data () {
      return {
        selected: '0',
        devices: mockDevices
      }
    },
    methods: {
      deleteDevice(id) {
        console.log(id);
      }
    }
  }
</script>
