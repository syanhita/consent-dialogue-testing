const theme = window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

const klaroConfig = {
  version: 2,
  testing: false,
  acceptAll: true,
  storageMethod: 'localStorage',
  storageName: 'klaro-consent',
  elementID: 'klaro',
  lang: 'en',
  default: true,
  hideDeclineAll: true,
  groupByPurpose: false,
  noticeAsModal: false,
  disablePoweredBy: true,
  styling: {
    theme: [theme],
  },
  poweredBy:
    'https://github.com/KIProtect/klaro',
  translations: {
    // these values will overwrite the defaults. For a full list, have a look
    // at the `src/translations` directory of this repo:
    // https://github.com/KIProtect/klaro/tree/master/src/translations
    zz: {
      privacyPolicyUrl: '../privacy/en/index.html',
    },
    en: {
      privacyPolicy: {
        name: 'Privacy Policy',
        url: '../privacy/en/index.html'
      },
      privacyPolicyUrl: '../privacy/en/index.html',
      consentNotice: {
        description: 'We use cookies to improve our services and your browsing experience. We invite you to accept these or to configure your preferences. By continuing to browse without changing your preferences, we will conclude that you agree to the use of essential cookies for browsing. To learn more, please read our {privacyPolicy}.',
      },
      consentModal: {
        title: 'Privacy Settings',
        description: 'You can specify your privacy settings below.',
        privacyPolicy: {
          text: 'Detailed information and how you can withdraw your consent at any time can be found in our {privacyPolicy}.',
          name: 'Privacy policy'
        },
      },
      poweredBy: 'Powered by Klaro',
      purposes: {
        analytics: 'Analytics',
      },
      googleAnalytics: {
        description: 'Collection of visitor statistics, to better improve the website',
      },
      'service': {
        'disableAll': {
          'title': 'Accept all cookies',
          'description': 'You have the right to revoke your consent at any time, either individually or in its entirety. If consents to data processing are revoked, the data that were legally collected up to the revocation can still be processed by the provider.'
        },
        'optOut': {
          'title': '(Opt-Out)',
          'description': 'This application is loaded by default (but you can disable it)'
        },
        'required': {
          'title': '(always necessary)',
          'description': 'This application is always required'
        },
        'purpose': 'Purpose',
        'purposes': 'Purposes'
      },
      'purposes': {
        'unknown': 'Not assigned',
        'functional cookies': {
          'title': 'Functional cookies',
          'description': ''
        },
        'performance and analysis': {
          'title': 'Performance and analysis',
          'description': ''
        }
      },
      ok: 'Accept',
      save: 'Save settings',
      acceptAll: 'Accept all cookies',
      acceptSelected: 'Accept selected cookies',
      decline: 'Accept necessary cookies',
      close: 'Close',
    },
    fr: {
      privacyPolicy: {
        name: 'Politique de confidentialité.',
        url: '../privacy/fr/index.html'
      },
      privacyPolicyUrl: '../privacy/fr/index.html',
      consentNotice: {
        description: 'Nous utilisons des fichiers témoins pour améliorer nos services et votre expérience de navigation. Nous vous invitons à accepter ceux-ci ou à paramétrer vos préférences. En poursuivant votre navigation sans modifier vos préférences, nous en conclurons que vous donnez votre accord quant à l’utilisation des témoins nécessaires à la navigation. Pour plus d’informations, consultez notre {privacyPolicy}.',
      },
      consentModal: {
        title: 'Préférences des fichiers témoins',
        description: 'Vous pouvez spécifier vos paramètres ci-dessous.',
        privacyPolicy: {
          text: 'Des informations détaillées sur la manière dont vous pouvez retirer votre consentement à tout moment peuvent être trouvées dans notre {privacyPolicy}.',
          name: 'Politique de confidentialité.'
        },
      },
      poweredBy: 'Powered by Klaro',
      purposes: {
        analytics: 'Analytics',
      },
      googleAnalytics: {
        description: 'Collection of visitor statistics, to better improve the website',
      },
      'service': {
        'disableAll': {
          'title': '[fr] Accept all cookies',
          'description': 'You have the right to revoke your consent at any time, either individually or in its entirety. If consents to data processing are revoked, the data that were legally collected up to the revocation can still be processed by the provider.'
        },
        'optOut': {
          'title': '(Opt-Out)',
          'description': 'This application is loaded by default (but you can disable it)'
        },
        'required': {
          'title': '(obligatoire)',
          'description': 'This application is always required'
        },
        'purpose': 'Usage',
        'purposes': 'Usages'
      },
      'purposes': {
        'unknown': 'Not assigned',
        'functional cookies': {
          'title': 'Témoins fonctionnels obligatoires',
          'description': ''
        },
        'performance and analysis': {
          'title': 'Performance et analyse',
          'description': ''
        },
        'analytics': {
          title: 'Performance et analyse',
          description: ''
        }
      },
      ok: 'Autoriser tous les fichiers témoins',
      save: 'Enregister',
      acceptAll: 'Autoriser tous les fichiers témoins',
      acceptSelected: 'Enregistrer',
      decline: 'Accept necessary cookies',
      close: 'Close',
    },
  },
  services: [
    // {
    //   name: 'googleAnalytics',
    //   title: 'Google Analytics',
    //   purposes: ['analytics'],
    // }
  ]
};


klaroConfig.services.push({
  name: 'cookies',
  default: true,
  defaultIfNoConsent: true,
  required: true,
  optOut: false,
  purposes: ['functional cookies'],
  translations: {
    en: {
      title: 'Cookies preference',
      description: 'Allow to preserve preferences regarding data collection.'
    },
    fr: {
      title: 'Préférences de fichiers témoins',
      description: 'Permet de conserver vos préférences en matière de collecte de données.'
    }
  }
  // cookies: [['Cookies preferences', '/', '']],
  // callback: ConsentApp.consentChanged,
  // ownCallback:'',
  // gtm:{trigger:'',variable:''}
});

klaroConfig.services.push({
  name: 'session',
  default: true,
  defaultIfNoConsent: true,
  required: true,
  optOut: false,
  purposes: ['functional cookies'],
  translations: {
    en: {
      title: 'User session',
      description: 'Allows you to keep certain actions performed during navigation such as language, filters and use our forms.'
    },
    fr: {
      title: 'Session utilisateur',
      description: 'Permet de conserver certaines actions effectuées lors de la navigation tels que la langue, les filtres ainsi que d\'utiliser nos formulaires.'
    }
  }
});


klaroConfig.services.push({
  name: 'googleAnalytics',
  purposes: ['analytics'],
  translations: {
    en: {
      title: 'Google Analytics',
      description: 'Collection of visitor statistics, to better improve the website.'
    },
    fr: {
      title: 'Google Analytics',
      description: 'Permet d’obtenir des informations concernant le nombre d’utilisateurs présents sur le site et leur utilisation, tels que le nombre de pages vues, le taux de rebond, la durée moyenne d’une visite, l\'origine du trafic, etc.'
    }
  }
});

// select language based on html lang
let docLang = document.querySelector('html').lang
if (docLang) {
  if (!klaroConfig.translations[docLang]) {
    if (docLang.indexOf('_') > -1) {
      docLang = docLang.split('_')[0];
    }
    if (docLang.indexOf('-') > -1) {
      docLang = docLang.split('-')[0];
    }
  }
  klaroConfig.lang = docLang;
}


window.klaroConfig = klaroConfig;