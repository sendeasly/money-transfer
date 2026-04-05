import React, { useState } from 'react';

const viwango = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.79,
  TZS: 2578,
  KES: 129,
  UGX: 3780,
  ZAR: 18.5,
  CAD: 1.36,
  AED: 3.67,
};

function Home() {
  const [kiasi, setKiasi] = useState('1');
  const [kutoka, setKutoka] = useState('EUR');
  const [kwenda, setKwenda] = useState('TZS');
  const [menuWazi, setMenuWazi] = useState(false);

  function hesabu() {
    const nambari = parseFloat(kiasi) || 0;
    const katikaDola = nambari / viwango[kutoka];
    return (katikaDola * viwango[kwenda]).toFixed(2);
  }

  const kiwango = (viwango[kwenda] / viwango[kutoka]).toFixed(4);

  return (
    <div style={styles.ukurasa}>

      {/* Navbar */}
      <div style={styles.navbar}>
        <img src="/logo.png" alt="SendEasly" style={styles.navLogo} />
        
        {/* Hamburger Menu - Mobile */}
        <button 
          style={styles.hamburger}
          onClick={() => setMenuWazi(!menuWazi)}
        >
          ☰
        </button>

        {/* Desktop Links */}
        <div style={styles.navLinks}>
          <a href="/join" style={styles.navLink}>Join our team</a>
          <a href="/faqs" style={styles.navLink}>FAQs</a>
          <a href="/security" style={styles.navLink}>Security</a>
          <a href="/contact" style={styles.navLink}>Contact us</a>
          <a href="/about" style={styles.navLink}>About us</a>
          <a href="/language" style={styles.navLink}>Language</a>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuWazi && (
        <div style={styles.mobileMenu}>
          <a href="/about" style={styles.mobileMenuLink}>About us</a>
          <a href="/faqs" style={styles.mobileMenuLink}>FAQs</a>
          <a href="/security" style={styles.mobileMenuLink}>Security</a>
          <a href="/contact" style={styles.mobileMenuLink}>Contact us</a>
          <a href="/language" style={styles.mobileMenuLink}>Language</a>
        </div>
      )}

      {/* Hero Section */}
      <div style={styles.hero}>

        {/* Maandishi */}
        <div style={styles.maandishi}>
          <h1 style={styles.kichwa}>Send easly,<br />spend less.</h1>
          <p style={styles.maelezo}>
            Send money from the UK, EU, US, UAE, Canada and
            Australia to Africa at a great rate.
          </p>
          <div style={styles.storeVitufe}>
            <a href="/download" style={styles.storeKitufe}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                style={styles.storeImg}
              />
            </a>
            <a href="/download" style={styles.storeKitufe}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                alt="App Store"
                style={styles.storeImg}
              />
            </a>
          </div>
        </div>

        {/* Calculator */}
        <div style={styles.calculator}>
          <div style={styles.safu}>
            <div style={styles.nusu}>
              <label style={styles.lebo}>You send</label>
              <select
                style={styles.chaguo}
                value={kutoka}
                onChange={(e) => setKutoka(e.target.value)}
              >
                {Object.keys(viwango).map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
            <div style={styles.nusu}>
              <label style={styles.lebo}>They receive</label>
              <select
                style={styles.chaguo}
                value={kwenda}
                onChange={(e) => setKwenda(e.target.value)}
              >
                {Object.keys(viwango).map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>

          <label style={styles.lebo}>You send ({kutoka})</label>
          <input
            style={styles.ingizo}
            type="number"
            value={kiasi}
            onChange={(e) => setKiasi(e.target.value)}
            placeholder="Enter amount..."
          />

          <label style={styles.lebo}>They receive ({kwenda})</label>
          <input
            style={{...styles.ingizo, backgroundColor: '#f5f5f5'}}
            type="text"
            value={hesabu()}
            readOnly
          />

          <p style={styles.kiwango}>
            Today's rate: 1 {kutoka} = {kiwango} {kwenda}
          </p>

          <a href="https://expo.dev/accounts/brown94/projects/sendeasly-app/builds/16ce1eb2-3a0d-4ec5-a4f6-235305a6ac15" style={styles.sendKitufe} target="_blank" rel="noreferrer">
  Get Started →
</a>
        </div>

      </div>

      {/* Takwimu */}
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
        <div style={styles.takwimuMoja}>
          <h2 style={styles.nambari}>1M+</h2>
          <p style={styles.maelezoTakwimu}>Customers</p>
        </div>
      </div>

    </div>
  );
}

const isMobile = window.innerWidth <= 768;

const styles = {
  ukurasa: {
    minHeight: '100vh',
    backgroundColor: '#f48fb1',
    fontFamily: 'sans-serif',
  },
  navbar: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fea9c6',
    padding: '12px 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 1000,
  },
  navLogo: {
    height: '80px',
  },
  hamburger: {
    display: isMobile ? 'block' : 'none',
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: '28px',
    cursor: 'pointer',
    color: '#c2185b',
  },
  navLinks: {
    display: isMobile ? 'none' : 'flex',
    alignItems: 'center',
    gap: '20px',
  },
  navLink: {
    color: '#c2185b',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '500',
  },
  mobileMenu: {
    position: 'fixed',
    top: '64px',
    right: 0,
    width: '50%',
    height: '100vh',
    backgroundColor: '#1a1a1a',
    padding: '24px',
    zIndex: 999,
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    boxShadow: '-4px 0 20px rgba(0,0,0,0.3)',
    overflowY: 'auto',
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
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: isMobile ? '100px 20px 40px' : '140px 60px 60px',
    gap: '40px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  maandishi: {
    flex: 1,
    maxWidth: isMobile ? '100%' : '500px',
    textAlign: isMobile ? 'center' : 'left',
  },
  kichwa: {
    fontSize: isMobile ? '36px' : '52px',
    fontWeight: 'bold',
    color: '#c2185b',
    marginBottom: '20px',
    lineHeight: '1.2',
  },
  maelezo: {
    fontSize: '16px',
    color: '#880e4f',
    lineHeight: '1.7',
    marginBottom: '30px',
  },
  storeVitufe: {
    display: 'flex',
    gap: '16px',
    marginBottom: '24px',
    justifyContent: isMobile ? 'center' : 'flex-start',
    flexWrap: 'wrap',
  },
  storeKitufe: {
    display: 'inline-block',
  },
  storeImg: {
    height: '44px',
  },
  calculator: {
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: '24px',
    width: isMobile ? '100%' : '400px',
    boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
  },
  safu: {
    display: 'flex',
    gap: '12px',
    marginBottom: '16px',
  },
  nusu: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  lebo: {
    color: '#555',
    fontSize: '13px',
    fontWeight: '600',
    marginBottom: '6px',
  },
  chaguo: {
    padding: '10px',
    borderRadius: '8px',
    border: '1px solid #ddd',
    fontSize: '15px',
    marginBottom: '16px',
  },
  ingizo: {
    padding: '14px',
    borderRadius: '8px',
    border: '1px solid #ddd',
    fontSize: '22px',
    marginBottom: '16px',
    width: '100%',
    boxSizing: 'border-box',
  },
  kiwango: {
    color: '#c2185b',
    fontSize: '14px',
    fontWeight: '600',
    marginBottom: '20px',
  },
  sendKitufe: {
    backgroundColor: '#f48fb1',
    color: '#c2185b',
    padding: '14px',
    borderRadius: '30px',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: 'bold',
    display: 'block',
    textAlign: 'center',
  },
  takwimu: {
    display: 'flex',
    justifyContent: 'center',
    gap: isMobile ? '20px' : '60px',
    padding: '40px 20px',
    borderTop: '1px solid rgba(0,0,0,0.1)',
    maxWidth: '1200px',
    margin: '0 auto',
    flexWrap: 'wrap',
  },
  takwimuMoja: {
    textAlign: 'center',
  },
  nambari: {
    color: '#c2185b',
    fontSize: '32px',
    margin: '0',
    fontWeight: 'bold',
  },
  maelezoTakwimu: {
    color: '#880e4f',
    fontSize: '14px',
    margin: '4px 0 0',
  },
};

export default Home;