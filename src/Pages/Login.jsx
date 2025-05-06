import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { LoginUserData } from '../Services/Data';

const Login = () => {
  const [userData, setUserData] = useState({ email: "", password: "" })
  const navigate = useNavigate()
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      email : userData.email,
      password : userData.password
    }
      LoginUserData(payload).then(data => {
      localStorage.setItem("loggedIn", JSON.stringify(data[0]))
      navigate("/home")
    })
   
  };

  return (
    <div style={{ display: 'flex', minHeight: '80vh', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
      <div style={{ flex: 1, backgroundColor: '#f5f5f5', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/005/879/539/small_2x/cloud-computing-modern-flat-concept-for-web-banner-design-man-enters-password-and-login-to-access-cloud-storage-for-uploading-and-processing-files-illustration-with-isolated-people-scene-free-vector.jpg"
          alt="Login"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </div>
      <div style={{ flex: 1, padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h2 style={{ marginBottom: '1.5rem' }}>Login</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="email" style={{ marginBottom: '0.5rem' }}>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            required
            style={{ padding: '0.5rem', marginBottom: '1rem', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          <label htmlFor="password" style={{ marginBottom: '0.5rem' }}>Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            required
            style={{ padding: '0.5rem', marginBottom: '1.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          <button type="submit" style={{ padding: '0.75rem', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Login
          </button>
          <p style={{ display: "flex", justifyContent: "end" }}>Dont have an account?<Link to={"/register"}>SingUp here!!</Link> </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
