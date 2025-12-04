import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import api from "../../api/api";

const Login = () => {
const navigate = useNavigate();
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState('');

const handleLogin = async (e) => {
e.preventDefault();
setError('');

```
try {
  // Call backend login endpoint
  const response = await axios.post('https://your-backend-url.com/login', {
    email,
    password
  });

  // If success, save token & redirect
  if (response.data.token) {
    localStorage.setItem('token', response.data.token);

    // Redirect to labs page (adjust if needed, e.g., "/labs/1")
    navigate('/labs');
  } else {
    setError('Invalid credentials');
  }
} catch (err) {
  setError(err.response?.data?.message || 'Login failed');
}
```

};

return (
<div style={{ maxWidth: '400px', margin: '50px auto' }}> <h2>Login</h2> <form onSubmit={handleLogin}>
<div style={{ marginBottom: '10px' }}> <label>Email</label>
<input
type="email"
value={email}
onChange={(e) => setEmail(e.target.value)}
required
style={{ width: '100%', padding: '8px' }}
/> </div>
<div style={{ marginBottom: '10px' }}> <label>Password</label>
<input
type="password"
value={password}
onChange={(e) => setPassword(e.target.value)}
required
style={{ width: '100%', padding: '8px' }}
/> </div>
{error && <p style={{ color: 'red' }}>{error}</p>}
<button type="submit" style={{ padding: '10px 20px' }}>Login</button> </form> </div>
);
};

export default Login;
