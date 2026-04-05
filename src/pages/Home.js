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
  const [kutoka, setKutoka] = useState('USD');
  const [kwenda, setKwenda] = useState('TZS');

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
        <div style={styles.navLinks}>
          <a href="/join" style={styles.navLink}>Join our team</a>
          <a href="/faqs" style={styles.navLink}>FAQs</a>
          <a href="/security" style={styles.navLink}>Security</a>
          <a href="/contact" style={styles.navLink}>Contact us</a>
          <a href="/about" style={styles.navLink}>About us</a>
          <a href="/language" style={styles.navLink}>Language</a>
        </div>
      </div>

      {/* Hero Section */}
      <div style={styles.hero}>

        {/* Upande wa Kushoto */}
        <div style={styles.kushoto}>
          <h1 style={styles.kichwa}>Send more,<br />spend less.</h1>
          <p style={styles.maelezo}>
            Send money from the UK, EU, US, UAE, Canada and
            Australia to Africa, Asia, the Caribbean and Latin
            America at a great rate. Fast transfers to mobile
            money wallets anytime.
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
          <div style={styles.trustpilot}>
            ⭐⭐⭐⭐⭐ <strong>Excellent</strong> 4.8 out of 5 — Trustpilot
          </div>
        </div>

        {/* Upande wa Kulia — Calculator */}
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
          <p style={styles.adaManeno}>✅ No hidden fees</p>

          <a href="/register" style={styles.sendKitufe}>
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
    backgroundColor: '#f48fb1',
    padding: '16px 40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 1000,
  },
  navLogo: {
    height: '50px',
  },
  navLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: '24px',
  },
  navLink: {
    color: '#c2185b',
    textDecoration: 'none',
    fontSize: '15px',
    fontWeight: '500',
  },
  navKitufe: {
    backgroundColor: '#c2185b',
    color: 'white',
    padding: '8px 20px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontSize: '15px',
    fontWeight: '500',
  },
  hero: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '140px 60px 60px',
    gap: '40px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  kushoto: {
    flex: 1,
    maxWidth: '500px',
  },
  kichwa: {
    fontSize: '52px',
    fontWeight: 'bold',
    color: '#c2185b',
    marginBottom: '20px',
    lineHeight: '1.2',
  },
  maelezo: {
    fontSize: '16px',
    color: '#e91e8c',
    lineHeight: '1.7',
    marginBottom: '30px',
  },
  storeVitufe: {
    display: 'flex',
    gap: '16px',
    marginBottom: '24px',
  },
  storeKitufe: {
    display: 'inline-block',
  },
  storeImg: {
    height: '44px',
  },
  trustpilot: {
    color: '#c2185b',
    fontSize: '14px',
  },
  calculator: {
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: '32px',
    width: '400px',
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
    marginBottom: '4px',
  },
  adaManeno: {
    color: '#c2185b',
    fontSize: '14px',
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
    gap: '60px',
    padding: '40px',
    borderTop: '1px solid rgba(0,0,0,0.1)',
    maxWidth: '1200px',
    margin: '0 auto',
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
    color: '#e91e8c',
    fontSize: '14px',
    margin: '4px 0 0',
  },
};

export default Home;