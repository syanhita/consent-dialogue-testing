const theme = 'dark'; // window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

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
  groupByPurpose: true, // Set to true to reduce clutter in the consent window by grouping app with the same purpose under the same trigger
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
      privacyPolicyUrl: '/2024/general_info/rules_and_policies/privacy_policy/',
    },
    en: {
      consentModal: {
        title: 'Consent settings',
        description: 'You can specify your privacy settings below.',
        privacyPolicy: {
          text: 'Detailed information and how you can withdraw your consent at any time can be found in our {privacyPolicy}.',
          name: 'Privacy policy'
        },
      },
      consentNotice: {
        description: 'We use cookies to improve our services and your browsing experience. We invite you to accept these or to configure your preferences. By continuing to browse without changing your preferences, we will conclude that you agree to the use of essential cookies for browsing. To learn more, please read our {privacyPolicy}.',
      },
      privacyPolicy: {
        name: 'Privacy Policy',
        url: '/2024/general_info/rules_and_policies/privacy_policy/'
      },
      privacyPolicyUrl: '/2024/general_info/rules_and_policies/privacy_policy/',
      purposes: {
        'functional': {
          title: 'Basic function',
          description: 'Enables storage that supports the functionality of the website or app such as language settings and privacy preferences.'
        },
        'security': {
          title: 'Security',
          description: 'Enables storage related to security such as authentication functionality, fraud prevention, and other user protection.'
        },
        'analytics': {
          title: 'Performance analytics',
          description: 'Collects user data allowing website performance analysis in order to improve its functionality.'
        },
        'marketing': {
          title: 'Marketing',
          description: 'Collects user data in order to improve the qulity of advertisement presented to them.'
        },
        'unknown': 'Not assigned'
      },
      service: {
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
      ok: 'Accept',
      save: 'Save settings',
      acceptAll: 'Accept all',
      acceptSelected: 'Accept selection',
      decline: 'Decline all but necessary options',
      close: 'Close',
      poweredBy: 'Powered by Klaro',
    },
    fr: {
      consentModal: {
        title: 'Paramètres de consentement',
        description: 'Vous pouvez spécifier vos paramètres de confidentialité ci-dessous.',
        privacyPolicy: {
          text: 'Des informations détaillées sur la manière dont vous pouvez retirer votre consentement à tout moment peuvent être trouvées dans notre {privacyPolicy}.',
          name: 'Politique de confidentialité'
        },
      },
      consentNotice: {
        description: 'Nous utilisons des fichiers témoins pour améliorer nos services et votre expérience de navigation. Nous vous invitons à accepter ceux-ci ou à paramétrer vos préférences. En poursuivant votre navigation sans modifier vos préférences, nous en conclurons que vous donnez votre accord quant à l\'utilisation des témoins nécessaires à la navigation. Pour plus d\'informations, consultez notre {privacyPolicy}.',
      },
      privacyPolicy: {
        name: 'Politique de confidentialité',
        url: '/2024/renseignements/rglements_et_politiques/politique_de_confidentialite/'
      },
      privacyPolicyUrl: '/2024/renseignements/rglements_et_politiques/politique_de_confidentialite/',
      purposes: {
        'functional' : {
          title: 'Fonction de base',
          description: 'Permet la sauvegarde d\'informations liés à la fonciton de base du site ou de l\'application tels que les préférences de language ou de confidentialité.'
        },
        'security': {
          title: 'Sécurité',
          description: 'Permet la sauvegarde d\'informations liés à la sécurité tel que des fonctions d\'authentification, de prévention de fraude et autres formes de protection.'
        },
        'analytics': {
          title: 'Analyse de performance',
          description: 'Collecte de données sur l\'utilisteur permettant l\'analyse de la performance du site afin d\'en améliorer le fonctionnement.'
        },
        'marketing': {
          title: 'Publicité',
          description: 'Collecte de données sur l\'utilisteur afin d\'améliorer la qualité de la publicité qui lui est présentée.'
        },
        'unknown': 'Usage non-catégorisé'
      },
      service: {
        'disableAll': {
          'title': '[fr] Accept all cookies',
          'description': 'You have the right to revoke your consent at any time, either individually or in its entirety. If consents to data processing are revoked, the data that were legally collected up to the revocation can still be processed by the provider.'
        },
        'optOut': {
          'title': '(Opt-Out)',
          'description': 'Cette application est chargée par defaut mais peut être désactivée'
        },
        'required': {
          'title': '(obligatoire)',
          'description': 'Cette application est toujours requise'
        },
        'purpose': 'Usage',
        'purposes': 'Usages'
      },
      ok: 'Tout accepter',
      save: 'Enregister',
      acceptAll: 'Tout accepter',
      acceptSelected: 'Confirmer la sélection',
      decline: 'Refuser tout sauf les options nécessaires',
      close: 'Fermer',
      poweredBy: 'Powered by Klaro',
    },
  },
  services: [
  ]
};


