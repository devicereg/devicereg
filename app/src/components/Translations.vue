<script>
  import Contact from "./Translations/Contact.json"
  import Datenschutz from "./Translations/Datenschutz.json"
  import DeviceRegForm from "./Translations/DeviceRegForm.json"
  import UserRegForm from "./Translations/UserRegForm.json"
  import Impressum from "./Translations/Impressum.json"
  import MyDevices from "./Translations/MyDevices.json"
  import UserOverview from "./Translations/UserOverview.json"
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
      edit_profile: 'Profil editieren',
      delete_profile: 'Profil löschen',



      Contact: {
        box_address: 'Postfach',
        contact: 'Bitte kontaktieren Sie',
        city: 'Stadt',
        more: 'Wollen Sie mehr über Yokogawa erfahren',
        register_problems: 'Probleme bei der Registrierung',
        titel: 'Kundensupport für Durchflussmessgeräte',
        visit: 'Besuchen Sie uns auf',
      },

      MyDevices: {
        title: 'Meine Geräte',
        technology: 'Technologie',
        device_description: 'Gerätebeschreibung',
        category: 'Kategorie',
        add_button: 'Gerät hinzufügen',
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
      },
      ResetPassword: {
        reset_password: 'Passwort zurücksetzen',
        email: 'E-Mail Adresse',
        reset_password_button: "Abschicken",
        paragraph: "Sie werden eine E-mail mit einem Link erhalten, um Ihr Passwort zurückzusetzen.",
        toast_title: 'Passwort zurücksetzen',
        toast_msg: 'Es wurde eine E-Mail an die folgende Adresse gesendet: '
      },

      NewPasswordConfirmed: {
        header: 'Passwort zurückgesetzt',
        paragraph: 'Das Passwort wurde erfolgreich geändert.',
        button: 'Zurück zum Login'
      },

      CreateNewPassword: {
        header: 'Neues passwort anlegen',
        password: 'Passwort',
        password_repeat: 'Passwort wiederholen',
        reset_password_button: 'Passwort zurücksetzen',
        toast_title: 'Neues Passwort anlegen',
        toast_msg: 'Die eingegebenen Passwörter stimmen nicht überein. Bitte prüfen Sie Ihre Eingaben.'
      },
      DeleteUserAlert: {
        title: 'Profil löschen?',
        text: 'Sie sind im Begriff Ihr Profil zu löschen. <br> Sind Sie sich sicher?',
        confirm: 'Ja',
        cancel: 'Nein'
      },

      Contact: Contact.de,
      MyDevices: MyDevices.de,
      UserOverview: UserOverview.de,
      RegistrationForm: RegistrationForm.de,
      DeviceRegForm: DeviceRegForm.de,
      UserRegForm: UserRegForm.de,
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
      edit_profile: 'Edit profile',
      delete_profile: 'Delete profile',

      Contact: {
        box_address: 'Mailbox',
        contact: 'Please contact',
        more: 'Want to learn more about Yokogawa',
        register_problems: 'Problems with registration',
        titel: 'Flowmeter customer support',
        visit: 'Visit us at'
      },

      MyDevices: {
        title: 'My Devices',
        technology: 'Technology',
        device_description: 'Device description',
        category: 'Category',
        add_button: 'Add device',
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
      },

      ResetPassword: {
        reset_password: 'Reset password',
        email: 'E-Mail address',
        reset_password_button: "Submit",
        paragraph: "You'll receive an email containing a link that will allow you to reset your password.",
        toast_title: 'Reset password',
        toast_msg: 'E-Mail send to the following adress: '
      },

      NewPasswordConfirmed: {
        header: 'Reset password',
        paragraph: 'Your password has been successfully changed.',
        button: 'Back to Login'
      },

      CreateNewPassword: {
        header: 'Create a new password',
        password: 'Password',
        password_repeat: 'Repeat password',
        reset_password_button: 'Reset password',
        toast_title: 'Create a new password',
        toast_msg: 'The entered passwords do not match'
      },
      DeleteUserAlert: {
        title: 'Delete Profile?',
        text: 'You are about to delete your profile. <br> Are you sure?',
        confirm: 'Yes',
        cancel: 'No'
      },

      Contact: Contact.en,
        MyDevices: MyDevices.en,
        UserOverview: UserOverview.en,
        RegistrationForm: RegistrationForm.en,
        DeviceRegForm: DeviceRegForm.en,
        UserRegForm: UserRegForm.en,
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
