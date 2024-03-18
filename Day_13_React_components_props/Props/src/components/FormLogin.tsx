import { useState } from 'react';

function FormLogin({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Proses validasi login (contoh sederhana)
    if (username && password) {
      // Panggil fungsi onLogin dengan informasi pengguna
      onLogin({ username, password });
    } else {
      alert('Username dan password harus diisi');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default FormLogin;
