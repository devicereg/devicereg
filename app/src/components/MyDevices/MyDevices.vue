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
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <sortable-devices></sortable-devices>
      </div>
    </div>
  </div>
</template>

<script>
  import auth from "../../auth/index.js"
  import DeviceRegForm from "./DeviceRegForm"
  import SortableDevices from "./SortableDevices"

  export default{
    components: {
      'device-registration-modal': DeviceRegForm,
      'sortable-devices': SortableDevices
    },
    name: 'my-devices',
    data () {
      return {
        selected: '0',
        categories: [],
        cat_filter: 'placeholder',
      }
    },
    methods: {
      getCategories() {
        auth.getCategories(this);
      }
    },
    mounted: function() {
      this.getCategories();
    },
  }
</script>

<style lang="scss">
  @import '../../styles/colors';

  #add-button, #cat_filter {
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
