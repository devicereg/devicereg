<template>
    <div class="container fluid">
        <div class="row">
          <div class="col-md-offset-2 col-md-8 text-left">
            <h1>{{$t("Impressum.title")}}</h1>

            <h4>{{$t("Impressum.header1")}}</h4>
            <p>{{$t("Impressum.paragraph1")}}</p>
            <h4>{{$t("Impressum.header2")}}</h4>
            <p>
              {{$t("Impressum.paragraph_item2_1")}}<br />
              {{$t("Impressum.paragraph_item2_2")}}
            </p>

            <h4>{{$t("Impressum.header3")}}</h4>

              <label>{{$t("Impressum.label1")}}</label>{{$t("Impressum.label_item1")}}<br/>
              <label>{{$t("Impressum.label2")}}</label>{{$t("Impressum.label_item2")}}<br/>
              <label>{{$t("Impressum.label3")}}</label>
              <a href="#">{{$t("Impressum.label_item3")}}</a><br/>
              <label>{{$t("Impressum.label4")}}</label>
              <a href="http://www.yokogawa.com/rota-de">{{$t("Impressum.label_item4")}}</a>


            <h4>{{$t("Impressum.header4")}}</h4>
            <p>
              {{$t("Impressum.paragraph_item4_1")}}<br />
              {{$t("Impressum.paragraph_item4_2")}} <br />
              {{$t("Impressum.paragraph_item4_3")}}
            </p>

            <h4>{{$t("Impressum.header5")}}</h4>
            <p>{{$t("Impressum.paragraph5")}}</p>
        </div>
      </div>
    </div>
</template>


<script>
  export default{
    name: 'impressum'
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

  label {
    width: 5em;
  }
</style>
