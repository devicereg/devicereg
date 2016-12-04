
<template>
  <div id="devreg" class="container-fluid col-sm-offset-2 col-sm-8">
    <div class="row text-left">
        <h2>{{$t("DeviceRegForm.title")}}</h2>
    </div><br>
    <form>
      <div class="row">
        <div class="col-sm-10 col-sm-offset-1 text-left">
          <h3>{{$t("DeviceRegForm.categorization")}}</h3>
        </div>
      </div>
      <hr><br>
      <div class="row" id="form-row">
        <div class="col-sm-2 col-sm-offset-1 text-left">
          <label for="technology">{{$t("DeviceRegForm.technology")}}:</label>
        </div>
        <div class="col-sm-4 col-sm-offset-1">
          <select class="form-control" id="technology" v-model="device.technology" required>
            <option v-bind:value="item" v-for="item in technologies">{{item.name}}</option>
          </select>
        </div>
      </div>
      <div class="row" id="form-row">
        <div class="col-sm-2 col-sm-offset-1 text-left">
          <label for="category" class="control-label">{{$t("DeviceRegForm.category")}}:</label>
        </div>
        <div class="col-sm-4 col-sm-offset-1">
          <input type="text" class="form-control" id="category" v-model="device.category" v-if="customCat" required>
          <select class="form-control" id="category" required v-model="device.category" v-else>
            <option v-bind:value="item" v-for="item in categories">{{item.name}}</option>
          </select>
        </div>
        <div class="col-sm-2" id="checkCat">
          <input type="checkbox" v-model="customCat"> {{$t("DeviceRegForm.custom")}}
        </div>
      </div>
      <br>
      <div class="row" id="form-row">
        <div class="col-sm-10 col-sm-offset-1 text-left">
          <h3>{{$t("DeviceRegForm.description_data")}}</h3>
        </div>
      </div>
      <hr><br>
      <div class="row" id="form-row">
        <div class="col-sm-2 col-sm-offset-1 text-left">
          <label for="serialnumber">{{$t("DeviceRegForm.serial_number")}}:</label>
        </div>
        <div class="col-sm-4 col-sm-offset-1">
          <input type="text" class="form-control" id="serialnumber" v-model="device.serialnumber" required pattern="[A-Z]{1}[0-9]{8}">
        </div>
      </div>
      <div class="row" id="form-row">
        <div class="col-sm-2 col-sm-offset-1 text-left">
          <label for="devicelabel">{{$t("DeviceRegForm.label")}}:</label>
        </div>
        <div class="col-sm-4 col-sm-offset-1">
          <input type="text" class="form-control" id="devicelabel" v-model="device.devicelabel" required>
        </div>
      </div>
      <div class="row" id="form-row">
        <div class="col-sm-2 col-sm-offset-1 text-left">
          <label for="procmedium">{{$t("DeviceRegForm.process_fluid")}}:</label>
        </div>
        <div class="col-sm-4 col-sm-offset-1">
          <select class="form-control" id="procmedium" v-model="device.procmedium" required>
            <option v-bind:value="item" v-for="item in procmedia">{{item.name}}</option>
          </select>
        </div>
      </div>
      <div class="row" id="form-row">
        <div class="col-sm-2 col-sm-offset-1 text-left">
          <label for="tag">{{$t("DeviceRegForm.tag_number")}}:</label>
        </div>
        <div class="col-sm-4 col-sm-offset-1">
          <input type="number" class="form-control" id="tag" v-model="device.tagnumber" required>
        </div>
      </div>
      <div class="row" id="form-row">
        <div class="col-sm-2 col-sm-offset-1 text-left">
          <label for="comment">{{$t("DeviceRegForm.comment")}}:</label>
        </div>
        <div class="col-sm-4 col-sm-offset-1">
          <textarea class="form-control" cols="40" rows="5" id="comment" v-model="device.comment">
        </div>
      </div>
      <br>
      <div class="row">
        <div class="col-sm-10 col-sm-offset-1 text-left">
          <h3>{{$t("DeviceRegForm.maintenance_and_calibration")}}</h3>
        </div>
      </div>
      <hr><br>
      <div class="row" id="form-row">
        <div class="col-sm-1 col-sm-offset-1 text-left">
          <label for="maintenance">{{$t("DeviceRegForm.maintenance")}}:</label>
        </div>
        <div class="col-sm-1 col-sm-offset-1">
            <input type="checkbox" id="maintenance" v-model="device.maintenance"> {{$t("DeviceRegForm.yes")}}
        </div>
        <div class="col-sm-1 text-left">
          <label for="mInterval">{{$t("DeviceRegForm.interval")}}:</label>
        </div>
        <div class="col-sm-3">
          <select class="form-control" id="mInterval" v-model="device.mInterval" :disabled="!device.maintenance" :required="device.maintenance">
            <option value="1">1 {{$t("DeviceRegForm.month")}}</option>
            <option value="3">3 {{$t("DeviceRegForm.months")}}</option>
            <option value="6">6 {{$t("DeviceRegForm.months")}}</option>
          </select>
        </div>
      </div>
      <div class="row" id="form-row">
        <div class="col-sm-1 col-sm-offset-1 text-left">
          <label for="maintenanceMsg">{{$t("DeviceRegForm.notification")}}:</label>
        </div>
        <div class="col-sm-1 col-sm-offset-1">
            <input type="checkbox" id="maintenanceMsg" v-model="device.maintenanceMsg"> {{$t("DeviceRegForm.yes")}}
        </div>
        <div class="col-sm-1 text-left">
          <label for="mBeginning">{{$t("DeviceRegForm.start")}}:</label>
        </div>
        <div class="col-sm-3">
          <input type="date" class="form-control" id="mBeginning" v-model="device.mBeginning" :disabled="!device.maintenanceMsg" :required="device.maintenanceMsg">
        </div>
      </div>
      <div class="row" id="form-row">
        <div class="col-sm-1 col-sm-offset-1 text-left">
          <label for="calibration">{{$t("DeviceRegForm.calibration")}}:</label>
        </div>
        <div class="col-sm-1 col-sm-offset-1">
            <input type="checkbox" id="calibration" v-model="device.calibration"> {{$t("DeviceRegForm.yes")}}
        </div>
        <div class="col-sm-1 text-left">
          <label for="cInterval">{{$t("DeviceRegForm.interval")}}:</label>
        </div>
        <div class="col-sm-3">
          <select class="form-control" id="cInterval" v-model="device.cInterval" :disabled="!device.calibration" :required="device.calibration">
            <option value="1">1 {{$t("DeviceRegForm.month")}}</option>
            <option value="3">3 {{$t("DeviceRegForm.months")}}</option>
            <option value="6">6 {{$t("DeviceRegForm.months")}}</option>
          </select>
        </div>
      </div>
      <div class="row" id="form-row">
        <div class="col-sm-1 col-sm-offset-1 text-left">
          <label for="calibrationMsg">{{$t("DeviceRegForm.notification")}}:</label>
        </div>
        <div class="col-sm-1 col-sm-offset-1">
            <input type="checkbox" id="calibrationMsg" v-model="device.calibrationMsg"> {{$t("DeviceRegForm.yes")}}
        </div>
        <div class="col-sm-1 text-left">
          <label for="cBeginning">{{$t("DeviceRegForm.start")}}:</label>
        </div>
        <div class="col-sm-3">
          <input type="date"  class="form-control" id="cBeginning" v-model="device.cBeginning" :disabled="!device.calibrationMsg" :required="device.calibrationMsg">
        </div>
      </div>
      <div class="row" style="margin-bottom: 100px; margin-top:50px;">
        <div class="col-sm-3 col-sm-offset-1">
          <button class="btn-block btn-lg btn-primary" id="btn-custom" @click="submit()">{{$t("save")}}</button>
        </div>
        <div class="col-sm-3 col-sm-offset-3">
          <button class="btn-block btn-lg btn-primary" id="btn-custom">{{$t("cancel")}}</button>
        </div>
      </div>
    </form>
  </div>

