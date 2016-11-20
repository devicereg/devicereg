<script>
  var Vue = require('vue')
  var VueI18n = require('vue-i18n')

  // ready translated locales
  var locales = {
    de: {
      message: {
        hello: 'Hallo'
      },
      Kontakt: {
        Kundensupport_fuer_Durchflussmessgeraete: 'Kundensupport für Durchflussmessgeräte',
        Probleme_bei_der_Registrierung: 'Probleme bei der Registrierung',
        Bitte_kontaktieren_Sie: 'Bitte kontaktieren Sie',
        Wollen_Sie_mehr_ueber_Yokogawa_erfahren: 'Wollen Sie mehr über Yokogawa erfahren',
        Besuchen_Sie_uns_auf: 'Besuchen Sie uns auf',
        Adresse: 'Adresse',
        Postfach: 'Postfach',
        Email: 'E-Mail',
        Telefon: 'Telefon',
      }

    },
    en: {
      message: {
        hello: 'Hello'
      },
      Kontakt: {
        Kundensupport_fuer_Durchflussmessgeraete: 'Flowmeter customer support',
        Probleme_bei_der_Registrierung: 'Problems with registration',
        Bitte_kontaktieren_Sie: 'Please contact',
        Wollen_Sie_mehr_ueber_Yokogawa_erfahren: 'Want to learn more about Yokogawa',
        Besuchen_Sie_uns_auf: 'Visit us at',
        Adresse: 'Address',
        Postfach: 'Mailbox',
        Email: 'Email',
        Telefon: 'Phone',
      }
    }
  }

  // install plugin
  Vue.use(VueI18n)


  // set lang
  Vue.config.lang = 'en'

  // set locales
  Object.keys(locales).forEach(function (lang) {
    Vue.locale(lang, locales[lang])
  })
</script>
