<template>
  <a @click="deleteUser(user)">
    <span class="glyphicon glyphicon-trash action-button" aria-hidden="true"></span>
  </a>
</template>

<script>
  import auth from "../../auth/index.js"

  export default{
    props: [
        'user'
    ],
    methods: {
      deleteUser(user) {
        var self = this;
        this.$swal({
          title: this.$t("UserOverview.delete.title"),
          text: this.$t("UserOverview.delete.text"),
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3e7d8b",
          confirmButtonText: this.$t("UserOverview.delete.confirm"),
          cancelButtonText: this.$t("UserOverview.delete.cancel"),
          cancelButtonColor: "#9c9c9c"
        }).then(function() {
          auth.deleteUser(self, {id: user.id});
          console.log(user);
          self.$parent.$parent.removeUser(user); // dirty but only way without vuex
        })
      }
    }
  }
</script>
