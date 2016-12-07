<template>
    <div class="container fluid">
        <div class="row">
          <div class="col-md-offset-2 col-md-8 text-left">
            <h1>Impressum</h1>

            <h4>Geschäftsführer</h4>
            <p>Andreas Dobratz, Yoji Saito</p>
            <h4>Adresse</h4>
            <p>
              Rheinstraße 8 <br />
              79664 Wehr, Deutschland
            </p>

            <h4>Kontakt</h4>



              <label>Tel.: </label>+49-7761-567-120<br/>
              <label>Fax: </label>+49-7761-567-126<br/>
              <label>E-Mail: </label>
              <a href="#">pmk.info@de.yokogawa.com</a><br/>
              <label>Website: </label>
              <a href="http://www.yokogawa.com/rota-de">http://www.yokogawa.com/rota-de</a>


            <h4>Eingetragen bei</h4>
            <p>
              Registergericht Freiburg <br />
              HRA: 630 604 <br />
              Ust.-Idnr.: DE 142697009
            </p>

            <h4>Redaktionelle Verantwortlichkeit</h4>
            <p>Jürgen Fischer, Andreas Dobratz</p>
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
