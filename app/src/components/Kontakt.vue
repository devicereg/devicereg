<template>
  <div id="kontakt" class="container-fluid">
    <h2>Kundensupport für durchflussmesser</h2>
    <p>Wählen Sie Ihr Land:</p>
    <select class="form-control" v-model="selected">
      <option v-bind:value="item" v-for="item in items">{{item.name}}</option>
    </select>
    <div class="land">
      <table class="table table-hover" v-if="selected === null">
        <tr>
          <td>Adresse:</td>
          <td v-html="selected.address"></td>
        </tr>
        <tr v-if="selected.poBox">
          <td>Postfach:</td>
          <td>{{ selected.poBox }}</td>
        </tr>
        <tr v-if="selected.email">
          <td>E-Mail:</td>
          <td>{{ selected.email }}</td>
        </tr>
        <tr>
          <td>Telefon:</td>
          <td>{{ selected.phone }}</td>
        </tr>
      </table>
    </div>
    <h2>Probleme bei der Registrierung?</h2>
    <p>Bitte kontaktieren Sie: <a href="mailto:YDS.Support@eu.yokogawa.com">YDS.Support@eu.yokogawa.com</a></p>
    <h2>Wollen Sie mehr über Yokogawa erfahren?</h2>
    <p>Besuchen Sie uns auf: <a href="www.yokogawa.com/eu">www.yokogawa.com/eu</a></p>
  </div>
</template>

