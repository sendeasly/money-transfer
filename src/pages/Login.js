import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [nywila, setNywila] = useState('');
  const [kosa, setKosa] = useState('');
  const [mafanikio, setMafanikio] = useState('');
  const [inapakia, setInapakia] = useState(false);

  async function ingia() {
    if (!email || !nywila) {
      setKosa('Tafadhali jaza email na nywila!');
      return;
    }
    if (!email.includes('@')) {
      setKosa('Email si sahihi!');
      return;
    }
    if (nywila.length < 6) {
      setKosa('Nywila lazima iwe na herufi 6 au zaidi!');
      return;
    }

    setKosa('');
    setInapakia(true);

    try {
      const jibu = await fetch('https://money-transfer-backend-production.up.railway.app/ingia', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, nywila }),
      });

      const data = await jibu.json();

      if (jibu.ok) {
  setMafanikio('Karibu ' + data.mtumiaji.jina + '! Umeingia!');
  localStorage.setItem('mtumiaji', JSON.stringify(data.mtumiaji));
  window.location.href = '/dashboard';
} else {
        setKosa(data.kosa);
      }
    } catch (e) {
      setKosa('Tatizo la mtandao — seva haifanyi kazi!');
    }

    setInapakia(false);
  }

  return (
    <div style={styles.container}>
      <div style={styles.kadi}>
        <h1 style={styles.kichwa}>🔐 Ingia</h1>
        <p style={styles.maelezo}>Karibu tena kwenye app yetu</p>

        {kosa && <div style={styles.kosa}>⚠️ {kosa}</div>}
        {mafanikio && <div style={styles.mafanikio}>✅ {mafanikio}</div>}

        <label style={styles.lebo}>Email yako</label>
        <input
          style={styles.ingizo}
          type="email"
          placeholder="mfano@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label style={styles.lebo}>Nywila</label>
        <input
          style={styles.ingizo}
          type="password"
          placeholder="Ingiza nywila..."
          value={nywila}
          onChange={(e) => setNywila(e.target.value)}
        />

        <button
          style={{
            ...styles.kitufe,
            opacity: inapakia ? 0.7 : 1,
          }}
          onClick={ingia}
          disabled={inapakia}
        >
          {inapakia ? 'Inaingia...' : 'Ingia 🚀'}
        </button>

        <p style={styles.chini}>
          Huna akaunti?{' '}
          <a href="/register" style={styles.kiungo}>
            Sajili hapa
          </a>
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f0f4ff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  },
  kadi: {
    backgroundColor: 'white',
    borderRadius: '20px',
    padding: '40px',
    maxWidth: '420px',
    width: '100%',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
  },
  kichwa: {
    color: '#1a1a2e',
    fontSize: '28px',
    marginBottom: '8px',
    textAlign: 'center',
  },
  maelezo: {
    color: '#888',
    textAlign: 'center',
    marginBottom: '24px',
  },
  kosa: {
    backgroundColor: '#fff0f0',
    color: '#e53e3e',
    padding: '12px',
    borderRadius: '8px',
    marginBottom: '16px',
    fontSize: '14px',
    border: '1px solid #fed7d7',
  },
  mafanikio: {
    backgroundColor: '#f0fff4',
    color: '#38a169',
    padding: '12px',
    borderRadius: '8px',
    marginBottom: '16px',
    fontSize: '14px',
    border: '1px solid #c6f6d5',
  },
  lebo: {
    color: '#555',
    fontSize: '14px',
    fontWeight: 'bold',
    marginBottom: '6px',
  },
  ingizo: {
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #ddd',
    marginBottom: '16px',
    fontSize: '16px',
  },
  kitufe: {
    backgroundColor: '#4f46e5',
    color: 'white',
    padding: '14px',
    borderRadius: '8px',
    border: 'none',
    fontSize: '16px',
    cursor: 'pointer',
    marginTop: '8px',
    fontWeight: 'bold',
  },
  chini: {
    textAlign: 'center',
    marginTop: '20px',
    color: '#888',
    fontSize: '14px',
  },
  kiungo: {
    color: '#4f46e5',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
};

export default Login;