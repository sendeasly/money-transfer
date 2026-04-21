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

function About() {
  return React.createElement('div', { style: styles.ukurasa },

    React.createElement('div', { style: styles.starsBackground }),

    React.createElement('style', null, `
      * { box-sizing: border-box; }
      @media (max-width: 768px) {
        .about-nav-links { display: none !important; }
        .about-grid-2 { grid-template-columns: 1fr !important; }
        .about-stats-grid { grid-template-columns: repeat(2,1fr) !important; }
        .about-values { justify-content: center !important; }
        .about-hero-h { font-size: 28px !important; }
        .about-section-inner { padding: 0 16px !important; }
        .about-section { padding: 40px 0 !important; }
      }
    `),

    // Navbar
    React.createElement('div', { style: styles.navbar },
      React.createElement('a', { href: '/', style: { textDecoration: 'none' } },
        React.createElement('img', { src: '/logo.png', alt: 'SendEasly', style: styles.logo })
      ),
      React.createElement('div', { style: styles.navLinks, className: 'about-nav-links' },
        React.createElement('a', { href: '/about', style: styles.navLinkAmilifu }, 'About Us'),
        React.createElement('a', { href: '/faqs', style: styles.navLink }, 'FAQs'),
        React.createElement('a', { href: '/security', style: styles.navLink }, 'Security'),
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

    // Hero
    React.createElement('div', { style: styles.hero },
      React.createElement(AnimatedSection, null,
        React.createElement('h1', { style: styles.heroH, className: 'about-hero-h' }, 'About SendEasly'),
        React.createElement('p', { style: styles.heroP }, 'We are on a mission to make international money transfers fast, affordable, and accessible for everyone.')
      )
    ),

    // Mission Cards
    React.createElement('div', { style: styles.section, className: 'about-section' },
      React.createElement('div', { style: styles.sectionInner, className: 'about-section-inner' },
        React.createElement(AnimatedSection, null,
          React.createElement('h2', { style: styles.sectionKichwa }, 'Our Mission & Values')
        ),
        React.createElement('div', { style: styles.grid2, className: 'about-grid-2' },
          [
            { icon: '🌍', k: 'Our Mission', m: 'To provide fast, secure, and affordable money transfers to everyone across the globe, connecting families and businesses worldwide.' },
            { icon: '🔒', k: 'Security First', m: 'We use bank-level 256-bit SSL encryption and security protocols to ensure your money and data are always safe and protected.' },
            { icon: '⚡', k: 'Fast Transfers', m: 'Send money in minutes to mobile wallets and bank accounts across Africa, Asia, Europe and beyond.' },
            { icon: '💰', k: 'Zero Fees', m: 'We charge absolutely nothing on all transfers. No hidden fees, no surprises. What you see is what you pay.' },
          ].map(function(item, i) {
            return React.createElement(AnimatedSection, { key: item.k, delay: i * 0.1 },
              React.createElement('div', { style: styles.kadi },
                React.createElement('div', { style: styles.kadiIcon }, item.icon),
                React.createElement('h3', { style: styles.kadiKichwa }, item.k),
                React.createElement('p', { style: styles.kadiManeno }, item.m)
              )
            );
          })
        )
      )
    ),

    // Stats
    React.createElement('div', { style: styles.sectionDark, className: 'about-section' },
      React.createElement('div', { style: styles.sectionInner, className: 'about-section-inner' },
        React.createElement(AnimatedSection, null,
          React.createElement('h2', { style: styles.sectionKichwa }, 'Our Impact')
        ),
        React.createElement('div', { style: styles.statsGrid, className: 'about-stats-grid' },
          [
            { icon: '👥', n: '5M+', m: 'Happy Customers' },
            { icon: '🌍', n: '150+', m: 'Countries' },
            { icon: '💸', n: '$2B+', m: 'Transferred' },
            { icon: '⭐', n: '4.9', m: 'App Rating' },
          ].map(function(s, i) {
            return React.createElement(AnimatedSection, { key: s.m, delay: i * 0.1 },
              React.createElement('div', { style: styles.statKadi },
                React.createElement('span', { style: styles.statIcon }, s.icon),
                React.createElement('h3', { style: styles.statN }, s.n),
                React.createElement('p', { style: styles.statM }, s.m)
              )
            );
          })
        )
      )
    ),

    // Values
    React.createElement('div', { style: styles.section, className: 'about-section' },
      React.createElement('div', { style: styles.sectionInner, className: 'about-section-inner' },
        React.createElement(AnimatedSection, null,
          React.createElement('h2', { style: styles.sectionKichwa }, 'Our Core Values'),
          React.createElement('div', { style: styles.valuesRow, className: 'about-values' },
            ['Transparency', 'Innovation', 'Security', 'Accessibility', 'Speed', 'Trust'].map(function(v, i) {
              return React.createElement(AnimatedSection, { key: v, delay: i * 0.08 },
                React.createElement('span', { style: styles.valueBadge }, v)
              );
            })
          )
        )
      )
    ),

    // Footer
    React.createElement('div', { style: styles.footer },
      React.createElement('p', { style: styles.copyright },
        '\u00A9 ' + new Date().getFullYear() + ' SendEasly. All rights reserved.'
      )
    )
  );
}

const styles = {
  ukurasa: { minHeight: '100vh', background: 'linear-gradient(135deg, #1a0a2e 0%, #2d0a4e 30%, #880e4f 70%, #c2185b 100%)', fontFamily: 'sans-serif', position: 'relative' },
  starsBackground: { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'radial-gradient(2px 2px at 20px 30px, rgba(255,255,255,0.3), transparent), radial-gradient(1px 1px at 90px 40px, rgba(255,255,255,0.3), transparent), radial-gradient(2px 2px at 200px 50px, rgba(255,255,255,0.2), transparent), radial-gradient(1px 1px at 350px 110px, rgba(255,255,255,0.3), transparent)', backgroundSize: '1300px 300px', zIndex: 0, pointerEvents: 'none' },
  navbar: { position: 'fixed', top: 0, left: 0, right: 0, padding: '12px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', zIndex: 1000, backgroundColor: 'rgba(26,10,46,0.92)', backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(255,255,255,0.1)' },
  logo: { height: '36px' },
  navLinks: { display: 'flex', alignItems: 'center', gap: '24px' },
  navLink: { color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '13px', fontWeight: '500' },
  navLinkAmilifu: { color: 'white', textDecoration: 'none', fontSize: '13px', fontWeight: 'bold', borderBottom: '2px solid #c2185b', paddingBottom: '2px' },
  navRight: { display: 'flex', alignItems: 'center', gap: '10px' },
  langSelect: { backgroundColor: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)', color: 'white', padding: '6px 10px', borderRadius: '20px', cursor: 'pointer', fontSize: '13px', outline: 'none' },
  homeKitufe: { backgroundColor: 'rgba(255,255,255,0.15)', color: 'white', padding: '7px 14px', borderRadius: '20px', textDecoration: 'none', fontSize: '13px', fontWeight: '600', border: '1px solid rgba(255,255,255,0.2)' },
  hero: { position: 'relative', zIndex: 1, textAlign: 'center', padding: '120px 24px 48px' },
  heroH: { fontSize: '42px', fontWeight: 'bold', color: 'white', marginBottom: '16px' },
  heroP: { fontSize: '16px', color: 'rgba(255,255,255,0.75)', maxWidth: '600px', margin: '0 auto', lineHeight: '1.7' },
  section: { position: 'relative', zIndex: 1, padding: '60px 0', backgroundColor: 'rgba(255,255,255,0.03)', borderTop: '1px solid rgba(255,255,255,0.08)' },
  sectionDark: { position: 'relative', zIndex: 1, padding: '60px 0', backgroundColor: 'rgba(0,0,0,0.15)', borderTop: '1px solid rgba(255,255,255,0.08)' },
  sectionInner: { maxWidth: '1100px', margin: '0 auto', padding: '0 40px' },
  sectionKichwa: { color: 'white', fontSize: '28px', fontWeight: 'bold', textAlign: 'center', marginBottom: '32px' },
  grid2: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' },
  kadi: { backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: '16px', padding: '28px', border: '1px solid rgba(255,255,255,0.12)', textAlign: 'center' },
  kadiIcon: { fontSize: '36px', marginBottom: '12px' },
  kadiKichwa: { color: 'white', fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' },
  kadiManeno: { color: 'rgba(255,255,255,0.7)', fontSize: '14px', lineHeight: '1.7' },
  statsGrid: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' },
  statKadi: { backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: '16px', padding: '24px', border: '1px solid rgba(255,255,255,0.12)', textAlign: 'center' },
  statIcon: { fontSize: '28px', display: 'block', marginBottom: '8px' },
  statN: { color: 'white', fontSize: '24px', fontWeight: 'bold', margin: '0 0 4px' },
  statM: { color: 'rgba(255,255,255,0.6)', fontSize: '13px', margin: '0' },
  valuesRow: { display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center', marginTop: '8px' },
  valueBadge: { backgroundColor: 'rgba(194,24,91,0.25)', border: '1px solid rgba(194,24,91,0.4)', borderRadius: '20px', padding: '8px 18px', color: 'white', fontSize: '13px', fontWeight: '600' },
  footer: { position: 'relative', zIndex: 1, borderTop: '1px solid rgba(255,255,255,0.1)', padding: '24px', textAlign: 'center', backgroundColor: 'rgba(0,0,0,0.3)' },
  copyright: { color: 'rgba(255,255,255,0.4)', fontSize: '12px', margin: '0' },
};

export default About;