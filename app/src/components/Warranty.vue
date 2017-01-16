<template>
  <div class="row">
    <div class="col-sm-12">
      <div id="warranty-text">
        <h1>{{$t("Warranty.title")}}</h1>

        <h4>{{$t("Warranty.header1")}}</h4>
        <p>{{$t("Warranty.paragraph1")}}</p>

        <h4>{{$t("Warranty.header2")}}</h4>
        <p>{{$t("Warranty.paragraph2")}}</p>

        <a onmouseup="window.print();">
          <span class="glyphicon glyphicon-print action button" aria-hidden="true"></span> &nbsp; {{$t("Warranty.print")}}
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .warranty-text{
    word-break: normal;
  }

    h1 {
    font-weight: bold;
  }

  h4 {
    font-weight: bold;
    padding-top: 1em;
  }

  span.glyphicon-print {
    font-size: 20px;
    padding-top: 1em;
  }

  a {
     color: primary-bg-color;
        }

@media (max-width: 767px) {
    h1 {
      font-size: 1.5em;
    }
    h4{
      font-size: 1em;
    }
  }
</style>
