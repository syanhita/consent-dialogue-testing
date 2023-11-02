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
    theme: ['light'],
  },
  poweredBy:
    'https://github.com/KIProtect/klaro',
  translations: {
    // these values will overwrite the defaults. For a full list, have a look
    // at the `src/translations` directory of this repo:
    // https://github.com/KIProtect/klaro/tree/master/src/translations
    zz: {
      privacyPolicyUrl: '/#privacy',
    },
    en: {
      privacyPolicy: {
        name: 'Privacy Policy',
        url: '../privacy'
      },
      consentNotice: {
        description: 'We use cookies to improve our services and your browsing experience. We invite you to accept these or to configure your preferences. By continuing to browse without changing your preferences, we will conclude that you agree to the use of mandatory cookies for browsing.',
      },
      consentModal: {
        title: 'Privacy Settings',
        description: 'You can specify your privacy settings below. Settings will be kept for 365 days.',
        "privacyPolicy": {
          "text": "Detailed information and how you can withdraw your consent at any time can be found in our {privacyPolicy}.",
          "name": "Privacy policy"
        },
      },
      poweredBy: 'Powered by Klaro',
      purposes: {
        analytics: 'Analytics',
      },
      googleAnalytics: {
        description: 'Collection of visitor statistics, to better improve the website',
      },
      "service": {
        "disableAll": {
          "title": "Accept all cookies",
          "description": "You have the right to revoke your consent at any time, either individually or in its entirety. If consents to data processing are revoked, the data that were legally collected up to the revocation can still be processed by the provider."
        },
        "optOut": {
          "title": "(Opt-Out)",
          "description": "This application is loaded by default (but you can disable it)"
        },
        "required": {
          "title": "(always necessary)",
          "description": "This application is always required"
        },
        "purpose": "Purpose",
        "purposes": "Purposes"
      },
      "purposes": {
        "unknown": "Not assigned",
        "fonctionnal cookies": {
          "title": "Fonctionnal cookies",
          "description": ""
        },
        "performance and analysis": {
          "title": "Performance and analysis",
          "description": ""
        }
      },
      ok: "Accept",
      save: "Save settings",
      acceptAll: "Accept all cookies",
      acceptSelected: "Accept selected cookies",
      decline: "Accept necessary cookies",
      close: "Close",

    },
  },
  services: [
    {
      name: 'googleAnalytics',
      title: 'Google Analytics',
      purposes: ['analytics'],
    }
  ],
};

window.klaroConfig = klaroConfig;