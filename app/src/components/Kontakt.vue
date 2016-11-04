<template>
  <div id="kontakt" class="container-fluid">
    <h5>Kundensupport für durchflussmesser</h5>
    <p>Wählen Sie Ihr Land:</p>
    <select class="form-control" v-model="selected">
      <option v-bind:value="item.value" v-for="item in items">{{item.name}}</option>
    </select>
    <div class="land">
      <table class="table table-hover" v-if="selected === '1'">
        <tr>
          <td>Adresse:</td>
          <td>Yokogawa Deutschland GmbH<br>
              Broichhofstr. , 7-11<br>
              40880 Ratingen, Deutschland
          </td>
        </tr>
        <tr>
          <td>E-Mail:</td>
          <td>info@de.yokogawa.com</td>
        </tr>
        <tr>
          <td>Telefon:</td>
          <td>+49 (0)2102 4983-0</td>
        </tr>
      </table>
      <table class="table table-hover" v-if="selected === '2'">
        <tr>
          <td>Adresse:</td>
          <td>Yokogawa Iberia, S.A., Madrid Office<br>
              Cl Lezama , 22 <br>
              28034 Madrid, Spanien
          </td>
        </tr>
        <tr>
          <td>E-Mail:</td>
          <td>info@es.yokogawa.com</td>
        </tr>
        <tr>
          <td>Telefon:</td>
          <td>+34 91 771 31 50</td>
        </tr>
      </table>
      <table class="table table-hover" v-if="selected==='3'||selected==='34'">
        <tr>
          <td>Adresse:</td>
          <td>Yokogawa France S.A.<br>
              Rue Paul Dautier , 17 <br>
              78147 Vélizy-Villacoublay, Cede, Frankreich
          </td>
        </tr>
        <tr>
          <td>Postfach:</td>
          <td>267</td>
        </tr>
        <tr>
          <td>E-Mail:</td>
          <td>info@fr.yokogawa.com</td>
        </tr>
        <tr>
          <td>Telefon:</td>
          <td>+33 1 3926 1000</td>
        </tr>
      </table>
      <table class="table table-hover" v-if="selected === '4'">
        <tr>
          <td>Adresse:</td>
          <td>Yokogawa United Kingdom Ltd.<br>
              Stuart Road, Manor Park , 17<br>
              WA7 1TR Runcorn, Cheshire, Verienigtes Königreich
          </td>
        </tr>
        <tr>
          <td>E-Mail:</td>
          <td>info@yokogawa.co.uk</td>
        </tr>
        <tr>
          <td>Telefon:</td>
          <td>+44 1 928 597 100</td>
        </tr>
      </table>
      <table class="table table-hover" v-if="selected === '5'||selected ==='21'">
        <tr>
          <td>Adresse:</td>
          <td>Yokogawa Italia s.r.l.<br>
              Via Pelizza da Volpedo , 53<br>
              20092 Cinisello Balsamo (MI), Italien
          </td>
        </tr>
        <tr>
          <td>E-Mail:</td>
          <td>info@it.yokogawa.com</td>
        </tr>
        <tr>
          <td>Telefon:</td>
          <td>+39 0266055 201</td>
        </tr>
      </table>
      <table class="table table-hover" v-if="selected === '6'||selected ==='14'||selected ==='27'||selected ==='28'||selected ==='35'">
        <tr>
          <td>Adresse:</td>
          <td>Yokogawa GesmbH Central East Europe<br>
              Franzosengraben , 1<br>
              A-1034 Vienna, Österreich
          </td>
        </tr>
        <tr>
          <td>Postfach:</td>
          <td>27</td>
        </tr>
        <tr>
          <td>E-Mail:</td>
          <td>office@at.yokogawa.com</td>
        </tr>
        <tr>
          <td>Telefon:</td>
          <td>+43 (1) 206 34 - 0</td>
        </tr>
      </table>
      <table class="table table-hover" v-if="selected === '7'">
        <tr>
          <td>Adresse:</td>
          <td>Yokogawa Office Schweiz, Yokogawa Europe<br>
              Branches B.V., Amersfoort, Swiss Branch Muttenz<br>
              Bahnhofstraße , 48<br>
              CH – 4132 Muttenz, Schweiz
          </td>
        </tr>
        <tr>
          <td>E-Mail:</td>
          <td>info@ch.yokogawa.com</td>
        </tr>
        <tr>
          <td>Telefon:</td>
          <td>+41 (0) 61 4616978</td>
        </tr>
      </table>
      <table class="table table-hover" v-if="selected === '8'||selected ==='20'">
        <tr>
          <td>Adresse:</td>
          <td>Yokogawa Belgium N.V./S.A.<br>
              Ikaroslaan , 36<br>
              B-1930 Zaventem, Belgien
          </td>
        </tr>
        <tr>
          <td>E-Mail:</td>
          <td>info@be.yokogawa.com</td>
        </tr>
        <tr>
          <td>Telefon:</td>
          <td>+32 (0)2 719 55 92</td>
        </tr>
      </table>
      <table class="table table-hover" v-if="selected === '9'">
        <tr>
          <td>Adresse:</td>
          <td>Yokogawa Branch Office Bulgaria<br>
              Nikolay Haitov Str. , 12<br>
              1113 Sofia, Bulgarien<br>
              floor 4 office 15
          </td>
        </tr>
        <tr>
          <td>E-Mail:</td>
          <td>office@at.yokogawa.com</td>
        </tr>
        <tr>
          <td>Telefon:</td>
          <td>+359 (2) 873 14 19</td>
        </tr>
      </table>
      <table class="table table-hover" v-if="selected === '10'">
        <tr>
          <td>Adresse:</td>
          <td>Kruhek' d.o.o.<br>
              Veprinacka , 16 <br>
              10000 Zagreb, Kroatien
          </td>
        </tr>
        <tr>
          <td>E-Mail:</td>
          <td>office@at.yokogawa.com</td>
        </tr>
        <tr>
          <td>Telefon:</td>
          <td>+385 1 36 95 138</td>
        </tr>
      </table>
      <table class="table table-hover" v-if="selected === '11'">
        <tr>
          <td>Adresse:</td>
          <td>Yokogawa Representative Office Warsaw,<br>
              Yokogawa Deutschland GmbH Sp. z o. o. Oddział w Polsce<br>
              Al. Krakowska , 197<br>
              02-180 Warszawa, Polen
          </td>
        </tr>
        <tr>
          <td>E-Mail:</td>
          <td>warsaw@yokogawa.pl</td>
        </tr>
        <tr>
          <td>Telefon:</td>
          <td>+48 22 868 59 05</td>
        </tr>
      </table>
      <table class="table table-hover" v-if="selected === '12'">
        <tr>
          <td>Adresse:</td>
          <td>Yokogawa Measurement Technologies AB<br>
              Finlandsgatan , 52<br>
              2 fl.<br>
              164 74 Kista, Stockholm, Schweden
          </td>
        </tr>
        <tr>
          <td>E-Mail:</td>
          <td>info@yokogawa.se</td>
        </tr>
        <tr>
          <td>Telefon:</td>
          <td>+46 8 477 19 00</td>
        </tr>
      </table>
      <table class="table table-hover" v-if="selected==='15'||selected ==='13'||selected ==='16'||selected ==='19'||selected ==='29'||selected ==='30'||selected ==='31'||selected ==='32'||selected ==='33'||selected ==='38'">
        <tr>
          <td>Adresse:</td>
          <td>Yokogawa Europe B.V.<br>
              Euroweg , 2<br>
              3825 HD Amersfoort, Niederlande
          </td>
        </tr>
        <tr>
          <td>E-Mail:</td>
          <td>sales_pci@nl.yokogawa.com</td>
        </tr>
        <tr>
          <td>Telefon:</td>
          <td>+31 88 464 1888</td>
        </tr>
      </table>
      <table class="table table-hover" v-if="selected === '17'">
        <tr>
          <td>Adresse:</td>
          <td>TCB Avgidis Automation S.A.<br>
              Kasomouli Str. , 108<br>
              11744 Neos Kosmos-Athens, Griechenland
          </td>
        </tr>
        <tr>
          <td>E-Mail:</td>
          <td>info@tcb.gr</td>
        </tr>
        <tr>
          <td>Telefon:</td>
          <td>+30 210 9480260</td>
        </tr>
      </table>
      <table class="table table-hover" v-if="selected === '18'">
        <tr>
          <td>Adresse:</td>
          <td>Yokogawa Hungaria Ltd.<br>
              Bácsalmás utca , 1-3<br>
              1119 Budapest, Ungarn
          </td>
        </tr>
        <tr>
          <td>E-Mail:</td>
          <td>office@at.yokogawa.com</td>
        </tr>
        <tr>
          <td>Telefon:</td>
          <td>+36 1 355 39 38</td>
        </tr>
      </table>
      <table class="table table-hover" v-if="selected === '22'">
        <tr>
          <td>Adresse:</td>
          <td>Insatech A/S<br>
              Algade , 133<br>
              4760 Vordingborg, Dänemark
          </td>
        </tr>
        <tr>
          <td>Telefon:</td>
          <td>+45 55 372 095</td>
        </tr>
      </table>
      <table class="table table-hover" v-if="selected === '23'">
        <tr>
          <td>Adresse:</td>
          <td>Yokogawa Iberia, S.A.<br>
              Rue Rei Ramiro , 870-1G<br>
              4400-281 Vila Nova de Gaia, Portugal
          </td>
        </tr>
        <tr>
          <td>E-Mail:</td>
          <td>Paulo.Calado@pt.yokogawa.com</td>
        </tr>
        <tr>
          <td>Telefon:</td>
          <td>+351 22 37 22 650</td>
        </tr>
      </table>
      <table class="table table-hover" v-if="selected === '24'">
        <tr>
          <td>Adresse:</td>
          <td>Yokogawa Ireland<br>
              Grants park, Greenough business park , Unit 411<br>
              24 Rathcoole, Co. Dublin, Irland
          </td>
        </tr>
        <tr>
          <td>E-Mail:</td>
          <td>info@ie.yokogawa.com</td>
        </tr>
        <tr>
          <td>Telefon:</td>
          <td>+353 (0) 1 4577454</td>
        </tr>
      </table>
      <table class="table table-hover" v-if="selected === '25'">
        <tr>
          <td>Adresse:</td>
          <td>Yokogawa Europe B.V. Olanda Sucursala Romania<br>
              Fabrica de Glucoza Street , 5<br>
              2nd District Bucharest<br>
              Building F, Novo Park, 7th Floor, Rumänien
          </td>
        </tr>
        <tr>
          <td>Postfach:</td>
          <td>020331</td>
        </tr>
        <tr>
          <td>E-Mail:</td>
          <td>info@at.yokogawa.com</td>
        </tr>
        <tr>
          <td>Telefon:</td>
          <td>(+4021) 204 94 00</td>
        </tr>
      </table>
      <table class="table table-hover" v-if="selected === '26'">
        <tr>
          <td>Adresse:</td>
          <td>Yokogawa Representative Office<br>
              Štefánikova , 8<br>
              81105 Bratislava, Slowakei
          </td>
        </tr>
        <tr>
          <td>E-Mail:</td>
          <td>office@at.yokogawa.com</td>
        </tr>
        <tr>
          <td>Telefon:</td>
          <td>+421 (0) 2 5262 1062</td>
        </tr>
      </table>
      <table class="table table-hover" v-if="selected === '36'">
        <tr>
          <td>Adresse:</td>
          <td>Yokogawa Norge<br>
              3101 Tønsberg, Norwegen
          </td>
        </tr>
        <tr>
          <td>Postfach:</td>
          <td>353</td>
        </tr>
        <tr>
          <td>E-Mail:</td>
          <td>info@no.yokogawa.com</td>
        </tr>
        <tr>
          <td>Telefon:</td>
          <td>+4733003300</td>
        </tr>
      </table>
      <table class="table table-hover" v-if="selected === '37'">
        <tr>
          <td>Adresse:</td>
          <td>INA energy system Stefan Pop Ducev<br>
              Nikola Parapunov , 3a-4/1<br>
              MK-1000 TC Karpos 4, Skopje, Mazedonien
          </td>
        </tr>
        <tr>
          <td>E-Mail:</td>
          <td>office@at.yokogawa.com</td>
        </tr>
        <tr>
          <td>Telefon:</td>
          <td>+38 9 2 3078 809</td>
        </tr>
      </table>
      <table class="table table-hover" v-if="selected === '39'">
        <tr>
          <td>Adresse:</td>
          <td>Compact MM Trade<br>
              Milana Rakica , 35<br>
              RS-11000 Beograd, Serbien
          </td>
        </tr>
        <tr>
          <td>E-Mail:</td>
          <td>office@at.yokogawa.com</td>
        </tr>
        <tr>
          <td>Telefon:</td>
          <td>+381 (11) 2413 222</td>
        </tr>
      </table>
      <table class="table table-hover" v-if="selected === '40'">
        <tr>
          <td>Adresse:</td>
          <td>Best A.S.<br>
              Aksoy Ishani , 501-502<br>
              Kıbrıs Sehitleri Caddesi<br>
              35220 Alsancak-Izmir, Türkei
          </td>
        </tr>
        <tr>
          <td>E-Mail:</td>
          <td>infobest@best-as.com.tr</td>
        </tr>
        <tr>
          <td>Telefon:</td>
          <td>+90 232 4636 426</td>
        </tr>
      </table>
      <table class="table table-hover" v-if="selected === '41'">
        <tr>
          <td>Adresse:</td>
          <td>Kontram Oy<br>
              02201 Espoo, Finnland
          </td>
        </tr>
        <tr>
          <td>Postfach:</td>
          <td>88</td>
        </tr>
        <tr>
          <td>E-Mail:</td>
          <td>kontram@kontram.fi</td>
        </tr>
        <tr>
          <td>Telefon:</td>
          <td>+358 9 8866 4500</td>
        </tr>
      </table>
    </div>
    <h5>Probleme bei der Registrierung?</h5>
    <p>Bitte kontaktieren Sie: <a href="mailto:YDS.Support@eu.yokogawa.com">YDS.Support@eu.yokogawa.com</a></p>
    <h5>WOLLEN SIE MEHR ÜBER YOKOGAWA ERFAHREN?</h5>
    <p>Besuchen Sie uns auf: <a href="www.yokogawa.com/eu">www.yokogawa.com/eu</a></p>
  </div>
