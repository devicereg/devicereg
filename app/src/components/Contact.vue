<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div class="container-fluid col-md-offset-2 col-md-8 text-left">
    <div class="row">
    <h1>{{ $t("Contact.header") }}</h1>

      <h3>{{ $t("Contact.titel") }}</h3>
      <div class="form-group">
        <label class="control-label" for="country-select">{{ $t("country") }}:</label>
        <select id="country-select" class="form-control" v-model="selected">
          <option v-bind:value="item" v-for="item in items">{{item.name}}</option>
        </select>
      </div>
      <table id="contact-table" class="table table-hover">
        <tbody>
        <tr v-if="selected.address">
          <td><strong>{{ $t("address") }}:</strong></td>
          <td v-html="selected.address"></td>
        </tr>
        <tr v-if="selected.poBox">
          <td><strong>{{ $t("Contact.box_address") }}:</strong></td>
          <td>{{ selected.poBox }}</td>
        </tr>
        <tr v-if="selected.email">
          <td><strong>{{ $t("email") }}:</strong></td>
          <td>
            <a href='mailto:'>{{ selected.email }}</a>
          </td>
        </tr>
        <tr v-if="selected.phone">
          <td><strong>{{ $t("phone") }}:</strong></td>
          <td>{{ selected.phone }}</td>
        </tr>
        </tbody>
      </table>
    </div>
      <h3>{{ $t("Contact.register_problems") }}?</h3>
      <p>{{ $t("Contact.contact") }}: <a href="mailto:YDS.Support@eu.yokogawa.com">YDS.Support@eu.yokogawa.com</a></p>
      <h3>{{ $t("Contact.more") }}?</h3>
      <p>{{ $t("Contact.visit") }}: <a href="http://www.yokogawa.com/eu">www.yokogawa.com/eu</a></p>
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

  h3 {

  }

  label {
    float: left;
    padding-right: 2em;
  }
  #contact-table {
    margin-top: 1.5em;
    width:50%;
    float: left;
  }
  #country-select {
    width: 30%;
  }

</style>
