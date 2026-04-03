import React from 'react';

function Home() {
  return (
    <div style={styles.container}>
      <div style={styles.kadi}>
        <img src="/logo.png" alt="SendEasly" style={styles.logo} />
        <p style={styles.maelezo}>
          Tuma pesa haraka, salama, na kwa bei nafuu duniani kote
        </p>
        <div style={styles.vitufe}>
          <a href="/login" style={styles.kitufeIngia}>Ingia</a>
          <a href="/register" style={styles.kitufeSajili}>Sajili Sasa</a>
        </div>
        <div style={styles.takwimu}>
          <div style={styles.takwimuMoja}>
            <h2 style={styles.nambari}>150+</h2>
            <p style={styles.maelezoTakwimu}>Nchi</p>
          </div>
          <div style={styles.takwimuMoja}>
            <h2 style={styles.nambari}>2%</h2>
            <p style={styles.maelezoTakwimu}>Ada tu</p>
          </div>
          <div style={styles.takwimuMoja}>
            <h2 style={styles.nambari}>24/7</h2>
            <p style={styles.maelezoTakwimu}>Huduma</p>
          </div>
        </div>
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
    logo: {
  width: '80px',
  marginBottom: '12px',
},
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
  kitufeIngia: {
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
};

export default Home;