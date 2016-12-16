<script>
  import Contact from "./Translations/Contact.json"
  import Datenschutz from "./Translations/Datenschutz.json"
  import DeviceRegForm from "./Translations/DeviceRegForm.json"
  import Impressum from "./Translations/Impressum.json"
  import MyDevices from "./Translations/MyDevices.json"
  import RegistrationForm from "./Translations/RegistrationForm.json"
  import TermsOfUse from "./Translations/TermsOfUse.json"
  import Warranty from "./Translations/Warranty.json"
  import Home from "./Translations/Home.json"
  import LoginForm from "./Translations/LoginForm.json"


  var Vue = require('vue')
  var VueI18n = require('vue-i18n')

  var locales = {
    de: {
      address: 'Adresse',
      country: 'Land',
      email: 'E-Mail',
      password: 'Passwort',
      phone: 'Telefon',
      language: 'Sprache',
      city: 'Stadt',
      save: 'Speichern',
      cancel: 'Abbrechen',
      language: 'Sprache',
      german: 'Deutsch',
      english: 'Englisch',
      logout: 'Abmelden',
      my_devices: 'Meine Geräte',
      home: 'Startseite',
      register: 'Registrieren',
      contact: 'Kontakt',
      privacy_policy: 'Datenschutz',
      site_policy: 'Nutzungsbedingungen',
      legal_disclosure: 'Impressum',
      terms_of_warranty: 'Aktionsbedingungen',


      Contact: Contact.de,
      MyDevices: MyDevices.de,
      RegistrationForm: RegistrationForm.de,
      DeviceRegForm: DeviceRegForm.de,
      TermsOfUse: TermsOfUse.de,
      Datenschutz: Datenschutz.de,
      Warranty: Warranty.de,
      Impressum: Impressum.de,
      Home: Home.de,
      LoginForm: LoginForm.de
    },
    en: {
      address: 'Address',
      country: 'Country',
      email: 'Email',
      password: 'Password',
      phone: 'Phone',
      language: 'Language',
      city: 'City',
      save: 'Save',
      cancel: 'Cancel',
      language: 'Language',
      german: 'German',
      english: 'English',
      logout: 'Logout',
      my_devices: 'My Devices',
      home: 'Home',
      register: 'Sign up',
      contact: 'Contact',
      privacy_policy: 'Privacy policy',
      site_policy: 'Site policy',
      legal_disclosure: 'Imprint',
      terms_of_warranty: 'Terms of warranty',


      Contact: Contact.en,
      MyDevices: MyDevices.en,
      RegistrationForm: RegistrationForm.en,
      DeviceRegForm: DeviceRegForm.en,
      TermsOfUse: TermsOfUse.en,
      Datenschutz: Datenschutz.en,
      Warranty: Warranty.en,
      Impressum: Impressum.en,
      Home: Home.en,
      LoginForm: LoginForm.en
    }
  }

  // install plugin
  Vue.use(VueI18n)


  // set lang
  Vue.config.lang = 'de'

  // set locales
  Object.keys(locales).forEach(function (lang) {
    Vue.locale(lang, locales[lang])
  })
</script>
