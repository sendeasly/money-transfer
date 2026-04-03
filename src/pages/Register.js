import React, { useState } from 'react';

function Register() {
  const [jina, setJina] = useState('');
  const [email, setEmail] = useState('');
  const [nywila, setNywila] = useState('');
  const [nywila2, setNywila2] = useState('');
  const [kosa, setKosa] = useState('');
  const [mafanikio, setMafanikio] = useState('');
  const [inapakia, setInapakia] = useState(false);

  async function sajili() {
    if (!jina || !email || !nywila || !nywila2) {
      setKosa('Tafadhali jaza sehemu zote!');
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
    if (nywila !== nywila2) {
      setKosa('Nywila hazifanani!');
      return;
    }

    setKosa('');
    setInapakia(true);

    try {
      const jibu = await fetch('https://money-transfer-backend-production.up.railway.app/sajili', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ jina, email, nywila }),
      });

      const data = await jibu.json();

      if (jibu.ok) {
        setMafanikio('Umesajiliwa! Karibu ' + data.mtumiaji.jina);
        setJina('');
        setEmail('');
        setNywila('');
        setNywila2('');
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
        <h1 style={styles.kichwa}>📝 Sajili</h1>
        <p style={styles.maelezo}>Tengeneza akaunti yako ya bure</p>

        {kosa && <div style={styles.kosa}>⚠️ {kosa}</div>}
        {mafanikio && <div style={styles.mafanikio}>✅ {mafanikio}</div>}

        <label style={styles.lebo}>Jina lako kamili</label>
        <input
          style={styles.ingizo}
          type="text"
          placeholder="Jina Ukoo"
          value={jina}
          onChange={(e) => setJina(e.target.value)}
        />

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
          placeholder="Herufi 6 au zaidi..."
          value={nywila}
          onChange={(e) => setNywila(e.target.value)}
        />

        <label style={styles.lebo}>Thibitisha Nywila</label>
        <input
          style={styles.ingizo}
          type="password"
          placeholder="Rudia nywila yako..."
          value={nywila2}
          onChange={(e) => setNywila2(e.target.value)}
        />

        <button
          style={{
            ...styles.kitufe,
            opacity: inapakia ? 0.7 : 1,
          }}
          onClick={sajili}
          disabled={inapakia}
        >
          {inapakia ? 'Inasajili...' : 'Sajili Sasa 🚀'}
        </button>

        <p style={styles.chini}>
          Una akaunti tayari?{' '}
          <a href="/login" style={styles.kiungo}>
            Ingia hapa
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

export default Register;