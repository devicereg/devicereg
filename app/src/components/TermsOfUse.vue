<template xmlns:v-bind="http://www.w3.org/1999/xhtml">

    <div class="termsofuse">
        <div class="row">
          <div class="col-md-offset-2 col-md-8">
            <h1>Nutzungsbedingungen</h1>

            <p>
              Die Nutzung dieser von der Rota Yokogawa GmbH & Co. KG („Rota Yokogawa“) bereitgestellten Internetseite
              und seiner Inhalte unterliegt den folgenden Nutzungsbedingungen:
            </p>

            <h5><strong>1. Inhalt des Onlineangebotes </strong></h5>

            <p>
              Alle Inhalte unseres Internetauftritts werden mit Sorgfalt und nach bestem Gewissen erstellt. Eine Gewähr für die Aktualität,
              Vollständigkeit und Richtigkeit sämtlicher Seiten kann jedoch nicht übernommen werden. Ebenso übernimmt Rota Yokogawa keine Gewähr für die
              jederzeitige Verfügbarkeit der bereitgestellten Informationen auf seiner Internetseite noch für das Ausbleiben anderweitiger technischer Störungen.
              Haftungsansprüche, welche sich auf Schäden materieller oder ideeller Art beziehen, die durch die Nutzung oder Nichtnutzung der dargebotenen
              Informationen bzw. durch die Nutzung fehlerhafter und unvollständiger Informationen verursacht wurden, sind grundsätzlich ausgeschlossen,
              sofern kein vorsätzliches oder grob fahrlässiges Verschulden seitens Rota Yokogawa vorliegt.
              Rota Yokogawa behält sich ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen,
              zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.
            </p>


             <h5><strong>2. Verweise und Links </strong></h5>

            <p>
              Diese Internetseite enthält als Information auch entsprechend gekennzeichnete Links oder Verweise auf Internetseiten Dritter.
              Die Verantwortlichkeit für diese fremden Inhalte liegt alleine bei dem Anbieter, der die Inhalte bereithält. Rota Yokogawa vermittelt lediglich den Zugang
              zur Nutzung dieser fremden Inhalte.
            </p>
            <p>
              Rota Yokogawa ist gesetzlich nicht verpflichtet, die übermittelten oder gespeicherten fremden Inhalte zu überwachen (§§ 8 – 10 TMG).
              Bei der erstmaligen Verknüpfung mit einem anderen Internetangebot ist dessen Inhalt daraufhin geprüft worden, ob durch ihn eine mögliche zivilrechtliche
              oder strafrechtliche Verantwortlichkeit ausgelöst wird. Auf die aktuelle und zukünftige Gestaltung, die Inhalte oder die Urheberschaft der verlinkten/verknüpften
              Seiten besteht jedoch keinerlei Einfluss. Rota Yokogawa distanziert sich ausdrücklich von allen Inhalten aller verlinkten/verknüpften Seiten,
              die nach der Linksetzung verändert wurden.
            </p>
            <p>
              Für illegale, fehlerhafte oder unvollständige Inhalte und insbesondere für Schäden, die aus der Nutzung oder Nichtnutzung von Informationen Dritter entstehen,
              haftet allein der Anbieter der Seite, auf welche verwiesen wurde, nicht derjenige, der über Links auf die jeweilige Veröffentlichung lediglich verweist.
              Eine umgehende Entfernung dieser Inhalte erfolgt ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung. Rota Yokogawa haftet nicht vor dem Zeitpunkt
              der Kenntniserlangung.
            </p>


             <h5><strong>3. Urheber- und Kennzeichenrecht </strong></h5>

            <p>
              Falls nicht anders angegeben, unterliegen alle Seiten dem Urheberrecht (Copyright). Dies gilt insbesondere für Texte, Bilder, Grafiken, Ton-, Video- oder
              Animationsdateien einschließlich deren Anordnung auf den Internetseiten. Eine Vervielfältigung oder Verwendung solcher Seiten (oder Teilen davon) in anderen
              elektronischen oder gedruckten Publikationen und deren Veröffentlichung (auch im Internet) ist nur nach vorheriger Genehmigung von Rota Yokogawa gestattet.
              Weiterhin können Bilder, Grafiken, Text- oder sonstige Dateien ganz oder teilweise dem Urheberrecht Dritter unterliegen.
            </p>
            <p>
              Soweit nicht anders angegeben, sind alle Markenzeichen auf der Rota Yokogawa Internetseite markenrechtlich geschützt. Dies gilt insbesondere für Marken,
              Typenschilder, Firmenlogos und Embleme der Rota Yokogawa und Yokogawa Gruppe. Die auf unseren Seiten verwendeten Marken und Gestaltungselemente sind geistiges
              Eigentum der Yokogawa Gruppe. Die durch Dritte geschützten Marken- und Warenzeichen unterliegen uneingeschränkt den Bestimmungen des jeweils gültigen Kennzeichenrechts
              und den Besitzrechten der jeweiligen eingetragenen Eigentümer.
            </p>


             <h5><strong>4. Datenschutz </strong></h5>

            <p>
              Siehe <router-link to="/datenschutz">Datenschutzerkkärung</router-link>
            </p>


             <h5><strong>5. Passwort, Registrierung </strong></h5>

            <p>
              Einige Seiten der Internetseite können passwortgeschützt sein. Der Zugang zu diesen Seiten ist im Interesse der Sicherheit des Geschäftsverkehrs und
              des Datenschutzes nur registrierten Nutzern möglich. Sie sollten Ihre Zugangsinformationen deshalb stets vertraulich behandeln und das Browserfenster
              oder mobile Applikationen schließen, wenn Sie die Kommunikation mit uns beendet haben, insbesondere wenn Sie den Computer oder mobile Endgeräte gemeinsam
              mit anderen nutzen.
            </p>

            <p>
              Auf eine Registrierung durch Rota Yokogawa besteht kein Anspruch. Rota Yokogawa behält sich insbesondere vor, auch bisher frei zugängliche Internetseiten
              einer Registrierungspflicht zu unterwerfen. Rota Yokogawa ist berechtigt, die Zugangsberechtigung durch Sperrung der Zugangsdaten zu widerrufen, ohne dass es
              der Angabe von Gründen bedarf, insbesondere wenn der Nutzer
            </p>
            <ul>
              <li v-bind:value="item" v-for="item in items"> {{ item.message }} </li>
            </ul>


             <h5><strong>6. Service Angebote </strong></h5>

            <p>
              Rota Yokogawa bietet optional Support- und/oder Serviceleistungen in einem speziell geschützten Bereich an. Hierzu ist es notwendig, dass sich Nutzer registrieren
              und gerätespezifische Informationen und weiterführende Daten auf der Rota Yokogawa Online-Plattform einpflegen und aktualisieren. Rota Yokogawa weist darauf hin,
              dass vertrauliche oder eigentumsrechtlich geschützte Informationen nicht auf dieser Internetseite übermittelt bzw. darauf zur Verfügung gestellt werden dürfen.
              Demzufolge geht Rota Yokogawa davon aus, dass alle Unterlagen, Informationen oder andere Beiträge oder Übertragungen, die Sie auf diese Internetseite übermitteln
              bzw. darauf bereitstellen, als nicht vertraulich gelten und nicht urheber- und/oder eigentumsrechtlich geschützt sind. Rota Yokogawa überprüft die von Ihnen gemachten
              Angaben nicht auf Plausibilität, Vollständigkeit oder Richtigkeit. Demzufolge übernimmt Rota Yokogawa keine Verantwortung für die Übertragungen oder die Aktualität,
              Vollständigkeit und Richtigkeit hierauf basierender Dienste, insbesondere Erinnerungsfunktionen betreffend Wartungs- oder Serviceintervalle. Eine störungsfreie Funktion
              24/7 ist nicht gewährleistet. Rota Yokogawa behält sich vor, die Dienste ganz oder teilweise ohne vorherige Ankündigung einzuschränken oder einzustellen.
              Der Kunde ist um die Sicherung seiner Daten selbst besorgt. Die Nutzung erfolgt in alleiniger Verantwortung des Kunden.
            </p>

             <h5><strong>7. Änderung der Nutzungsbedingungen </strong></h5>

            <p>
              Rota Yokogawa behält sich das Recht vor, diese Nutzungsbedingungen mit vorheriger Ankündigung zu ändern. Solche Änderungen werden Ihnen vorher mitgeteilt.
              Die Änderungen erlangen erst Wirkung, nachdem sie von Ihnen akzeptiert wurden. Für den Fall, dass Sie die Änderungen nicht akzeptieren, kann jede Partei diese
              Vereinbarung kündigen. Die Kündigungsfrist beträgt einen Monat ab Zugang der Mitteilung der Änderung.
            </p>
            <p>
             November 2016
            </p>
        </div>
      </div>
    </div>

</template>


<script>

  export default{
    name: 'terms-of-use',
    data () {
      return {
        items: [
          { message: 'zur Registrierung falsche Angaben gemacht hat oder die Zugangskennung missbräuchlich verwendet wird,' },
          { message: 'gegen diese Nutzungsbedingungen oder gegen seine Sorgfaltspflichten im Umgang mit den Zugangsdaten verstoßen hat, oder' },
          { message: 'gegen anwendbares Recht beim Zugang zu oder der Nutzung der Internetseite verstoßen hat.' }
        ]
      }
    }
  }

</script>


<style>

</style>
