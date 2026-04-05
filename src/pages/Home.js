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
  const [kiasi, setKiasi] = useState('1000');
  const [kutoka, setKutoka] = useState('EUR');
  const [kwenda, setKwenda] = useState('TZS');
  const [menuWazi, setMenuWazi] = useState(false);

  function hesabu() {
    const nambari = parseFloat(kiasi) || 0;
    const katikaDola = nambari / viwango[kutoka];
    return (katikaDola * viwango[kwenda]).toLocaleString('en-US', {maximumFractionDigits: 0});
  }

  const kiwango = (viwango[kwenda] / viwango[kutoka]).toFixed(2);

  return (
    <div style={styles.ukurasa}>

      {/* Navbar */}
      <div style={styles.navbar}>
        <img src="/logo.png" alt="SendEasly" style={styles.navLogo} />
        <div style={styles.navKulia}>
          <button style={styles.lughaKitufe}>🌐 EN ▾</button>
          <button
            style={styles.hamburger}
            onClick={() => setMenuWazi(!menuWazi)}
          >
            ☰
          </button>
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

      {/* Hero */}
      <div style={styles.hero}>
        <h1 style={styles.kichwa}>Send Money Home 💗</h1>
        <p style={styles.maelezo}>
          Join 1,000,000+ customers sending money globally.
        </p>

        {/* Calculator */}
        <div style={styles.calculator}>

          {/* You send */}
          <p style={styles.lebo}>You send</p>
          <div style={styles.inputSafu}>
            <select
              style={styles.sarafuChaguo}
              value={kutoka}
              onChange={(e) => setKutoka(e.target.value)}
            >
              {Object.keys(viwango).map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            <input
              style={styles.nambariIngizo}
              type="number"
              value={kiasi}
              onChange={(e) => setKiasi(e.target.value)}
            />
          </div>

          {/* Exchange rate */}
          <div style={styles.kiwangoSafu}>
            <span style={styles.kiwangoManeno}>↕ 1 {kutoka} ≈ {kiwango} {kwenda}</span>
          </div>

          {/* They receive */}
          <p style={styles.lebo}>They receive</p>
          <div style={styles.inputSafu}>
            <select
              style={styles.sarafuChaguo}
              value={kwenda}
              onChange={(e) => setKwenda(e.target.value)}
            >
              {Object.keys(viwango).map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            <input
              style={{...styles.nambariIngizo, color: '#c2185b', fontWeight: 'bold'}}
              type="text"
              value={hesabu()}
              readOnly
            />
          </div>

          {/* Get Started Button */}
          
            href="https://expo.dev/accounts/brown94/projects/sendeasly-app/builds/16ce1eb2-3a0d-4ec5-a4f6-235305a6ac15"
            style={styles.sendKitufe}
            target="_blank"
            rel="noreferrer"
          >
            Download SendEasly 💗
          </a>

          <p style={styles.adaNdogo}>We charge 2% fee on all transfers.</p>

        </div>

        {/* Store Buttons */}
        <div style={styles.storeVitufe}>
          
            href="https://expo.dev/accounts/brown94/projects/sendeasly-app/builds/16ce1eb2-3a0d-4ec5-a4f6-235305a6ac15"
            style={styles.storeKitufe}
            target="_blank"
            rel="noreferrer"
          >
            <span style={styles.storeIcon}>🍎</span> App Store
          </a>
          
            href="https://expo.dev/accounts/brown94/projects/sendeasly-app/builds/16ce1eb2-3a0d-4ec5-a4f6-235305a6ac15"
            style={{...styles.storeKitufe, backgroundColor: '#c2185b', color: 'white'}}
            target="_blank"
            rel="noreferrer"
          >
            <span style={styles.storeIcon}>▶</span> Google Play
          </a>
        </div>

        {/* Media Logos */}
        <div style={styles.mediaLogos}>
          <span style={styles.mediaLogo}>TechCrunch</span>
          <span style={styles.mediaLogo}>CNN</span>
          <span style={styles.mediaLogo}>Forbes</span>
          <span style={styles.mediaLogo}>BBC</span>
        </div>

      </div>

    </div>
  );
}

const styles = {
  ukurasa: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #880e4f 0%, #c2185b 50%, #f48fb1 100%)',
    fontFamily: 'sans-serif',
  },
  navbar: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    padding: '12px 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 1000,
    backgroundColor: 'rgba(136,14,79,0.95)',
  },
  navLogo: {
    height: '50px',
  },
  navKulia: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  lughaKitufe: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    border: '1px solid rgba(255,255,255,0.3)',
    color: 'white',
    padding: '6px 12px',
    borderRadius: '20px',
    cursor: 'pointer',
    fontSize: '14px',
  },
  hamburger: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    border: '1px solid rgba(255,255,255,0.3)',
    color: 'white',
    padding: '6px 12px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '20px',
  },
  mobileMenu: {
    position: 'fixed',
    top: '74px',
    right: 0,
    width: '60%',
    height: '100vh',
    backgroundColor: '#880e4f',
    padding: '24px',
    zIndex: 999,
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    boxShadow: '-4px 0 20px rgba(0,0,0,0.3)',
  },
  mobileMenuLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: '500',
    padding: '12px 0',
    borderBottom: '1px solid rgba(255,255,255,0.2)',
  },
  hero: {
    padding: '100px 20px 40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '500px',
    margin: '0 auto',
  },
  kichwa: {
    fontSize: '36px',
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: '12px',
    lineHeight: '1.2',
  },
  maelezo: {
    fontSize: '16px',
    color: 'rgba(255,255,255,0.85)',
    textAlign: 'center',
    marginBottom: '24px',
    lineHeight: '1.6',
  },
  calculator: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    backdropFilter: 'blur(10px)',
    borderRadius: '20px',
    padding: '24px',
    width: '100%',
    marginBottom: '24px',
    border: '1px solid rgba(255,255,255,0.2)',
  },
  lebo: {
    color: 'rgba(255,255,255,0.85)',
    fontSize: '14px',
    fontWeight: '600',
    marginBottom: '8px',
  },
  inputSafu: {
    display: 'flex',
    gap: '8px',
    marginBottom: '16px',
  },
  sarafuChaguo: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    border: '1px solid rgba(255,255,255,0.3)',
    color: 'white',
    padding: '12px',
    borderRadius: '10px',
    fontSize: '15px',
    fontWeight: '600',
    width: '110px',
  },
  nambariIngizo: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.15)',
    border: '1px solid rgba(255,255,255,0.3)',
    color: 'white',
    padding: '12px',
    borderRadius: '10px',
    fontSize: '22px',
    fontWeight: 'bold',
    textAlign: 'right',
  },
  kiwangoSafu: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: '16px',
  },
  kiwangoManeno: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    color: 'white',
    padding: '6px 12px',
    borderRadius: '20px',
    fontSize: '13px',
    fontWeight: '600',
  },
  sendKitufe: {
    backgroundColor: 'white',
    color: '#c2185b',
    padding: '16px',
    borderRadius: '30px',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: 'bold',
    display: 'block',
    textAlign: 'center',
    marginBottom: '12px',
  },
  adaNdogo: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: '12px',
    textAlign: 'center',
  },
  storeVitufe: {
    display: 'flex',
    gap: '12px',
    marginBottom: '32px',
    width: '100%',
  },
  storeKitufe: {
    flex: 1,
    backgroundColor: 'white',
    color: '#c2185b',
    padding: '14px',
    borderRadius: '12px',
    textDecoration: 'none',
    fontSize: '15px',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
  },
  storeIcon: {
    fontSize: '18px',
  },
  mediaLogos: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  mediaLogo: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: '14px',
    fontWeight: 'bold',
  },
};

export default Home;