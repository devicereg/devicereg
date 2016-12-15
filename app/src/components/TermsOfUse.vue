<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
    <div class="container-fluid col-sm-offset-2 col-sm-8">
        <div class="row">
            <h1>{{$t("TermsOfUse.title")}}</h1>
            <br/>
            <p>{{$t("TermsOfUse.paragraph0")}}</p>

            <h4>1. &nbsp; {{$t("TermsOfUse.header1")}}</h4>
            <p>{{$t("TermsOfUse.paragraph1")}}</p>

            <h4>2. &nbsp; {{$t("TermsOfUse.header2")}}</h4>
            <p>{{$t("TermsOfUse.paragraph2_1")}}</p>
            <p>{{$t("TermsOfUse.paragraph2_2")}}</p>
            <p>{{$t("TermsOfUse.paragraph2_3")}}</p>

            <h4>3. &nbsp; {{$t("TermsOfUse.header3")}}</h4>
            <p>{{$t("TermsOfUse.paragraph3_1")}}</p>
            <p>{{$t("TermsOfUse.paragraph3_2")}}</p>

            <h4>4. &nbsp; {{$t("TermsOfUse.header4")}} </h4>
            <p>{{$t("TermsOfUse.paragraph4")}} <router-link to="/datenschutz">{{$t("TermsOfUse.routerlink_privacy")}}</router-link></p>

            <h4>5. &nbsp; {{$t("TermsOfUse.header5")}} </h4>
            <p>{{$t("TermsOfUse.paragraph5_1")}}</p>
            <p>{{$t("TermsOfUse.paragraph5_2")}}</p>

            <ul class="list">
              <li v-for="item in items"> {{ $t(item.message) }} </li>
            </ul>

            <h4>6. &nbsp; {{$t("TermsOfUse.header6")}}</h4>
            <p>{{$t("TermsOfUse.paragraph6")}}</p>

            <h4>7. &nbsp; {{$t("TermsOfUse.header7")}} </h4>
            <p>{{$t("TermsOfUse.paragraph7")}}</p>
            <br/>
            <p>{{$t("TermsOfUse.current_date")}}</p>

            <a onmouseup="window.print();">
              <span class="glyphicon glyphicon-print action button" aria-hidden="true"></span> &nbsp; {{$t("TermsOfUse.print")}}
            </a>

      </div>
    </div>
</template>

<script>
  export default{
    name: 'terms-of-use',
    data () {
      return {
        items: [
          { message: "TermsOfUse.list_item_1"},
          { message: "TermsOfUse.list_item_2"},
          { message: "TermsOfUse.list_item_3"}
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
  h1 {
    font-weight: bold;
  }

  h4 {
    font-weight: bold;
    padding-top: 1em;
  }

  p {
    margin-left: 2em;
  }

  ul {
    margin-left: 3em;
  }

  span.glyphicon-print {
    font-size: 20px;
    margin-left: 30px;
    padding-top: 1em;
  }
</style>
