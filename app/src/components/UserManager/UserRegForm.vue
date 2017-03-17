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
                  <select name="gender" class="form-control" id="register_gender" v-model="user.gender" required>
                    <option value="" :disabled="true">{{$t("RegistrationForm.choose")}}</option>
                    <option>{{$t("RegistrationForm.mr")}}</option>
                    <option>{{$t("RegistrationForm.mrs")}}</option>
                  </select>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-sm-6">
                  <label class="control-label" for="register_prename">{{$t("RegistrationForm.prename")}}:</label>
                  <input name="prename" type="text" class="form-control" id="register_prename" v-model="user.prename" required>
                </div>
                <div class="col-sm-6">
                  <label class="control-label" for="register_surname">{{$t("RegistrationForm.surname")}}:</label>
                  <input name="surname" type="text" class="form-control" id="register_surname" v-model="user.surname" required>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-sm-6">
                  <label class="control-label" for="register_language">{{$t("language")}}:</label>
                  <select name="language" class="form-control" id="register_language" v-model="user.language" required>
                    <option value="" :disabled="true">{{$t("RegistrationForm.choose")}}</option>
                    <option value="de">{{$t("RegistrationForm.german")}}</option>
                    <option value="en">{{$t("RegistrationForm.english")}}</option>
                  </select>
                </div>
                <div class="col-sm-6">
                  <label class="control-label" for="register_phone">{{$t("phone")}}:</label>
                  <input name="phone" type="text" class="form-control" id="register_phone" v-model="user.phone" required>
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
                  <select name="industry_family"
                          class="form-control"
                          id="register_industry_family"
                          v-model="user.industry_family"
                          required>
                    <option value="" :disabled="true">{{$t("RegistrationForm.choose")}}</option>
                    <option v-bind:value="item.id" v-for="item in industry_family" > {{ item.name }}</option>
                  </select>
                </div>
                <div v-if="user.industry_family == 0"  class="col-sm-6">
                  <label class="control-label" for="register_industry_type">{{$t("RegistrationForm.industry_type_other")}}:</label>
                  <input name="industry_type" type="text" class="form-control" id="register_industry_type" v-model="user.industry_type" :required="user.industry_family">
                </div>
                <div v-else class="col-sm-6">
                  <label class="control-label" for="register_industry_type">{{$t("RegistrationForm.industry_type")}}:</label>
                  <select name="industry_type" class="form-control" id="register_industry_type" v-model="user.industry_type" :required="user.industry_family">
                    <option v-bind:value="item.name" v-for="item in industry_types" v-if="user.industry_family == item.id">{{item.name}}</option>
                  </select>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-sm-6">
                  <label class="control-label" for="register_company">{{$t("RegistrationForm.company")}}:</label>
                  <input name="company" type="text" class="form-control" id="register_company" v-model="user.company" required>
                </div>
                <div class="col-sm-6">
                  <label class="control-label" for="register_country">{{$t("country")}}:</label>
                  <input name="country" type="text" class="form-control" id="register_country" v-model="user.country" required>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-sm-6">
                  <label class="control-label" for="register_street">{{$t("RegistrationForm.street")}}:</label>
                  <input name="street" type="text" class="form-control" id="register_street" v-model="user.street" required>
                </div>
                <div class="col-sm-6">
                  <label class="control-label" for="register_number">{{$t("RegistrationForm.number")}}:</label>
                  <input name="number" type="text" class="form-control" id="register_number" v-model="user.number" required>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-sm-6">
                  <label class="control-label" for="register_city">{{$t("city")}}:</label>
                  <input name="city" type="text" class="form-control" id="register_city" v-model="user.city" required>
                </div>
                <div class="col-sm-6">
                  <label class="control-label" for="register_zip">{{$t("RegistrationForm.zip")}}:</label>
                  <input name="zip" type="text" class="form-control" id="register_zip" v-model="user.zip" required>
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
                  <select name="role" class="form-control" id="register_role" v-model="user.role" required>
                    <option value="" :disabled="true">{{$t("RegistrationForm.choose")}}</option>
                    <option value="ROLE_ADMIN">{{$t("RegistrationForm.admin")}}</option>
                    <option value="ROLE_SUPPORT">{{$t("RegistrationForm.support")}}</option>
                    <option value="ROLE_USER">{{$t("RegistrationForm.customer")}}</option>
                  </select>
                </div>
              </div>
              <div v-if="user.id == -1" class="form-group row">
                <div class="col-sm-6">
                  <label class="control-label" for="register_user">{{$t("RegistrationForm.user")}}:</label>
                  <input name="email" type="text" class="form-control" id="register_user" v-model="user.email" required>
                </div>
                <div class="col-sm-6">
                  <label class="control-label" for="register_user_repeat">{{$t("RegistrationForm.user_repeat")}}:</label>
                  <input name="user_repeat" type="text" class="form-control" id="register_user_repeat" v-model="repeatedEmail" required>
                </div>
              </div>
              <div v-else class="form-group row">
                <div class="col-sm-6">
                  <label class="control-label" for="register_user">{{$t("RegistrationForm.user")}}:</label>
                  <div class="input-group">
                    <input name="email" type="text" class="form-control" id="register_user" v-model="user.email" required :disabled="!changeEmail">
                    <span class="input-group-btn">
                       <button class="btn btn-default glyphicon glyphicon-edit btn-primary" type="button" v-on:click="toggleEmailEdit()"></button>
                     </span>
                  </div>
                </div>
                <div v-if="changeEmail" class="col-sm-6">
                  <label class="control-label" for="register_user_repeat">{{$t("RegistrationForm.new_email_repeat")}}:</label>
                  <input name="user_repeat" type="text" class="form-control" id="register_user_repeat" v-model="repeatedEmail" required>
                </div>
              </div>
              <div v-if="user.id == -1" class="form-group row">
                <div class="col-sm-6">
                  <label class="control-label" for="register_password">{{$t("RegistrationForm.password")}}:</label>
                  <input name="password" type="password" class="form-control" id="register_password" v-model="user.password" required>
                </div>
                <div class="col-sm-6">
                  <label class="control-label" for="register_user_repeat">{{$t("RegistrationForm.new_password_repeat")}}:</label>
                  <input name="user_repeat" type="text" class="form-control" id="register_password_repeat" v-model="repeatedPassword" required>
                </div>
              </div>
              <div v-else class="form-group row">
                <div class="col-sm-6">
                  <label class="control-label" for="register_password">{{$t("RegistrationForm.password")}}:</label>
                  <div class="input-group">
                    <input name="password" type="password" class="form-control" id="register_password" v-model="user.password" required :disabled="!changePassword">
                    <span class="input-group-btn">
                       <button class="btn btn-default glyphicon glyphicon-edit btn-primary" type="button" v-on:click="togglePasswordEdit()"></button>
                     </span>
                  </div>
                </div>
                <div v-if="changePassword" class="col-sm-6">
                  <label class="control-label" for="register_password_repeat">{{$t("RegistrationForm.new_password_repeat")}}:</label>
                  <input name="password_repeat" type="password" class="form-control" id="register_password_repeat" v-model="repeatedPassword" required hidden>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-sm-6">
                  <label class="control-label" for="register_question">{{$t("RegistrationForm.question")}}:</label>
                  <input name="question" type="text" class="form-control" id="register_question" v-model="user.question" required>
                </div>
                <div class="col-sm-6">
                  <label class="control-label" for="register_answer">{{$t("RegistrationForm.answer")}}:</label>
                  <input name="answer" type="text" class="form-control" id="register_answer" v-model="user.answer" required>
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
      }
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
    }
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
