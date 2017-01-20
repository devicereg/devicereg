<template>
  <div class="row">
    <div class="col-sm-12">
      <h1>{{$t("Datenschutz.title")}}</h1>
      <br/>
      <p>{{$t("Datenschutz.paragraph0")}}</p>

      <h4>1. &nbsp; {{$t("Datenschutz.header1")}}</h4>
      <p>
        {{$t("Datenschutz.paragraph_item1_1")}}<br/>
        {{$t("Datenschutz.paragraph_item1_2")}}
      </p>

      <h4>2. &nbsp; {{$t("Datenschutz.header2")}}</h4>
      <p>{{$t("Datenschutz.paragraph2")}}</p>

      <h4>3. &nbsp; {{$t("Datenschutz.header3")}}</h4>
      <p>{{$t("Datenschutz.paragraph3")}}</p>

      <h4>4. &nbsp; {{$t("Datenschutz.header4")}}</h4>
      <p>{{$t("Datenschutz.paragraph4")}}</p>

      <h4>5. &nbsp; {{$t("Datenschutz.header5")}}</h4>
      <p>{{$t("Datenschutz.paragraph5_1")}}</p>
      <p>{{$t("Datenschutz.paragraph5_2")}} </p>
      <p>{{$t("Datenschutz.paragraph5_3")}}</p>
      <p>{{$t("Datenschutz.paragraph5_4")}}</p>

      <h4>6. &nbsp; {{$t("Datenschutz.header6")}}</h4>
      <p>{{$t("Datenschutz.paragraph6_1")}}</p>
      <p>{{$t("Datenschutz.paragraph6_2")}}</p>

      <h4>7. &nbsp; {{$t("Datenschutz.header7")}}</h4>
      <p>{{$t("Datenschutz.paragraph7")}}</p>

      <h4>8. &nbsp; {{$t("Datenschutz.header8")}}</h4>
      <p>{{$t("Datenschutz.paragraph8")}}</p>

      <h4>9. &nbsp; {{$t("Datenschutz.header9")}}</h4>
      <p>{{$t("Datenschutz.paragraph9")}}</p>

      <h4>10. {{$t("Datenschutz.header10")}}</h4>
      <p>{{$t("Datenschutz.paragraph10")}}</p>
      <p>
        {{$t("Datenschutz.paragraph_item10_1")}}<br/>
        {{$t("Datenschutz.paragraph_item10_2")}}<br/>
        {{$t("Datenschutz.paragraph_item10_3")}}<br/>
        {{$t("Datenschutz.paragraph_item10_4")}}<br/>
        {{$t("Datenschutz.paragraph_item10_5")}}<br/>
        {{$t("Datenschutz.paragraph_item10_6")}}
      </p>
      <br/>
      <p>{{$t("Datenschutz.current_date")}}</p>

      <a onmouseup="window.print();">
        <span class="glyphicon glyphicon-print action button" aria-hidden="true"></span> &nbsp; {{$t("TermsOfUse.print")}}
      </a>

    </div>
  </div>
</template>

<script>
  export default{
    name: 'datenschutz'
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

  span.glyphicon-print {
    font-size: 20px;
    margin-left: 30px;
    padding-top: 1em;
  }

  @media (max-width: 767px) {
    h1 {
      font-size: 1.5em;
    }
    h4{
      font-size: 1em;
    }
    p{
      margin-left: 1.4em;
    }
  }
</style>
