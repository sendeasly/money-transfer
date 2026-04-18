import React, { useState } from 'react';

function Contact() {
  const [jina, setJina] = useState('');
  const [email, setEmail] = useState('');
  const [mada, setMada] = useState('');
  const [ujumbe, setUjumbe] = useState('');
  const [imepelekwa, setImepelekwa] = useState(false);

  function tuma(e) {
    e.preventDefault();
    if (!jina || !email || !ujumbe) return;
    setImepelekwa(true);
    setTimeout(function() { setImepelekwa(false); setJina(''); setEmail(''); setMada(''); setUjumbe(''); }, 3000);
  }

  return (
    React.createElement('div', { style: styles.ukurasa },

      React.createElement('div', { style: styles.starsBackground }),

      React.createElement('div', { style: styles.navbar },
        React.createElement('a', { href: '/', style: styles.navLogo },
          React.createElement('img', { src: '/logo.png', alt: 'SendEasly', style: styles.logo })
        ),
        React.createElement('div', { style: styles.navLinks },
          React.createElement('a', { href: '/about', style: styles.navLink }, 'About Us'),
          React.createElement('a', { href: '/faqs', style: styles.navLink }, 'FAQs'),
          React.createElement('a', { href: '/security', style: styles.navLink }, 'Security'),
          React.createElement('a', { href: '/contact', style: styles.navLinkAmilifu }, 'Contact us')
        )
      ),

      React.createElement('div', { style: styles.hero },
        React.createElement('h1', { style: styles.kichwa }, 'Contact Us'),
        React.createElement('p', { style: styles.maelezo },
          'We are here to help. Send us a message and we will get back to you within 24 hours.'
        )
      ),

      React.createElement('div', { style: styles.content },

        React.createElement('div', { style: styles.grid },

          React.createElement('div', { style: styles.contactInfo },

            React.createElement('h2', { style: styles.infoKichwa }, 'Get in Touch'),

            React.createElement('div', { style: styles.infoItem },
              React.createElement('span', { style: styles.infoIcon }, '📧'),
              React.createElement('div', null,
                React.createElement('p', { style: styles.infoLebo }, 'Email'),
                React.createElement('p', { style: styles.infoThamani }, 'support@sendeasly.com')
              )
            ),

            React.createElement('div', { style: styles.infoItem },
              React.createElement('span', { style: styles.infoIcon }, '💬'),
              React.createElement('div', null,
                React.createElement('p', { style: styles.infoLebo }, 'Live Chat'),
                React.createElement('p', { style: styles.infoThamani }, 'Available 24/7 in the app')
              )
            ),

            React.createElement('div', { style: styles.infoItem },
              React.createElement('span', { style: styles.infoIcon }, '📞'),
              React.createElement('div', null,
                React.createElement('p', { style: styles.infoLebo }, 'Phone'),
                React.createElement('p', { style: styles.infoThamani }, '+1 (555) 123-4567')
              )
            ),

            React.createElement('div', { style: styles.infoItem },
              React.createElement('span', { style: styles.infoIcon }, '🕐'),
              React.createElement('div', null,
                React.createElement('p', { style: styles.infoLebo }, 'Support Hours'),
                React.createElement('p', { style: styles.infoThamani }, '24/7 — Always available')
              )
            ),

            React.createElement('div', { style: styles.socialLinks },
              React.createElement('h3', { style: styles.socialKichwa }, 'Follow Us'),
              React.createElement('div', { style: styles.socialVitufe },
                ['Twitter', 'Facebook', 'Instagram', 'LinkedIn'].map(function(s) {
                  return React.createElement('a', { key: s, href: '#', style: styles.socialKitufe }, s);
                })
              )
            )
          ),

          React.createElement('div', { style: styles.fomu },

            imepelekwa
              ? React.createElement('div', { style: styles.successMessage },
                  React.createElement('div', { style: styles.successIcon }, '✅'),
                  React.createElement('h3', { style: styles.successKichwa }, 'Message Sent!'),
                  React.createElement('p', { style: styles.successManeno }, 'We will get back to you within 24 hours.')
                )
              : React.createElement('div', null,
                  React.createElement('h2', { style: styles.fomuKichwa }, 'Send a Message'),

                  React.createElement('div', { style: styles.ingizoGroup },
                    React.createElement('label', { style: styles.lebo }, 'Full Name'),
                    React.createElement('input', {
                      style: styles.ingizo,
                      type: 'text',
                      placeholder: 'Your full name',
                      value: jina,
                      onChange: function(e) { setJina(e.target.value); }
                    })
                  ),

                  React.createElement('div', { style: styles.ingizoGroup },
                    React.createElement('label', { style: styles.lebo }, 'Email Address'),
                    React.createElement('input', {
                      style: styles.ingizo,
                      type: 'email',
                      placeholder: 'your@email.com',
                      value: email,
                      onChange: function(e) { setEmail(e.target.value); }
                    })
                  ),

                  React.createElement('div', { style: styles.ingizoGroup },
                    React.createElement('label', { style: styles.lebo }, 'Subject'),
                    React.createElement('select', {
                      style: styles.ingizo,
                      value: mada,
                      onChange: function(e) { setMada(e.target.value); }
                    },
                      React.createElement('option', { value: '' }, 'Select a subject'),
                      React.createElement('option', { value: 'transfer' }, 'Transfer Issue'),
                      React.createElement('option', { value: 'account' }, 'Account Problem'),
                      React.createElement('option', { value: 'fees' }, 'Fees & Rates'),
                      React.createElement('option', { value: 'security' }, 'Security Concern'),
                      React.createElement('option', { value: 'other' }, 'Other')
                    )
                  ),

                  React.createElement('div', { style: styles.ingizoGroup },
                    React.createElement('label', { style: styles.lebo }, 'Message'),
                    React.createElement('textarea', {
                      style: Object.assign({}, styles.ingizo, styles.textarea),
                      placeholder: 'Describe your issue or question...',
                      value: ujumbe,
                      onChange: function(e) { setUjumbe(e.target.value); }
                    })
                  ),

                  React.createElement('button', {
                    style: styles.tumaKitufe,
                    onClick: tuma
                  }, 'Send Message')
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
    backgroundImage: 'radial-gradient(2px 2px at 20px 30px, rgba(255,255,255,0.3), transparent), radial-gradient(1px 1px at 90px 40px, rgba(255,255,255,0.3), transparent), radial-gradient(2px 2px at 200px 50px, rgba(255,255,255,0.2), transparent), radial-gradient(1px 1px at 350px 110px, rgba(255,255,255,0.3), transparent), radial-gradient(2px 2px at 500px 80px, rgba(255,255,255,0.2), transparent)',
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
  navLogo: { textDecoration: 'none' },
  logo: { height: '45px' },
  navLinks: { display: 'flex', alignItems: 'center', gap: '28px' },
  navLink: {
    color: 'rgba(255,255,255,0.7)',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '500',
  },
  navLinkAmilifu: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: 'bold',
    borderBottom: '2px solid #c2185b',
    paddingBottom: '2px',
  },
  hero: {
    position: 'relative',
    zIndex: 1,
    textAlign: 'center',
    padding: '140px 40px 60px',
  },
  kichwa: {
    fontSize: '52px',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '20px',
  },
  maelezo: {
    fontSize: '18px',
    color: 'rgba(255,255,255,0.75)',
    maxWidth: '600px',
    margin: '0 auto',
  },
  content: {
    position: 'relative',
    zIndex: 1,
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '0 40px 80px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1.5fr',
    gap: '32px',
    alignItems: 'start',
  },
  contactInfo: {
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderRadius: '20px',
    padding: '32px',
    border: '1px solid rgba(255,255,255,0.15)',
  },
  infoKichwa: { color: 'white', fontSize: '22px', fontWeight: 'bold', marginBottom: '24px' },
  infoItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '16px',
    marginBottom: '24px',
  },
  infoIcon: { fontSize: '24px', flexShrink: 0 },
  infoLebo: { color: 'rgba(255,255,255,0.5)', fontSize: '12px', margin: '0 0 4px', textTransform: 'uppercase' },
  infoThamani: { color: 'white', fontSize: '15px', fontWeight: '600', margin: '0' },
  socialLinks: { marginTop: '32px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '24px' },
  socialKichwa: { color: 'white', fontSize: '16px', fontWeight: 'bold', marginBottom: '16px' },
  socialVitufe: { display: 'flex', gap: '8px', flexWrap: 'wrap' },
  socialKitufe: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    color: 'white',
    padding: '8px 16px',
    borderRadius: '20px',
    textDecoration: 'none',
    fontSize: '13px',
    fontWeight: '500',
    border: '1px solid rgba(255,255,255,0.2)',
  },
  fomu: {
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderRadius: '20px',
    padding: '32px',
    border: '1px solid rgba(255,255,255,0.15)',
  },
  fomuKichwa: { color: 'white', fontSize: '22px', fontWeight: 'bold', marginBottom: '24px' },
  ingizoGroup: { marginBottom: '20px' },
  lebo: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: '13px',
    fontWeight: '600',
    marginBottom: '8px',
    display: 'block',
  },
  ingizo: {
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.1)',
    border: '1px solid rgba(255,255,255,0.2)',
    borderRadius: '10px',
    padding: '14px 16px',
    color: 'white',
    fontSize: '15px',
    outline: 'none',
    boxSizing: 'border-box',
  },
  textarea: { height: '120px', resize: 'vertical' },
  tumaKitufe: {
    width: '100%',
    backgroundColor: 'white',
    color: '#880e4f',
    border: 'none',
    borderRadius: '30px',
    padding: '16px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '8px',
  },
  successMessage: {
    textAlign: 'center',
    padding: '60px 20px',
  },
  successIcon: { fontSize: '64px', marginBottom: '20px' },
  successKichwa: { color: 'white', fontSize: '24px', fontWeight: 'bold', marginBottom: '12px' },
  successManeno: { color: 'rgba(255,255,255,0.7)', fontSize: '16px' },
};

export default Contact;