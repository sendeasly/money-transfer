import React, { useState } from 'react';

const viwango = {
  USD: { rate: 1, bendera: '🇺🇸' },
  EUR: { rate: 0.92, bendera: '🇪🇺' },
  GBP: { rate: 0.79, bendera: '🇬🇧' },
  TZS: { rate: 2578, bendera: '🇹🇿' },
  KES: { rate: 129, bendera: '🇰🇪' },
  UGX: { rate: 3780, bendera: '🇺🇬' },
  ZAR: { rate: 18.5, bendera: '🇿🇦' },
  CAD: { rate: 1.36, bendera: '🇨🇦' },
  AED: { rate: 3.67, bendera: '🇦🇪' },
  NGN: { rate: 1594, bendera: '🇳🇬' },
  GHS: { rate: 15.2, bendera: '🇬🇭' },
};

const APK = "https://expo.dev/accounts/brown94/projects/sendeasly-app/builds/16ce1eb2-3a0d-4ec5-a4f6-235305a6ac15";

function Home() {
  const [kiasi, setKiasi] = useState('1000');
  const [kutoka, setKutoka] = useState('EUR');
  const [kwenda, setKwenda] = useState('TZS');
  const [menuWazi, setMenuWazi] = useState(false);
  const [tabAmilifu, setTabAmilifu] = useState('rates');

  function hesabu() {
    const nambari = parseFloat(kiasi) || 0;
    const katikaDola = nambari / viwango[kutoka].rate;
    return (katikaDola * viwango[kwenda].rate).toLocaleString('en-US', { maximumFractionDigits: 0 });
  }

  const kiwango = (viwango[kwenda].rate / viwango[kutoka].rate).toFixed(2);

  return (
    React.createElement('div', { style: styles.ukurasa },

      React.createElement('div', { style: styles.starsBackground }),

      React.createElement('style', null, `
        select option { background-color: #2d0a4e; color: white; }
        select { background-color: transparent; }
        input[type=number]::-webkit-inner-spin-button { -webkit-appearance: none; }
        @media (max-width: 600px) {
          .hero-kichwa { font-size: 28px !important; }
          .calc-wrapper { padding: 16px !important; }
        }
      `),

      React.createElement('div', { style: styles.navbar },
        React.createElement('div', { style: styles.navLeft },
          React.createElement('img', { src: '/logo.png', alt: 'SendEasly', style: styles.navLogo })
        ),
        React.createElement('div', { style: styles.navLinks },
          React.createElement('a', { href: '/about', style: styles.navLink }, 'About Us'),
          React.createElement('a', { href: '/faqs', style: styles.navLink }, 'FAQs'),
          React.createElement('a', { href: '/security', style: styles.navLink }, 'Security'),
          React.createElement('a', { href: '/contact', style: styles.navLink }, 'Contact us')
        ),
        React.createElement('div', { style: styles.navRight },
          React.createElement('button', { style: styles.langKitufe }, '🌐 ▾'),
          React.createElement('button', {
            style: styles.hamburger,
            onClick: function() { setMenuWazi(!menuWazi); }
          }, '☰'),
          React.createElement('a', {
            href: APK,
            style: styles.downloadKitufe,
            target: '_blank',
            rel: 'noreferrer'
          }, 'Download SendEasly')
        )
      ),

      menuWazi && React.createElement('div', { style: styles.mobileMenu },
        React.createElement('a', { href: '/about', style: styles.mobileMenuLink }, 'About Us'),
        React.createElement('a', { href: '/faqs', style: styles.mobileMenuLink }, 'FAQs'),
        React.createElement('a', { href: '/security', style: styles.mobileMenuLink }, 'Security'),
        React.createElement('a', { href: '/contact', style: styles.mobileMenuLink }, 'Contact us')
      ),

      React.createElement('div', { style: styles.hero },

        React.createElement('div', { style: styles.heroText },
          React.createElement('h1', { style: styles.kichwa }, 'Send Money Home'),
          React.createElement('p', { style: styles.maelezo },
            'Join 1,000,000+ customers sending money globally.'
          )
        ),

        React.createElement('div', { style: styles.calculatorWrapper, className: 'calc-wrapper' },

          React.createElement('div', { style: styles.tabs },
            React.createElement('button', {
              style: tabAmilifu === 'rates' ? styles.tabAmilifu : styles.tab,
              onClick: function() { setTabAmilifu('rates'); }
            }, 'Rates calculator'),
            React.createElement('button', {
              style: tabAmilifu === 'compare' ? styles.tabAmilifu : styles.tab,
              onClick: function() { setTabAmilifu('compare'); }
            }, 'Compare rates')
          ),

          React.createElement('p', { style: styles.lebo }, 'You send'),
          React.createElement('div', { style: styles.inputSafu },
            React.createElement('div', { style: styles.sarafuBox },
              React.createElement('span', { style: styles.bendera }, viwango[kutoka].bendera),
              React.createElement('select', {
                style: styles.sarafuSelect,
                value: kutoka,
                onChange: function(e) { setKutoka(e.target.value); }
              },
                Object.keys(viwango).map(function(s) {
                  return React.createElement('option', {
                    key: s, value: s,
                    style: { backgroundColor: '#2d0a4e', color: 'white' }
                  }, viwango[s].bendera + ' ' + s);
                })
              )
            ),
            React.createElement('input', {
              style: styles.nambariIngizo,
              type: 'number',
              value: kiasi,
              onChange: function(e) { setKiasi(e.target.value); }
            })
          ),

          React.createElement('div', { style: styles.kiwangoSafu },
            React.createElement('span', { style: styles.kiwangoManeno },
              '\u21C5 1 ' + kutoka + ' \u2248 ' + kiwango + ' ' + kwenda
            )
          ),

          React.createElement('p', { style: styles.lebo }, 'Individual receives'),
          React.createElement('div', { style: styles.inputSafu },
            React.createElement('div', { style: styles.sarafuBox },
              React.createElement('span', { style: styles.bendera }, viwango[kwenda].bendera),
              React.createElement('select', {
                style: styles.sarafuSelect,
                value: kwenda,
                onChange: function(e) { setKwenda(e.target.value); }
              },
                Object.keys(viwango).map(function(s) {
                  return React.createElement('option', {
                    key: s, value: s,
                    style: { backgroundColor: '#2d0a4e', color: 'white' }
                  }, viwango[s].bendera + ' ' + s);
                })
              )
            ),
            React.createElement('input', {
              style: Object.assign({}, styles.nambariIngizo, { fontWeight: 'bold', color: '#f8bbd0' }),
              type: 'text',
              value: hesabu(),
              readOnly: true
            })
          ),

          React.createElement('a', {
            href: APK,
            style: styles.downloadBtn,
            target: '_blank',
            rel: 'noreferrer'
          }, 'Download SendEasly'),

          React.createElement('p', { style: styles.adaNdogo },
            'Only 2% fee — no hidden charges.'
          )
        ),

        React.createElement('div', { style: styles.storeVitufe },
          React.createElement('a', {
            href: APK,
            style: styles.storeKitufe,
            target: '_blank',
            rel: 'noreferrer'
          }, '\uD83C\uDF4E  App Store'),
          React.createElement('a', {
            href: APK,
            style: Object.assign({}, styles.storeKitufe, { backgroundColor: '#c2185b', color: 'white' }),
            target: '_blank',
            rel: 'noreferrer'
          }, '\u25B6  Google Play')
        )
      ),

      React.createElement('div', { style: styles.stats },
        [
          { n: '1M+', m: 'Customers' },
          { n: '150+', m: 'Countries' },
          { n: '2%', m: 'Fee only' },
          { n: '24/7', m: 'Support' },
        ].map(function(s) {
          return React.createElement('div', { key: s.n, style: styles.statItem },
            React.createElement('h2', { style: styles.statNambari }, s.n),
            React.createElement('p', { style: styles.statManeno }, s.m)
          );
        })
      )
    )
  );
}

