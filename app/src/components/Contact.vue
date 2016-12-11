<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div id="kontakt" class="container-fluid col-sm-offset-2 col-sm-8">
    <div class="row">
      <div class="col-sm-11 col-sm-offset-1">
        <h3 class="text-left">{{ $t("Contact.titel") }}</h3>
        <div class="form-group">
          <label class="col-sm-2 control-label text-left">{{ $t("country") }}:</label>
          <select id="country-select" class="form-control" v-model="selected">
            <option v-bind:value="item" v-for="item in items">{{item.name}}</option>
          </select>
        </div>
        <table id="contact-table" class="table table-hover">
          <tbody>
          <tr v-if="selected.address">
            <td class="text-left"><strong>{{ $t("address") }}:</strong></td>
            <td v-html="selected.address"></td>
          </tr>
          <tr v-if="selected.poBox">
            <td class="text-left"><strong>{{ $t("Contact.box_address") }}:</strong></td>
            <td>{{ selected.poBox }}</td>
          </tr>
          <tr v-if="selected.email">
            <td class="text-left"><strong>{{ $t("email") }}:</strong></td>
            <td>
              <a href='mailto:'>{{ selected.email }}</a>
            </td>
          </tr>
          <tr v-if="selected.phone">
            <td class="text-left"><strong>{{ $t("phone") }}:</strong></td>
            <td>{{ selected.phone }}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-sm-11 col-sm-offset-1">
        <h4 class="text-left">{{ $t("Contact.register_problems") }}?</h4>
        <p class="text-left">{{ $t("Contact.contact") }}: <a href="mailto:YDS.Support@eu.yokogawa.com">YDS.Support@eu.yokogawa.com</a></p>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-sm-11 col-sm-offset-1">
        <h4 class="text-left">{{ $t("Contact.more") }}?</h4>
        <p class="text-left">{{ $t("Contact.visit") }}: <a href="http://www.yokogawa.com/eu">www.yokogawa.com/eu</a></p>
      </div>
    </div>
  </div>
</template>

<script>
import Contact from "../static/Contact.json"

export default {
  name: 'Contact',
  data () {
    return {
      selected: '0',
      items: Contact
    }
  }
}
</script>

<style>
  #contact-table {
    margin-top: 1.5em;
    width:50%;

  }
  #country-select {
    width: 30%;
  }
  hr{
    border-top: 1px solid #000000;
  }

</style>
