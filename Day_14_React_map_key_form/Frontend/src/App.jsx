import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import LoginPages from "./pages/LoginPages";
import Rak from "./pages/Rak";
import StatusPosting from "./pages/StatusPosting";
import AddProduct from "./pages/AddProduct";

function App() {
  const handleLogin = (userInfo) => {
    // Simulasikan proses login dengan menampilkan informasi pengguna
    alert(`Login berhasil dengan username: ${userInfo.username}`);
  };

  const [isLogedin] = useState(true);

  return (
    <>
      <LoginPages onLogin={handleLogin} />
      <Rak/>
      <StatusPosting isPublished={true} />
      {isLogedin === true ? <Button status={"Logout"} /> : <Button status={"Login"} />}
      <AddProduct/>
    </>
  );
}

export default App;