const styles = {
  ukurasa: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #1a0a2e 0%, #2d0a4e 30%, #880e4f 70%, #c2185b 100%)',
    fontFamily: 'sans-serif',
    position: 'relative',
    overflow: 'hidden',
  },
  starsBackground: {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundImage: 'radial-gradient(2px 2px at 20px 30px, rgba(255,255,255,0.3), transparent), radial-gradient(1px 1px at 90px 40px, rgba(255,255,255,0.3), transparent), radial-gradient(2px 2px at 200px 50px, rgba(255,255,255,0.2), transparent), radial-gradient(1px 1px at 350px 110px, rgba(255,255,255,0.3), transparent), radial-gradient(2px 2px at 500px 80px, rgba(255,255,255,0.2), transparent), radial-gradient(1px 1px at 700px 30px, rgba(255,255,255,0.3), transparent), radial-gradient(2px 2px at 900px 60px, rgba(255,255,255,0.2), transparent), radial-gradient(1px 1px at 1100px 40px, rgba(255,255,255,0.3), transparent)',
    backgroundSize: '1300px 300px',
    zIndex: 0,
    pointerEvents: 'none',
  },
  navbar: {
    position: 'fixed',
    top: 0, left: 0, right: 0,
    padding: '12px 32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 1000,
    backgroundColor: 'rgba(26,10,46,0.92)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
  },
  navLeft: { display: 'flex', alignItems: 'center' },
  navLogo: { height: '40px' },
  navLinks: { display: 'flex', alignItems: 'center', gap: '24px' },
  navLink: {
    color: 'rgba(255,255,255,0.85)',
    textDecoration: 'none',
    fontSize: '13px',
    fontWeight: '500',
  },
  navRight: { display: 'flex', alignItems: 'center', gap: '10px' },
  langKitufe: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    border: '1px solid rgba(255,255,255,0.2)',
    color: 'white',
    padding: '6px 10px',
    borderRadius: '20px',
    cursor: 'pointer',
    fontSize: '13px',
  },
  hamburger: {
    backgroundColor: 'transparent',
    border: 'none',
    color: 'white',
    fontSize: '22px',
    cursor: 'pointer',
  },
  downloadKitufe: {
    backgroundColor: '#c2185b',
    color: 'white',
    padding: '8px 16px',
    borderRadius: '20px',
    textDecoration: 'none',
    fontSize: '13px',
    fontWeight: 'bold',
  },
  mobileMenu: {
    position: 'fixed',
    top: '64px', right: 0,
    width: '55%', height: '100vh',
    backgroundColor: 'rgba(26,10,46,0.97)',
    padding: '20px',
    zIndex: 999,
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    boxShadow: '-4px 0 20px rgba(0,0,0,0.5)',
  },
  mobileMenuLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: '500',
    padding: '10px 0',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
  },
  hero: {
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '100px 20px 40px',
    maxWidth: '560px',
    margin: '0 auto',
  },
  heroText: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  kichwa: {
    fontSize: '36px',
    fontWeight: 'bold',
    color: 'white',
    lineHeight: '1.2',
    marginBottom: '10px',
    margin: '0 0 10px',
  },
  maelezo: {
    fontSize: '15px',
    color: 'rgba(255,255,255,0.7)',
    lineHeight: '1.6',
    margin: '0',
  },
  calculatorWrapper: {
    backgroundColor: 'rgba(255,255,255,0.08)',
    backdropFilter: 'blur(20px)',
    borderRadius: '16px',
    padding: '20px',
    width: '100%',
    border: '1px solid rgba(255,255,255,0.15)',
    boxShadow: '0 16px 48px rgba(0,0,0,0.3)',
    marginBottom: '16px',
  },
  tabs: {
    display: 'flex',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: '8px',
    padding: '3px',
    marginBottom: '14px',
    gap: '3px',
  },
  tab: {
    flex: 1,
    backgroundColor: 'transparent',
    border: 'none',
    color: 'rgba(255,255,255,0.6)',
    padding: '7px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '12px',
    fontWeight: '500',
  },
  tabAmilifu: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.2)',
    border: 'none',
    color: 'white',
    padding: '7px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '12px',
    fontWeight: 'bold',
  },
  lebo: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: '12px',
    fontWeight: '600',
    marginBottom: '5px',
    marginTop: '0',
  },
  inputSafu: {
    display: 'flex',
    marginBottom: '8px',
    backgroundColor: 'rgba(255,255,255,0.12)',
    borderRadius: '10px',
    border: '1px solid rgba(255,255,255,0.2)',
    overflow: 'visible',
  },
  sarafuBox: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 8px',
    backgroundColor: 'rgba(255,255,255,0.1)',
    gap: '4px',
    borderRight: '1px solid rgba(255,255,255,0.2)',
    borderRadius: '10px 0 0 10px',
  },
  bendera: { fontSize: '18px' },
  sarafuSelect: {
    backgroundColor: '#2d0a4e',
    border: '1px solid rgba(255,255,255,0.3)',
    color: 'white',
    fontSize: '13px',
    fontWeight: '600',
    cursor: 'pointer',
    outline: 'none',
    borderRadius: '6px',
    padding: '2px 4px',
  },
  nambariIngizo: {
    flex: 1,
    backgroundColor: 'transparent',
    border: 'none',
    color: 'white',
    fontSize: '20px',
    fontWeight: 'bold',
    textAlign: 'right',
    padding: '10px 12px',
    outline: 'none',
    borderRadius: '0 10px 10px 0',
  },
  kiwangoSafu: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: '8px',
  },
  kiwangoManeno: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    color: 'rgba(255,255,255,0.8)',
    padding: '4px 10px',
    borderRadius: '20px',
    fontSize: '11px',
    fontWeight: '600',
  },
  downloadBtn: {
    display: 'block',
    backgroundColor: 'white',
    color: '#880e4f',
    textDecoration: 'none',
    textAlign: 'center',
    padding: '13px',
    borderRadius: '10px',
    fontSize: '14px',
    fontWeight: 'bold',
    marginTop: '12px',
    marginBottom: '8px',
  },
  adaNdogo: {
    color: 'rgba(255,255,255,0.45)',
    fontSize: '11px',
    textAlign: 'center',
    margin: '0',
  },
  storeVitufe: {
    display: 'flex',
    gap: '10px',
    width: '100%',
    marginBottom: '32px',
  },
  storeKitufe: {
    flex: 1,
    backgroundColor: 'white',
    color: '#880e4f',
    padding: '11px',
    borderRadius: '10px',
    textDecoration: 'none',
    fontSize: '13px',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6px',
  },
  stats: {
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    justifyContent: 'center',
    gap: '48px',
    padding: '28px 40px',
    borderTop: '1px solid rgba(255,255,255,0.1)',
    maxWidth: '1300px',
    margin: '0 auto',
    flexWrap: 'wrap',
  },
  statItem: { textAlign: 'center' },
  statNambari: { color: 'white', fontSize: '28px', fontWeight: 'bold', margin: '0' },
  statManeno: { color: 'rgba(255,255,255,0.6)', fontSize: '12px', margin: '4px 0 0' },
};

export default Home;