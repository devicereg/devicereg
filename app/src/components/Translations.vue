<script>
  var Vue = require('vue')
  var VueI18n = require('vue-i18n')

  // ready translated locales
  var locales = {
    de: {
      Kontakt: {
        titel: 'Kundensupport für Durchflussmessgeräte',
        registrierungsprobleme: 'Probleme bei der Registrierung',
        kontaktieren: 'Bitte kontaktieren Sie',
        mehr_erfahren: 'Wollen Sie mehr über Yokogawa erfahren',
        uns_besuchen: 'Besuchen Sie uns auf',
        adresse: 'Adresse',
        postfach: 'Postfach',
        email: 'E-Mail',
        telefon: 'Telefon',
      }

    },
    en: {
      Kontakt: {
        titel: 'Flowmeter customer support',
        registrierungsprobleme: 'Problems with registration',
        kontaktieren: 'Please contact',
        mehr_erfahren: 'Want to learn more about Yokogawa',
        uns_besuchen: 'Visit us at',
        adresse: 'Address',
        postfach: 'Mailbox',
        email: 'Email',
        telefon: 'Phone',
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
