<template>
  <div id="device-registration-modal" class="modal inmodal fade" tabindex="-1" role="dialog"  aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">
            <span aria-hidden="true">×</span>
            <span class="sr-only">Schließen</span>
          </button>
          <h1 class="modal-title">{{$t("DeviceRegForm.title")}}</h1>
        </div>
        <form id="device-registration-form" class="ajax" role="form" v-on:submit.prevent="submit">
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
                  <select name="technology" class="form-control" id="technology" v-model="device.technology" required>
                    <option v-bind:value="item.id" v-for="item in technologies">{{item.name}}</option>
                  </select>
                </div>
              </div>
              <div class="form-group row" v-if="customCat">
                <div class="col-sm-12">
                  <label class="control-label" for="category">{{$t("DeviceRegForm.category")}}:</label>
                </div>
                <div class="col-xs-8 col-sm-6">
                  <input @keydown.enter="createCustomCategory" name="category" type="text" class="form-control"
                         id="custom_category" v-model="custom_category" required>
                </div>
                <div class="col-xs-4 col-sm-3">
                  <button type="button" class="btn btn-block btn-primary" @click="createCustomCategory">
                    <span class="glyphicon glyphicon-plus" aria-hidden="true"></span> &nbsp; {{ $t('DeviceRegForm.create_category') }}
                  </button>
                </div>
                <div class="col-xs-12 col-sm-3">
                  <input class="input-control" name="category" type="checkbox" v-model="customCat"> {{$t("DeviceRegForm.custom")}}
                </div>
              </div>
              <div class="form-group row" v-else>
                <div class="col-sm-12">
                  <label class="control-label" for="category">{{$t("DeviceRegForm.category")}}:</label>
                </div>
                <div class="col-sm-6">
                  <select name="category" class="form-control" id="category" required v-model="device.category">
                    <option v-bind:value="item.id" v-for="item in categories">{{item.name}}</option>
                  </select>
                </div>
                <div class="col-sm-3">
                  <div class="checkbox">
                    <label><input name="category" type="checkbox" v-model="customCat">
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
                      <option v-bind:value="item.id" v-for="item in procmedia">{{item.name}}</option>
                    </select>
                  </div>
                </div>
                <div class="form-group col-sm-6">
                  <div class="text-left">
                    <label class="control-label" for="tag">{{$t("DeviceRegForm.tag_number")}}:</label>
                    <input name="tagnumber" type="number" class="form-control" id="tag" v-model="device.tagnumber" required>
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
                  <div class="form-group">
                    <label name="maintenance" class="control-label" for="maintenance">{{$t("DeviceRegForm.maintenance")}}?</label>
                    <input name="maintenance_desired" type="checkbox" id="maintenance" v-model="device.maintenance"> {{$t("DeviceRegForm.yes")}}
                  </div>
                  <div class="form-group">
                    <label class="control-label" for="mInterval">{{$t("DeviceRegForm.interval")}}:</label>
                    <select name="maintenance_interval" class="form-control" id="mInterval" v-model="device.mInterval" :disabled="!device.maintenance"
                            :required="device.maintenance">
                      <option value="1">1 {{$t("DeviceRegForm.month")}}</option>
                      <option value="3">3 {{$t("DeviceRegForm.months")}}</option>
                      <option value="6">6 {{$t("DeviceRegForm.months")}}</option>
                    </select>
                  </div>
                </div>
                <div class="form-group col-sm-6">
                  <div class="form-group">
                    <label class="control-label" for="maintenanceMsg">{{$t("DeviceRegForm.notification")}}?</label>
                    <input name="maintenance_notification_desired" type="checkbox" id="maintenanceMsg" v-model="device.maintenanceMsg"/> {{$t("DeviceRegForm.yes")}}
                  </div>
                  <div class="form-group">
                    <label name="maintenance_start" class="control-label" for="mBeginning">{{$t("DeviceRegForm.start")}}:</label>
                    <input type="date" class="form-control" id="mBeginning" v-model="device.mBeginning"
                           :disabled="!device.maintenanceMsg" :required="device.maintenanceMsg" :min="today">
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
                    <label name="calibration" class="control-label" for="calibration">{{$t("DeviceRegForm.calibration")}}?</label>
                    <input name="calibration_desired" type="checkbox" id="calibration" v-model="device.calibration"> {{$t("DeviceRegForm.yes")}}
                  </div>
                  <div class="form-group">
                    <label class="control-label" for="cInterval">{{$t("DeviceRegForm.interval")}}:</label>
                    <select name="calibration_interval" class="form-control" id="cInterval" v-model="device.cInterval" :disabled="!device.calibration"
                            :required="device.calibration">
                      <option value="1">1 {{$t("DeviceRegForm.month")}}</option>
                      <option value="3">3 {{$t("DeviceRegForm.months")}}</option>
                      <option value="6">6 {{$t("DeviceRegForm.months")}}</option>
                    </select>
                  </div>
                </div>
                <div class="form-group col-sm-6">
                  <div class="form-group">
                    <label class="control-label" for="calibrationMsg">{{$t("DeviceRegForm.notification")}}?</label>
                    <input name="calibration_notification_desired" type="checkbox" id="calibrationMsg" v-model="device.calibrationMsg" value="1"> {{$t("DeviceRegForm.yes")}}
                  </div>
                  <div class="form-group">
                    <label class="control-label" for="cBeginning">{{$t("DeviceRegForm.start")}}:</label>
                    <input name="calibration_start" type="date" class="form-control" id="cBeginning" v-model="device.cBeginning"
                           :disabled="!device.calibrationMsg" :required="device.calibrationMsg" :min="today">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <div class="col-sm-offset-6 col-xs-6 col-sm-3">
              <button type="button" class="btn btn-block btn-md btn-cancel btn-modal" v-on:click="closeModalAndReset()" data-dismiss="modal">{{ $t('cancel') }}</button>
            </div>
            <div class="col-xs-6 col-sm-3">
              <input type="submit" class="btn btn-block btn-md btn-primary btn-modal" v-bind:value="$t('register')"></input>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import auth from '../auth'

