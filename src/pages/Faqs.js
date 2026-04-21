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

const maswali = [
  { q: 'How long does a transfer take?', a: 'Most transfers are completed within minutes. Bank transfers may take 1-2 business days depending on the destination country and payment method.' },
  { q: 'What are the fees?', a: 'Zero fees! We charge absolutely nothing on all transfers. No hidden charges, no surprises. The rate you see is the rate you get.' },
  { q: 'Which countries can I send money to?', a: 'Over 150 countries including Tanzania, Kenya, Uganda, Ghana, Nigeria, South Africa, UAE, UK, USA, Canada and many more.' },
  { q: 'Is SendEasly safe to use?', a: 'Yes! We use bank-level 256-bit SSL encryption and comply with all financial regulations. Your money and personal data are always protected.' },
  { q: 'What payment methods are accepted?', a: 'M-Pesa, Tigo Pesa, Airtel Money, MTN Mobile Money, Vodacom, Halopesa, Bank Transfer, Visa/Mastercard and many more local payment methods.' },
  { q: 'How do I track my transfer?', a: 'Track in real-time through the app Activity tab. You receive instant notifications at every step of the transfer process.' },
  { q: 'What is the minimum transfer amount?', a: 'The minimum transfer amount is $1 USD equivalent. There is no maximum limit for verified accounts.' },
  { q: 'How do I verify my account?', a: 'Go to Profile > Personal Details and upload a valid government ID. Verification usually takes 24-48 hours.' },
  { q: 'Can I cancel a transfer?', a: 'Transfers can be cancelled within 30 minutes of sending, as long as the recipient has not yet received the funds. Contact support immediately.' },
  { q: 'How do I contact support?', a: 'Via email at support@sendeasly.com, through the in-app chat (available 24/7), or via the Contact Us page on our website.' },
];

function Faqs() {
  const [wazi, setWazi] = useState([]);

  function toggle(i) {
    setWazi(function(prev) {
      return prev.includes(i) ? prev.filter(function(x) { return x !== i; }) : [...prev, i];
    });
  }

  return React.createElement('div', { style: styles.ukurasa },

    React.createElement('div', { style: styles.starsBackground }),

    React.createElement('style', null, `
      * { box-sizing: border-box; }
      @media (max-width: 768px) {
        .faq-nav-links { display: none !important; }
        .faq-hero-h { font-size: 26px !important; }
        .faq-section-inner { padding: 0 16px !important; }
        .faq-section { padding: 40px 0 !important; }
      }
    `),

    React.createElement('div', { style: styles.navbar },
      React.createElement('a', { href: '/', style: { textDecoration: 'none' } },
        React.createElement('img', { src: '/logo.png', alt: 'SendEasly', style: styles.logo })
      ),
      React.createElement('div', { style: styles.navLinks, className: 'faq-nav-links' },
        React.createElement('a', { href: '/about', style: styles.navLink }, 'About Us'),
        React.createElement('a', { href: '/faqs', style: styles.navLinkAmilifu }, 'FAQs'),
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

    React.createElement('div', { style: styles.hero },
      React.createElement(AnimatedSection, null,
        React.createElement('h1', { style: styles.heroH, className: 'faq-hero-h' }, 'Frequently Asked Questions'),
        React.createElement('p', { style: styles.heroP }, 'Find answers to the most common questions about SendEasly')
      )
    ),

    React.createElement('div', { style: styles.section, className: 'faq-section' },
      React.createElement('div', { style: styles.sectionInner, className: 'faq-section-inner' },
        maswali.map(function(item, i) {
          var open = wazi.includes(i);
          return React.createElement(AnimatedSection, { key: i, delay: i * 0.05 },
            React.createElement('div', { style: styles.faqItem },
              React.createElement('button', {
                style: Object.assign({}, styles.faqBtn, open && styles.faqBtnOpen),
                onClick: function() { toggle(i); }
              },
                React.createElement('span', null, item.q),
                React.createElement('span', { style: styles.faqIcon }, open ? '−' : '+')
              ),
              open && React.createElement('div', { style: styles.faqAnswer },
                React.createElement('p', { style: styles.faqManeno }, item.a)
              )
            )
          );
        }),

        React.createElement(AnimatedSection, { delay: 0.3 },
          React.createElement('div', { style: styles.helpBox },
            React.createElement('h3', { style: styles.helpKichwa }, 'Still have questions?'),
            React.createElement('p', { style: styles.helpManeno }, 'Our support team is available 24/7 to help you'),
            React.createElement('a', { href: '/contact', style: styles.helpKitufe }, 'Contact Support')
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
  heroP: { fontSize: '16px', color: 'rgba(255,255,255,0.75)', maxWidth: '600px', margin: '0 auto' },
  section: { position: 'relative', zIndex: 1, padding: '48px 0 60px', backgroundColor: 'rgba(255,255,255,0.03)', borderTop: '1px solid rgba(255,255,255,0.08)' },
  sectionInner: { maxWidth: '800px', margin: '0 auto', padding: '0 40px' },
  faqItem: { backgroundColor: 'rgba(255,255,255,0.07)', borderRadius: '12px', marginBottom: '10px', border: '1px solid rgba(255,255,255,0.12)', overflow: 'hidden' },
  faqBtn: { width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 20px', backgroundColor: 'transparent', border: 'none', color: 'white', fontSize: '15px', fontWeight: '600', cursor: 'pointer', textAlign: 'left', gap: '16px' },
  faqBtnOpen: { backgroundColor: 'rgba(194,24,91,0.2)', borderBottom: '1px solid rgba(255,255,255,0.1)' },
  faqIcon: { fontSize: '22px', color: '#c2185b', fontWeight: 'bold', flexShrink: 0 },
  faqAnswer: { padding: '0 20px 16px' },
  faqManeno: { color: 'rgba(255,255,255,0.75)', fontSize: '14px', lineHeight: '1.7', margin: '12px 0 0' },
  helpBox: { backgroundColor: 'rgba(194,24,91,0.15)', borderRadius: '16px', padding: '32px', textAlign: 'center', marginTop: '32px', border: '1px solid rgba(194,24,91,0.3)' },
  helpKichwa: { color: 'white', fontSize: '22px', fontWeight: 'bold', marginBottom: '10px' },
  helpManeno: { color: 'rgba(255,255,255,0.7)', fontSize: '15px', marginBottom: '20px' },
  helpKitufe: { backgroundColor: 'white', color: '#880e4f', padding: '12px 28px', borderRadius: '30px', textDecoration: 'none', fontSize: '15px', fontWeight: 'bold', display: 'inline-block' },
  footer: { position: 'relative', zIndex: 1, borderTop: '1px solid rgba(255,255,255,0.1)', padding: '24px', textAlign: 'center', backgroundColor: 'rgba(0,0,0,0.3)' },
  copyright: { color: 'rgba(255,255,255,0.4)', fontSize: '12px', margin: '0' },
};

export default Faqs;