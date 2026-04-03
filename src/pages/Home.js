import React from 'react';

function Home() {
  return (
    <div style={styles.ukurasa}>

      {/* Navbar */}
      <div style={styles.navbar}>
        <img src="/logo.png" alt="SendEasly" style={styles.navLogo} />
        <div style={styles.navLinks}>
          <a href="/join" style={styles.navLink}>Join our team</a>
          <a href="/faqs" style={styles.navLink}>FAQs</a>
          <a href="/security" style={styles.navLink}>Security</a>
          <a href="/contact" style={styles.navLink}>Contact us</a>
          <a href="/about" style={styles.navLink}>About us</a>
          <a href="/language" style={styles.navLink}>Language</a>
          <a href="/login" style={styles.navKitufe}>Login</a>
        </div>
      </div>

      {/* Content */}
      <div style={styles.container}>
        <div style={styles.kadi}>
          <h1 style={styles.kichwa}>💸 SendEasly</h1>
          <p style={styles.maelezo}>
            Send money fast, safe, and affordable worldwide
          </p>
          <div style={styles.vitufe}>
            <a href="/login" style={styles.kitufeLogin}>Login</a>
            <a href="/register" style={styles.kitufeSajili}>Get Started</a>
          </div>
          <div style={styles.takwimu}>
            <div style={styles.takwimuMoja}>
              <h2 style={styles.nambari}>150+</h2>
              <p style={styles.maelezoTakwimu}>Countries</p>
            </div>
            <div style={styles.takwimuMoja}>
              <h2 style={styles.nambari}>2%</h2>
              <p style={styles.maelezoTakwimu}>Fee only</p>
            </div>
            <div style={styles.takwimuMoja}>
              <h2 style={styles.nambari}>24/7</h2>
              <p style={styles.maelezoTakwimu}>Support</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

const styles = {
  ukurasa: {
    minHeight: '100vh',
    backgroundColor: '#f0f4ff',
  },
  navbar: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    padding: '12px 32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
    zIndex: 1000,
  },
  navLogo: {
    height: '100px',
  },
  navLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  },
  navLink: {
    color: '#4f46e5',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '500',
  },
  navKitufe: {
    backgroundColor: '#4f46e5',
    color: 'white',
    padding: '8px 20px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '500',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '120px 20px 40px',
  },
  kadi: {
    backgroundColor: 'white',
    borderRadius: '20px',
    padding: '50px 40px',
    maxWidth: '500px',
    width: '100%',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
  kichwa: {
    color: '#1a1a2e',
    fontSize: '36px',
    marginBottom: '16px',
  },
  maelezo: {
    color: '#666',
    fontSize: '16px',
    marginBottom: '32px',
    lineHeight: '1.6',
  },
  vitufe: {
    display: 'flex',
    gap: '16px',
    justifyContent: 'center',
    marginBottom: '40px',
  },
  kitufeLogin: {
    backgroundColor: '#4f46e5',
    color: 'white',
    padding: '12px 32px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: 'bold',
  },
  kitufeSajili: {
    backgroundColor: 'white',
    color: '#4f46e5',
    padding: '12px 32px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: 'bold',
    border: '2px solid #4f46e5',
  },
  takwimu: {
    display: 'flex',
    justifyContent: 'space-around',
    borderTop: '1px solid #eee',
    paddingTop: '30px',
  },
  takwimuMoja: {
    textAlign: 'center',
  },
  nambari: {
    color: '#4f46e5',
    fontSize: '28px',
    margin: '0',
  },
  maelezoTakwimu: {
    color: '#888',
    fontSize: '14px',
    margin: '4px 0 0',
  },
  logo: {
    width: '80px',
    marginBottom: '12px',
  },
};

export default Home;