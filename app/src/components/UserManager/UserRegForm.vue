<template>
  <div id="user-registration-modal" class="modal inmodal fade" tabindex="-1" role="dialog"  aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">
            <span aria-hidden="true">×</span>
            <span class="sr-only">Schließen</span>
          </button>
          <h1 v-if="user.id == -1" class="modal-title">{{$t("UserRegForm.title_create")}}</h1>
          <h1 v-else class="modal-title">{{$t("UserRegForm.title_edit")}}</h1>
        </div>
        <form id="user-registration-form" class="ajax" role="form" v-on:submit.prevent="submit" >
          <div class="modal-body">
            <div class="container-fluid">
              <div class="form-group row">
                <div class="col-sm-12">
                  <legend class="modal-form-legend">{{$t("RegistrationForm.personal_details")}}</legend>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-sm-6">
                  <label class="control-label" for="register_gender">{{$t("RegistrationForm.gender")}}:</label>
                  <div :class="{'has-error': errors.has('gender') }">
                    <select v-validate="'required'" name="gender" class="form-control" id="register_gender" v-model="user.gender">
                      <option value="" :disabled="true">{{$t("RegistrationForm.choose")}}</option>
                      <option>{{$t("RegistrationForm.mr")}}</option>
                      <option>{{$t("RegistrationForm.mrs")}}</option>
                    </select>
                  </div>
                  <span v-show="errors.has('gender')" class="text-danger">{{ errors.first('gender') }}</span>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-sm-6">
                  <label class="control-label" for="register_prename">{{$t("RegistrationForm.prename")}}:</label>
                  <div :class="{'has-error': errors.has('prename') }">
                    <input v-validate="'required'" name="prename" class="form-control" id="register_prename" v-model="user.prename">
                  </div>
                  <span v-show="errors.has('prename')" class="text-danger">{{ errors.first('prename') }}</span>
                </div>
                <div class="col-sm-6">
                  <label class="control-label" for="register_surname">{{$t("RegistrationForm.surname")}}:</label>
                  <div :class="{'has-error': errors.has('surname') }">
                    <input v-validate="'required'" name="surname" class="form-control" id="register_surname" v-model="user.surname">
                  </div>
                  <span v-show="errors.has('surname')" class="text-danger">{{ errors.first('surname') }}</span>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-sm-6">
                  <label class="control-label" for="register_language">{{$t("language")}}:</label>
                  <div :class="{'has-error': errors.has('language') }">
                    <select v-validate="'required'" name="language" class="form-control" id="register_language" v-model="user.language">
                      <option value="" :disabled="true">{{$t("RegistrationForm.choose")}}</option>
                      <option value="de">{{$t("RegistrationForm.german")}}</option>
                      <option value="en">{{$t("RegistrationForm.english")}}</option>
                    </select>
                  </div>
                  <span v-show="errors.has('language')" class="text-danger">{{ errors.first('language') }}</span>
                </div>
                <div class="col-sm-6">
                  <label class="control-label" for="register_phone">{{$t("phone")}}:</label>
                  <div :class="{'has-error': errors.has('phone') }">
                    <input v-validate="'required|numeric'" name="phone" class="form-control" id="register_phone" v-model="user.phone">
                  </div>
                  <span v-show="errors.has('phone')" class="text-danger">{{ errors.first('phone') }}</span>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-sm-12">
                  <legend class="modal-form-legend">{{$t("RegistrationForm.company_details")}}</legend>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-sm-6">
                  <label class="control-label" for="register_industry_family">{{$t("RegistrationForm.industry_family")}}:</label>
                  <div :class="{'has-error': errors.has('industry_family') }">
                    <select v-validate="'required'" name="industry_family"
                          class="form-control"
                          id="register_industry_family"
                          v-model="user.industry_family">
                          <option value="" :disabled="true">{{$t("RegistrationForm.choose")}}</option>
                          <option v-bind:value="item.id" v-for="item in industry_family" > {{ item.name }}</option>
                    </select>
                  </div>
                  <span v-show="errors.has('industry_family')" class="text-danger">{{ errors.first('industry_family') }}</span>
                </div>
                <div v-if="user.industry_family == 0"  class="col-sm-6">
                  <label class="control-label" for="register_industry_type">{{$t("RegistrationForm.industry_type_other")}}:</label>
                  <div :class="{'has-error': errors.has('industry_type') }">
                    <input v-validate="'required'" name="industry_type" class="form-control" id="register_industry_type" v-model="user.industry_type" :required="user.industry_family">
                  </div>
                  <span v-show="errors.has('industry_type')" class="text-danger">{{ errors.first('industry_type') }}</span>
                </div>
                <div v-else class="col-sm-6">
                  <label class="control-label" for="register_industry_type">{{$t("RegistrationForm.industry_type")}}:</label>
                  <div :class="{'has-error': errors.has('industry_type_s') }">
                    <select v-validate="'required'" name="industry_type_s" class="form-control" id="register_industry_type" v-model="user.industry_type" :required="user.industry_family">
                      <option v-bind:value="item.name" v-for="item in industry_types" v-if="user.industry_family == item.id">{{item.name}}</option>
                    </select>
                  </div>
                  <span v-show="errors.has('industry_type_s')" class="text-danger">{{ errors.first('industry_type_s') }}</span>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-sm-6">
                  <label class="control-label" for="register_company">{{$t("RegistrationForm.company")}}:</label>
                  <div :class="{'has-error': errors.has('company') }">
                    <input v-validate="'required'" name="company" class="form-control" id="register_company" v-model="user.company">
                  </div>
                  <span v-show="errors.has('company')" class="text-danger">{{ errors.first('company') }}</span>
                </div>
                <div class="col-sm-6">
                  <label class="control-label" for="register_country">{{$t("country")}}:</label>
                  <div :class="{'has-error': errors.has('country') }">
                    <select v-validate="'required'" name="country" class="form-control" id="register_country" v-model="user.country">
                      <option value="" :disabled="true">{{$t("RegistrationForm.choose")}}</option>
                      <option  v-for="item in country" > {{ $t(item.name) }}</option>
                    </select>
                  </div>
                  <span v-show="errors.has('country')" class="text-danger">{{ errors.first('country') }}</span>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-sm-6">
                  <label class="control-label" for="register_street">{{$t("RegistrationForm.street")}}:</label>
                  <div :class="{'has-error': errors.has('street') }">
                    <input v-validate="'required'" name="street" class="form-control" id="register_street" v-model="user.street">
                  </div>
                  <span v-show="errors.has('street')" class="text-danger">{{ errors.first('street') }}</span>
                </div>
                <div class="col-sm-6">
                  <label class="control-label" for="register_number">{{$t("RegistrationForm.number")}}:</label>
                  <div :class="{'has-error': errors.has('number') }">
                    <input v-validate="'required'" name="number" class="form-control" id="register_number" v-model="user.number">
                  </div>
                  <span v-show="errors.has('number')" class="text-danger">{{ errors.first('number') }}</span>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-sm-6">
                  <label class="control-label" for="register_city">{{$t("city")}}:</label>
                  <div :class="{'has-error': errors.has('city') }">
                    <input v-validate="'required|alpha'" name="city" class="form-control" id="register_city" v-model="user.city">
                  </div>
                  <span v-show="errors.has('city')" class="text-danger">{{ errors.first('city') }}</span>
                </div>
                <div class="col-sm-6">
                  <label class="control-label" for="register_zip">{{$t("RegistrationForm.zip")}}:</label>
                  <div :class="{'has-error': errors.has('zip') }">
                    <input v-validate="'required'" name="zip" class="form-control" id="register_zip" v-model="user.zip">
                  </div>
                  <span v-show="errors.has('zip')" class="text-danger">{{ errors.first('zip') }}</span>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-sm-12">
                  <legend class="modal-form-legend">{{$t("RegistrationForm.system_access")}}</legend>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-sm-6">
                  <label class="control-label" for="register_role">{{$t("RegistrationForm.role")}}:</label>
                  <div :class="{'has-error': errors.has('role') }">
                    <select v-validate="'required'" name="role" class="form-control" id="register_role" v-model="user.role">
                      <option value="" :disabled="true">{{$t("RegistrationForm.choose")}}</option>
                      <option value="ROLE_ADMIN">{{$t("RegistrationForm.admin")}}</option>
                      <option value="ROLE_SUPPORT">{{$t("RegistrationForm.support")}}</option>
                      <option value="ROLE_USER">{{$t("RegistrationForm.customer")}}</option>
                    </select>
                  </div>
                  <span v-show="errors.has('role')" class="text-danger">{{ errors.first('role') }}</span>
                </div>
              </div>
              <div v-if="user.id == -1" class="form-group row">
                <div class="col-sm-6">
                  <label class="control-label" for="register_user">{{$t("RegistrationForm.user")}}:</label>
                  <div :class="{'has-error': errors.has('email') }">
                    <input v-validate="'required|email|confirmed:user_repeat'" name="email" class="form-control" id="register_user" v-model="user.email">
                  </div>
                  <span v-show="errors.has('email')" class="text-danger">{{ errors.first('email') }}</span>
                </div>
                <div class="col-sm-6">
                  <label class="control-label" for="register_user_repeat">{{$t("RegistrationForm.user_repeat")}}:</label>
                  <div :class="{'has-error': errors.has('user_repeat') }">
                    <input v-validate="'required|email'" name="user_repeat" class="form-control" id="register_user_repeat" v-model="repeatedEmail">
                  </div>
                  <span v-show="errors.has('user_repeat')" class="text-danger">{{ errors.first('user_repeat') }}</span>
                </div>
              </div>
              <div v-else class="form-group row">
                <div class="col-sm-6">
                  <label class="control-label" for="register_user">{{$t("RegistrationForm.user")}}:</label>
                  <div class="input-group">
                    <div :class="{'has-error': errors.has('email_d') }">
                      <input v-validate="'required|email|confirmed:user_repeat_d'" name="email_d" class="form-control" id="register_user" v-model="user.email" :disabled="!changeEmail">
                    </div>
                    <span class="input-group-btn">
                       <button class="btn btn-default glyphicon glyphicon-edit btn-primary" type="button" v-on:click="toggleEmailEdit()"></button>
                     </span>
                  </div>
                  <span v-show="errors.has('email_d')" class="text-danger">{{ errors.first('email_d') }}</span>
                </div>
                <div v-if="changeEmail" class="col-sm-6">
                  <label class="control-label" for="register_user_repeat">{{$t("RegistrationForm.new_email_repeat")}}:</label>
                  <div :class="{'has-error': errors.has('user_repeat_d') }">
                    <input v-validate="'required|email'" name="user_repeat_d" class="form-control" id="register_user_repeat" v-model="repeatedEmail">
                  </div>
                  <span v-show="errors.has('user_repeat_d')" class="text-danger">{{ errors.first('user_repeat_d') }}</span>
                </div>
              </div>
              <div v-if="user.id == -1" class="form-group row">
                <div class="col-sm-6">
                  <label class="control-label" for="register_password">{{$t("RegistrationForm.password")}}:</label>
                  <div :class="{'has-error': errors.has('password') }">
                    <input v-validate="'required|confirmed:password_repeat'" name="password" type="password" class="form-control" id="register_password" v-model="user.password">
                  </div>
                  <span v-show="errors.has('password')" class="text-danger">{{ errors.first('password') }}</span>
                </div>
                <div class="col-sm-6">
                  <label class="control-label" for="register_user_repeat">{{$t("RegistrationForm.new_password_repeat")}}:</label>
                  <div :class="{'has-error': errors.has('password_repeat') }">
                    <input v-validate="'required'" type="password" name="password_repeat" class="form-control" id="register_password_repeat" v-model="repeatedPassword">
                  </div>
                  <span v-show="errors.has('password_repeat')" class="text-danger">{{ errors.first('password_repeat') }}</span>
                </div>
              </div>
              <div v-else class="form-group row">
                <div class="col-sm-6">
                  <label class="control-label" for="register_password">{{$t("RegistrationForm.password")}}:</label>
                  <div class="input-group">
                    <div :class="{'has-error': errors.has('password_1') }">
                      <input v-validate="'required|confirmed:password_1_repeat'" name="password_1" type="password" class="form-control" id="register_password" v-model="user.password" :disabled="!changePassword">
                    </div>
                    <span class="input-group-btn">
                       <button class="btn btn-default glyphicon glyphicon-edit btn-primary" type="button" v-on:click="togglePasswordEdit()"></button>
                     </span>
                  </div>
                  <span v-show="errors.has('password_1')" class="text-danger">{{ errors.first('password_1') }}</span>
                </div>
                <div v-if="changePassword" class="col-sm-6">
                  <label class="control-label" for="register_password_repeat">{{$t("RegistrationForm.new_password_repeat")}}:</label>
                  <div :class="{'has-error': errors.has('password_1_repeat') }">
                    <input v-validate="'required'" name="password_1_repeat" type="password" class="form-control" id="register_password_repeat" v-model="repeatedPassword" hidden>
                  </div>
                  <span v-show="errors.has('password_1_repeat')" class="text-danger">{{ errors.first('password_1_repeat') }}</span>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-sm-6">
                  <label class="control-label" for="register_question">{{$t("RegistrationForm.question")}}:</label>
                  <div :class="{'has-error': errors.has('question') }">
                    <input v-validate="'required'" name="question" class="form-control" id="register_question" v-model="user.question">
                  </div>
                  <span v-show="errors.has('question')" class="text-danger">{{ errors.first('question') }}</span>
                </div>
                <div class="col-sm-6">
                  <label class="control-label" for="register_answer">{{$t("RegistrationForm.answer")}}:</label>
                  <div :class="{'has-error': errors.has('answer') }">
                    <input v-validate="'required'" name="answer" class="form-control" id="register_answer" v-model="user.answer">
                  </div>
                  <span v-show="errors.has('answer')" class="text-danger">{{ errors.first('answer') }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <div class="col-sm-offset-6 col-xs-6 col-sm-3">
              <button type="button" class="btn btn-block btn-md btn-cancel btn-modal" data-dismiss="modal">{{ $t('cancel') }}</button>
            </div>
            <div v-if="user.id == -1" class="col-xs-6 col-sm-3">
              <input type="submit" class="btn btn-block btn-md btn-primary btn-modal" v-bind:value="$t('register')">
            </div>
            <div v-else class="col-xs-6 col-sm-3">
              <input type="submit" class="btn btn-block btn-md btn-primary btn-modal" v-bind:value="$t('save')">
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import auth from '../../auth'
import Vue from 'vue'
export default {
  name: 'user-registration-modal',
  props: [
    'user',
    'edit_index',
    'changeEmail',
    'changePassword'
  ],
  data () {
    return {
      repeatedEmail: "",
      repeatedPassword: "",
      industry_types: [],
      industry_family: [
        {id: 0, name: 'Andere (Eingabe erforderlich)'},
        {id: 1, name: 'Metall Minen'},
        {id: 2, name: 'Öl und Gas'},
        {id: 3, name: 'Allgemein Hoch- und Tiefbau'},
        {id: 4, name: 'Elektrische Arbeitsmittel'},
        {id: 5, name: 'Lebensmittel-/Getränkeindustrie'},
        {id: 6, name: 'Textilien'},
        {id: 7, name: 'Zellstoff Papier'},
        {id: 8, name: 'Pharmazeutika'},
        {id: 9, name: 'Raffinierung'},
        {id: 10, name: 'Chemie oder Petrochemie'},
        {id: 11, name: 'Reifenhersteller und indust. Schläuche'},
        {id: 12, name: 'Zement, Glas'},
        {id: 13, name: 'Eisen, Stahl'},
        {id: 14, name: 'Automotive'},
        {id: 15, name: 'Maschinen'},
        {id: 16, name: 'Herst. Elektr. und Ind. App.'},
        {id: 17, name: 'Elektronik'},
        {id: 18, name: 'Semicon'},
        {id: 19, name: 'Elektrisch'},
        {id: 20, name: 'Luft- und Raumfahrt'},
        {id: 21, name: 'Strom'},
        {id: 22, name: 'Wasser, Abwasser'},
        {id: 23, name: 'Fernmeldewesen'},
        {id: 24, name: 'Ges. allg. Handelswaren Maschinen'},
        {id: 25, name: 'Gesamte Handelwaren Sonstiges'},
        {id: 26, name: 'Sonstige Ges. Handelsver. und Branchen'},
        {id: 27, name: 'Ingenieur und Architekt'},
        {id: 28, name: 'Gebäudeautomatisierung'},
        {id: 29, name: 'Abfallwirtschaft'},
        {id: 30, name: 'Medizin'},
        {id: 31, name: 'Bildung'},
       ],

      country: [
        {name: "Countries.GB"},
        {name: "Countries.DE"},
        {name: "Countries.FR"},
        {name: "Countries.PL"},
        {name: "Countries.AT"},
        {name: "Countries.ES"},
        {name: "Countries.SE"},
        {name: "Countries.CH"},
        {name: "Countries.IT"},
        {name: "Countries.BE"},
        {name: "Countries.BG"},
        {name: "Countries.HR"},
        {name: "Countries.CY"},
        {name: "Countries.ZC"},
        {name: "Countries.DK"},
        {name: "Countries.EE"},
        {name: "Countries.GR"},
        {name: "Countries.HU"},
        {name: "Countries.LV"},
        {name: "Countries.LT"},
        {name: "Countries.LU"},
        {name: "Countries.MT"},
        {name: "Countries.NL"},
        {name: "Countries.PT"},
        {name: "Countries.IE"},
        {name: "Countries.RO"},
        {name: "Countries.SK"},
        {name: "Countries.SI"},
        {name: "Countries.AL"},
        {name: "Countries.AD"},
        {name: "Countries.BA"},
        {name: "Countries.IS"},
        {name: "Countries.LIE"},
        {name: "Countries.MD"},
        {name: "Countries.MC"},
        {name: "Countries.ME"},
        {name: "Countries.MK"},
        {name: "Countries.SM"},
        {name: "Countries.RS"},
        {name: "Countries.TR"},
        {name: "Countries.FI"}
      ]
    }
  },
  methods: {
    submit() {
        this.$validator.validateAll().then(success => {
              if (!success) {
                  //Jump to the first incorrect field. No idea how to implement, need help :/ Or show toastr message?
              }
              else{
                if(this.user.id == -1) {
                  $('#user-registration-modal').modal('hide');
                  this.repeatedEmail = "";
                  this.repeatedPassword = "";
                  auth.createUser(this, this.user, this.$parent.$parent.$refs.toastr);
                  this.$parent.$parent.$refs.toastr.Add({
                    title: this.$t("UI.create_user_title"),
                    msg: this.$t("UI.create_user_msg"),
                    clickClose: true,
                    timeout: 8000,
                    position: "toast-top-right",
                    type: "success"
                  });
                }
                else {
                  $('#user-registration-modal').modal('hide');
                  auth.update(this, this.user);
                  this.$parent.updateUser(this.user, this.edit_index);
                  this.$parent.$parent.$refs.toastr.Add({
                    title: this.$t("UI.update_user_title"),
                    msg: this.$t("UI.update_user_msg"),
                    clickClose: true,
                    timeout: 8000,
                    position: "toast-top-right",
                    type: "success"
                  });
                }
              }
          });
      /*
      if(this.user.id == -1) {
        if(this.user.password != this.repeatedPassword || this.user.email != this.repeatedEmail){
          this.$parent.$parent.$refs.toastr.Add({
              title: this.$t("UI.password_or_email_mismatch_title"),
              msg: this.$t("UI.password_or_email_mismatch_msg"),
              clickClose: false,
              timeout: 8000,
              position: "toast-top-right",
              type: "error"
          });
        }
        else{
          $('#user-registration-modal').modal('hide');
          this.repeatedEmail = "";
          this.repeatedPassword = "";
          auth.createUser(this, this.user, this.$parent.$parent.$refs.toastr);
          this.$parent.$parent.$refs.toastr.Add({
            title: this.$t("UI.create_user_title"),
            msg: this.$t("UI.create_user_msg"),
            clickClose: true,
            timeout: 8000,
            position: "toast-top-right",
            type: "success"
          });
        }
      } else {
        if(this.changeEmail && !this.changePassword) {
          if(this.user.email != this.repeatedEmail) {
            this.$parent.$parent.$refs.toastr.Add({
              title: this.$t("UI.password_or_email_mismatch_title"),
              msg: this.$t("UI.password_or_email_mismatch_msg"),
              clickClose: false,
              timeout: 8000,
              position: "toast-top-right",
              type: "error"
            });
          }
          else {
            $('#user-registration-modal').modal('hide');
            auth.update(this, this.user);
            this.$parent.updateUser(this.user, this.edit_index);
            this.$parent.$parent.$refs.toastr.Add({
              title: this.$t("UI.update_user_title"),
              msg: this.$t("UI.update_user_msg"),
              clickClose: true,
              timeout: 8000,
              position: "toast-top-right",
              type: "success"
            });
          }
        }
        if(!this.changeEmail && this.changePassword) {
          if(this.user.password != this.repeatedPassword) {
            this.$parent.$parent.$refs.toastr.Add({
              title: this.$t("UI.password_or_email_mismatch_title"),
              msg: this.$t("UI.password_or_email_mismatch_msg"),
              clickClose: false,
              timeout: 8000,
              position: "toast-top-right",
              type: "error"
            });
          }
          else {
            $('#user-registration-modal').modal('hide');
            auth.update(this, this.user);
            this.$parent.updateUser(this.user, this.edit_index);
            this.$parent.$parent.$refs.toastr.Add({
              title: this.$t("UI.update_user_title"),
              msg: this.$t("UI.update_user_msg"),
              clickClose: true,
              timeout: 8000,
              position: "toast-top-right",
              type: "success"
            });
          }
        }
        if(this.changeEmail && this.changePassword) {
          if(this.user.email != this.repeatedEmail || this.user.password != this.repeatedPassword) {
            this.$parent.$parent.$refs.toastr.Add({
              title: this.$t("UI.password_or_email_mismatch_title"),
              msg: this.$t("UI.password_or_email_mismatch_msg"),
              clickClose: false,
              timeout: 8000,
              position: "toast-top-right",
              type: "error"
            });
          }
          else {
            $('#user-registration-modal').modal('hide');
            auth.update(this, this.user);
            this.$parent.updateUser(this.user, this.edit_index);
            this.$parent.$parent.$refs.toastr.Add({
              title: this.$t("UI.update_user_title"),
              msg: this.$t("UI.update_user_msg"),
              clickClose: true,
              timeout: 8000,
              position: "toast-top-right",
              type: "success"
            });
          }
        }
        if(!this.changeEmail && !this.changePassword) {
          $('#user-registration-modal').modal('hide');
          auth.update(this, this.user);
          this.$parent.updateUser(this.user, this.edit_index);
          this.$parent.$parent.$refs.toastr.Add({
            title: this.$t("UI.update_user_title"),
            msg: this.$t("UI.update_user_msg"),
            clickClose: true,
            timeout: 8000,
            position: "toast-top-right",
            type: "success"
          });
        }
      }*/
    },
    userCreated() {
      this.$parent.addUser(this.user);
    },
    toggleEmailEdit() {
      $("#register_user").attr('disabled', function(_, attr){ return !attr});
      this.changeEmail = !this.changeEmail;
    },
    togglePasswordEdit() {
      $("#register_password").attr('disabled', function(_, attr){ return !attr});
      this.changePassword = !this.changePassword;
    }
  },
  computed: {
    today: function() {
      var today = new Date().toISOString().slice(0, 10);
      return today.toString();
    },
    lang: function () {
      return Vue.config.lang;
    }
  },
  mounted: function() {
    this.$validator.setLocale(this.lang);
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

  @media (max-width: 767px) {

    h1 {
      font-size: 1.5em;
    }
  }
</style>
