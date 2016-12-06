<script>
  var Vue = require('vue')
  var VueI18n = require('vue-i18n')

  // ready translated locales
  var locales = {
    de: {
      address: 'Adresse',
      country: 'Land',
      email: 'E-Mail',
      phone: 'Telefon',
      language: 'Sprache',
      city: 'Stadt',
      save: 'Speichern',
      cancel: 'Abbrechen',

      Contact: {
        box_address: 'Postfach',
        contact: 'Bitte kontaktieren Sie',
        city: 'Stadt',
        more: 'Wollen Sie mehr über Yokogawa erfahren',
        register_problems: 'Probleme bei der Registrierung',
        titel: 'Kundensupport für Durchflussmessgeräte',
        visit: 'Besuchen Sie uns auf',
      },
      RegistrationForm: {
        agreement: 'Einverständniserklärung',
        answer: 'Antwort',
        choose: 'Bitte wählen Sie',
        company: 'Firmenname',
        company_details: 'Firmenangaben',
        english: 'Englisch',
        gender: 'Anrede',
        german: 'Deutsch',
        industry_family: 'Branchenfamilie',
        industry_type: 'Branchentyp',
        mr: 'Herr',
        mrs: 'Frau',
        number: 'Hausnummer',
        password: 'Passwort',
        personal_details: 'Personenangaben',
        prename: 'Vorname',
        question: 'Geheimfrage',
        register: 'Registrieren',
        street: 'Straße',
        surname: 'Nachname',
        system_access: 'Systemzugang',
        terms_of_agreement: 'Ich habe die Nutzungsbedingungen, die Datenschutzerklärung und die Gewährleistungsbedingungen verstanden und akzeptiere',
        title: 'Nutzer registrieren',
        user: 'Benutzer (E-Mail Adresse)',
        zip: 'Postleitzahl'
      },
      DeviceRegForm: {
        title: 'Gerät registrieren',
        categorization: 'Gerätekategorisierung',
        technology: 'Technologie',
        category: 'Gerätekategorie',
        custom: 'Benutzerdefiniert',
        description_data: 'Daten zur Gerätebeschreibung',
        serial_number: 'Seriennummer',
        label: 'Gerätebezeichnung',
        process_fluid: 'Prozessmedium',
        tag_number: 'Tagnummer',
        comment: 'Kommentar',
        maintenance_and_calibration: 'Wartung und Kalibrierung',
        maintenance: 'Wartung',
        calibration: 'Kalibrierung',
        notification: 'Benachrichtigung',
        yes: 'Ja',
        interval: 'Intervall',
        start: 'Beginn',
        month: 'Monat',
        months: 'Monate'
      }

    },
    en: {
      address: 'Address',
      country: 'Country',
      email: 'Email',
      phone: 'Phone',
      language: 'Language',
      city: 'City',
      save: 'Save',
      cancel: 'Cancel',

      Contact: {
        box_address: 'Mailbox',
        contact: 'Please contact',
        more: 'Want to learn more about Yokogawa',
        register_problems: 'Problems with registration',
        titel: 'Flowmeter customer support',
        visit: 'Visit us at'
      },
      RegistrationForm: {
        agreement: 'Agreement',
        answer: 'Answer',
        choose: 'Please choose',
        company: 'Company',
        company_details: 'Company Details',
        english: 'English',
        gender: 'Gender',
        german: 'German',
        industry_type: 'Industry type',
        industry_family: 'Industry Family',
        mr: 'Mr',
        mrs: 'Mrs',
        number: 'Number',
        password: 'Password',
        personal_details: 'Person Details',
        prename: 'Prename',
        question: 'Secret Question',
        register: 'Register',
        street: 'Street',
        surname: 'Surname',
        system_access: 'System Access',
        terms_of_agreement: 'I have understood the terms and conditions, the privacy policy and the warranty conditions and accept.',
        title: 'Register a User',
        user: 'User (E-Mail)',
        zip: 'Zip'
      },
      DeviceRegForm: {
        title: 'Register device',
        categorization: 'Categorization',
        technology: 'Technology',
        category: 'Category',
        custom: 'Custom',
        description_data: 'Description data',
        serial_number: 'Serial number',
        label: 'Label',
        process_fluid: 'Process fluid',
        tag_number: 'Tag number',
        comment: 'Comment',
        maintenance_and_calibration: 'Maintenance and calibration',
        maintenance: 'Maintenance',
        calibration: 'Calibration',
        notification: 'Notification',
        yes: 'Yes',
        interval: 'Interval',
        start: 'Start',
        month: 'Month',
        months: 'Months'
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
