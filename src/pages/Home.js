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
  const [mpokeaji, setMpokeaji] = useState('');
  const [kutoka, setKutoka] = useState('EUR');
  const [kwenda, setKwenda] = useState('TZS');
  const [menuWazi, setMenuWazi] = useState(false);

  function hesabu(k) {
    const nambari = parseFloat(k) || 0;
    const katikaDola = nambari / viwango[kutoka].rate;
    return (katikaDola * viwango[kwenda].rate).toLocaleString('en-US', { maximumFractionDigits: 0 });
  }

  function hesabuKutoka(k) {
    const nambari = parseFloat(k.replace(/,/g, '')) || 0;
    const katikaDola = nambari / viwango[kwenda].rate;
    return (katikaDola * viwango[kutoka].rate).toFixed(2);
  }

  function badilishaKiasi(v) { setKiasi(v); setMpokeaji(''); }
  function badilishaMpokeaji(v) { setMpokeaji(v); setKiasi(''); }

  const kiwango = (viwango[kwenda].rate / viwango[kutoka].rate).toFixed(2);
  const inatumwa = kiasi || hesabuKutoka(mpokeaji);
  const inapokelewa = mpokeaji || hesabu(kiasi);

  const sarafu = function(s) {
    return React.createElement('option', {
      key: s, value: s,
      style: { backgroundColor: '#2d0a4e', color: 'white' }
    }, viwango[s].bendera + ' ' + s);
  };

  return (
    React.createElement('div', { style: styles.ukurasa },

      React.createElement('div', { style: styles.starsBackground }),

      React.createElement('style', null, `
        select option { background-color: #2d0a4e !important; color: white !important; }
        input[type=number]::-webkit-inner-spin-button,
        input[type=number]::-webkit-outer-spin-button { -webkit-appearance: none; margin: 0; }
        * { box-sizing: border-box; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-nav { display: flex !important; }
          .hero-wrap { padding: 80px 16px 32px !important; }
          .calc-wrap { max-width: 85% !important; padding: 14px !important; }
          .kichwa-h { font-size: 24px !important; }
          .store-wrap { max-width: 85% !important; flex-direction: row !important; }
          .features-grid { grid-template-columns: 1fr !important; }
          .how-grid { grid-template-columns: 1fr !important; }
          .countries-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .footer-grid { grid-template-columns: 1fr !important; text-align: center !important; }
        }
        @media (min-width: 769px) {
          .mobile-nav { display: none !important; }
          .desktop-nav { display: flex !important; }
        }
      `),

      // Desktop Navbar
      React.createElement('div', {
        style: Object.assign({}, styles.navbar, { display: 'flex' }),
        className: 'desktop-nav'
      },
        React.createElement('img', { src: '/logo.png', alt: 'SendEasly', style: styles.navLogo }),
        React.createElement('div', { style: styles.navLinks },
          React.createElement('a', { href: '/about', style: styles.navLink }, 'About Us'),
          React.createElement('a', { href: '/faqs', style: styles.navLink }, 'FAQs'),
          React.createElement('a', { href: '/security', style: styles.navLink }, 'Security'),
          React.createElement('a', { href: '/contact', style: styles.navLink }, 'Contact us')
        ),
        React.createElement('div', { style: styles.navRight },
          React.createElement('button', { style: styles.langKitufe }, '🌐 ▾'),
          React.createElement('a', { href: APK, style: styles.downloadKitufe, target: '_blank', rel: 'noreferrer' }, 'Download SendEasly')
        )
      ),

      // Mobile Navbar
      React.createElement('div', {
        style: Object.assign({}, styles.mobileNavbar, { display: 'none' }),
        className: 'mobile-nav'
      },
        React.createElement('img', { src: '/logo.png', alt: 'SendEasly', style: styles.navLogo }),
        React.createElement('button', {
          style: styles.hamburger,
          onClick: function() { setMenuWazi(!menuWazi); }
        }, '☰')
      ),

      menuWazi && React.createElement('div', { style: styles.mobileMenu },
        React.createElement('a', { href: '/about', style: styles.mobileMenuLink }, 'About Us'),
        React.createElement('a', { href: '/faqs', style: styles.mobileMenuLink }, 'FAQs'),
        React.createElement('a', { href: '/security', style: styles.mobileMenuLink }, 'Security'),
        React.createElement('a', { href: '/contact', style: styles.mobileMenuLink }, 'Contact us')
      ),

      // ========== HERO ==========
      React.createElement('div', { style: styles.hero, className: 'hero-wrap' },
        React.createElement('div', { style: styles.heroText },
          React.createElement('h1', { style: styles.kichwa, className: 'kichwa-h' }, 'Send Money Home'),
          React.createElement('p', { style: styles.maelezo }, 'Join 1,000,000+ customers sending money globally.')
        ),

        React.createElement('div', { style: styles.calculatorWrapper, className: 'calc-wrap' },
          React.createElement('p', { style: styles.lebo }, 'You send'),
          React.createElement('div', { style: styles.inputSafu },
            React.createElement('div', { style: styles.sarafuBox },
              React.createElement('span', null, viwango[kutoka].bendera),
              React.createElement('select', {
                style: styles.sarafuSelect, value: kutoka,
                onChange: function(e) { setKutoka(e.target.value); }
              }, Object.keys(viwango).map(sarafu))
            ),
            React.createElement('input', {
              style: styles.nambariIngizo, type: 'number',
              value: inatumwa, placeholder: '0',
              onChange: function(e) { badilishaKiasi(e.target.value); }
            })
          ),

          React.createElement('div', { style: styles.kiwangoSafu },
            React.createElement('span', { style: styles.kiwangoManeno },
              '\u21C5 1 ' + kutoka + ' = ' + kiwango + ' ' + kwenda
            )
          ),

          React.createElement('p', { style: styles.lebo }, 'Individual receives'),
          React.createElement('div', { style: styles.inputSafu },
            React.createElement('div', { style: styles.sarafuBox },
              React.createElement('span', null, viwango[kwenda].bendera),
              React.createElement('select', {
                style: styles.sarafuSelect, value: kwenda,
                onChange: function(e) { setKwenda(e.target.value); }
              }, Object.keys(viwango).map(sarafu))
            ),
            React.createElement('input', {
              style: Object.assign({}, styles.nambariIngizo, { color: '#f8bbd0' }),
              type: 'text', value: inapokelewa, placeholder: '0',
              onChange: function(e) { badilishaMpokeaji(e.target.value); }
            })
          ),

          React.createElement('div', { style: styles.noFees },
            React.createElement('span', null, '✅'),
            React.createElement('span', { style: styles.noFeesManeno }, 'No transfer fees on this transfer')
          ),

          React.createElement('a', { href: APK, style: styles.downloadBtn, target: '_blank', rel: 'noreferrer' }, 'Download SendEasly')
        ),

        // Store Buttons
        React.createElement('div', { style: styles.storeVitufe, className: 'store-wrap' },
          React.createElement('a', { href: APK, style: styles.appleKitufe, target: '_blank', rel: 'noreferrer' },
            React.createElement('svg', { width: '16', height: '16', viewBox: '0 0 814 1000', style: { marginRight: '6px', flexShrink: 0 } },
              React.createElement('path', { d: 'M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-37.5-155.5-127.4C46.3 789.9 0 663 0 541.8 0 347.4 118.7 248 235.5 248c64 0 117.7 43.3 158.1 43.3 38.5 0 98.3-45.1 172.5-45.1 27.9 0 108.2 2.6 168.1 91.1zm-56.4-184.5c-27.9 33.1-77 58.1-121 58.1-5.8 0-11.6-.6-17.4-1.9-1.3-5.8-1.9-11.6-1.9-17.4 0-32.5 14.1-65 37.5-87.5 28.5-27.9 73.6-48.3 113.1-50.3 1.3 7.1 1.9 14.1 1.9 20.5 0 31.8-13.4 65-12.2 78.5z', fill: 'black' })
            ),
            React.createElement('div', null,
              React.createElement('div', { style: { fontSize: '8px', opacity: 0.7 } }, 'Download on the'),
              React.createElement('div', { style: { fontSize: '13px', fontWeight: 'bold' } }, 'App Store')
            )
          ),
          React.createElement('a', { href: APK, style: styles.googleKitufe, target: '_blank', rel: 'noreferrer' },
            React.createElement('svg', { width: '16', height: '16', viewBox: '0 0 512 512', style: { marginRight: '6px', flexShrink: 0 } },
              React.createElement('path', { d: 'M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.6 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c17.1-9.8 17.1-34.9-.1-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z', fill: '#4CAF50' })
            ),
            React.createElement('div', null,
              React.createElement('div', { style: { fontSize: '8px', opacity: 0.7 } }, 'Get it on'),
              React.createElement('div', { style: { fontSize: '13px', fontWeight: 'bold' } }, 'Google Play')
            )
          )
        )
      ),

      // ========== STATS ==========
      React.createElement('div', { style: styles.stats },
        [{ n: '1M+', m: 'Customers' }, { n: '150+', m: 'Countries' }, { n: '0%', m: 'Transfer fee' }, { n: '24/7', m: 'Support' }]
        .map(function(s) {
          return React.createElement('div', { key: s.n, style: styles.statItem },
            React.createElement('h2', { style: styles.statNambari }, s.n),
            React.createElement('p', { style: styles.statManeno }, s.m)
          );
        })
      ),

      // ========== FEATURES FLYER ==========
      React.createElement('div', { style: styles.section },
        React.createElement('div', { style: styles.sectionInner },
          React.createElement('h2', { style: styles.sectionKichwa }, 'Why Choose SendEasly?'),
          React.createElement('p', { style: styles.sectionMaelezo }, 'Fast, secure, and affordable money transfers to over 150 countries'),
          React.createElement('div', { style: styles.featuresGrid, className: 'features-grid' },
            [
              { icon: '⚡', k: 'Instant Transfers', m: 'Send money in minutes to mobile wallets and bank accounts worldwide.' },
              { icon: '🔒', k: 'Bank-Level Security', m: '256-bit SSL encryption keeps your money and data safe at all times.' },
              { icon: '💰', k: 'Zero Fees', m: 'No hidden charges. Send money completely free to all destinations.' },
              { icon: '🌍', k: '150+ Countries', m: 'Send money to Africa, Asia, Europe, Americas and beyond.' },
              { icon: '📱', k: 'Mobile First', m: 'Available on Android and iOS. Send money from anywhere, anytime.' },
              { icon: '🎯', k: 'Best Rates', m: 'We offer the best exchange rates in the market, guaranteed.' },
            ].map(function(f) {
              return React.createElement('div', { key: f.k, style: styles.featureKadi },
                React.createElement('div', { style: styles.featureIcon }, f.icon),
                React.createElement('h3', { style: styles.featureKichwa }, f.k),
                React.createElement('p', { style: styles.featureManeno }, f.m)
              );
            })
          )
        )
      ),

      // ========== HOW IT WORKS FLYER ==========
      React.createElement('div', { style: styles.howSection },
        React.createElement('div', { style: styles.sectionInner },
          React.createElement('h2', { style: styles.sectionKichwa }, 'How It Works'),
          React.createElement('p', { style: styles.sectionMaelezo }, 'Send money in 3 simple steps'),
          React.createElement('div', { style: styles.howGrid, className: 'how-grid' },
            [
              { nambari: '1', icon: '📲', k: 'Download the App', m: 'Get SendEasly from the App Store or Google Play. Sign up in minutes.' },
              { nambari: '2', icon: '💳', k: 'Add Your Money', m: 'Link your bank account, card, or mobile money wallet to fund your transfer.' },
              { nambari: '3', icon: '🚀', k: 'Send Instantly', m: 'Choose your recipient, enter the amount, and send. Money arrives in minutes.' },
            ].map(function(h) {
              return React.createElement('div', { key: h.nambari, style: styles.howKadi },
                React.createElement('div', { style: styles.howNambari }, h.nambari),
                React.createElement('div', { style: styles.howIcon }, h.icon),
                React.createElement('h3', { style: styles.howKichwa }, h.k),
                React.createElement('p', { style: styles.howManeno }, h.m)
              );
            })
          )
        )
      ),

      // ========== COUNTRIES FLYER ==========
      React.createElement('div', { style: styles.section },
        React.createElement('div', { style: styles.sectionInner },
          React.createElement('h2', { style: styles.sectionKichwa }, 'Send to These Countries'),
          React.createElement('p', { style: styles.sectionMaelezo }, 'Growing network across Africa and beyond'),
          React.createElement('div', { style: styles.countriesGrid, className: 'countries-grid' },
            [
              { b: '🇹🇿', n: 'Tanzania', s: 'TZS' },
              { b: '🇰🇪', n: 'Kenya', s: 'KES' },
              { b: '🇺🇬', n: 'Uganda', s: 'UGX' },
              { b: '🇳🇬', n: 'Nigeria', s: 'NGN' },
              { b: '🇬🇭', n: 'Ghana', s: 'GHS' },
              { b: '🇿🇦', n: 'South Africa', s: 'ZAR' },
              { b: '🇦🇪', n: 'UAE', s: 'AED' },
              { b: '🇬🇧', n: 'United Kingdom', s: 'GBP' },
              { b: '🇺🇸', n: 'United States', s: 'USD' },
              { b: '🇨🇦', n: 'Canada', s: 'CAD' },
              { b: '🇪🇺', n: 'Europe', s: 'EUR' },
              { b: '🌍', n: '150+ More', s: '' },
            ].map(function(c) {
              return React.createElement('div', { key: c.n, style: styles.countryKadi },
                React.createElement('span', { style: styles.countryBendera }, c.b),
                React.createElement('div', null,
                  React.createElement('p', { style: styles.countryJina }, c.n),
                  c.s && React.createElement('p', { style: styles.countrySarafu }, c.s)
                )
              );
            })
          )
        )
      ),

      // ========== TESTIMONIALS FLYER ==========
      React.createElement('div', { style: styles.howSection },
        React.createElement('div', { style: styles.sectionInner },
          React.createElement('h2', { style: styles.sectionKichwa }, 'What Our Customers Say'),
          React.createElement('p', { style: styles.sectionMaelezo }, 'Trusted by millions of people worldwide'),
          React.createElement('div', { style: styles.testimonialsGrid },
            [
              { jina: 'Sarah M.', nchi: '🇹🇿 Tanzania', maneno: 'SendEasly is amazing! I send money to my family every month and it arrives in minutes. The rates are unbeatable!', rating: '⭐⭐⭐⭐⭐' },
              { jina: 'John K.', nchi: '🇰🇪 Kenya', maneno: 'Best money transfer app I have ever used. Zero fees and fast transfers. My family loves it!', rating: '⭐⭐⭐⭐⭐' },
              { jina: 'Amina O.', nchi: '🇳🇬 Nigeria', maneno: 'I have tried many apps but SendEasly is the best. Easy to use, fast, and completely free!', rating: '⭐⭐⭐⭐⭐' },
            ].map(function(t) {
              return React.createElement('div', { key: t.jina, style: styles.testimonialKadi },
                React.createElement('p', { style: styles.testimonialRating }, t.rating),
                React.createElement('p', { style: styles.testimonialManeno }, '"' + t.maneno + '"'),
                React.createElement('div', { style: styles.testimonialAuthor },
                  React.createElement('div', { style: styles.testimonialAvatar },
                    React.createElement('span', null, t.jina.charAt(0))
                  ),
                  React.createElement('div', null,
                    React.createElement('p', { style: styles.testimonialJina }, t.jina),
                    React.createElement('p', { style: styles.testimonialNchi }, t.nchi)
                  )
                )
              );
            })
          )
        )
      ),

      // ========== CTA FLYER ==========
      React.createElement('div', { style: styles.ctaSection },
        React.createElement('div', { style: styles.ctaInner },
          React.createElement('h2', { style: styles.ctaKichwa }, 'Ready to Send Money?'),
          React.createElement('p', { style: styles.ctaMaelezo }, 'Download SendEasly today and send your first transfer for free!'),
          React.createElement('div', { style: styles.ctaVitufe },
            React.createElement('a', { href: APK, style: styles.ctaKitufe, target: '_blank', rel: 'noreferrer' }, 'Download Now — It\'s Free'),
            React.createElement('a', { href: '/about', style: styles.ctaKitufeOutline }, 'Learn More')
          )
        )
      ),

      // ========== FOOTER ==========
      React.createElement('div', { style: styles.footer },
        React.createElement('div', { style: styles.footerInner },
          React.createElement('div', { style: styles.footerGrid, className: 'footer-grid' },

            React.createElement('div', { style: styles.footerBrand },
              React.createElement('img', { src: '/logo.png', alt: 'SendEasly', style: styles.footerLogo }),
              React.createElement('p', { style: styles.footerMaelezo }, 'Fast, secure, and free international money transfers to over 150 countries worldwide.'),
              React.createElement('div', { style: styles.socialLinks },
                ['Twitter', 'Facebook', 'Instagram', 'LinkedIn'].map(function(s) {
                  return React.createElement('a', { key: s, href: '#', style: styles.socialKitufe }, s);
                })
              )
            ),

            React.createElement('div', null,
              React.createElement('h4', { style: styles.footerKichwa }, 'Company'),
              ['About Us', 'Careers', 'Blog', 'Press'].map(function(l) {
                return React.createElement('a', { key: l, href: '/about', style: styles.footerLink }, l);
              })
            ),

            React.createElement('div', null,
              React.createElement('h4', { style: styles.footerKichwa }, 'Support'),
              ['FAQs', 'Contact Us', 'Security', 'Privacy Policy'].map(function(l) {
                return React.createElement('a', { key: l, href: '/faqs', style: styles.footerLink }, l);
              })
            ),

            React.createElement('div', null,
              React.createElement('h4', { style: styles.footerKichwa }, 'Legal'),
              ['Terms of Service', 'Privacy Policy', 'Cookie Policy', 'Compliance'].map(function(l) {
                return React.createElement('a', { key: l, href: '#', style: styles.footerLink }, l);
              })
            )
          ),

          React.createElement('div', { style: styles.footerBottom },
            React.createElement('p', { style: styles.copyright },
              '\u00A9 ' + new Date().getFullYear() + ' SendEasly. All rights reserved. SendEasly is a licensed money transfer service.'
            ),
            React.createElement('div', { style: styles.footerBadges },
              ['SSL Secured', 'PCI DSS', 'Licensed & Regulated'].map(function(b) {
                return React.createElement('span', { key: b, style: styles.footerBadge }, b);
              })
            )
          )
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
  },
  starsBackground: {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundImage: 'radial-gradient(2px 2px at 20px 30px, rgba(255,255,255,0.3), transparent), radial-gradient(1px 1px at 90px 40px, rgba(255,255,255,0.3), transparent), radial-gradient(2px 2px at 200px 50px, rgba(255,255,255,0.2), transparent), radial-gradient(1px 1px at 350px 110px, rgba(255,255,255,0.3), transparent), radial-gradient(2px 2px at 500px 80px, rgba(255,255,255,0.2), transparent), radial-gradient(1px 1px at 700px 30px, rgba(255,255,255,0.3), transparent)',
    backgroundSize: '1300px 300px',
    zIndex: 0,
    pointerEvents: 'none',
  },
  navbar: {
    position: 'fixed',
    top: 0, left: 0, right: 0,
    padding: '12px 40px',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 1000,
    backgroundColor: 'rgba(26,10,46,0.92)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
  },
  mobileNavbar: {
    position: 'fixed',
    top: 0, left: 0, right: 0,
    padding: '12px 20px',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 1000,
    backgroundColor: 'rgba(26,10,46,0.92)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
  },
  navLogo: { height: '38px' },
  navLinks: { display: 'flex', alignItems: 'center', gap: '24px' },
  navLink: { color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '13px', fontWeight: '500' },
  navRight: { display: 'flex', alignItems: 'center', gap: '10px' },
  langKitufe: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    border: '1px solid rgba(255,255,255,0.2)',
    color: 'white', padding: '6px 10px',
    borderRadius: '20px', cursor: 'pointer', fontSize: '13px',
  },
  hamburger: { backgroundColor: 'transparent', border: 'none', color: 'white', fontSize: '24px', cursor: 'pointer' },
  downloadKitufe: {
    backgroundColor: '#c2185b', color: 'white',
    padding: '8px 16px', borderRadius: '20px',
    textDecoration: 'none', fontSize: '13px', fontWeight: 'bold',
  },
  mobileMenu: {
    position: 'fixed', top: '64px', right: 0,
    width: '55%', height: '100vh',
    backgroundColor: 'rgba(26,10,46,0.97)',
    padding: '20px', zIndex: 999,
    display: 'flex', flexDirection: 'column', gap: '8px',
    boxShadow: '-4px 0 20px rgba(0,0,0,0.5)',
  },
  mobileMenuLink: {
    color: 'white', textDecoration: 'none',
    fontSize: '16px', fontWeight: '500',
    padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.1)',
  },
  hero: {
    position: 'relative', zIndex: 1,
    display: 'flex', flexDirection: 'column',
    alignItems: 'center', padding: '100px 20px 40px',
    maxWidth: '480px', margin: '0 auto',
  },
  heroText: { textAlign: 'center', marginBottom: '16px' },
  kichwa: { fontSize: '32px', fontWeight: 'bold', color: 'white', lineHeight: '1.2', marginBottom: '8px', margin: '0 0 8px' },
  maelezo: { fontSize: '14px', color: 'rgba(255,255,255,0.7)', lineHeight: '1.6', margin: '0' },
  calculatorWrapper: {
    backgroundColor: 'rgba(255,255,255,0.08)',
    backdropFilter: 'blur(20px)', borderRadius: '16px',
    padding: '18px', width: '100%', maxWidth: '320px',
    border: '1px solid rgba(255,255,255,0.15)',
    boxShadow: '0 16px 48px rgba(0,0,0,0.3)', marginBottom: '14px',
  },
  lebo: { color: 'rgba(255,255,255,0.7)', fontSize: '12px', fontWeight: '600', marginBottom: '5px', marginTop: '0' },
  inputSafu: {
    display: 'flex', marginBottom: '8px',
    backgroundColor: 'rgba(255,255,255,0.12)',
    borderRadius: '10px', border: '1px solid rgba(255,255,255,0.2)',
    overflow: 'hidden', alignItems: 'center',
  },
  sarafuBox: {
    display: 'flex', alignItems: 'center',
    padding: '10px 6px', backgroundColor: 'rgba(255,255,255,0.1)',
    gap: '3px', borderRight: '1px solid rgba(255,255,255,0.2)',
    flexShrink: 0,
  },
  sarafuSelect: {
    backgroundColor: '#2d0a4e', border: '1px solid rgba(255,255,255,0.3)',
    color: 'white', fontSize: '12px', fontWeight: '600',
    cursor: 'pointer', outline: 'none', borderRadius: '4px', padding: '2px 4px',
  },
  nambariIngizo: {
    flex: 1, backgroundColor: 'transparent', border: 'none',
    color: 'white', fontSize: '18px', fontWeight: 'bold',
    textAlign: 'right', padding: '10px 8px', outline: 'none', minWidth: '0',
  },
  kiwangoSafu: { display: 'flex', justifyContent: 'flex-end', marginBottom: '8px' },
  kiwangoManeno: {
    backgroundColor: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.8)',
    padding: '4px 10px', borderRadius: '20px', fontSize: '11px', fontWeight: '600',
  },
  noFees: { display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '12px', marginTop: '4px' },
  noFeesManeno: { color: 'rgba(255,255,255,0.7)', fontSize: '11px', fontWeight: '500' },
  downloadBtn: {
    display: 'block', backgroundColor: 'white', color: '#880e4f',
    textDecoration: 'none', textAlign: 'center', padding: '13px',
    borderRadius: '10px', fontSize: '14px', fontWeight: 'bold',
  },
  storeVitufe: {
    display: 'flex', gap: '10px',
    width: '100%', maxWidth: '320px', marginBottom: '32px',
  },
  appleKitufe: {
    flex: 1, backgroundColor: 'white', color: 'black',
    padding: '10px 12px', borderRadius: '10px',
    textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  googleKitufe: {
    flex: 1, backgroundColor: 'black', color: 'white',
    padding: '10px 12px', borderRadius: '10px',
    textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  stats: {
    position: 'relative', zIndex: 1,
    display: 'flex', justifyContent: 'center',
    gap: '48px', padding: '24px 40px',
    borderTop: '1px solid rgba(255,255,255,0.1)',
    maxWidth: '1300px', margin: '0 auto', flexWrap: 'wrap',
  },
  statItem: { textAlign: 'center' },
  statNambari: { color: 'white', fontSize: '26px', fontWeight: 'bold', margin: '0' },
  statManeno: { color: 'rgba(255,255,255,0.6)', fontSize: '12px', margin: '4px 0 0' },

  // Features Section
  section: {
    position: 'relative', zIndex: 1,
    backgroundColor: 'rgba(255,255,255,0.03)',
    borderTop: '1px solid rgba(255,255,255,0.08)',
    padding: '60px 0',
  },
  sectionInner: { maxWidth: '1100px', margin: '0 auto', padding: '0 40px' },
  sectionKichwa: { color: 'white', fontSize: '32px', fontWeight: 'bold', textAlign: 'center', marginBottom: '12px' },
  sectionMaelezo: { color: 'rgba(255,255,255,0.6)', fontSize: '16px', textAlign: 'center', marginBottom: '40px' },
  featuresGrid: {
    display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px',
  },
  featureKadi: {
    backgroundColor: 'rgba(255,255,255,0.07)',
    borderRadius: '16px', padding: '24px',
    border: '1px solid rgba(255,255,255,0.12)',
    textAlign: 'center',
  },
  featureIcon: { fontSize: '36px', marginBottom: '12px' },
  featureKichwa: { color: 'white', fontSize: '16px', fontWeight: 'bold', marginBottom: '8px' },
  featureManeno: { color: 'rgba(255,255,255,0.65)', fontSize: '13px', lineHeight: '1.6' },

  // How It Works
  howSection: {
    position: 'relative', zIndex: 1,
    backgroundColor: 'rgba(0,0,0,0.15)',
    borderTop: '1px solid rgba(255,255,255,0.08)',
    padding: '60px 0',
  },
  howGrid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' },
  howKadi: {
    backgroundColor: 'rgba(255,255,255,0.07)',
    borderRadius: '16px', padding: '28px',
    border: '1px solid rgba(255,255,255,0.12)',
    textAlign: 'center', position: 'relative',
  },
  howNambari: {
    position: 'absolute', top: '-14px', left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: '#c2185b', color: 'white',
    width: '28px', height: '28px', borderRadius: '50%',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: '13px', fontWeight: 'bold',
  },
  howIcon: { fontSize: '40px', marginBottom: '12px', marginTop: '8px' },
  howKichwa: { color: 'white', fontSize: '16px', fontWeight: 'bold', marginBottom: '8px' },
  howManeno: { color: 'rgba(255,255,255,0.65)', fontSize: '13px', lineHeight: '1.6' },

  // Countries
  countriesGrid: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' },
  countryKadi: {
    backgroundColor: 'rgba(255,255,255,0.07)',
    borderRadius: '12px', padding: '16px',
    border: '1px solid rgba(255,255,255,0.12)',
    display: 'flex', alignItems: 'center', gap: '12px',
  },
  countryBendera: { fontSize: '28px' },
  countryJina: { color: 'white', fontSize: '13px', fontWeight: '600', margin: '0' },
  countrySarafu: { color: 'rgba(255,255,255,0.5)', fontSize: '11px', margin: '2px 0 0' },

  // Testimonials
  testimonialsGrid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' },
  testimonialKadi: {
    backgroundColor: 'rgba(255,255,255,0.07)',
    borderRadius: '16px', padding: '24px',
    border: '1px solid rgba(255,255,255,0.12)',
  },
  testimonialRating: { fontSize: '14px', marginBottom: '12px', margin: '0 0 12px' },
  testimonialManeno: { color: 'rgba(255,255,255,0.8)', fontSize: '14px', lineHeight: '1.7', fontStyle: 'italic', marginBottom: '16px' },
  testimonialAuthor: { display: 'flex', alignItems: 'center', gap: '12px' },
  testimonialAvatar: {
    width: '36px', height: '36px', borderRadius: '50%',
    backgroundColor: '#c2185b', display: 'flex',
    alignItems: 'center', justifyContent: 'center',
    color: 'white', fontWeight: 'bold', fontSize: '14px',
  },
  testimonialJina: { color: 'white', fontSize: '13px', fontWeight: 'bold', margin: '0' },
  testimonialNchi: { color: 'rgba(255,255,255,0.5)', fontSize: '12px', margin: '2px 0 0' },

  // CTA
  ctaSection: {
    position: 'relative', zIndex: 1,
    backgroundColor: 'rgba(194,24,91,0.2)',
    borderTop: '1px solid rgba(194,24,91,0.3)',
    padding: '60px 0',
  },
  ctaInner: { maxWidth: '700px', margin: '0 auto', padding: '0 40px', textAlign: 'center' },
  ctaKichwa: { color: 'white', fontSize: '36px', fontWeight: 'bold', marginBottom: '16px' },
  ctaMaelezo: { color: 'rgba(255,255,255,0.75)', fontSize: '18px', marginBottom: '32px' },
  ctaVitufe: { display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' },
  ctaKitufe: {
    backgroundColor: 'white', color: '#880e4f',
    padding: '14px 32px', borderRadius: '30px',
    textDecoration: 'none', fontSize: '16px', fontWeight: 'bold',
  },
  ctaKitufeOutline: {
    backgroundColor: 'transparent', color: 'white',
    padding: '14px 32px', borderRadius: '30px',
    textDecoration: 'none', fontSize: '16px', fontWeight: 'bold',
    border: '2px solid rgba(255,255,255,0.4)',
  },

  // Footer
  footer: {
    position: 'relative', zIndex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderTop: '1px solid rgba(255,255,255,0.1)',
    padding: '48px 0 0',
  },
  footerInner: { maxWidth: '1100px', margin: '0 auto', padding: '0 40px' },
  footerGrid: { display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '40px', marginBottom: '40px' },
  footerBrand: {},
  footerLogo: { height: '36px', marginBottom: '16px' },
  footerMaelezo: { color: 'rgba(255,255,255,0.55)', fontSize: '13px', lineHeight: '1.7', marginBottom: '20px' },
  socialLinks: { display: 'flex', gap: '8px', flexWrap: 'wrap' },
  socialKitufe: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    color: 'white', padding: '6px 12px',
    borderRadius: '20px', textDecoration: 'none',
    fontSize: '12px', fontWeight: '500',
    border: '1px solid rgba(255,255,255,0.15)',
  },
  footerKichwa: { color: 'white', fontSize: '14px', fontWeight: 'bold', marginBottom: '16px' },
  footerLink: {
    display: 'block', color: 'rgba(255,255,255,0.55)',
    textDecoration: 'none', fontSize: '13px',
    marginBottom: '10px', lineHeight: '1.5',
  },
  footerBottom: {
    borderTop: '1px solid rgba(255,255,255,0.08)',
    padding: '20px 0',
    display: 'flex', justifyContent: 'space-between',
    alignItems: 'center', flexWrap: 'wrap', gap: '12px',
  },
  copyright: { color: 'rgba(255,255,255,0.4)', fontSize: '12px', margin: '0' },
  footerBadges: { display: 'flex', gap: '8px', flexWrap: 'wrap' },
  footerBadge: {
    backgroundColor: 'rgba(255,255,255,0.08)',
    color: 'rgba(255,255,255,0.5)',
    padding: '4px 10px', borderRadius: '20px',
    fontSize: '11px', fontWeight: '500',
    border: '1px solid rgba(255,255,255,0.12)',
  },
};

export default Home;