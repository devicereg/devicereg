<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div class="row">
  <div class="col-sm-12">
      <h1>{{ $t("Contact.header") }}</h1>

      <h4>{{ $t("Contact.titel") }}</h4>
      <div class="table-responsive">
        <table id="contact-table" class="table">
          <thead>
            <tr>
              <th>
                <label for="country-select">{{ $t("country") }}:</label>
              </th>
              <th>
                <select id="country-select" v-model="selected">
                  <option v-bind:value="item.value" v-for="item in items">{{item.name}}</option>
                </select>
              </th>
            </tr>
          </thead>
          <tbody>
          <tr v-if="items[selected-1].address">
            <td><strong>{{ $t("address") }}:</strong></td>
            <td v-html="items[selected-1].address"></td>
          </tr>
          <tr v-if="items[selected-1].poBox">
            <td><strong>{{ $t("Contact.box_address") }}:</strong></td>
            <td>{{ items[selected-1].poBox }}</td>
          </tr>
          <tr v-if="items[selected-1].email">
            <td><strong>{{ $t("email") }}:</strong></td>
            <td>
              <a href='mailto:'>{{ items[selected-1].email }}</a>
            </td>
          </tr>
          <tr v-if="items[selected-1].phone">
            <td><strong>{{ $t("phone") }}:</strong></td>
            <td>{{ items[selected-1].phone }}</td>
          </tr>
          </tbody>
        </table>
      </div>
      <h4>{{ $t("Contact.register_problems") }}?</h4>
      <p>{{ $t("Contact.contact") }}: <a href="mailto:YDS.Support@eu.yokogawa.com">YDS.Support@eu.yokogawa.com</a></p>
      <h4>{{ $t("Contact.more") }}?</h4>
      <p>{{ $t("Contact.visit") }}: <a href="http://www.yokogawa.com/eu">www.yokogawa.com/eu</a></p>
    </div>
  </div>
</template>

<script>
import Contact from "../static/Contact.json"

export default {
  name: 'Contact',
  data () {
    return {
      selected: '1',
      items: Contact
    }
  }
}
</script>

<style scoped>
  option {
    font-weight: normal;
  }

  label {
    float: left;
    padding-right: 2em;
  }

  #contact-table {
    margin-top: 1.5em;
    width:100%;
    float: left;
  }

</style>
