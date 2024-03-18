import { useState } from 'react';

const FormLogin = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic email validation
    if (!email || !email.trim()) {
      setError('Please enter your email.');
      return;
    }

    // Basic password validation
    if (!password || !password.trim()) {
      setError('Please enter your password.');
      return;
    }

    // If both email and password are provided, clear any previous errors and proceed with login
    setError('');
    handleLogin(email, password);
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default FormLogin;
