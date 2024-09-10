import { useLocation } from "react-router-dom";

function Profile() {
  const location = useLocation();
  const { name } = location.state || { name: "Guest" };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome, {name}!</h1>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'linear-gradient(135deg, #74ebd5, #acb6e5)',
    fontFamily: "'Poppins', sans-serif",
  },
  heading: {
    fontSize: '2.5rem',
    color: '#333',
    fontWeight: 'bold',
    letterSpacing: '1.5px',
  }
};

export default Profile;
