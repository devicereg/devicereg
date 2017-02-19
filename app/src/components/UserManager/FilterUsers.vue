<template>
      <div class="form-group row">
        <div class="col-sm-12">
          <form id="search">
            <label for="search-query">{{ $t("UserOverview.search_by") }}:</label>
            <input id="search-query" name="query" v-model="filterKey" class="form-control">
          </form>
        </div>
      </div>
</template>

<script>
  import auth from "../../auth/index.js"

  export default{
    data(){
      return {
        filterKey: ""
      }
    },
    watch: {
      'filterKey': function(value) {
        this.$parent.filter = value;
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../styles/colors';

</style>
