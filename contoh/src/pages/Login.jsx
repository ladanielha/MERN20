import React from 'react'

const Login = () => {
  return (
    <div className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
      <div className="row align-items-center g-lg-5 py-5">
        <div className="col-lg-7 text-center text-lg-start">
          <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">
            Sign in
          </h1>
          <p className="col-lg-10 fs-4">Sign in</p>
        </div>
        <form
          
          
        >
          <label>
            Email:
            <input
              type="text"
              
              
            />
          </label>
          <label>
            Password:
            <input
              className=""
              type="password"
            />
          </label>
        </form>
      </div>
    </div>
  )
}

export default Login

