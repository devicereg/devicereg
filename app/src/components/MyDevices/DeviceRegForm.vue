<template>
  <div id="device-registration-modal" class="modal inmodal fade" tabindex="-1" role="dialog"  aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">
            <span aria-hidden="true">×</span>
            <span class="sr-only">Schließen</span>
          </button>
          <h1 v-if="device.id == -1" class="modal-title">{{$t("DeviceRegForm.title_create")}}</h1>
          <h1 v-else class="modal-title">{{$t("DeviceRegForm.title_edit")}}</h1>
        </div>
        <form id="device-registration-form" class="ajax" role="form" v-on:submit.prevent="submit" >
          <div class="modal-body">
            <div class="container-fluid">
              <div class="form-group row">
                <div class="col-sm-12  text-left">
                  <legend class="modal-form-legend">{{$t("DeviceRegForm.categorization")}}</legend>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-sm-6  text-left">
                  <label class="control-label" for="technology">{{$t("DeviceRegForm.technology")}}:</label>
                  <select name="technology" class="form-control" id="technology" v-model="device.technology_id" required>
                    <option value="" :disabled="true">{{$t("DeviceRegForm.choose")}}</option>
                    <option v-bind:value="item.id" v-for="item in technologies">{{item.name}}</option>
                  </select>
                </div>
              </div>
              <div class="form-group row" v-if="custom_category">
                <div class="col-sm-12">
                  <label class="control-label" for="custom_category">{{$t("DeviceRegForm.category")}}:</label>
                </div>
                <div class="col-xs-8 col-sm-6">
                  <input @keydown.enter="createCustomCategory" name="category" type="text" class="form-control"
                         id="custom_category" v-model="custom_category_name" :placeholder="$t('DeviceRegForm.type_in_category')" required>
                </div>
                <!--div class="col-xs-4 col-sm-3">
                  <button type="button" class="btn btn-block btn-primary" @click="createCustomCategory">
                    <span class="glyphicon glyphicon-plus" aria-hidden="true"></span> &nbsp; {{ $t('DeviceRegForm.create_category') }}
                  </button>
                </div-->
                <div class="col-sm-3">
                  <div class="checkbox">
                    <label><input name="category" type="checkbox" v-model="custom_category">
                      {{$t("DeviceRegForm.custom")}}</label>
                  </div>
                </div>
              </div>
              <div class="form-group row" v-else>
                <div class="col-sm-12">
                  <label class="control-label" for="category_id">{{$t("DeviceRegForm.category")}}:</label>
                </div>
                <div class="col-sm-6">
                  <select name="category" class="form-control" id="category_id" required v-model="device.category_id">
                    <option value="" :disabled="true">{{$t("DeviceRegForm.choose")}}</option>
                    <option v-bind:value="item.id" v-for="item in categories">{{item.name}}</option>
                  </select>
                </div>
                <div class="col-sm-3">
                  <div class="checkbox">
                    <label><input name="category" type="checkbox" v-model="custom_category">
                      {{$t("DeviceRegForm.custom")}}</label>
                  </div>
                </div>
              </div>
              <br>
              <div class="form-group row">
                <div class="col-sm-12  text-left">
                  <legend class="modal-form-legend">{{$t("DeviceRegForm.description_data")}}</legend>
                </div>
              </div>
              <div class="row">
                <div class="form-group col-sm-6">
                  <div class="text-left">
                    <label class="control-label" for="serialnumber">{{$t("DeviceRegForm.serial_number")}}:</label>
                    <input name="serialnumber" type="text" class="form-control" id="serialnumber" v-model="device.serialnumber" required
                           pattern="[A-Z]{1}[0-9]{8}">
                  </div>
                </div>
                <div class="form-group col-sm-6">
                  <div class="text-left">
                    <label class="control-label" for="devicelabel">{{$t("DeviceRegForm.label")}}:</label>
                    <input name="label" type="text" class="form-control" id="devicelabel" v-model="device.devicelabel" required>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="form-group col-sm-6">
                  <div class="text-left">
                    <label class="control-label" for="procmedium">{{$t("DeviceRegForm.process_fluid")}}:</label>
                    <select name="process_fluid" class="form-control" id="procmedium" v-model="device.procmedium" required>
                      <option value="" :disabled="true">{{$t("DeviceRegForm.choose")}}</option>
                      <option v-bind:value="item.id" v-for="item in procmedia">{{item.name}}</option>
                    </select>
                  </div>
                </div>
                <div class="form-group col-sm-6">
                  <div class="text-left">
                    <label class="control-label" for="tag">{{$t("DeviceRegForm.tag_number")}}:</label>
                    <input name="tag" type="number" class="form-control" id="tag" v-model="device.tag" required>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="form-group col-sm-12">
                  <div class="text-left">
                    <label class="control-label" for="comment">{{$t("DeviceRegForm.comment")}}:</label>
                    <textarea name="comment" class="form-control" cols="40" rows="5" id="comment" v-model="device.comment"></textarea>
                  </div>
                </div>
              </div>
              <br>
              <div class="form-group row">
                <div class="col-sm-12  text-left">
                  <legend class="modal-form-legend">{{$t("DeviceRegForm.maintenance")}}</legend>
                </div>
              </div>
              <div class="row">
                <div class="form-group col-sm-6">
                  <div  class="form-group">
                    <label name="maintenance" class="control-label" for="maintenance">{{$t("DeviceRegForm.maintenance")}}</label>
                    <input name="maintenance_desired" type="radio" id="maintenance" v-model="device.maintenance" value="true"> {{$t("DeviceRegForm.yes")}}
                    <input name="maintenance_desired" type="radio" id="no_maintenance" v-model="device.maintenance" value="false"> {{$t("DeviceRegForm.no")}}
                  </div>

                  <div v-if="device.maintenance == 'true'" class="form-group" id="desired">
                    <label class="control-label" for="mInterval">{{$t("DeviceRegForm.main_interval")}}</label>
                    <select name="maintenance_interval" class="form-control" id="mInterval" v-model="device.mInterval"
                            :required="device.maintenance">
                      <option value="" :disabled="true">{{$t("DeviceRegForm.choose")}}</option>
                      <option value="6">6 {{$t("DeviceRegForm.month")}}</option>
                      <option value="12">12 {{$t("DeviceRegForm.months")}}</option>
                      <option value="18">18 {{$t("DeviceRegForm.months")}}</option>
                      <option value="24">24 {{$t("DeviceRegForm.months")}}</option>
                    </select>
                  </div>
                </div>

                <div v-if="device.maintenance == 'true'" class="form-group col-sm-6">
                  <div class="form-group">
                    <label class="control-label" for="maintenanceMsg">{{$t("DeviceRegForm.notification")}}:</label>
                    <input name="maintenance_notification_desired" type="radio" id="maintenanceMsg" value="true" v-model="device.maintenanceMsg"/> {{$t("DeviceRegForm.yes")}}
                    <input name="maintenance_notification_desired" type="radio" id="maintenanceMsg_none" value="false" v-model="device.maintenanceMsg"/> {{$t("DeviceRegForm.no")}}
                  </div>
                  <div v-if="device.maintenanceMsg == 'true'" class="form-group">
                    <label name="maintenance_start" class="control-label" for="mBeginning">{{$t("DeviceRegForm.start")}}:</label>
                    <datepicker :language="lang" :disabled="state.disabled || !device.maintenanceMsg" :format="state.format" :placeholder="this.placeholder" id="mBeginning"
                                v-model="device.mBeginning" :readonly="false" input-class="form-control"  required="device.maintenanceMsg"></datepicker>
                  </div>
                  <div  v-if="device.maintenanceMsg == 'true'" class="form-group">
                    <label name="email_address_maintenance" class="control-label" for="email_address_maintenance">{{$t("DeviceRegForm.email")}}</label>
                    <input class="form-control" id="email_address_maintenance" v-model="device.email_address_maintenance">
                  </div>
                  <div v-if="device.maintenanceMsg == 'true'" class="form-group">
                    <label class="control-label" for="remind_intervall">{{$t("DeviceRegForm.remind")}}</label>
                    <select name="remind" class="form-control" id="remind_intervall" v-model="device.remind_intervall">
                      <option value="" :disabled="true">{{$t("DeviceRegForm.choose")}}</option>
                      <option value="6">1 {{$t("DeviceRegForm.month_before")}}</option>
                      <option value="12">2 {{$t("DeviceRegForm.months_before")}}</option>
                      <option value="18">3 {{$t("DeviceRegForm.months_before")}}</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-sm-12  text-left">
                  <legend class="modal-form-legend">{{$t("DeviceRegForm.calibration")}}</legend>
                </div>
              </div>
              <div class="row">
                <div class="form-group col-sm-6">
                  <div class="form-group">
                    <label name="calibration" class="control-label" for="calibration">{{$t("DeviceRegForm.calibration")}}</label>
                    <input name="calibration_desired" type="radio" id="calibration" value="true" v-model="device.calibration"> {{$t("DeviceRegForm.yes")}}
                    <input name="calibration_desired" type="radio" id="no_calibration" value="false" v-model="device.calibration"> {{$t("DeviceRegForm.no")}}
                  </div>
                  <div v-if="device.calibration == 'true'" class="form-group">
                    <label class="control-label" for="cInterval">{{$t("DeviceRegForm.cali_interval")}}</label>
                    <select name="calibration_interval" class="form-control" id="cInterval" v-model="device.cInterval" :disabled="!device.calibration"
                            :required="device.calibration">
                      <option value="" :disabled="true">{{$t("DeviceRegForm.choose")}}</option>
                      <option value="6">6 {{$t("DeviceRegForm.month")}}</option>
                      <option value="12">12 {{$t("DeviceRegForm.months")}}</option>
                      <option value="18">18 {{$t("DeviceRegForm.months")}}</option>
                      <option value="24">24 {{$t("DeviceRegForm.months")}}</option>
                    </select>
                  </div>
                </div>
                <div v-if="device.calibration == 'true'" class="form-group col-sm-6">
                  <div class="form-group">
                    <label class="control-label" for="calibrationMsg">{{$t("DeviceRegForm.notification")}}</label>
                    <input name="calibration_notification_desired" type="radio" id="calibrationMsg" v-model="device.calibrationMsg" value="true"> {{$t("DeviceRegForm.yes")}}
                    <input name="calibration_notification_desired" type="radio" id="calibrationMsg_none" v-model="device.calibrationMsg" value="false" > {{$t("DeviceRegForm.no")}}
                  </div>
                  <div v-if="device.calibrationMsg == 'true'" class="form-group">
                    <label class="control-label" for="cBeginning">{{$t("DeviceRegForm.start")}}:</label>
                    <datepicker name="calibration_start" input-class="form-control" :required="device.calibrationMsg" :language="lang"
                                :disabled="state.disabled || !device.calibrationMsg" :format="state.format" :placeholder="this.placeholder"
                                :id="cBeginning" :readonly="false" v-model="device.cBeginning"></datepicker>
                  </div>
                  <div v-if="device.calibrationMsg == 'true'" class="form-group">
                    <label class="control-label" for="email_address_calibration">{{$t("DeviceRegForm.email")}}</label>
                    <input name="email_address_calibration" class="form-control" id="email_address_calibration" v-model="device.email_address_calibration">
                  </div>
                  <div v-if="device.calibrationMsg == 'true'" class="form-group">
                    <label class="control-label" for="remind_intervall">{{$t("DeviceRegForm.remind")}}:</label>
                    <select name="remind" class="form-control" id="remind_intervall" v-model="device.remind_intervall">
                      <option value="" :disabled="true">{{$t("DeviceRegForm.choose")}}</option>
                      <option value="6">1 {{$t("DeviceRegForm.month_before")}}</option>
                      <option value="12">2 {{$t("DeviceRegForm.months_before")}}</option>
                      <option value="18">3 {{$t("DeviceRegForm.months_before")}}</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <div class="col-sm-offset-6 col-xs-6 col-sm-3">
              <button type="button" class="btn btn-block btn-md btn-cancel btn-modal" data-dismiss="modal">{{ $t('cancel') }}</button>
            </div>
            <div class="col-xs-6 col-sm-3">
              <input v-if="device.id == -1" type="submit" class="btn btn-block btn-md btn-primary btn-modal" v-bind:value="$t('register')">
              <input v-else type="submit" class="btn btn-block btn-md btn-primary btn-modal" v-bind:value="$t('save')">
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import Datepicker from 'vuejs-datepicker'
import auth from '../../auth'
var moment = require('moment')
var Vue = require('vue')
var limitDate = new Date();
limitDate.setDate(limitDate.getDate()-1);
export default {
  components: {
    Datepicker
  },
  name: 'device-registration-modal',
  props: [
    'device',
    'edit_index',
    'custom_category',
    'custom_category_name',
    'categories'
  ],
  data () {
    return {
      procmedia: [
        {id: 1, name: 'Wasser'},
        {id: 2, name: 'Argon'},
        {id: 3, name: 'Benzol'}
      ],
      technologies: [],
      state: {
        disabled: {
          to: limitDate
        },
        format: 'dd.MM.yyyy'
      }
    }
  },
  methods: {
    submit() {
      $('#device-registration-modal').modal('hide');
      if(this.custom_category) {
        this.device.category_id = this.custom_category;
        this.createCustomCategory();
      }

      this.device.technology = this.findTechnologyName(this.device.technology_id);
      this.device.mBeginning = moment(this.device.mBeginning).format().slice(0,10);//Datum ins richtige Format bringen
      this.device.cBeginning = moment(this.device.cBeginning).format().slice(0,10);
      if(this.device.id == -1) {
        auth.createDevice(this, this.device, this.$parent.$parent.$refs.toastr);
        this.$parent.$parent.$refs.toastr.Add({
          title: this.$t("UI.create_device_title"),
          msg: this.$t("UI.create_device_msg"),
          clickClose: true,
          timeout: 8000,
          position: "toast-top-right",
          type: "success"
        });
      } else {
        auth.updateDevice(this, this.device, this.$parent.$parent.$refs.toastr);
        this.$parent.updateDevice(this.device, this.edit_index);
        this.$parent.$parent.$refs.toastr.Add({
          title: this.$t("UI.update_device_title"),
          msg: this.$t("UI.update_device_msg"),
          clickClose: true,
          timeout: 8000,
          position: "toast-top-right",
          type: "success"
        });
      }
    },
    findTechnologyName(id) {
      var foundTechnology = this.technologies.filter(function (technology) {
        return technology.id === id;
      });

      return foundTechnology[0].name;
    },
    deviceCreated() {
      this.$parent.addDevice(this.device);
    },
    createCustomCategory() {
      auth.createNewCategory(this, {name: this.custom_category_name});
    },
    categoryCreated() {
      this.custom_category_name = "";
      this.$parent.getCategories();
    },
    getTechnologies() {
      auth.getTechnologies(this);
    }
  },
  computed: {
    lang: function () {
      return Vue.config.lang
    },
    placeholder: function () {
      return this.$t("DeviceRegForm.choose");
    }
  },
  mounted: function() {
    this.getTechnologies();
  }
}
</script>
<style lang="scss">
  @import '../../styles/colors';

  .modal-title {
    font-weight: bold;
    text-align: left;
  }

  .btn-modal.btn-cancel {
    background: $body-background;
    color: $primary-text-color;

    &:hover {
      background: $darker-body-background;
      color: $primary-text-color;
    }
  }

  .btn-modal.btn-primary {
    background: $btn-primary-bg;
    color: $btn-txt-color;

    &:hover {
      background: $btn-primary-bg-hover;
      color: $btn-txt-color-hover;
    }
  }

  .modal {
    .modal-dialog {
      .modal-content {
        background: $primary-bg-color;
        .modal-body {
          background: $body-background;
        }
        .modal-header, .modal-footer {
          .close {
            color: $body-background;
            opacity: 1;
            text-shadow: 0 0 $body-background !important;
            span {
              &:hover {
                color: $primary-link-color;
                text-shadow: 0 0 $primary-link-color !important;
              }
            }
          }
          text-align: center;
          color: white;
        }
      }
    }
  }

  legend.modal-form-legend {
    color: $primary-text-color;
    margin-bottom: 0;
    font-weight: bold;
  }

  .hr-line-dashed {
    border-top: 1px dashed #505050;
    height: 1px;
    margin: 20px 0;
  }

  .btn-primary:hover, .btn-cancel:hover {
    color: $body-background;
    background: $primary-bg-color;
  }

  #maintenance, #calibration, #maintenanceMsg, #calibrationMsg {
    margin-left: 1em;
  }

  .form-control[readonly], fieldset[disabled] .form-control {
    background-color: #fff;
    opacity: 1;
  }

  @media (max-width: 767px) {

    h1 {
      font-size: 1.5em;
    }
  }
</style>
