<template>
  <div class="row">
    <div class="col-sm-12">
      <h1>{{$t("Impressum.title")}}</h1>

      <h4>{{$t("Impressum.header1")}}</h4>
      <p>{{$t("Impressum.paragraph1")}}</p>
      <h4>{{$t("Impressum.header2")}}</h4>
      <p>
        {{$t("Impressum.paragraph_item2_1")}}<br/>
        {{$t("Impressum.paragraph_item2_2")}}
      </p>

      <h4>{{$t("Impressum.header3")}}</h4>

      <table>
        <tbody>
        <tr>
          <td><label>{{$t("Impressum.label1")}}</label></td>
          <td>{{$t("Impressum.label_item1")}}</td>
        </tr>
        <tr>
          <td><label>{{$t("Impressum.label2")}}</label></td>
          <td>{{$t("Impressum.label_item2")}}</td>
        </tr>
        <tr>
          <td><label>{{$t("Impressum.label3")}}</label></td>
          <td><a href="#">{{$t("Impressum.label_item3")}}</a></td>
        </tr>
        <tr>
          <td><label>{{$t("Impressum.label4")}}</label></td>
          <td><a href="http://www.yokogawa.com/rota-de">{{$t("Impressum.label_item4")}}</a></td>
        </tr>
        </tbody>
      </table>

      <h4>{{$t("Impressum.header4")}}</h4>
      <p>

        {{$t("Impressum.paragraph_item4_1")}}<br/>
        {{$t("Impressum.paragraph_item4_2")}} <br/>
        {{$t("Impressum.paragraph_item4_3")}}
      </p>

      <h4>{{$t("Impressum.header5")}}</h4>
      <p>{{$t("Impressum.paragraph5")}}</p>
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
