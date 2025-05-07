import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { postUsersData } from '../Services/Data';

const Register = () => {
  const [userData, setUserData] = useState({ email: "", password: "", age: "", gender: "", phone_number: "", username: "" });
  const navigate = useNavigate()
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    postUsersData(userData).then((data) => navigate("/login"));
  };

  return (
    <div style={{ display: 'flex', minHeight: '80vh', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
      <div style={{ flex: 1, backgroundColor: '#f5f5f5', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/005/879/539/small_2x/cloud-computing-modern-flat-concept-for-web-banner-design-man-enters-password-and-login-to-access-cloud-storage-for-uploading-and-processing-files-illustration-with-isolated-people-scene-free-vector.jpg"
          alt="Register"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </div>
      <div style={{ flex: 1, padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h2 style={{ marginBottom: '1.5rem' }}>Register</h2>
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
            style={{ padding: '0.5rem', marginBottom: '1rem', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          <label htmlFor="username" style={{ marginBottom: '0.5rem' }}>Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={userData.username}
            onChange={handleChange}
            required
            style={{ padding: '0.5rem', marginBottom: '1rem', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          <label htmlFor="age" style={{ marginBottom: '0.5rem' }}>Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={userData.age}
            onChange={handleChange}
            required
            min="0"
            style={{ padding: '0.5rem', marginBottom: '1rem', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          <label htmlFor="gender" style={{ marginBottom: '0.5rem' }}>Gender:</label>
          <select
            id="gender"
            name="gender"
            value={userData.gender}
            onChange={handleChange}
            required
            style={{ padding: '0.5rem', marginBottom: '1rem', borderRadius: '4px', border: '1px solid #ccc' }}
          >
            <option value="" disabled>Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <label htmlFor="phone_number" style={{ marginBottom: '0.5rem' }}>Phone Number:</label>
          <input
            type="tel"
            id="phone_number"
            name="phone_number"
            value={userData.phone_number}
            onChange={handleChange}
            required
            pattern="[0-9]{10,15}"
            placeholder="Enter phone number"
            style={{ padding: '0.5rem', marginBottom: '1.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          <button type="submit" style={{ padding: '0.75rem', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Register
          </button>
          <p style={{ display: "flex", justifyContent: "end" }}>Already have an account?<Link to={"/login"}>Login here!!</Link> </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