</template>

<script>
export default {
  name: 'devreg',
  data () {
    return {
      device: {
        technology: '',
        category: '',
        devicelabel: '',
        serialnumber: '',
        procmedium: '', //Process fluid, e.g.H2O
        comment: '',
        mInterval: '', //Interval for maintenance schedule
        mBeginning: '', //start date of recieving notifications about maintenance schedules
        calibration: '', //boolean, true if calibration desired
        maintenance: '', //boolean, true if maintenance desired
        maintenanceMsg: '', //boolean, true if notifications about maintenance schedule desired
        cInterval: '', //Interval for calibration schedule
        calibrationMsg: '', //boolean, true if notifications about calibration schedule desired
        cBeginning: '' //start date of recieving notifications about calibration schedules
      },
      categories: [
        {name: 'Cat1'},
        {name: 'Cat2'}
      ],
      technologies: [
        {name: 'Rotamass'},
        {name: 'Flowmeter'}
      ],
      customCat: '', //boolean, if true can create own category
      procmedia: [
        {name: 'H2O'}
      ]
    }
  },
  methods: {

    submit() {
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

      this.$http.post('~/api/user/device', {device},function() {
        window.location.replace("/");
      });
    }
  }
}
</script>
<style>
#form-row{
  margin-top: 15px;
  margin-bottom: 15px;
}
#checkCat{
  padding-top: 8px;
}
#btn-custom{
  background-color: #3b5b71;
  color: white;
}
#btn-custom:hover{
  background-color: white;
  color: #3b5b71;
}

</style>
