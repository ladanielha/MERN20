import "./App.css";
import Produk from "./components/Rak";
import Rak from "./components/Products";
import LoginPages from "./pages/LoginPages";

function App() {
  const handleLogin = (userInfo) => {
    // Simulasikan proses login dengan menampilkan informasi pengguna
    alert(`Login berhasil dengan username: ${userInfo.username}`);
  };

  return (
    <>
      <LoginPages onLogin={handleLogin}/>
      <Produk />
      <Rak />
    </>
  );
}

export default App;
