<template>
  <div id="devreg" class="container-fluid col-sm-offset-2 col-sm-8">
    <div class="row text-left">
      <h2 class="col-sm-12">{{$t("DeviceRegForm.title")}}</h2>
    </div>
    <br>
    <form id="#device-registration-form" role="form">
      <div class="form-group row">
        <div class="col-sm-10  text-left">
          <legend>{{$t("DeviceRegForm.categorization")}}</legend>
        </div>
      </div>
      <div class="form-group row">
        <div class="col-sm-4  text-left">
          <label class="control-label" for="technology">{{$t("DeviceRegForm.technology")}}:</label>
        </div>
        <div class="col-sm-4 ">
          <select name="technology" class="form-control" id="technology" v-model="device.technology" required>
            <option v-bind:value="item.id" v-for="item in technologies">{{item.name}}</option>
          </select>
        </div>
      </div>
      <div class="form-group row">
        <div class="col-sm-2  text-left">
          <label class="control-label" for="category">{{$t("DeviceRegForm.category")}}:</label>
        </div>
        <div class="col-sm-2 checkCat">
          <div class="pull-right">
            <input name="category" type="checkbox" v-model="customCat"> {{$t("DeviceRegForm.custom")}}
          </div>
        </div>
        <div class="col-sm-4" v-if="customCat">
          <input name="category" type="text" class="form-control" id="custom_category" v-model="custom_category" required>
          <input type="submit" class="form-control" @click="createCustomCategory" :value="$t('DeviceRegForm.save_category')">
        </div>
        <div class="col-sm-4" v-else>
          <select name="category" class="form-control" id="category" required v-model="device.category">
            <option v-bind:value="item.id" v-for="item in categories">{{item.name}}</option>
          </select>
        </div>
      </div>
      <br>
      <div class="form-group row">
        <div class="col-sm-10  text-left">
          <legend>{{$t("DeviceRegForm.description_data")}}</legend>
        </div>
      </div>
      <div class="form-group row">
        <div class="col-sm-4  text-left">
          <label class="control-label" for="serialnumber">{{$t("DeviceRegForm.serial_number")}}:</label>
        </div>
        <div class="col-sm-4 ">
          <input name="serialnumber" type="text" class="form-control" id="serialnumber" v-model="device.serialnumber" required
                 pattern="[A-Z]{1}[0-9]{8}">
        </div>
      </div>
      <div class="form-group row">
        <div class="col-sm-4  text-left">
          <label class="control-label" for="devicelabel">{{$t("DeviceRegForm.label")}}:</label>
        </div>
        <div class="col-sm-4 ">
          <input name="label" type="text" class="form-control" id="devicelabel" v-model="device.devicelabel" required>
        </div>
      </div>
      <div class="form-group row">
        <div class="col-sm-4  text-left">
          <label class="control-label" for="procmedium">{{$t("DeviceRegForm.process_fluid")}}:</label>
        </div>
        <div class="col-sm-4 ">
          <select name="process_fluid" class="form-control" id="procmedium" v-model="device.procmedium" required>
            <option v-bind:value="item.id" v-for="item in procmedia">{{item.name}}</option>
          </select>
        </div>
      </div>
      <div class="form-group row">
        <div class="col-sm-4  text-left">
          <label class="control-label" for="tag">{{$t("DeviceRegForm.tag_number")}}:</label>
        </div>
        <div class="col-sm-4 ">
          <input name="tagnumber" type="number" class="form-control" id="tag" v-model="device.tagnumber" required>
        </div>
      </div>
      <div class="form-group row">
        <div class="col-sm-4  text-left">
          <label class="control-label" for="comment">{{$t("DeviceRegForm.comment")}}:</label>
        </div>
        <div class="col-sm-4 ">
          <textarea name="comment" class="form-control" cols="40" rows="5" id="comment" v-model="device.comment"></textarea>
        </div>
      </div>
      <br>
      <div class="form-group row">
        <div class="col-sm-10  text-left">
          <legend class="text-capitalize">{{$t("DeviceRegForm.maintenance")}}</legend>
        </div>
      </div>
      <div class="form-group row">
        <div class="col-sm-2  text-left">
          <label name="maintenance" class="control-label" for="maintenance">{{$t("DeviceRegForm.maintenance")}}:</label>
        </div>
        <div class="col-sm-2 ">
          <input name="maintenance_desired" type="checkbox" id="maintenance" v-model="device.maintenance"> {{$t("DeviceRegForm.yes")}}
        </div>
        <div class="col-sm-2 text-left">
          <label class="control-label" for="mInterval">{{$t("DeviceRegForm.interval")}}:</label>
        </div>
        <div class="col-sm-2">
          <select name="maintenance_interval" class="form-control" id="mInterval" v-model="device.mInterval" :disabled="!device.maintenance"
                  :required="device.maintenance">
            <option value="1">1 {{$t("DeviceRegForm.month")}}</option>
            <option value="3">3 {{$t("DeviceRegForm.months")}}</option>
            <option value="6">6 {{$t("DeviceRegForm.months")}}</option>
          </select>
        </div>
      </div>
      <div class="form-group row">
        <div class="col-sm-2  text-left">
          <label class="control-label" for="maintenanceMsg">{{$t("DeviceRegForm.notification")}}:</label>
        </div>
        <div class="col-sm-2 ">
          <input name="maintenance_notification_desired" type="checkbox" id="maintenanceMsg" v-model="device.maintenanceMsg"> {{$t("DeviceRegForm.yes")}}
        </div>
        <div class="col-sm-2 text-left">
          <label name="maintenance_start" class="control-label" for="mBeginning">{{$t("DeviceRegForm.start")}}:</label>
        </div>
        <div class="col-sm-2">
          <input type="date" class="form-control" id="mBeginning" v-model="device.mBeginning"
                 :disabled="!device.maintenanceMsg" :required="device.maintenanceMsg" :min="today">
        </div>
      </div>
      <div class="form-group row">
        <div class="col-sm-10  text-left">
          <legend class="text-capitalize">{{$t("DeviceRegForm.calibration")}}</legend>
        </div>
      </div>
      <div class="form-group row">
      <div class="col-sm-2  text-left">
        <label name="calibration" class="control-label" for="calibration">{{$t("DeviceRegForm.calibration")}}:</label>
      </div>
      <div class="col-sm-2 ">
        <input name="calibration_desired" type="checkbox" id="calibration" v-model="device.calibration"> {{$t("DeviceRegForm.yes")}}
      </div>
      <div class="col-sm-2 text-left">
        <label class="control-label" for="cInterval">{{$t("DeviceRegForm.interval")}}:</label>
      </div>
      <div class="col-sm-2">
        <select name="calibration_interval" class="form-control" id="cInterval" v-model="device.cInterval" :disabled="!device.calibration"
                :required="device.calibration">
          <option value="1">1 {{$t("DeviceRegForm.month")}}</option>
          <option value="3">3 {{$t("DeviceRegForm.months")}}</option>
          <option value="6">6 {{$t("DeviceRegForm.months")}}</option>
        </select>
      </div>
    </div>
    <div class="form-group row">
      <div class="col-sm-2  text-left">
        <label class="control-label" for="calibrationMsg">{{$t("DeviceRegForm.notification")}}:</label>
      </div>
      <div class="col-sm-2 ">
        <input name="calibration_notification_desired" type="checkbox" id="calibrationMsg" v-model="device.calibrationMsg" value="1"> {{$t("DeviceRegForm.yes")}}
      </div>
      <div class="col-sm-2 text-left">
        <label class="control-label" for="cBeginning">{{$t("DeviceRegForm.start")}}:</label>
      </div>
      <div class="col-sm-2">
        <input name="calibration_start" type="date" class="form-control" id="cBeginning" v-model="device.cBeginning"
               :disabled="!device.calibrationMsg" :required="device.calibrationMsg" :min="today">
      </div>
    </div>
    <div class="form-group row" style="margin-bottom: 100px; margin-top:50px;">
        <div class="col-sm-offset-4 col-sm-2">
          <button class="btn btn-block btn-lg btn-cancel">{{$t("cancel")}}</button>
        </div>
        <div class="col-sm-2">
          <button class="btn btn-block btn-lg btn-primary" @click="submit()">{{$t("save")}}</button>
        </div>
      </div>
    </form>
  </div>

</template>

<script>
import auth from '../auth'
export default {
  name: 'devreg',
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
      if ($("#device-registration-form").valid()) {
        var device = {
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

        auth.createDevice(this, device, '/my-devices');
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

  .checkCat {
    padding-top: 8px;
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
</style>
