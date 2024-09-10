import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const containerStyle = {
    backgroundColor: '#fff',
    padding: '60px',
    borderRadius: '20px',
    boxShadow: '0 16px 50px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
    width: '400px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };

  const headingStyle = {
    fontSize: '2.8rem',
    color: '#333',
    marginBottom: '40px',
    fontWeight: 'bold',
    letterSpacing: '1.5px'
  };

  const buttonStyle = {
    background: 'linear-gradient(135deg, #42a5f5, #478ed1)',
    border: 'none',
    color: 'white',
    padding: '15px 50px',
    margin: '15px 0',
    fontSize: '1.2rem',
    cursor: 'pointer',
    borderRadius: '10px',
    width: '100%',
    transition: 'all 0.3s ease',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)'
  };

  const buttonHoverStyle = {
    background: 'linear-gradient(135deg, #3b88db, #3c78c7)',
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)'
  };

  const buttonSecondaryStyle = {
    ...buttonStyle,
    background: 'linear-gradient(135deg, #66bb6a, #5fa75c)'
  };

  const buttonSecondaryHoverStyle = {
    background: 'linear-gradient(135deg, #5ca058, #549154)',
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)'
  };

  const bodyStyle = {
    fontFamily: "'Poppins', sans-serif",
    background: 'linear-gradient(135deg, #74ebd5, #acb6e5)',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0
  };

  return (
    <div style={bodyStyle}>
      <div style={containerStyle}>
        <h2 style={headingStyle}>Welcome Home</h2>
        <button
          style={buttonStyle}
          onMouseEnter={(e) => Object.assign(e.target.style, buttonHoverStyle)}
          onMouseLeave={(e) => Object.assign(e.target.style, buttonStyle)}
          onClick={() => navigate("/Login")}
        >
          Login
        </button>
        <button
          style={buttonSecondaryStyle}
          onMouseEnter={(e) => Object.assign(e.target.style, buttonSecondaryHoverStyle)}
          onMouseLeave={(e) => Object.assign(e.target.style, buttonSecondaryStyle)}
          onClick={() => navigate("/Register")}
        >
          Signup
        </button>
      </div>
    </div>
  );
}

export default Home;