<script>
export default {
  name: 'kontakt',
  data () {
    return {
      selected: '1',
      items: [
        {
          name: 'Deutschland',
          value: '1',
          email: 'info@de.yokogawa.com',
          phone: '+49 (0)2102 4983-0',
          address: `Yokogawa Deutschland GmbH<br>
              Broichhofstr. , 7-11<br>
              40880 Ratingen, Deutschland`
        },
        {
          name: 'Spanien',
          value: '2',
          email: 'info@es.yokogawa.com',
          phone: '+34 91 771 31 50',
          address: `Yokogawa Iberia, S.A., Madrid Office<br>
              Cl Lezama , 22 <br>
              28034 Madrid, Spanien`
        },
        {
          name: 'Frankreich',
          value: '3',
          email: 'info@fr.yokogawa.com',
          phone: '+33 1 3926 1000',
          address: `Yokogawa France S.A.<br>
              Rue Paul Dautier , 17 <br>
              78147 Vélizy-Villacoublay, Cede, Frankreich`,
          poBox: '267'
        },
        {
          name: 'Vereinigtes Königreich',
          value: '4',
          email: 'info@yokogawa.co.uk',
          phone: '+44 1 928 597 100',
          address: `Yokogawa United Kingdom Ltd.<br>
              Stuart Road, Manor Park , 17<br>
              WA7 1TR Runcorn, Cheshire, Verienigtes Königreich`
        },
        {
          name: 'Italien',
          value: '5',
          email: 'info@it.yokogawa.com',
          phone: '+39 0266055 201',
          address: `Yokogawa Italia s.r.l.<br>
              Via Pelizza da Volpedo , 53<br>
              20092 Cinisello Balsamo (MI), Italien`
        },
        {
          name: 'Österreich',
          value: '6',
          email: 'office@at.yokogawa.com',
          phone: '+43 (1) 206 34 - 0',
          address: `Yokogawa GesmbH Central East Europe<br>
              Franzosengraben , 1<br>
              A-1034 Vienna, Österreich`,
          poBox: '27'
        },
        {
          name: 'Schweiz',
          value: '7',
          email: 'info@ch.yokogawa.com',
          phone: '+41 (0) 61 4616978',
          address: `Yokogawa Office Schweiz, Yokogawa Europe<br>
              Branches B.V., Amersfoort, Swiss Branch Muttenz<br>
              Bahnhofstraße , 48<br>
              CH – 4132 Muttenz, Schweiz`
        },
        {
          name: 'Belgien',
          value: '8',
          email: 'info@be.yokogawa.com',
          phone: '+32 (0)2 719 55 92',
          address: `Yokogawa Belgium N.V./S.A.<br>
              Ikaroslaan , 36<br>
              B-1930 Zaventem, Belgien`
        },
        {
          name: 'Bulgarien',
          value: '9',
          email: 'office@at.yokogawa.com',
          phone: '+359 (2) 873 14 19',
          address: `Yokogawa Branch Office Bulgaria<br>
              Nikolay Haitov Str. , 12<br>
              1113 Sofia, Bulgarien<br>
              floor 4 office 15`
        },
        {
          name: 'Kroatien',
          value: '10',
          email: 'office@at.yokogawa.com',
          phone: '+385 1 36 95 138',
          address: `Kruhek' d.o.o.<br>
              Veprinacka , 16 <br>
              10000 Zagreb, Kroatien`
        },
        {
          name: 'Polen',
          value: '11',
          email: 'warsaw@yokogawa.pl',
          phone: '+48 22 868 59 05',
          address: `Yokogawa Representative Office Warsaw,<br>
              Yokogawa Deutschland GmbH Sp. z o. o. Oddział w Polsce<br>
              Al. Krakowska , 197<br>
              02-180 Warszawa, Polen`
        },
        {
          name: 'Schweden',
          value: '12',
          email: 'info@yokogawa.se',
          phone: '+46 8 477 19 00',
          address: `Yokogawa Measurement Technologies AB<br>
              Finlandsgatan , 52<br>
              2 fl.<br>
              164 74 Kista, Stockholm, Schweden`
        },
        {
          name: 'Zypern',
          value: '13',
          email: 'sales_pci@nl.yokogawa.com',
          phone: '+31 88 464 1888',
          address: `Yokogawa Europe B.V.<br>
              Euroweg , 2<br>
              3825 HD Amersfoort, Niederlande`
        },
        {
          name: 'Tschechien',
          value: '14',
          email: 'office@at.yokogawa.com',
          phone: '+43 (1) 206 34 - 0',
          address: `Yokogawa GesmbH Central East Europe<br>
              Franzosengraben , 1<br>
              A-1034 Vienna, Österreich`,
          poBox: '27'
        },
        {
          name: 'Niederlande',
          value: '15',
          email: 'sales_pci@nl.yokogawa.com',
          phone: '+31 88 464 1888',
          address: `Yokogawa Europe B.V.<br>
              Euroweg , 2<br>
              3825 HD Amersfoort, Niederlande`
        },
        {
          name: 'Estland',
          value: '16',
          email: 'sales_pci@nl.yokogawa.com',
          phone: '+31 88 464 1888',
          address: `Yokogawa Europe B.V.<br>
              Euroweg , 2<br>
              3825 HD Amersfoort, Niederlande`
        },
        {
          name: 'Griechenland',
          value: '17',
          email: 'info@tcb.gr',
          phone: '+30 210 9480260',
          address: `TCB Avgidis Automation S.A.<br>
              Kasomouli Str. , 108<br>
              11744 Neos Kosmos-Athens, Griechenland`
        },
        {
          name: 'Ungarn',
          value: '18',
          email: 'office@at.yokogawa.com',
          phone: '+36 1 355 39 38',
          address: `Yokogawa Hungaria Ltd.<br>
              Bácsalmás utca , 1-3<br>
              1119 Budapest, Ungarn`
        },
        {
          name: 'Lettland',
          value: '19',
          email: 'sales_pci@nl.yokogawa.com',
          phone: '+31 88 464 1888',
          address: `Yokogawa Europe B.V.<br>
              Euroweg , 2<br>
              3825 HD Amersfoort, Niederlande`
        },
        {
          name: 'Luxemburg',
          value: '20',
          email: 'info@be.yokogawa.com',
          phone: '+32 (0)2 719 55 92',
          address: `Yokogawa Belgium N.V./S.A.<br>
              Ikaroslaan , 36<br>
              B-1930 Zaventem, Belgien`
        },
        {
          name: 'Malta',
          value: '21',
          email: 'info@it.yokogawa.com',
          phone: '+39 0266055 201',
          address: `Yokogawa Italia s.r.l.<br>
              Via Pelizza da Volpedo , 53<br>
              20092 Cinisello Balsamo (MI), Italien`
        },
        {
          name: 'Dänemark',
          value: '22',
          email: '',
          phone: '+45 55 372 095',
          address: `Insatech A/S<br>
              Algade , 133<br>
              4760 Vordingborg, Dänemark`
        },
        {
          name: 'Portugal',
          value: '23',
          email: 'Paulo.Calado@pt.yokogawa.com',
          phone: '+351 22 37 22 650',
          address: `Yokogawa Iberia, S.A.<br>
              Rue Rei Ramiro , 870-1G<br>
              4400-281 Vila Nova de Gaia, Portugal`
        },
        {
          name: 'Irland',
          value: '24',
          email: 'info@ie.yokogawa.com',
          phone: '+353 (0) 1 4577454',
          address: `Yokogawa Ireland<br>
              Grants park, Greenough business park , Unit 411<br>
              24 Rathcoole, Co. Dublin, Irland`
        },
        {
          name: 'Rumänien',
          value: '25',
          email: 'info@at.yokogawa.com',
          phone: '(+4021) 204 94 00',
          address: `Yokogawa Europe B.V. Olanda Sucursala Romania<br>
              Fabrica de Glucoza Street , 5<br>
              2nd District Bucharest<br>
              Building F, Novo Park, 7th Floor, Rumänien`,
          poBox: '020331'
        },
        {
          name: 'Slowakei',
          value: '26',
          email: 'office@at.yokogawa.com',
          phone: '+421 (0) 2 5262 1062',
          address: `Yokogawa Representative Office<br>
              Štefánikova , 8<br>
              81105 Bratislava, Slowakei`
        },
        {
          name: 'Slowenien',
          value: '27',
          email: 'office@at.yokogawa.com',
          phone: '+43 (1) 206 34 - 0',
          address: `Yokogawa GesmbH Central East Europe<br>
              Franzosengraben , 1<br>
              A-1034 Vienna, Österreich`,
          poBox: '27'
        },
        {
          name: 'Albanien',
          value: '28',
          email: 'office@at.yokogawa.com',
          phone: '+43 (1) 206 34 - 0',
          address: `Yokogawa GesmbH Central East Europe<br>
              Franzosengraben , 1<br>
              A-1034 Vienna, Österreich`,
          poBox: '27'
        },
        {
          name: 'Andorra',
          value: '29',
          email: 'sales_pci@nl.yokogawa.com',
          phone: '+31 88 464 1888',
          address: `Yokogawa Europe B.V.<br>
              Euroweg , 2<br>
              3825 HD Amersfoort, Niederlande`
        },
        {
          name: 'Bosnien und Herzegowina', value: '30'},
        {
          name: 'Island',
          value: '31',
          email: 'sales_pci@nl.yokogawa.com',
          phone: '+31 88 464 1888',
          address: `Yokogawa Europe B.V.<br>
              Euroweg , 2<br>
              3825 HD Amersfoort, Niederlande`
        },
        {
          name: 'Lichtenstein',
          value: '32',
          email: 'sales_pci@nl.yokogawa.com',
          phone: '+31 88 464 1888',
          address: `Yokogawa Europe B.V.<br>
              Euroweg , 2<br>
              3825 HD Amersfoort, Niederlande`
        },
        {
          name: 'Moldawien',
          value: '33',
          email: 'sales_pci@nl.yokogawa.com',
          phone: '+31 88 464 1888',
          address: `Yokogawa Europe B.V.<br>
              Euroweg , 2<br>
              3825 HD Amersfoort, Niederlande`
        },
        {
          name: 'Monaco',
          value: '34',
          email: 'info@fr.yokogawa.com',
          phone: '+33 1 3926 1000',
          address: `Yokogawa France S.A.<br>
              Rue Paul Dautier , 17 <br>
              78147 Vélizy-Villacoublay, Cede, Frankreich`,
          poBox: '267'
        },
        {
          name: 'Montenegro',
          value: '35',
          email: 'office@at.yokogawa.com',
          phone: '+43 (1) 206 34 - 0',
          address: `Yokogawa GesmbH Central East Europe<br>
              Franzosengraben , 1<br>
              A-1034 Vienna, Österreich`,
          poBox: '27'
        },
        {
          name: 'Norwegen',
          value: '36',
          email: 'info@no.yokogawa.com',
          phone: '+4733003300',
          address: `Yokogawa Norge<br>
              3101 Tønsberg, Norwegen`,
          poBox: '353'
        },
        {
          name: 'Mazedonien',
          value: '37',
          email: 'office@at.yokogawa.com',
          phone: '+38 9 2 3078 809',
          address: `INA energy system Stefan Pop Ducev<br>
              Nikola Parapunov , 3a-4/1<br>
              MK-1000 TC Karpos 4, Skopje, Mazedonien`
        },
        {
          name: 'San Marino',
          value: '38',
          email: 'sales_pci@nl.yokogawa.com',
          phone: '+31 88 464 1888',
          address: `Yokogawa Europe B.V.<br>
              Euroweg , 2<br>
              3825 HD Amersfoort, Niederlande`
        },
        {
          name: 'Serbien',
          value: '39',
          email: 'office@at.yokogawa.com',
          phone: '+381 (11) 2413 222',
          address: `Compact MM Trade<br>
              Milana Rakica , 35<br>
              RS-11000 Beograd, Serbien`
        },
        {
          name: 'Türkei',
          value: '40',
          email: 'infobest@best-as.com.tr',
          phone: '+90 232 4636 426',
          address: `Best A.S.<br>
              Aksoy Ishani , 501-502<br>
              Kıbrıs Sehitleri Caddesi<br>
              35220 Alsancak-Izmir, Türkei`
        },
        {
          name: 'Finnland',
          value: '41',
          email: 'kontram@kontram.fi',
          phone: '+358 9 8866 4500',
          address: `Kontram Oy<br>
                    02201 Espoo, Finnland`,
          poBox: '88'
        }
      ]
    }
  }
}
</script>