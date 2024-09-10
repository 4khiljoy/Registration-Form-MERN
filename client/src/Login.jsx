import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("buttonclicked")
   await axios
      .post("https://registration-pi-beryl.vercel.app/login", { email, password })
      .then((result) => {
        console.log(result)
        if (result["data"]==="Success") {
          // const { name } = result;  // Assuming the server returns user data with name
          const name=email
          navigate("/welcome", { state: { name } }); // Navigate to the welcome page
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.heading}>Login</h2>
        <form onSubmit={handleSubmit}>
          <label style={styles.label}>Email</label>
          <input
            type="email"
            placeholder="Enter email"
            autoComplete="off"
            required
            style={styles.input}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label style={styles.label}>Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            autoComplete="off"
            required
            style={styles.input}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>
        <p>Dont have an account yet?</p>
        <Link to="/register" style={styles.linkButton}>Register Here</Link>
      </div>
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
  },
  formContainer: {
    backgroundColor: '#fff',
    padding: '60px',
    borderRadius: '20px',
    boxShadow: '0 16px 50px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
    width: '400px',
  },
  heading: {
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '40px',
    fontWeight: 'bold',
    letterSpacing: '1.5px',
  },
  label: {
    fontWeight: '600',
    display: 'block',
    marginBottom: '10px',
    textAlign: 'left',
  },
  input: {
    width: '100%',
    padding: '12px',
    margin: '10px 0',
    borderRadius: '10px',
    border: '1px solid #ccc',
    outline: 'none',
  },
  button: {
    background: 'linear-gradient(135deg, #42a5f5, #478ed1)',
    color: '#fff',
    padding: '12px',
    borderRadius: '10px',
    width: '100%',
    border: 'none',
    fontSize: '1.2rem',
    cursor: 'pointer',
    marginTop: '20px',
  },
  linkButton: {
    textDecoration: 'none',
    background: '#f8f9fa',
    padding: '12px',
    borderRadius: '10px',
    display: 'block',
    marginTop: '20px',
    color: '#333',
  }
};

export default Login;
