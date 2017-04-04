<template>
    <div class="filter">
      <div class="row">
        <div class="col-sm-6 col-xs-6">
          <form id="search">
            <label for="search-query">{{ $t("MyDevices.search_by") }}:</label>
            <input id="search-query" name="query" v-model="filterKey" class="form-control">
          </form>
        </div>
        <div class="col-sm-6 col-xs-6" id="cat_filter">
          <label for="category-filter">{{ $t("MyDevices.filter_by") }}:</label>
          <select id="category-filter" class="form-control col-xs-6" v-model="cat_filter">
            <option value="all">{{ $t("MyDevices.all_categories") }}</option>
            <option v-bind:value="cat.id" v-for="cat in categories">{{cat.name}}</option>
          </select>
        </div>
      </div>
    </div>
</template>

<script>
  import auth from "../../auth/index.js"

  export default{
    props: [
      'categories'
    ],
    data(){
      return {
        filterKey: "",
        cat_filter: 'all',
      }
    },
    watch: {
      'filterKey': function(value) {
        this.$parent.filter = value;
      },
      'cat_filter': function(value) {
        this.$parent.cat_filter = value;
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../styles/colors';

  .filter {
    //border-top:     1px solid $darker-light-gray;
    //border-bottom:  1px solid $darker-light-gray;
    //margin: 2em 0;
    //padding: 1em;
  }
</style>
