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

function Contact() {
  const [jina, setJina] = useState('');
  const [email, setEmail] = useState('');
  const [mada, setMada] = useState('');
  const [ujumbe, setUjumbe] = useState('');
  const [imepelekwa, setImepelekwa] = useState(false);

  function tuma() {
    if (!jina || !email || !ujumbe) return;
    setImepelekwa(true);
    setTimeout(function() {
      setImepelekwa(false);
      setJina(''); setEmail(''); setMada(''); setUjumbe('');
    }, 3000);
  }

  return React.createElement('div', { style: styles.ukurasa },

    React.createElement('div', { style: styles.starsBackground }),

    React.createElement('style', null, `
      * { box-sizing: border-box; }
      input, select, textarea { color: white !important; }
      input::placeholder, textarea::placeholder { color: rgba(255,255,255,0.4) !important; }
      @media (max-width: 768px) {
        .con-nav-links { display: none !important; }
        .con-grid { grid-template-columns: 1fr !important; }
        .con-hero-h { font-size: 26px !important; }
        .con-section-inner { padding: 0 16px !important; }
        .con-section { padding: 40px 0 !important; }
      }
    `),

    React.createElement('div', { style: styles.navbar },
      React.createElement('a', { href: '/', style: { textDecoration: 'none' } },
        React.createElement('img', { src: '/logo.png', alt: 'SendEasly', style: styles.logo })
      ),
      React.createElement('div', { style: styles.navLinks, className: 'con-nav-links' },
        React.createElement('a', { href: '/about', style: styles.navLink }, 'About Us'),
        React.createElement('a', { href: '/faqs', style: styles.navLink }, 'FAQs'),
        React.createElement('a', { href: '/security', style: styles.navLink }, 'Security'),
        React.createElement('a', { href: '/contact', style: styles.navLinkAmilifu }, 'Contact us')
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
        React.createElement('h1', { style: styles.heroH, className: 'con-hero-h' }, 'Contact Us'),
        React.createElement('p', { style: styles.heroP }, 'We are here to help 24/7. Send us a message and we will respond within hours.')
      )
    ),

    // Contact info + Form
    React.createElement('div', { style: styles.section, className: 'con-section' },
      React.createElement('div', { style: styles.sectionInner, className: 'con-section-inner' },
        React.createElement('div', { style: styles.contactGrid, className: 'con-grid' },

          // Info
          React.createElement(AnimatedSection, { delay: 0.1 },
            React.createElement('div', { style: styles.infoBox },
              React.createElement('h2', { style: styles.infoKichwa }, 'Get in Touch'),
              [
                { icon: '📧', l: 'Email', v: 'support@sendeasly.com' },
                { icon: '💬', l: 'Live Chat', v: 'Available in app 24/7' },
                { icon: '📞', l: 'Phone', v: '+1 (555) 123-4567' },
                { icon: '🕐', l: 'Hours', v: '24/7 — Always available' },
              ].map(function(c) {
                return React.createElement('div', { key: c.l, style: styles.infoItem },
                  React.createElement('span', { style: styles.infoIcon }, c.icon),
                  React.createElement('div', null,
                    React.createElement('p', { style: styles.infoLebo }, c.l),
                    React.createElement('p', { style: styles.infoThamani }, c.v)
                  )
                );
              }),
              React.createElement('div', { style: styles.socialRow },
                ['Twitter', 'Facebook', 'Instagram', 'LinkedIn'].map(function(s) {
                  return React.createElement('a', { key: s, href: '#', style: styles.socialKitufe }, s);
                })
              )
            )
          ),

          // Form
          React.createElement(AnimatedSection, { delay: 0.2 },
            React.createElement('div', { style: styles.fomu },
              imepelekwa
                ? React.createElement('div', { style: styles.successBox },
                    React.createElement('div', { style: { fontSize: '56px', marginBottom: '16px' } }, '✅'),
                    React.createElement('h3', { style: styles.successKichwa }, 'Message Sent!'),
                    React.createElement('p', { style: styles.successManeno }, 'We will get back to you within 24 hours.')
                  )
                : React.createElement('div', null,
                    React.createElement('h2', { style: styles.fomuKichwa }, 'Send a Message'),
                    React.createElement('input', { style: styles.ingizo, type: 'text', placeholder: 'Your full name', value: jina, onChange: function(e) { setJina(e.target.value); } }),
                    React.createElement('input', { style: styles.ingizo, type: 'email', placeholder: 'your@email.com', value: email, onChange: function(e) { setEmail(e.target.value); } }),
                    React.createElement('select', { style: styles.ingizo, value: mada, onChange: function(e) { setMada(e.target.value); } },
                      React.createElement('option', { value: '' }, 'Select a subject'),
                      React.createElement('option', { value: 'transfer' }, 'Transfer Issue'),
                      React.createElement('option', { value: 'account' }, 'Account Problem'),
                      React.createElement('option', { value: 'fees' }, 'Fees & Rates'),
                      React.createElement('option', { value: 'security' }, 'Security Concern'),
                      React.createElement('option', { value: 'other' }, 'Other')
                    ),
                    React.createElement('textarea', { style: Object.assign({}, styles.ingizo, { height: '120px', resize: 'none' }), placeholder: 'Your message...', value: ujumbe, onChange: function(e) { setUjumbe(e.target.value); } }),
                    React.createElement('button', { style: styles.tumaKitufe, onClick: tuma }, 'Send Message')
                  )
            )
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
  heroH: { fontSize: '42px', fontWeight: 'bold', color: 'white', marginBottom: '16px' },
  heroP: { fontSize: '16px', color: 'rgba(255,255,255,0.75)', maxWidth: '600px', margin: '0 auto', lineHeight: '1.7' },
  section: { position: 'relative', zIndex: 1, padding: '60px 0', backgroundColor: 'rgba(255,255,255,0.03)', borderTop: '1px solid rgba(255,255,255,0.08)' },
  sectionInner: { maxWidth: '1100px', margin: '0 auto', padding: '0 40px' },
  contactGrid: { display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '32px', alignItems: 'start' },
  infoBox: { backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: '16px', padding: '28px', border: '1px solid rgba(255,255,255,0.12)' },
  infoKichwa: { color: 'white', fontSize: '20px', fontWeight: 'bold', marginBottom: '24px' },
  infoItem: { display: 'flex', alignItems: 'flex-start', gap: '14px', marginBottom: '20px' },
  infoIcon: { fontSize: '22px', flexShrink: 0 },
  infoLebo: { color: 'rgba(255,255,255,0.5)', fontSize: '11px', textTransform: 'uppercase', margin: '0 0 4px' },
  infoThamani: { color: 'white', fontSize: '14px', fontWeight: '600', margin: '0' },
  socialRow: { display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '20px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px' },
  socialKitufe: { backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', padding: '7px 14px', borderRadius: '20px', textDecoration: 'none', fontSize: '12px', fontWeight: '500', border: '1px solid rgba(255,255,255,0.15)' },
  fomu: { backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: '16px', padding: '28px', border: '1px solid rgba(255,255,255,0.12)' },
  fomuKichwa: { color: 'white', fontSize: '20px', fontWeight: 'bold', marginBottom: '20px' },
  ingizo: { display: 'block', width: '100%', backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '10px', padding: '13px 14px', color: 'white', fontSize: '14px', outline: 'none', marginBottom: '14px' },
  tumaKitufe: { width: '100%', backgroundColor: 'white', color: '#880e4f', border: 'none', borderRadius: '30px', padding: '15px', fontSize: '15px', fontWeight: 'bold', cursor: 'pointer' },
  successBox: { textAlign: 'center', padding: '48px 20px' },
  successKichwa: { color: 'white', fontSize: '24px', fontWeight: 'bold', marginBottom: '12px' },
  successManeno: { color: 'rgba(255,255,255,0.7)', fontSize: '16px' },
  footer: { position: 'relative', zIndex: 1, borderTop: '1px solid rgba(255,255,255,0.1)', padding: '24px', textAlign: 'center', backgroundColor: 'rgba(0,0,0,0.3)' },
  copyright: { color: 'rgba(255,255,255,0.4)', fontSize: '12px', margin: '0' },
};

export default Contact;