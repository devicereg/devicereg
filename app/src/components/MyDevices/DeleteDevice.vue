<template>
  <a @click="deleteDevice(device)">
    <span class="glyphicon glyphicon-trash action-button" aria-hidden="true"></span>
  </a>
</template>

<script>
  import auth from "../../auth/index.js"

  export default{
    props: [
        'device'
    ],
    methods: {
      deleteDevice(device) {
        var self = this;

        this.$swal({
          title: this.$t("MyDevices.delete.title"),
          text: this.$t("MyDevices.delete.text"),
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3e7d8b",
          confirmButtonText: this.$t("MyDevices.delete.confirm"),
          cancelButtonText: this.$t("MyDevices.delete.cancel"),
          cancelButtonColor: "#9c9c9c"
        }).then(function() {
          auth.deleteDevice(self, {id: device.id});
          self.$parent.$parent.removeDevice(device); // dirty but only way without vuex
        })
      },
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../styles/colors';

  @media (max-width: 767px) {
    .action-button {
      font-size: 1.5em;
    }
  }

</style>