export default {
  name: 'device-registration-modal',
  data () {
    return {
      custom_category: '',
      device: {
        technology: '',
        category: '',
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
      },
      categories: [],
      technologies: [
        {id: 1, name: 'Rotamass'},
        {id: 2, name: 'Flowmeter'}
      ],
      customCat: 0, //boolean, if true can create own category
      procmedia: [
        {id: 1, name: 'Wasser'},
        {id: 2, name: 'Argon'},
        {id: 3, name: 'Benzol'}
      ]
    }
  },
  methods: {
    submit() {
      this.closeModalAndReset();
      var device = {
        id: this.$parent.selected_device_id,
        technology: this.device.technology,
        category: this.device.category,
        devicelabel: this.device.devicelabel,
        serialnumber: this.device.serialnumber,
        procmedium: this.device.procmedium,
        comment: this.device.comment,
        mInterval: this.device.mInterval,
        mBeginning: this.device.mBeginning,
        calibration: this.device.calibration,
        maintenance: this.device.maintenance,
        maintenanceMsg: this.device.maintenanceMsg,
        cInterval: this.device.cInterval,
        calibrationMsg: this.device.calibrationMsg,
        cBeginning: this.device.cBeginning
      }
      if (device.id == -1) {
        this.$parent.addDevice(device);
      } else {
        this.$parent.updateDevice(device);
      }
    },
    getCategories() {
      auth.getCategories(this)
    },
    createCustomCategory() {
      auth.createNewCategory(this, {name: this.custom_category});
    },
    categoryCreated() {
      this.customCat = 0;
      this.custom_category = "";
      this.getCategories();
    },
    closeModalAndReset() {
       $('#device-registration-modal').modal('hide');
       $('#device-registration-form')[0].reset();
    }
  },
  mounted: function() {
    this.getCategories()
  },
  computed: {
    today: function() {
      var today = new Date().toISOString().slice(0, 10);
      return today.toString();
    }
  }

}
</script>
<style lang="scss">
  @import '../styles/_colors';

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

  @media (max-width: 767px) {

    h1 {
      font-size: 1.5em;
    }
  }
</style>
