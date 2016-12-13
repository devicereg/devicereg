<template>
	<div class="container fluid">
		<div class="row">
			<div id="warranty-text" class="col-md-offset-2 col-md-8 text-left">
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

<style>
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
</style>
