import React from 'react';

function About() {
  return (
    React.createElement('div', { style: styles.ukurasa },

      React.createElement('div', { style: styles.starsBackground }),

      React.createElement('div', { style: styles.navbar },
        React.createElement('a', { href: '/', style: styles.navLogo },
          React.createElement('img', { src: '/logo.png', alt: 'SendEasly', style: styles.logo })
        ),
        React.createElement('div', { style: styles.navLinks },
          React.createElement('a', { href: '/about', style: styles.navLinkAmilifu }, 'About Us'),
          React.createElement('a', { href: '/faqs', style: styles.navLink }, 'FAQs'),
          React.createElement('a', { href: '/security', style: styles.navLink }, 'Security'),
          React.createElement('a', { href: '/contact', style: styles.navLink }, 'Contact us')
        )
      ),

      React.createElement('div', { style: styles.hero },
        React.createElement('h1', { style: styles.kichwa }, 'About SendEasly'),
        React.createElement('p', { style: styles.maelezo },
          'We are on a mission to make international money transfers fast, affordable, and accessible for everyone.'
        )
      ),

      React.createElement('div', { style: styles.content },

        React.createElement('div', { style: styles.grid },

          React.createElement('div', { style: styles.kadi },
            React.createElement('div', { style: styles.kadiIcon }, '🌍'),
            React.createElement('h3', { style: styles.kadiKichwa }, 'Our Mission'),
            React.createElement('p', { style: styles.kadiManeno },
              'To provide fast, secure, and affordable money transfers to everyone across the globe, connecting families and businesses.'
            )
          ),

          React.createElement('div', { style: styles.kadi },
            React.createElement('div', { style: styles.kadiIcon }, '🔒'),
            React.createElement('h3', { style: styles.kadiKichwa }, 'Security First'),
            React.createElement('p', { style: styles.kadiManeno },
              'We use bank-level encryption and security protocols to ensure your money and data are always safe.'
            )
          ),

          React.createElement('div', { style: styles.kadi },
            React.createElement('div', { style: styles.kadiIcon }, '⚡'),
            React.createElement('h3', { style: styles.kadiKichwa }, 'Fast Transfers'),
            React.createElement('p', { style: styles.kadiManeno },
              'Send money in minutes to mobile wallets and bank accounts across Africa, Asia, and beyond.'
            )
          ),

          React.createElement('div', { style: styles.kadi },
            React.createElement('div', { style: styles.kadiIcon }, '💰'),
            React.createElement('h3', { style: styles.kadiKichwa }, 'Low Fees'),
            React.createElement('p', { style: styles.kadiManeno },
              'We charge only 2% on all transfers — no hidden fees, no surprises. What you see is what you pay.'
            )
          )
        ),

        React.createElement('div', { style: styles.statsSection },
          React.createElement('h2', { style: styles.statsSectionKichwa }, 'Our Impact'),
          React.createElement('div', { style: styles.statsGrid },
            React.createElement('div', { style: styles.statItem },
              React.createElement('h2', { style: styles.statNambari }, '1M+'),
              React.createElement('p', { style: styles.statManeno }, 'Happy Customers')
            ),
            React.createElement('div', { style: styles.statItem },
              React.createElement('h2', { style: styles.statNambari }, '150+'),
              React.createElement('p', { style: styles.statManeno }, 'Countries')
            ),
            React.createElement('div', { style: styles.statItem },
              React.createElement('h2', { style: styles.statNambari }, '$2B+'),
              React.createElement('p', { style: styles.statManeno }, 'Transferred')
            ),
            React.createElement('div', { style: styles.statItem },
              React.createElement('h2', { style: styles.statNambari }, '4.8'),
              React.createElement('p', { style: styles.statManeno }, 'App Rating')
            )
          )
        ),

        React.createElement('div', { style: styles.teamSection },
          React.createElement('h2', { style: styles.teamKichwa }, 'Our Values'),
          React.createElement('div', { style: styles.valuesGrid },
            ['Transparency', 'Innovation', 'Security', 'Accessibility', 'Speed', 'Trust'].map(function(value) {
              return React.createElement('div', { key: value, style: styles.valueBadge },
                React.createElement('span', { style: styles.valueMneno }, value)
              );
            })
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
    backgroundImage: 'radial-gradient(2px 2px at 20px 30px, rgba(255,255,255,0.3), transparent), radial-gradient(1px 1px at 90px 40px, rgba(255,255,255,0.3), transparent), radial-gradient(2px 2px at 200px 50px, rgba(255,255,255,0.2), transparent), radial-gradient(1px 1px at 350px 110px, rgba(255,255,255,0.3), transparent), radial-gradient(2px 2px at 500px 80px, rgba(255,255,255,0.2), transparent), radial-gradient(1px 1px at 700px 30px, rgba(255,255,255,0.3), transparent), radial-gradient(2px 2px at 900px 60px, rgba(255,255,255,0.2), transparent), radial-gradient(1px 1px at 1100px 40px, rgba(255,255,255,0.3), transparent)',
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
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '24px',
    marginBottom: '60px',
  },
  kadi: {
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderRadius: '16px',
    padding: '32px',
    border: '1px solid rgba(255,255,255,0.15)',
  },
  kadiIcon: { fontSize: '40px', marginBottom: '16px' },
  kadiKichwa: { color: 'white', fontSize: '20px', fontWeight: 'bold', marginBottom: '12px' },
  kadiManeno: { color: 'rgba(255,255,255,0.7)', fontSize: '15px', lineHeight: '1.7' },
  statsSection: {
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderRadius: '20px',
    padding: '40px',
    marginBottom: '40px',
    border: '1px solid rgba(255,255,255,0.15)',
    textAlign: 'center',
  },
  statsSectionKichwa: { color: 'white', fontSize: '28px', fontWeight: 'bold', marginBottom: '32px' },
  statsGrid: { display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '24px' },
  statItem: { textAlign: 'center' },
  statNambari: { color: 'white', fontSize: '36px', fontWeight: 'bold', margin: '0' },
  statManeno: { color: 'rgba(255,255,255,0.6)', fontSize: '14px', margin: '4px 0 0' },
  teamSection: {
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderRadius: '20px',
    padding: '40px',
    border: '1px solid rgba(255,255,255,0.15)',
    textAlign: 'center',
  },
  teamKichwa: { color: 'white', fontSize: '28px', fontWeight: 'bold', marginBottom: '24px' },
  valuesGrid: { display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' },
  valueBadge: {
    backgroundColor: 'rgba(194,24,91,0.3)',
    border: '1px solid rgba(194,24,91,0.5)',
    borderRadius: '30px',
    padding: '10px 24px',
  },
  valueMneno: { color: 'white', fontSize: '15px', fontWeight: '600' },
};

export default About;