<template>
    <div class="col-xs-12 filter  form-group">
      <div class="row">
        <div class="col-sm-8">
          <form id="search">
            <label for="search-query">{{ $t("MyDevices.search_by") }}:</label>
            <input id="search-query" name="query" v-model="filterKey" class="form-control">
          </form>
        </div>
        <div class="col-sm-4" id="cat_filter">
          <label for="category-filter">{{ $t("MyDevices.filter_by") }}:</label>
          <select id="category-filter" class="form-control col-xs-6" v-model="cat_filter">
            <option id="option_placeholder" value="placeholder" disabled>{{ $t("MyDevices.filter_by") }}</option>
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
    data(){
      return {
        categories: [],
        filterKey: "",
        cat_filter: 'placeholder',
      }
    },
    methods: {
      getCategories() {
        auth.getCategories(this);
      }
    },
    mounted: function() {
      this.getCategories();
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
    padding: 1em;
  }
</style>
