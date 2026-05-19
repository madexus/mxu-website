'use client';

import { useEffect } from 'react';
import 'vanilla-cookieconsent/dist/cookieconsent.css';
import * as CookieConsent from 'vanilla-cookieconsent';

// GA4 Measurement ID — replace with actual ID when available
const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID || '';

function loadGA4() {
  if (!GA4_ID || typeof window === 'undefined') return;

  // Load gtag.js
  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`;
  script.async = true;
  document.head.appendChild(script);

  // Initialize
  (window as unknown as Record<string, unknown[]>).dataLayer = (window as unknown as Record<string, unknown[]>).dataLayer || [];
  function gtag(...args: unknown[]) {
    (window as unknown as Record<string, unknown[]>).dataLayer.push(args);
  }
  gtag('js', new Date());
  gtag('config', GA4_ID);
}

function clearGA4Cookies() {
  const cookies = document.cookie.split(';');
  for (const cookie of cookies) {
    const name = cookie.split('=')[0].trim();
    if (name.startsWith('_ga')) {
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=.${window.location.hostname}`;
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
    }
  }
}

export default function CookieConsentBanner() {
  useEffect(() => {
    CookieConsent.run({
      guiOptions: {
        consentModal: {
          layout: 'box inline',
          position: 'bottom left',
        },
        preferencesModal: {
          layout: 'box',
        },
      },

      categories: {
        necessary: {
          enabled: true,
          readOnly: true,
        },
        analytics: {
          autoClear: {
            cookies: [
              { name: /^_ga/ },
              { name: '_gid' },
            ],
          },
        },
      },

      language: {
        default: 'en',
        translations: {
          en: {
            consentModal: {
              title: 'We value your privacy',
              description:
                'We use cookies to analyze site traffic and optimize your experience. You can choose which cookies to accept.',
              acceptAllBtn: 'Accept All',
              acceptNecessaryBtn: 'Necessary Only',
              showPreferencesBtn: 'Manage Preferences',
            },
            preferencesModal: {
              title: 'Cookie Preferences',
              acceptAllBtn: 'Accept All',
              acceptNecessaryBtn: 'Necessary Only',
              savePreferencesBtn: 'Save Preferences',
              sections: [
                {
                  title: 'Necessary Cookies',
                  description:
                    'These cookies are essential for the website to function and cannot be disabled.',
                  linkedCategory: 'necessary',
                },
                {
                  title: 'Analytics Cookies',
                  description:
                    'We use Google Analytics (GA4) to understand how visitors interact with our site — pages visited, time on site, and traffic sources. This data helps us improve the experience. No personal information is collected.',
                  linkedCategory: 'analytics',
                  cookieTable: {
                    headers: {
                      name: 'Name',
                      domain: 'Domain',
                      description: 'Description',
                      expiration: 'Expiration',
                    },
                    body: [
                      {
                        name: '_ga',
                        domain: 'madexus.com',
                        description: 'Google Analytics — distinguishes unique visitors',
                        expiration: '2 years',
                      },
                      {
                        name: '_ga_TK11FYX76R',
                        domain: 'madexus.com',
                        description: 'Google Analytics — maintains session state',
                        expiration: '2 years',
                      },
                    ],
                  },
                },
              ],
            },
          },
        },
      },

      onConsent: () => {
        if (CookieConsent.acceptedCategory('analytics')) {
          loadGA4();
        }
      },

      onChange: () => {
        if (CookieConsent.acceptedCategory('analytics')) {
          loadGA4();
        } else {
          clearGA4Cookies();
        }
      },
    });
  }, []);

  return null;
}
