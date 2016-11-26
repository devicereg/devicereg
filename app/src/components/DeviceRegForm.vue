
<template>
  <div id="devreg" class="container-fluid col-sm-offset-2 col-sm-8">
    <div class="row text-left">
        <h2>Gerät registrieren</h2>
    </div><br>
    <form>
      <div class="row">
        <div class="col-sm-10 col-sm-offset-1 text-left">
          <h3>Gerätekategorisierung</h3>
        </div>
      </div>
      <hr><br>
      <div class="row" id="form-row">
        <div class="col-sm-2 col-sm-offset-1 text-left">
          <label for="technology">Technologie:</label>
        </div>
        <div class="col-sm-4 col-sm-offset-2">
          <select class="form-control" id="technology" v-model="device.technology">
            <option v-bind:value="item" v-for="item in technologies">{{item.name}}</option>
          </select>
        </div>
      </div>
      <div class="row" id="form-row">
        <div class="col-sm-2 col-sm-offset-1 text-left">
          <label for="category" class="control-label">Gerätekategorie:</label>
        </div>
        <div class="col-sm-4 col-sm-offset-2">
          <input type="text" class="form-control" id="category" v-model="device.category" v-if="customCat">
          <select class="form-control" id="category" v-model="device.category" v-else>
            <option v-bind:value="item" v-for="item in categories">{{item.name}}</option>
          </select>
        </div>
        <div class="col-sm-2" id="checkCat">
          <input type="checkbox" value="1" v-model="customCat"> Benutzerdefiniert
        </div>
      </div>
      <br>
      <div class="row" id="form-row">
        <div class="col-sm-10 col-sm-offset-1 text-left">
          <h3>Daten zur Gerätebeschreibung</h3>
        </div>
      </div>
      <hr><br>
      <div class="row" id="form-row">
        <div class="col-sm-2 col-sm-offset-1 text-left">
          <label for="serialnumber">Serienummer:</label>
        </div>
        <div class="col-sm-4 col-sm-offset-2">
          <input type="text" class="form-control" id="serialnumber" v-model="device.serialnumber">
        </div>
      </div>
      <div class="row" id="form-row">
        <div class="col-sm-2 col-sm-offset-1 text-left">
          <label for="devicelabel">Gerätebezeichnung:</label>
        </div>
        <div class="col-sm-4 col-sm-offset-2">
          <input type="text" class="form-control" id="devicelabel" v-model="device.devicelabel">
        </div>
      </div>
      <div class="row" id="form-row">
        <div class="col-sm-2 col-sm-offset-1 text-left">
          <label for="procmedium">Prozessmedium:</label>
        </div>
        <div class="col-sm-4 col-sm-offset-2">
          <select class="form-control" id="procmedium" v-model="device.procmedium">
            <option v-bind:value="item" v-for="item in procmedia">{{item.name}}</option>
          </select>
        </div>
      </div>
      <div class="row" id="form-row">
        <div class="col-sm-2 col-sm-offset-1 text-left">
          <label for="tag">Tagnummer:</label>
        </div>
        <div class="col-sm-4 col-sm-offset-2">
          <input type="number" class="form-control" id="tag" v-model="device.tagnumber">
        </div>
      </div>
      <div class="row" id="form-row">
        <div class="col-sm-2 col-sm-offset-1 text-left">
          <label for="comment">Kommentar:</label>
        </div>
        <div class="col-sm-4 col-sm-offset-2">
          <textarea class="form-control" cols="40" rows="5" id="comment" v-model="device.comment">
        </div>
      </div>
      <br>
      <div class="row">
        <div class="col-sm-10 col-sm-offset-1 text-left">
          <h3>Wartung und Kalibrierung</h3>
        </div>
      </div>
      <hr><br>
      <div class="row" id="form-row">
        <div class="col-sm-1 col-sm-offset-1 text-left">
          <label for="maintenance">Wartung:</label>
        </div>
        <div class="col-sm-1 col-sm-offset-1">
            <input type="checkbox" id="maintenance" v-model="device.maintenance"> Ja
        </div>
        <div class="col-sm-1 text-left">
          <label for="mInterval">Intervall:</label>
        </div>
        <div class="col-sm-3 col-sm-offset-1">
          <select class="form-control" id="mInterval" v-model="device.mInterval">
            <option v-bind:value="item" v-for="item in intervals">{{item.name}}</option>
          </select>
        </div>
      </div>
      <div class="row" id="form-row">
        <div class="col-sm-1 col-sm-offset-1 text-left">
          <label for="maintenanceMsg">Benachrichtigung:</label>
        </div>
        <div class="col-sm-1 col-sm-offset-1">
            <input type="checkbox" id="maintenanceMsg" v-model="device.maintenanceMsg"> Ja
        </div>
        <div class="col-sm-1 text-left">
          <label for="mBeginning">Beginn:</label>
        </div>
        <div class="col-sm-3 col-sm-offset-1">
          <input type="date" class="form-control" id="mBeginning" v-model="device.mBeginning">
        </div>
      </div>
      <div class="row" id="form-row">
        <div class="col-sm-1 col-sm-offset-1 text-left">
          <label for="calibration">Kalibrierung:</label>
        </div>
        <div class="col-sm-1 col-sm-offset-1">
            <input type="checkbox" id="calibration" v-model="device.calibration"> Ja
        </div>
        <div class="col-sm-1 text-left">
          <label for="cInterval">Intervall:</label>
        </div>
        <div class="col-sm-3 col-sm-offset-1">
          <select class="form-control" id="cInterval" v-model="device.cInterval">
            <option v-bind:value="item" v-for="item in intervals">{{item.name}}</option>
          </select>
        </div>
      </div>
      <div class="row" id="form-row">
        <div class="col-sm-1 col-sm-offset-1 text-left">
          <label for="calibrationMsg">Benachrichtigung:</label>
        </div>
        <div class="col-sm-1 col-sm-offset-1">
            <input type="checkbox" id="calibrationMsg" v-model="device.calibrationMsg"> Ja
        </div>
        <div class="col-sm-1 text-left">
          <label for="cBeginning">Beginn:</label>
        </div>
        <div class="col-sm-3 col-sm-offset-1">
          <input type="date" class="form-control" id="cBeginning" v-model="device.cBeginning">
        </div>
      </div>
      <div class="row" style="margin-bottom: 100px; margin-top:50px;">
        <div class="col-sm-4 col-sm-offset-1">
          <button type="submit" class="btn-block btn-lg">Speichern</button>
        </div>
        <div class="col-sm-4 col-sm-offset-2">
          <button type="button" class="btn-block btn-lg">Abbrechen</button>
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
        procmedium: '', //Process medium, e.g.H2O
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
        {name: 'Cat1', value: '1'},
        {name: 'Cat2', value: '2'}
      ],
      technologies: [
        {name: 'Rotamass', value: '1'},
        {name: 'Flowmeter', value: '2'}
      ],
      intervals: [
        {name: '1 Monat', value: '1'},
        {name: '3 Monate', value: '2'},
        {name: '6 Monate', value: '3'}
      ],
      customCat: '', //boolean, if true can create own category
      procmedia: [
        {name: 'H2O', value: '1'}
      ]


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
button{
  background-color: #719597;
  color: white;
}
</style>
