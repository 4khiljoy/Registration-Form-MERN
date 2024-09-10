// src/Welcome.jsx

import { useLocation } from 'react-router-dom';

function Welcome() {
  const location = useLocation();
  const { name } = location.state || { name: "Guest" };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome, {name}!</h1>
      <p style={styles.message}>Were glad to have you here.</p>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'linear-gradient(135deg, #74ebd5, #acb6e5)',
    fontFamily: "'Poppins', sans-serif",
    textAlign: 'center',
  },
  heading: {
    fontSize: '3rem',
    color: '#333',
    marginBottom: '20px',
    fontWeight: 'bold',
  },
  message: {
    fontSize: '1.5rem',
    color: '#555',
  }
};

export default Welcome;
