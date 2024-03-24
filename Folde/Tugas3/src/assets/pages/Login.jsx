import React, { useState } from "react";


const Login = () => {

    const [email , setEmail] = useState('ini email');

  return (
    <>
      <h1>{email}</h1>

      <form>
        <label>
          Email:
          <input type="text" />
        </label>
        <label>
          Password:
          <input className="" type="password" />
        </label>
      </form>
    </>
  );
};

export default Login;
