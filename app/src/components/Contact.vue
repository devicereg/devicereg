<template>
  <div>
    <div class="col-md-9 col-sm-9 col-xs-12">
      <h1>{{ $t("Contact.header") }}</h1>

      <h4>{{ $t("Contact.titel") }}</h4>
      <div id="contact-table" class="table">
        <div class="table-header col-sm-12">
          <div class="row">
            <div class="table-cell col-md-4 col-sm-5 col-xs-4">
              <label for="country-select">{{ $t("country") }}:</label>
            </div>
            <div class="table-cell col-md-8 col-sm-7 col-xs-8">
              <select id="country-select" v-model="selected">
                <option v-bind:value="item.value" v-for="item in items">{{item.name}}</option>
              </select>
            </div>
          </div>
        </div>
        <div class="table-body col-sm-12">
          <transition-group name="contact-list" tag="div">
            <div v-if="items[selected-1].address" class="row table-row contact-list-item"
                 v-bind:key="items[selected-1].value" >
              <div class="col-sm-12">
                <div class="table-row-content row">
                  <div class="table-cell col-md-4 col-sm-5 col-xs-4"><strong>{{ $t("address") }}:</strong></div>
                  <div class="table-cell col-md-8 col-sm-7 col-xs-8" v-html="items[selected-1].address"></div>
                </div>
              </div>
            </div>
            <div v-if="items[selected-1].poBox" class="row table-row contact-list-item"
                 v-bind:key="items[selected-1].value">
              <div class="col-sm-12">
                <div class="table-row-content row">
                  <div class="table-cell col-md-4 col-sm-5 col-xs-4"><strong>{{ $t("Contact.box_address") }}:</strong>
                  </div>
                  <div class="table-cell col-md-8 col-sm-7 col-xs-8"> {{ items[selected-1].poBox }}</div>
                </div>
              </div>
            </div>
            <div v-if="items[selected-1].email" class="row table-row contact-list-item"
                 v-bind:key="items[selected-1].value">
              <div class="col-sm-12">
                <div class="table-row-content row">
                  <div class="table-cell col-md-4 col-sm-5 col-xs-4"><strong>{{ $t("email") }}:</strong></div>
                  <div class="table-cell col-md-8 col-sm-7 col-xs-8"> {{ items[selected-1].email }}</div>
                </div>
              </div>
            </div>
            <div v-if="items[selected-1].phone" class="row table-row contact-list-item"
                 v-bind:key="items[selected-1].value">
              <div class="col-sm-12">
                <div class="table-row-content row">
                  <div class="table-cell col-md-4 col-sm-5 col-xs-4"><strong>{{ $t("phone") }}:</strong></div>
                  <div class="table-cell col-md-8 col-sm-7 col-xs-8"> {{ items[selected-1].phone }}</div>
                </div>
              </div>
            </div>
          </transition-group>
        </div>
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
  },
  methods: {
    stripeTable: function () {
      $( ".table-row-content" ).removeClass( "odd");
      $( ".table-row-content:odd" ).addClass( "odd");
    }
  },
  mounted: function () {
    this.stripeTable();
  },
  updated: function () {
    this.stripeTable();
  }
}

</script>

<style lang="scss" scoped>
  @import '../styles/colors';

  #country-select {
    color: $primary-text-color;
  }

  .table-header {
    border: 1px solid $primary-link-color;
    background: $primary-link-color;
    color: $btn-txt-color;
    margin: 0;
    .table-cell {
      height: 35px;
      line-height: 35px;
      vertical-align: middle;
    }
  }

  .table-body {
    margin: 0;
    .table-row {
      background: white;
      margin-top: -1px;
      border: 1px solid $table-borders-color;
    }
    .table-cell {
      min-height: 35px;
      padding-top: 5px;
      padding-bottom: 5px;
    }
    .odd {
      background-color: $table-row-odd-bg-color;
    }
  }

  .table-row-content:hover {
    background: $table-row-hover-color;
  }

  label {
    float: left;
    padding-right: 2em;
  }

  #contact-table {
    margin-top: 1.5em;
    width: 100%;
    float: left;
  }

  /* .___________________________________.
   * |                                   |
   * | Transitions for the contact infos |
   * |___________________________________|
   */
  .contact-list-item {
  }

  .contact-list-enter-active {
    transition: all 1s;
  }

  .contact-list-leave-active {
  }

  .contact-list-enter /* .contact-list-leave-active for <2.1.8 */
  {
    opacity: 0;
    transform: translateY(-20px);
  }

  .contact-list-leave-to /* .contact-list-leave-active for <2.1.8 */
  {
    opacity: 0;
  }

</style>