klaroConfig.services.push({
  name: 'cookies',
  default: true,
  defaultIfNoConsent: true,
  required: true,
  optOut: false,
  purposes: ['functional'],
  translations: {
    en: {
      title: 'Cookies preference',
      description: 'Allow to preserve preferences regarding data collection.'
    },
    fr: {
      title: 'Paramètres de confidentialité',
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
  purposes: ['security','functional'],
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

// Google Tag Manager (GTM) & Google Consent Mode v2
// https://klaro.org/docs/tutorials/google_tag_manager
klaroConfig.services.push({
  name: 'google-tag-manager',
  required: true,
  purposes: ['functional'], // GTM needs to run at all times in order to block or allow tags according to consent
  onAccept: `
    // we notify the tag manager about all services that were accepted. You can define
    // a custom event in GTM to load the service if consent was given.
    for(let k of Object.keys(opts.consents)){
      if (opts.consents[k]){
        let eventName = 'klaro-'+k+'-accepted'
        dataLayer.push({'event': eventName})
      }
    }
  `,
  onInit: `
    // initialization code here (will be executed only once per page-load)
    window.dataLayer = window.dataLayer || [];
    window.gtag = function(){dataLayer.push(arguments)}
    gtag('consent', 'default', {'ad_storage': 'denied', 'analytics_storage': 'denied', 'ad_user_data': 'denied', 'ad_personalization': 'denied', 'functionality_storage': 'granted','security_storage': 'granted' })
    gtag('set', 'ads_data_redaction', true)
  `,
  translations: {
    en: {
      title: 'Google Tag Manager',
      description: 'Manages the activation of marketing and performance analytics.'
    },
    fr: {
      title: 'Google Tag Manager',
      description: 'Effectue la gestion de l\'activation de la mesure de performance et publicitaire.'
    }
  }
});


klaroConfig.services.push({   
  // In GTM, you should define a custom event trigger named `klaro-googleAnalytics-accepted` which should trigger the Google Analytics integration.
  name: 'googleAnalytics',
  purposes: ['analytics'],
  cookies: [
    /^_ga(_.*)?/ // we delete the Google Analytics cookies if the user declines its use
  ],
  onAccept: `
    // we grant analytics storage
    gtag('consent', 'update', {
      'analytics_storage': 'granted',
    })
  `,
  onDecline: `
    // we deny analytics storage
    gtag('consent', 'update', {
      'analytics_storage': 'denied',
    })
  `,
  translations: {
    en: {
      title: 'Google Analytics',
      description: 'Collecting of anonymous visitor statistics.'
    },
    fr: {
      title: 'Google Analytics',
      description: 'Collecte de statistiques anonymes sur les visiteurs du site.'
    }
  }
});

/* Uncomment this part if we start using Google Ads - Use a similar block for Facebook if we start using Facebook Pixel  
klaroConfig.services.push({   
  name: 'google-ads',
  purposes: ['marketing'],
  // cookies: [],
  onAccept: `
    // we grant ad storage and personalization
    gtag('consent', 'update', {
      'ad_storage': 'granted',
      'ad_user_data': 'granted',
      'ad_personalization': 'granted'
    })
  `,
  onDecline: `
    // we decline ad storage and personalization
    gtag('consent', 'update', {
      'ad_storage': 'denied',
      'ad_user_data': 'denied',
      'ad_personalization': 'denied'
    })
  `,
});
*/

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