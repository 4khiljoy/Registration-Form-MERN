import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://registration-pi-beryl.vercel.app/register", { name, email, password })
      .then((result) => {
        console.log(result);
        navigate("/Login");
      })
      .catch((err) => console.log(err));
  };

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
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '40px',
    fontWeight: 'bold',
    letterSpacing: '1.5px'
  };

  const labelStyle = {
    fontWeight: '600',
    marginBottom: '10px',
    display: 'block',
    textAlign: 'left',
    width: '100%'
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    margin: '10px 0',
    borderRadius: '10px',
    border: '1px solid #ccc',
    fontSize: '1rem',
    outline: 'none',
    boxSizing: 'border-box'
  };

  const buttonStyle = {
    background: 'linear-gradient(135deg, #42a5f5, #478ed1)',
    border: 'none',
    color: 'white',
    padding: '15px 50px',
    margin: '20px 0',
    fontSize: '1.1rem',
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

  const linkButtonStyle = {
    backgroundColor: '#f8f9fa',
    color: '#333',
    padding: '12px 50px',
    border: 'none',
    fontSize: '1rem',
    textDecoration: 'none',
    borderRadius: '10px',
    marginTop: '10px',
    width: '100%',
    display: 'inline-block',
    textAlign: 'center',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
  };

  const linkButtonHoverStyle = {
    backgroundColor: '#e2e6ea',
    transform: 'translateY(-4px)',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)'
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
        <h2 style={headingStyle}>Register</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name" style={labelStyle}>
            <strong>Name</strong>
          </label>
          <input
            type="text"
            placeholder="Enter Name"
            autoComplete="off"
            name="name"
            required
            style={inputStyle}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email" style={labelStyle}>
            <strong>Email</strong>
          </label>
          <input
            type="email"
            placeholder="Enter email"
            autoComplete="off"
            name="email"
            required
            style={inputStyle}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password" style={labelStyle}>
            <strong>Password</strong>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            autoComplete="off"
            name="password"
            required
            style={inputStyle}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            style={buttonStyle}
            onMouseEnter={(e) => Object.assign(e.target.style, buttonHoverStyle)}
            onMouseLeave={(e) => Object.assign(e.target.style, buttonStyle)}
          >
            Register
          </button>
        </form>
        <p>Already have an account?</p>
        <Link
          to="/login"
          style={linkButtonStyle}
          onMouseEnter={(e) => Object.assign(e.target.style, linkButtonHoverStyle)}
          onMouseLeave={(e) => Object.assign(e.target.style, linkButtonStyle)}
        >
          Login
        </Link>
      </div>
    </div>
  );
}

export default Signup;