</template>

<script>
export default {
  name: 'kontakt',
  data () {
    items: [
    {name: 'Deutschland', value: '1'},
    {name: 'Spanien', value: '2'},
    {name: 'Frankreich', value: '3'},
    {name: 'Vereinigtes Königreich', value: '4'},
    {name: 'Italien', value: '5'},
    {name: 'Österreich', value: '6'},
    {name: 'Schweiz', value: '7'},
    {name: 'Belgien', value: '8'},
    {name: 'Bulgarien', value: '9'},
    {name: 'Kroatien', value: '10'},
    {name: 'Polen', value: '11'},
    {name: 'Schweden', value: '12'},
    {name: 'Zypern', value: '13'},
    {name: 'Tschechien', value: '14'},
    {name: 'Niederlande', value: '15'},
    {name: 'Estland', value: '16'},
    {name: 'Griechenland', value: '17'},
    {name: 'Ungarn', value: '18'},
    {name: 'Lettland', value: '19'},
    {name: 'Luxemburg', value: '20'},
    {name: 'Malta', value: '21'},
    {name: 'Dänemark', value: '22'},
    {name: 'Portugal', value: '23'},
    {name: 'Irland', value: '24'},
    {name: 'Rumänien', value: '25'},
    {name: 'Slowakei', value: '26'},
    {name: 'Slowenien', value: '27'},
    {name: 'Albanien', value: '28'},
    {name: 'Andorra', value: '29'},
    {name: 'Bosnien und Herzegowina', value: '30'},
    {name: 'Island', value: '31'},
    {name: 'Lichtenstein', value: '32'},
    {name: 'Moldawien', value: '33'},
    {name: 'Monaco', value: '34'},
    {name: 'Montenegro', value: '35'},
    {name: 'Norwegen', value: '36'},
    {name: 'Mazedonien', value: '37'},
    {name: 'San Marino', value: '38'},
    {name: 'Serbien', value: '39'},
    {name: 'Türkei', value: '40'},
    {name: 'Finnland', value: '41'}
    ],
    selected: '1'
  }
}
</script>
<style>
  h5{
    text-transform: uppercase;
    color: black;
    border-bottom: 1px solid #0000cc;
    border-top: none;
    margin: 0;
    background-color: #f2f2f2;
    display: block;
  }
</style>
