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

      // Stars background
      React.createElement('div', { style: styles.starsBackground }),

      // Navbar
      React.createElement('div', { style: styles.navbar },
        React.createElement('div', { style: styles.navLeft },
          React.createElement('img', { src: '/logo.png', alt: 'SendEasly', style: styles.navLogo })
        ),
        React.createElement('div', { style: styles.navLinks },
          React.createElement('a', { href: '/about', style: styles.navLink }, 'About Us'),
          React.createElement('a', { href: '/careers', style: styles.navLink }, 'Careers'),
          React.createElement('a', { href: '/country', style: styles.navLink }, 'Country ▾'),
          React.createElement('a', { href: '/business', style: styles.navLink }, 'For Businesses ▾'),
          React.createElement('a', { href: '/accounts', style: styles.navLink }, 'USD Accounts')
        ),
        React.createElement('div', { style: styles.navRight },
          React.createElement('button', { style: styles.langKitufe }, '🌐 ▾'),
          React.createElement('button', {
            style: styles.hamburger,
            onClick: () => setMenuWazi(!menuWazi)
          }, '☰'),
          React.createElement('a', {
            href: APK,
            style: styles.downloadKitufe,
            target: '_blank',
            rel: 'noreferrer'
          }, 'Download SendEasly')
        )
      ),

      // Mobile Menu
      menuWazi && React.createElement('div', { style: styles.mobileMenu },
        React.createElement('a', { href: '/about', style: styles.mobileMenuLink }, 'About Us'),
        React.createElement('a', { href: '/careers', style: styles.mobileMenuLink }, 'Careers'),
        React.createElement('a', { href: '/contact', style: styles.mobileMenuLink }, 'Contact us'),
        React.createElement('a', { href: '/security', style: styles.mobileMenuLink }, 'Security'),
        React.createElement('a', { href: '/faqs', style: styles.mobileMenuLink }, 'FAQs')
      ),

      // Hero Section
      React.createElement('div', { style: styles.hero },

        // Left — Text
        React.createElement('div', { style: styles.heroLeft },
          React.createElement('h1', { style: styles.kichwa }, 'Send Money Home'),
          React.createElement('p', { style: styles.maelezo },
            'Join 1,000,000+ customers sending money globally.'
          )
        ),

        // Right — Calculator
        React.createElement('div', { style: styles.calculatorWrapper },

          // Tabs
          React.createElement('div', { style: styles.tabs },
            React.createElement('button', {
              style: tabAmilifu === 'rates' ? styles.tabAmilifu : styles.tab,
              onClick: () => setTabAmilifu('rates')
            }, 'Rates calculator'),
            React.createElement('button', {
              style: tabAmilifu === 'compare' ? styles.tabAmilifu : styles.tab,
              onClick: () => setTabAmilifu('compare')
            }, 'Compare rates')
          ),

          // You send
          React.createElement('p', { style: styles.lebo }, 'You send'),
          React.createElement('div', { style: styles.inputSafu },
            React.createElement('div', { style: styles.sarafuBox },
              React.createElement('span', null, viwango[kutoka].bendera),
              React.createElement('select', {
                style: styles.sarafuSelect,
                value: kutoka,
                onChange: function(e) { setKutoka(e.target.value); }
              },
                Object.keys(viwango).map(function(s) {
                  return React.createElement('option', { key: s, value: s }, s);
                })
              ),
              React.createElement('span', { style: styles.chevron }, '▾')
            ),
            React.createElement('input', {
              style: styles.nambariIngizo,
              type: 'number',
              value: kiasi,
              onChange: function(e) { setKiasi(e.target.value); }
            })
          ),

          // Exchange rate
          React.createElement('div', { style: styles.kiwangoSafu },
            React.createElement('span', { style: styles.kiwangoIcon }, '↕'),
            React.createElement('span', { style: styles.kiwangoManeno },
              '1 ' + kutoka + ' \u2248 ' + kiwango + ' ' + kwenda
            )
          ),

          // They receive
          React.createElement('p', { style: styles.lebo }, 'Individual receives'),
          React.createElement('div', { style: styles.inputSafu },
            React.createElement('div', { style: styles.sarafuBox },
              React.createElement('span', null, viwango[kwenda].bendera),
              React.createElement('select', {
                style: styles.sarafuSelect,
                value: kwenda,
                onChange: function(e) { setKwenda(e.target.value); }
              },
                Object.keys(viwango).map(function(s) {
                  return React.createElement('option', { key: s, value: s }, s);
                })
              ),
              React.createElement('span', { style: styles.chevron }, '▾')
            ),
            React.createElement('input', {
              style: Object.assign({}, styles.nambariIngizo, { fontWeight: 'bold' }),
              type: 'text',
              value: hesabu(),
              readOnly: true
            })
          ),

          // Download Button
          React.createElement('a', {
            href: APK,
            style: styles.downloadBtn,
            target: '_blank',
            rel: 'noreferrer'
          }, 'Download SendEasly'),

          React.createElement('p', { style: styles.adaNdogo },
            'Looking for our business rates? ',
            React.createElement('a', { href: '/contact', style: styles.contactLink }, 'Contact sales!'),
            ' We charge 2% fee on all transfers.'
          )
        )
      ),

      // Stats
      React.createElement('div', { style: styles.stats },
        React.createElement('div', { style: styles.statItem },
          React.createElement('h2', { style: styles.statNambari }, '1M+'),
          React.createElement('p', { style: styles.statManeno }, 'Customers')
        ),
        React.createElement('div', { style: styles.statItem },
          React.createElement('h2', { style: styles.statNambari }, '150+'),
          React.createElement('p', { style: styles.statManeno }, 'Countries')
        ),
        React.createElement('div', { style: styles.statItem },
          React.createElement('h2', { style: styles.statNambari }, '2%'),
          React.createElement('p', { style: styles.statManeno }, 'Fee only')
        ),
        React.createElement('div', { style: styles.statItem },
          React.createElement('h2', { style: styles.statNambari }, '24/7'),
          React.createElement('p', { style: styles.statManeno }, 'Support')
        )
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
    backgroundImage: 'radial-gradient(2px 2px at 20px 30px, rgba(255,255,255,0.3), transparent), radial-gradient(2px 2px at 40px 70px, rgba(255,255,255,0.2), transparent), radial-gradient(1px 1px at 90px 40px, rgba(255,255,255,0.3), transparent), radial-gradient(2px 2px at 130px 80px, rgba(255,255,255,0.2), transparent), radial-gradient(1px 1px at 160px 120px, rgba(255,255,255,0.3), transparent), radial-gradient(2px 2px at 200px 50px, rgba(255,255,255,0.2), transparent), radial-gradient(1px 1px at 250px 90px, rgba(255,255,255,0.3), transparent), radial-gradient(2px 2px at 300px 30px, rgba(255,255,255,0.2), transparent), radial-gradient(1px 1px at 350px 110px, rgba(255,255,255,0.3), transparent), radial-gradient(2px 2px at 400px 60px, rgba(255,255,255,0.2), transparent), radial-gradient(1px 1px at 450px 40px, rgba(255,255,255,0.3), transparent), radial-gradient(2px 2px at 500px 80px, rgba(255,255,255,0.2), transparent), radial-gradient(1px 1px at 550px 120px, rgba(255,255,255,0.3), transparent), radial-gradient(2px 2px at 600px 50px, rgba(255,255,255,0.2), transparent), radial-gradient(1px 1px at 650px 90px, rgba(255,255,255,0.3), transparent), radial-gradient(2px 2px at 700px 30px, rgba(255,255,255,0.2), transparent), radial-gradient(1px 1px at 750px 110px, rgba(255,255,255,0.3), transparent), radial-gradient(2px 2px at 800px 60px, rgba(255,255,255,0.2), transparent), radial-gradient(1px 1px at 850px 40px, rgba(255,255,255,0.3), transparent), radial-gradient(2px 2px at 900px 80px, rgba(255,255,255,0.2), transparent), radial-gradient(1px 1px at 950px 120px, rgba(255,255,255,0.3), transparent), radial-gradient(2px 2px at 1000px 50px, rgba(255,255,255,0.2), transparent), radial-gradient(1px 1px at 1050px 90px, rgba(255,255,255,0.3), transparent), radial-gradient(2px 2px at 1100px 30px, rgba(255,255,255,0.2), transparent), radial-gradient(1px 1px at 1150px 110px, rgba(255,255,255,0.3), transparent), radial-gradient(2px 2px at 1200px 60px, rgba(255,255,255,0.2), transparent), radial-gradient(1px 1px at 1250px 40px, rgba(255,255,255,0.3), transparent), radial-gradient(2px 2px at 100px 200px, rgba(255,255,255,0.15), transparent), radial-gradient(1px 1px at 300px 250px, rgba(255,255,255,0.2), transparent), radial-gradient(2px 2px at 500px 180px, rgba(255,255,255,0.15), transparent), radial-gradient(1px 1px at 700px 220px, rgba(255,255,255,0.2), transparent), radial-gradient(2px 2px at 900px 190px, rgba(255,255,255,0.15), transparent), radial-gradient(1px 1px at 1100px 230px, rgba(255,255,255,0.2), transparent)',
    backgroundSize: '1300px 300px',
    zIndex: 0,
    pointerEvents: 'none',
  },
  navbar: {
    position: 'fixed',
    top: 0, left: 0, right: 0,
    padding: '14px 40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 1000,
    backgroundColor: 'rgba(26,10,46,0.9)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
  },
  navLeft: { display: 'flex', alignItems: 'center' },
  navLogo: { height: '45px' },
  navLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: '28px',
  },
  navLink: {
    color: 'rgba(255,255,255,0.85)',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '500',
  },
  navRight: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  langKitufe: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    border: '1px solid rgba(255,255,255,0.2)',
    color: 'white',
    padding: '8px 12px',
    borderRadius: '20px',
    cursor: 'pointer',
    fontSize: '14px',
  },
  hamburger: {
    backgroundColor: 'transparent',
    border: 'none',
    color: 'white',
    fontSize: '24px',
    cursor: 'pointer',
    display: 'none',
  },
  downloadKitufe: {
    backgroundColor: '#c2185b',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '25px',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: 'bold',
    border: '2px solid rgba(255,255,255,0.3)',
  },
  mobileMenu: {
    position: 'fixed',
    top: '73px', right: 0,
    width: '60%', height: '100vh',
    backgroundColor: 'rgba(26,10,46,0.97)',
    padding: '24px',
    zIndex: 999,
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    boxShadow: '-4px 0 20px rgba(0,0,0,0.5)',
  },
  mobileMenuLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: '500',
    padding: '12px 0',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
  },
  hero: {
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '140px 80px 80px',
    maxWidth: '1300px',
    margin: '0 auto',
    gap: '60px',
  },
  heroLeft: {
    flex: 1,
    maxWidth: '500px',
  },
  kichwa: {
    fontSize: '56px',
    fontWeight: 'bold',
    color: 'white',
    lineHeight: '1.15',
    marginBottom: '20px',
  },
  maelezo: {
    fontSize: '18px',
    color: 'rgba(255,255,255,0.75)',
    lineHeight: '1.7',
    marginBottom: '0',
  },
  calculatorWrapper: {
    backgroundColor: 'rgba(255,255,255,0.08)',
    backdropFilter: 'blur(20px)',
    borderRadius: '20px',
    padding: '28px',
    width: '420px',
    border: '1px solid rgba(255,255,255,0.15)',
    boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
  },
  tabs: {
    display: 'flex',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: '10px',
    padding: '4px',
    marginBottom: '20px',
    gap: '4px',
  },
  tab: {
    flex: 1,
    backgroundColor: 'transparent',
    border: 'none',
    color: 'rgba(255,255,255,0.6)',
    padding: '10px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '13px',
    fontWeight: '500',
  },
  tabAmilifu: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.2)',
    border: 'none',
    color: 'white',
    padding: '10px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '13px',
    fontWeight: 'bold',
  },
  lebo: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: '14px',
    fontWeight: '600',
    marginBottom: '8px',
    marginTop: '0',
  },
  inputSafu: {
    display: 'flex',
    gap: '0',
    marginBottom: '12px',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: '12px',
    border: '1px solid rgba(255,255,255,0.2)',
    overflow: 'hidden',
  },
  sarafuBox: {
    display: 'flex',
    alignItems: 'center',
    padding: '14px 12px',
    backgroundColor: 'rgba(255,255,255,0.1)',
    gap: '6px',
    borderRight: '1px solid rgba(255,255,255,0.2)',
  },
  sarafuSelect: {
    backgroundColor: 'transparent',
    border: 'none',
    color: 'white',
    fontSize: '15px',
    fontWeight: '600',
    cursor: 'pointer',
    outline: 'none',
  },
  chevron: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: '11px',
  },
  nambariIngizo: {
    flex: 1,
    backgroundColor: 'transparent',
    border: 'none',
    color: 'white',
    fontSize: '24px',
    fontWeight: 'bold',
    textAlign: 'right',
    padding: '14px 16px',
    outline: 'none',
  },
  kiwangoSafu: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: '6px',
    marginBottom: '12px',
  },
  kiwangoIcon: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: '14px',
  },
  kiwangoManeno: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: '13px',
    fontWeight: '600',
  },
  downloadBtn: {
    display: 'block',
    backgroundColor: 'white',
    color: '#880e4f',
    textDecoration: 'none',
    textAlign: 'center',
    padding: '16px',
    borderRadius: '12px',
    fontSize: '16px',
    fontWeight: 'bold',
    marginTop: '16px',
    marginBottom: '12px',
  },
  adaNdogo: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: '12px',
    textAlign: 'center',
    lineHeight: '1.5',
  },
  contactLink: {
    color: 'rgba(255,255,255,0.8)',
    textDecoration: 'underline',
  },
  stats: {
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    justifyContent: 'center',
    gap: '60px',
    padding: '40px 80px',
    borderTop: '1px solid rgba(255,255,255,0.1)',
    maxWidth: '1300px',
    margin: '0 auto',
    flexWrap: 'wrap',
  },
  statItem: { textAlign: 'center' },
  statNambari: {
    color: 'white',
    fontSize: '36px',
    fontWeight: 'bold',
    margin: '0',
  },
  statManeno: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: '14px',
    margin: '4px 0 0',
  },
};

export default Home;