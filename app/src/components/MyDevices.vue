<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12 text-left">
        <div class="row">
          <div class="col-sm-8">
            <h2> {{$t("MyDevices.title")}} </h2>
          </div>
          <div class="col-sm-2 form-group-sm text-right">
            <select id="cat_filter" class="form-control" v-model="cat_filter">
              <option id="option_placeholder" value="placeholder" disabled>{{ $t("MyDevices.filter_by") }}</option>
              <option value="all">{{ $t("MyDevices.all_categories") }}</option>
              <option v-bind:value="cat.name" v-for="cat in categories">{{cat.name}}</option>
            </select>
          </div>
          <div class="col-sm-2">
            <router-link to="/device/create" id="add-button" class="btn btn-primary pull-right">
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
          <tr v-for="device in devices" v-if="device.category == cat_filter
                            || cat_filter == 'all' || cat_filter == 'placeholder'">
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
</style>
<script>
  import mockDevices from "./MockData/devices.json"

  export default{
    name: 'my-devices',
    data () {
      return {
        selected: '0',
        devices: mockDevices,
        categories: [
          {id: 1, name: 'Durchfluss'},
          {id: 2, name: 'EigeneKategorie'}
        ],
        cat_filter: 'placeholder'
      }
    },
    methods: {
      deleteDevice(device) {
        var index = this.devices.indexOf(device);
        this.devices.splice(index, 1);
      }
    }
  }
</script>
