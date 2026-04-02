import React, { useState, useEffect } from 'react';

const viwango = {
  TZS: 1,
  USD: 0.00039,
  GBP: 0.00031,
  EUR: 0.00036,
  KES: 0.051
};

function Dashboard() {
  const [mtumiaji, setMtumiaji] = useState(null);
  const [kiasi, setKiasi] = useState('');
  const [kutoka, setKutoka] = useState('TZS');
  const [kwenda, setKwenda] = useState('USD');
  const [matokeo, setMatokeo] = useState(null);
  const [historia, setHistoria] = useState([]);
  const [ukurasa, setUkurasa] = useState('tuma');

  useEffect(() => {
    const data = localStorage.getItem('mtumiaji');
    if (!data) {
      window.location.href = '/login';
      return;
    }
    setMtumiaji(JSON.parse(data));
    const hist = localStorage.getItem('historia');
    if (hist) setHistoria(JSON.parse(hist));
  }, []);

  function hesabu() {
    if (!kiasi || kiasi <= 0) return;
    const nambari = parseFloat(kiasi);
    const ada = (nambari * 0.02).toFixed(2);
    const jumla = (nambari + parseFloat(ada)).toFixed(2);
    const katikaTZS = nambari / viwango[kutoka];
    const mpokeaji = (katikaTZS * viwango[kwenda]).toFixed(2);
    setMatokeo({ ada, jumla, mpokeaji });
  }

  function tumaPesa() {
    if (!matokeo) return;
    const muamala = {
      id: historia.length + 1,
      tarehe: new Date().toLocaleDateString('sw-TZ'),
      kiasi: kiasi,
      kutoka: kutoka,
      kwenda: kwenda,
      mpokeaji: matokeo.mpokeaji,
      ada: matokeo.ada,
      hali: 'Imekamilika'
    };
    const historiaMpya = [muamala, ...historia];
    setHistoria(historiaMpya);
    localStorage.setItem('historia', JSON.stringify(historiaMpya));
    setKiasi('');
    setMatokeo(null);
    alert('Pesa imetumwa!');
    setUkurasa('historia');
  }

  function toka() {
    localStorage.removeItem('mtumiaji');
    window.location.href = '/';
  }

  if (!mtumiaji) return null;

  return (
    <div style={styles.container}>
      <div style={styles.navbar}>
        <h2 style={styles.logo}>TumaPesa</h2>
        <div style={styles.navKati}>
          <button
            style={ukurasa === 'tuma' ? styles.navAmilifu : styles.navKitufe}
            onClick={() => setUkurasa('tuma')}
          >
            Tuma Pesa
          </button>
          <button
            style={ukurasa === 'historia' ? styles.navAmilifu : styles.navKitufe}
            onClick={() => setUkurasa('historia')}
          >
            Historia
          </button>
        </div>
        <button style={styles.tokaKitufe} onClick={toka}>
          Toka
        </button>
      </div>

      <div style={styles.karibu}>
        <h1 style={styles.karibuKichwa}>Karibu, {mtumiaji.jina}!</h1>
        <p style={styles.karibuManeno}>Tuma pesa kwa haraka na usalama</p>
      </div>

      {ukurasa === 'tuma' && (
        <div style={styles.kadi}>
          <h2 style={styles.kadiKichwa}>Tuma Pesa</h2>
          <div style={styles.safu}>
            <div style={styles.nusu}>
              <label style={styles.lebo}>Kutoka</label>
              <select
                style={styles.ingizo}
                value={kutoka}
                onChange={(e) => setKutoka(e.target.value)}
              >
                {Object.keys(viwango).map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
            <div style={styles.nusu}>
              <label style={styles.lebo}>Kwenda</label>
              <select
                style={styles.ingizo}
                value={kwenda}
                onChange={(e) => setKwenda(e.target.value)}
              >
                {Object.keys(viwango).map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>

          <label style={styles.lebo}>Kiasi</label>
          <input
            style={styles.ingizo}
            type="number"
            placeholder="Ingiza kiasi..."
            value={kiasi}
            onChange={(e) => setKiasi(e.target.value)}
          />

          <button style={styles.kitufe} onClick={hesabu}>
            Hesabu
          </button>

          {matokeo && (
            <div style={styles.matokeo}>
              <h3 style={styles.matokeoKichwa}>Muhtasari</h3>
              <div style={styles.mstari}>
                <span>Unatuma:</span>
                <strong>{kiasi} {kutoka}</strong>
              </div>
              <div style={styles.mstari}>
                <span>Ada (2%):</span>
                <strong>{matokeo.ada} {kutoka}</strong>
              </div>
              <div style={styles.mstari}>
                <span>Jumla yako:</span>
                <strong>{matokeo.jumla} {kutoka}</strong>
              </div>
              <div style={{...styles.mstari, color: '#4f46e5', fontSize: '18px'}}>
                <span>Mpokeaji apata:</span>
                <strong>{matokeo.mpokeaji} {kwenda}</strong>
              </div>
              <button style={styles.kitufeKijani} onClick={tumaPesa}>
                Tuma Sasa
              </button>
            </div>
          )}
        </div>
      )}

      {ukurasa === 'historia' && (
        <div style={styles.kadi}>
          <h2 style={styles.kadiKichwa}>Historia ya Miamala</h2>
          {historia.length === 0 ? (
            <p style={styles.tupu}>Bado hujatuma pesa yoyote</p>
          ) : (
            historia.map((m) => (
              <div key={m.id} style={styles.muamala}>
                <div style={styles.muamalaJuu}>
                  <strong>{m.kiasi} {m.kutoka} hadi {m.mpokeaji} {m.kwenda}</strong>
                  <span style={{color: '#38a169'}}>{m.hali}</span>
                </div>
                <div style={styles.muamalaChini}>
                  <span>Ada: {m.ada} {m.kutoka}</span>
                  <span>{m.tarehe}</span>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

const styles = {
  container: { minHeight: '100vh', backgroundColor: '#f0f4ff' },
  navbar: {
    backgroundColor: '#4f46e5',
    padding: '16px 24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: { color: 'white', margin: 0, fontSize: '20px' },
  navKati: { display: 'flex', gap: '8px' },
  navKitufe: {
    backgroundColor: 'transparent',
    color: 'white',
    border: '1px solid rgba(255,255,255,0.4)',
    padding: '8px 16px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '14px',
  },
  navAmilifu: {
    backgroundColor: 'white',
    color: '#4f46e5',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: 'bold',
  },
  tokaKitufe: {
    backgroundColor: 'transparent',
    color: 'white',
    border: '1px solid rgba(255,255,255,0.4)',
    padding: '8px 16px',
    borderRadius: '8px',
    cursor: 'pointer',
  },
  karibu: { padding: '32px 24px 16px', textAlign: 'center' },
  karibuKichwa: { color: '#1a1a2e', fontSize: '28px', marginBottom: '8px' },
  karibuManeno: { color: '#666', fontSize: '16px' },
  kadi: {
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: '28px',
    maxWidth: '500px',
    margin: '0 auto 24px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
  },
  kadiKichwa: { color: '#1a1a2e', marginBottom: '20px', fontSize: '20px' },
  safu: { display: 'flex', gap: '12px' },
  nusu: { flex: 1, display: 'flex', flexDirection: 'column' },
  lebo: { color: '#555', fontSize: '14px', fontWeight: 'bold', marginBottom: '6px' },
  ingizo: {
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #ddd',
    marginBottom: '16px',
    fontSize: '16px',
    width: '100%',
    boxSizing: 'border-box',
  },
  kitufe: {
    backgroundColor: '#4f46e5',
    color: 'white',
    padding: '14px',
    borderRadius: '8px',
    border: 'none',
    fontSize: '16px',
    cursor: 'pointer',
    width: '100%',
    fontWeight: 'bold',
  },
  kitufeKijani: {
    backgroundColor: '#38a169',
    color: 'white',
    padding: '14px',
    borderRadius: '8px',
    border: 'none',
    fontSize: '16px',
    cursor: 'pointer',
    width: '100%',
    fontWeight: 'bold',
    marginTop: '12px',
  },
  matokeo: {
    marginTop: '20px',
    backgroundColor: '#f8f9ff',
    borderRadius: '12px',
    padding: '20px',
    borderLeft: '4px solid #4f46e5',
  },
  matokeoKichwa: { color: '#1a1a2e', marginBottom: '12px', fontSize: '16px' },
  mstari: {
    display: 'flex',
    justifyContent: 'space-between',
    color: '#555',
    marginBottom: '8px',
    fontSize: '15px',
  },
  muamala: {
    border: '1px solid #eee',
    borderRadius: '10px',
    padding: '16px',
    marginBottom: '12px',
  },
  muamalaJuu: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '8px',
  },
  muamalaChini: {
    display: 'flex',
    justifyContent: 'space-between',
    color: '#888',
    fontSize: '13px',
  },
  tupu: { textAlign: 'center', color: '#888', padding: '40px 0' },
};

export default Dashboard;