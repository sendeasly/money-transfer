import React, { useEffect, useRef, useState } from 'react';

function AnimatedSection({ children, delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(function() {
    var observer = new window.IntersectionObserver(
      function(entries) { if (entries[0].isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return function() { observer.disconnect(); };
  }, []);
  return React.createElement('div', {
    ref: ref,
    style: {
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(40px)',
      transition: 'opacity 0.7s ease ' + delay + 's, transform 0.7s ease ' + delay + 's',
    }
  }, children);
}

function Security() {
  return React.createElement('div', { style: styles.ukurasa },

    React.createElement('div', { style: styles.starsBackground }),

    React.createElement('style', null, `
      * { box-sizing: border-box; }
      @media (max-width: 768px) {
        .sec-nav-links { display: none !important; }
        .sec-grid-3 { grid-template-columns: 1fr !important; }
        .sec-cert-row { flex-direction: column !important; align-items: center !important; }
        .sec-hero-h { font-size: 26px !important; }
        .sec-section-inner { padding: 0 16px !important; }
        .sec-section { padding: 40px 0 !important; }
      }
    `),

    React.createElement('div', { style: styles.navbar },
      React.createElement('a', { href: '/', style: { textDecoration: 'none' } },
        React.createElement('img', { src: '/logo.png', alt: 'SendEasly', style: styles.logo })
      ),
      React.createElement('div', { style: styles.navLinks, className: 'sec-nav-links' },
        React.createElement('a', { href: '/about', style: styles.navLink }, 'About Us'),
        React.createElement('a', { href: '/faqs', style: styles.navLink }, 'FAQs'),
        React.createElement('a', { href: '/security', style: styles.navLinkAmilifu }, 'Security'),
        React.createElement('a', { href: '/contact', style: styles.navLink }, 'Contact us')
      ),
      React.createElement('div', { style: styles.navRight },
        React.createElement('select', { style: styles.langSelect },
          React.createElement('option', { value: 'en' }, 'EN'),
          React.createElement('option', { value: 'de' }, 'DE'),
          React.createElement('option', { value: 'fr' }, 'FR'),
          React.createElement('option', { value: 'nl' }, 'NL'),
          React.createElement('option', { value: 'sw' }, 'SW')
        ),
        React.createElement('a', { href: '/', style: styles.homeKitufe }, '← Home')
      )
    ),

    React.createElement('div', { style: styles.hero },
      React.createElement(AnimatedSection, null,
        React.createElement('div', { style: { fontSize: '56px', marginBottom: '16px' } }, '🛡️'),
        React.createElement('h1', { style: styles.heroH, className: 'sec-hero-h' }, 'Your Security is Our Priority'),
        React.createElement('p', { style: styles.heroP }, 'We use the latest security technologies to keep your money and information safe at all times.')
      )
    ),

    // Security Features
    React.createElement('div', { style: styles.section, className: 'sec-section' },
      React.createElement('div', { style: styles.sectionInner, className: 'sec-section-inner' },
        React.createElement(AnimatedSection, null,
          React.createElement('h2', { style: styles.sectionKichwa }, 'How We Protect You')
        ),
        React.createElement('div', { style: styles.grid3, className: 'sec-grid-3' },
          [
            { icon: '🔐', k: '256-bit SSL Encryption', m: 'All data transmitted is protected with bank-level encryption used by major financial institutions worldwide.' },
            { icon: '🛡️', k: 'Two-Factor Authentication', m: 'Extra security layer requiring a verification code in addition to your password when logging in.' },
            { icon: '🔍', k: 'KYC Verification', m: 'We verify all users through Know Your Customer process to prevent fraud and ensure compliance.' },
            { icon: '🤖', k: 'AI Fraud Detection', m: 'Advanced AI monitors all transactions in real-time to detect and prevent fraudulent activity.' },
            { icon: '📋', k: 'Regulatory Compliance', m: 'Fully licensed and compliant with AML and CTF regulations across all operating jurisdictions.' },
            { icon: '🔒', k: 'Secure Data Storage', m: 'Encrypted, geographically distributed servers with multiple backup systems for maximum protection.' },
          ].map(function(s, i) {
            return React.createElement(AnimatedSection, { key: s.k, delay: i * 0.08 },
              React.createElement('div', { style: styles.kadi },
                React.createElement('div', { style: styles.kadiIcon }, s.icon),
                React.createElement('h4', { style: styles.kadiKichwa }, s.k),
                React.createElement('p', { style: styles.kadiManeno }, s.m)
              )
            );
          })
        )
      )
    ),

    // Certifications
    React.createElement('div', { style: styles.sectionDark, className: 'sec-section' },
      React.createElement('div', { style: styles.sectionInner, className: 'sec-section-inner' },
        React.createElement(AnimatedSection, null,
          React.createElement('h2', { style: styles.sectionKichwa }, 'Our Certifications'),
          React.createElement('div', { style: styles.certRow, className: 'sec-cert-row' },
            ['PCI DSS Compliant', 'ISO 27001 Certified', 'GDPR Compliant', 'AML Certified'].map(function(c, i) {
              return React.createElement(AnimatedSection, { key: c, delay: i * 0.1 },
                React.createElement('div', { style: styles.certBadge },
                  React.createElement('span', { style: { color: '#90ee90', marginRight: '8px', fontSize: '16px' } }, '✓'),
                  c
                )
              );
            })
          )
        )
      )
    ),

    // Report
    React.createElement('div', { style: styles.section, className: 'sec-section' },
      React.createElement('div', { style: styles.sectionInner, className: 'sec-section-inner' },
        React.createElement(AnimatedSection, null,
          React.createElement('div', { style: styles.reportBox },
            React.createElement('h3', { style: styles.reportKichwa }, '🔎 Report a Security Issue'),
            React.createElement('p', { style: styles.reportManeno }, 'Discovered a vulnerability? Report it to our security team immediately and we will reward you.'),
            React.createElement('a', { href: 'mailto:security@sendeasly.com', style: styles.reportKitufe }, 'security@sendeasly.com')
          )
        )
      )
    ),

    React.createElement('div', { style: styles.footer },
      React.createElement('p', { style: styles.copyright }, '\u00A9 ' + new Date().getFullYear() + ' SendEasly. All rights reserved.')
    )
  );
}

const styles = {
  ukurasa: { minHeight: '100vh', background: 'linear-gradient(135deg, #1a0a2e 0%, #2d0a4e 30%, #880e4f 70%, #c2185b 100%)', fontFamily: 'sans-serif', position: 'relative' },
  starsBackground: { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'radial-gradient(2px 2px at 20px 30px, rgba(255,255,255,0.3), transparent), radial-gradient(1px 1px at 90px 40px, rgba(255,255,255,0.3), transparent), radial-gradient(2px 2px at 200px 50px, rgba(255,255,255,0.2), transparent)', backgroundSize: '1300px 300px', zIndex: 0, pointerEvents: 'none' },
  navbar: { position: 'fixed', top: 0, left: 0, right: 0, padding: '12px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', zIndex: 1000, backgroundColor: 'rgba(26,10,46,0.92)', backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(255,255,255,0.1)' },
  logo: { height: '36px' },
  navLinks: { display: 'flex', alignItems: 'center', gap: '24px' },
  navLink: { color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '13px', fontWeight: '500' },
  navLinkAmilifu: { color: 'white', textDecoration: 'none', fontSize: '13px', fontWeight: 'bold', borderBottom: '2px solid #c2185b', paddingBottom: '2px' },
  navRight: { display: 'flex', alignItems: 'center', gap: '10px' },
  langSelect: { backgroundColor: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)', color: 'white', padding: '6px 10px', borderRadius: '20px', cursor: 'pointer', fontSize: '13px', outline: 'none' },
  homeKitufe: { backgroundColor: 'rgba(255,255,255,0.15)', color: 'white', padding: '7px 14px', borderRadius: '20px', textDecoration: 'none', fontSize: '13px', fontWeight: '600', border: '1px solid rgba(255,255,255,0.2)' },
  hero: { position: 'relative', zIndex: 1, textAlign: 'center', padding: '120px 24px 48px' },
  heroH: { fontSize: '38px', fontWeight: 'bold', color: 'white', marginBottom: '16px' },
  heroP: { fontSize: '16px', color: 'rgba(255,255,255,0.75)', maxWidth: '600px', margin: '0 auto', lineHeight: '1.7' },
  section: { position: 'relative', zIndex: 1, padding: '60px 0', backgroundColor: 'rgba(255,255,255,0.03)', borderTop: '1px solid rgba(255,255,255,0.08)' },
  sectionDark: { position: 'relative', zIndex: 1, padding: '60px 0', backgroundColor: 'rgba(0,0,0,0.15)', borderTop: '1px solid rgba(255,255,255,0.08)' },
  sectionInner: { maxWidth: '1100px', margin: '0 auto', padding: '0 40px' },
  sectionKichwa: { color: 'white', fontSize: '28px', fontWeight: 'bold', textAlign: 'center', marginBottom: '32px' },
  grid3: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' },
  kadi: { backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: '14px', padding: '22px', border: '1px solid rgba(255,255,255,0.12)', textAlign: 'center' },
  kadiIcon: { fontSize: '32px', marginBottom: '12px' },
  kadiKichwa: { color: 'white', fontSize: '15px', fontWeight: 'bold', marginBottom: '8px' },
  kadiManeno: { color: 'rgba(255,255,255,0.7)', fontSize: '13px', lineHeight: '1.6' },
  certRow: { display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' },
  certBadge: { backgroundColor: 'rgba(194,24,91,0.2)', border: '1px solid rgba(194,24,91,0.4)', borderRadius: '30px', padding: '12px 20px', color: 'white', fontSize: '14px', fontWeight: '600', display: 'flex', alignItems: 'center' },
  reportBox: { backgroundColor: 'rgba(194,24,91,0.15)', borderRadius: '16px', padding: '36px', textAlign: 'center', border: '1px solid rgba(194,24,91,0.3)' },
  reportKichwa: { color: 'white', fontSize: '22px', fontWeight: 'bold', marginBottom: '12px' },
  reportManeno: { color: 'rgba(255,255,255,0.7)', fontSize: '15px', marginBottom: '20px' },
  reportKitufe: { backgroundColor: 'white', color: '#880e4f', padding: '12px 28px', borderRadius: '30px', textDecoration: 'none', fontSize: '15px', fontWeight: 'bold', display: 'inline-block' },
  footer: { position: 'relative', zIndex: 1, borderTop: '1px solid rgba(255,255,255,0.1)', padding: '24px', textAlign: 'center', backgroundColor: 'rgba(0,0,0,0.3)' },
  copyright: { color: 'rgba(255,255,255,0.4)', fontSize: '12px', margin: '0' },
};

export default Security;