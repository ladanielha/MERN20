import { useState } from "react";
import FormLogin from "../components/FormLogin";
import LogoutButton from "../components/LogoutButton";

useState;
const LoginPages = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async () => {
    setError("");

    try {
      const response = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsLoggedIn(true);
        console.log("Login successful:", data);
      } else {
        setError(data.error);
        console.error("Login failed:", data.error);
      }
    } catch (error) {
      console.error("Login error:", error.message);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      {isLoggedIn ? (
        <LogoutButton handleLogout={handleLogout} />
      ) : (
        <FormLogin
          handleLogin={handleLogin}
          error={error}
          setEmail={setEmail}
          setPassword={setPassword}
          email={email}
          password={password}
        />
      )}
    </div>
  );
};

export default LoginPages;
