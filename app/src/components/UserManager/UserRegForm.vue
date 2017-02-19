<template xmlns:v-if="http://www.w3.org/1999/xhtml">
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
              <!-- TODO: USER REG FORM -->
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
    'user'
  ],
  data () {
    return {
      // TODO: User reg data
    }
  },
  methods: {
    submit() {
      $('#user-registration-modal').modal('hide');
      if(this.user.id == -1) {
        auth.createUser(this, this.user, this.$parent.$parent.$refs.toastr);
        this.$parent.$parent.$refs.toastr.Add({
          title: this.$t("UI.create_user_title"),
          msg: this.$t("UI.create_user_msg"),
          clickClose: true,
          timeout: 8000,
          position: "toast-top-right",
          type: "success"
        });
      } else {
        auth.updateDevice(this, this.user, this.$parent.$parent.$refs.toastr);
        this.$parent.updateDevice(this.user, this.edit_index);
        this.$parent.$parent.$refs.toastr.Add({
          title: this.$t("UI.update_user_title"),
          msg: this.$t("UI.update_user_msg"),
          clickClose: true,
          timeout: 8000,
          position: "toast-top-right",
          type: "success"
        });
      }
    },
    userCreated() {
      this.$parent.addUser(this.user);
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
