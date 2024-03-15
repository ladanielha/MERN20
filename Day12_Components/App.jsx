import React from 'react';
import LoginForm from './LoginForm';

function App() {
  const handleLogin = (userInfo) => {
    // Simulasikan proses login dengan menampilkan informasi pengguna
    alert(`Login berhasil dengan username: ${userInfo.username}`);
  };

  return (
    <div>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
}

export default App;
