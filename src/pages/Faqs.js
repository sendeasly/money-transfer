import React, { useState } from 'react';

const maswali = [
  {
    swali: 'How long does a transfer take?',
    jibu: 'Most transfers are completed within minutes. Bank transfers may take 1-2 business days depending on the destination country.',
  },
  {
    swali: 'What are the fees?',
    jibu: 'We charge a flat 2% fee on all transfers. There are no hidden fees or extra charges. The rate you see is the rate you get.',
  },
  {
    swali: 'Which countries can I send money to?',
    jibu: 'You can send money to over 150 countries worldwide including Tanzania, Kenya, Uganda, Ghana, Nigeria, South Africa, and many more.',
  },
  {
    swali: 'Is SendEasly safe to use?',
    jibu: 'Yes! We use bank-level 256-bit SSL encryption and comply with all financial regulations. Your money and personal data are always protected.',
  },
  {
    swali: 'What payment methods are accepted?',
    jibu: 'We accept bank transfers, Visa/Mastercard, M-Pesa, Tigo Pesa, Airtel Money, MTN Mobile Money, and many other local payment methods.',
  },
  {
    swali: 'How do I track my transfer?',
    jibu: 'You can track your transfer in real-time through the app. Go to the Activity tab to see the status of all your transfers.',
  },
  {
    swali: 'What is the minimum and maximum transfer amount?',
    jibu: 'The minimum transfer amount is $1 USD equivalent. The maximum depends on your account verification level and destination country.',
  },
  {
    swali: 'How do I verify my account?',
    jibu: 'To verify your account, go to Profile > Personal Details and upload a valid government ID. Verification usually takes 24-48 hours.',
  },
  {
    swali: 'Can I cancel a transfer?',
    jibu: 'Transfers can be cancelled within 30 minutes of sending, as long as the recipient has not yet received the funds. Contact support immediately.',
  },
  {
    swali: 'How do I contact support?',
    jibu: 'You can reach us through the Contact Us page, via email at support@sendeasly.com, or through the in-app chat support available 24/7.',
  },
];

function Faqs() {
  const [waziFaqs, setWaziFaqs] = useState([]);

  function toggleFaq(index) {
    if (waziFaqs.includes(index)) {
      setWaziFaqs(waziFaqs.filter(function(i) { return i !== index; }));
    } else {
      setWaziFaqs([...waziFaqs, index]);
    }
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
          React.createElement('a', { href: '/faqs', style: styles.navLinkAmilifu }, 'FAQs'),
          React.createElement('a', { href: '/security', style: styles.navLink }, 'Security'),
          React.createElement('a', { href: '/contact', style: styles.navLink }, 'Contact us')
        )
      ),

      React.createElement('div', { style: styles.hero },
        React.createElement('h1', { style: styles.kichwa }, 'Frequently Asked Questions'),
        React.createElement('p', { style: styles.maelezo },
          'Find answers to the most common questions about SendEasly'
        )
      ),

      React.createElement('div', { style: styles.content },
        maswali.map(function(item, index) {
          var wazi = waziFaqs.includes(index);
          return React.createElement('div', { key: index, style: styles.faqItem },
            React.createElement('button', {
              style: Object.assign({}, styles.faqKichwa, wazi && styles.faqKichwaWazi),
              onClick: function() { toggleFaq(index); }
            },
              React.createElement('span', null, item.swali),
              React.createElement('span', { style: styles.faqIcon }, wazi ? '−' : '+')
            ),
            wazi && React.createElement('div', { style: styles.faqJibu },
              React.createElement('p', { style: styles.faqManeno }, item.jibu)
            )
          );
        }),

        React.createElement('div', { style: styles.helpSection },
          React.createElement('h3', { style: styles.helpKichwa }, 'Still have questions?'),
          React.createElement('p', { style: styles.helpManeno }, 'Our support team is available 24/7 to help you'),
          React.createElement('a', { href: '/contact', style: styles.helpKitufe }, 'Contact Support')
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
    fontSize: '48px',
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
    maxWidth: '800px',
    margin: '0 auto',
    padding: '0 40px 80px',
  },
  faqItem: {
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderRadius: '12px',
    marginBottom: '12px',
    border: '1px solid rgba(255,255,255,0.15)',
    overflow: 'hidden',
  },
  faqKichwa: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 24px',
    backgroundColor: 'transparent',
    border: 'none',
    color: 'white',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    textAlign: 'left',
    gap: '16px',
  },
  faqKichwaWazi: {
    backgroundColor: 'rgba(194,24,91,0.2)',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
  },
  faqIcon: {
    fontSize: '24px',
    color: '#c2185b',
    fontWeight: 'bold',
    flexShrink: 0,
  },
  faqJibu: { padding: '0 24px 20px' },
  faqManeno: {
    color: 'rgba(255,255,255,0.75)',
    fontSize: '15px',
    lineHeight: '1.7',
    margin: '16px 0 0',
  },
  helpSection: {
    backgroundColor: 'rgba(194,24,91,0.2)',
    borderRadius: '16px',
    padding: '40px',
    textAlign: 'center',
    marginTop: '40px',
    border: '1px solid rgba(194,24,91,0.3)',
  },
  helpKichwa: { color: 'white', fontSize: '24px', fontWeight: 'bold', marginBottom: '12px' },
  helpManeno: { color: 'rgba(255,255,255,0.7)', fontSize: '16px', marginBottom: '24px' },
  helpKitufe: {
    backgroundColor: 'white',
    color: '#880e4f',
    padding: '14px 32px',
    borderRadius: '30px',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: 'bold',
    display: 'inline-block',
  },
};

export default Faqs;