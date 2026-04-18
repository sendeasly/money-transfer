import React from 'react';

const vipengele = [
  {
    icon: '🔐',
    kichwa: '256-bit SSL Encryption',
    maelezo: 'All data transmitted between you and SendEasly is protected with bank-level 256-bit SSL encryption, the same standard used by major financial institutions worldwide.',
  },
  {
    icon: '🛡️',
    kichwa: 'Two-Factor Authentication',
    maelezo: 'Protect your account with an extra layer of security. Enable 2FA to require a verification code in addition to your password when logging in.',
  },
  {
    icon: '🔍',
    kichwa: 'KYC Verification',
    maelezo: 'We verify the identity of all users through our Know Your Customer (KYC) process to prevent fraud and ensure compliance with financial regulations.',
  },
  {
    icon: '🤖',
    kichwa: 'AI Fraud Detection',
    maelezo: 'Our advanced AI system monitors all transactions in real-time to detect and prevent fraudulent activity, keeping your money safe at all times.',
  },
  {
    icon: '📋',
    kichwa: 'Regulatory Compliance',
    maelezo: 'SendEasly is fully licensed and regulated by relevant financial authorities. We comply with all anti-money laundering (AML) and counter-terrorism financing (CTF) regulations.',
  },
  {
    icon: '🔒',
    kichwa: 'Secure Data Storage',
    maelezo: 'Your personal and financial data is stored in encrypted, geographically distributed servers with multiple backup systems to ensure availability and protection.',
  },
];

function Security() {
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
          React.createElement('a', { href: '/security', style: styles.navLinkAmilifu }, 'Security'),
          React.createElement('a', { href: '/contact', style: styles.navLink }, 'Contact us')
        )
      ),

      React.createElement('div', { style: styles.hero },
        React.createElement('div', { style: styles.shieldIcon }, '🛡️'),
        React.createElement('h1', { style: styles.kichwa }, 'Your Security is Our Priority'),
        React.createElement('p', { style: styles.maelezo },
          'We use the latest security technologies to keep your money and personal information safe at all times.'
        )
      ),

      React.createElement('div', { style: styles.content },

        React.createElement('div', { style: styles.grid },
          vipengele.map(function(item) {
            return React.createElement('div', { key: item.kichwa, style: styles.kadi },
              React.createElement('div', { style: styles.kadiIcon }, item.icon),
              React.createElement('h3', { style: styles.kadiKichwa }, item.kichwa),
              React.createElement('p', { style: styles.kadiManeno }, item.maelezo)
            );
          })
        ),

        React.createElement('div', { style: styles.certSection },
          React.createElement('h2', { style: styles.certKichwa }, 'Our Certifications'),
          React.createElement('div', { style: styles.certGrid },
            ['PCI DSS Compliant', 'ISO 27001 Certified', 'GDPR Compliant', 'AML Certified'].map(function(cert) {
              return React.createElement('div', { key: cert, style: styles.certBadge },
                React.createElement('span', { style: styles.certCheck }, '✓'),
                React.createElement('span', { style: styles.certManeno }, cert)
              );
            })
          )
        ),

        React.createElement('div', { style: styles.reportSection },
          React.createElement('h3', { style: styles.reportKichwa }, 'Report a Security Issue'),
          React.createElement('p', { style: styles.reportManeno },
            'If you discover a security vulnerability, please report it to our security team immediately.'
          ),
          React.createElement('a', {
            href: 'mailto:security@sendeasly.com',
            style: styles.reportKitufe
          }, 'security@sendeasly.com')
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
  shieldIcon: { fontSize: '64px', marginBottom: '20px', display: 'block' },
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
    lineHeight: '1.7',
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
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '24px',
    marginBottom: '48px',
  },
  kadi: {
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderRadius: '16px',
    padding: '28px',
    border: '1px solid rgba(255,255,255,0.15)',
  },
  kadiIcon: { fontSize: '36px', marginBottom: '16px' },
  kadiKichwa: { color: 'white', fontSize: '18px', fontWeight: 'bold', marginBottom: '12px' },
  kadiManeno: { color: 'rgba(255,255,255,0.7)', fontSize: '14px', lineHeight: '1.7' },
  certSection: {
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderRadius: '20px',
    padding: '40px',
    marginBottom: '24px',
    border: '1px solid rgba(255,255,255,0.15)',
    textAlign: 'center',
  },
  certKichwa: { color: 'white', fontSize: '24px', fontWeight: 'bold', marginBottom: '24px' },
  certGrid: { display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' },
  certBadge: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: 'rgba(194,24,91,0.2)',
    border: '1px solid rgba(194,24,91,0.4)',
    borderRadius: '30px',
    padding: '10px 20px',
  },
  certCheck: { color: '#90ee90', fontSize: '16px', fontWeight: 'bold' },
  certManeno: { color: 'white', fontSize: '14px', fontWeight: '600' },
  reportSection: {
    backgroundColor: 'rgba(194,24,91,0.15)',
    borderRadius: '16px',
    padding: '32px',
    textAlign: 'center',
    border: '1px solid rgba(194,24,91,0.3)',
  },
  reportKichwa: { color: 'white', fontSize: '22px', fontWeight: 'bold', marginBottom: '12px' },
  reportManeno: { color: 'rgba(255,255,255,0.7)', fontSize: '15px', marginBottom: '20px' },
  reportKitufe: {
    backgroundColor: 'white',
    color: '#880e4f',
    padding: '12px 28px',
    borderRadius: '30px',
    textDecoration: 'none',
    fontSize: '15px',
    fontWeight: 'bold',
    display: 'inline-block',
  },
};

export default Security;