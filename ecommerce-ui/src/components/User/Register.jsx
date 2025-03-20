import React, { useState } from "react";
import RegisterApi from "../../api/RegisterApi";

const Register = () => {
  const [username, setUsernme] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const userData = { username, email, password };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!username || !email || !password) {
      setError("All fields are required");
      return;
    }
    try {
      const data = RegisterApi(userData);
      console.log("User registered:", data);
    } catch (error) {
      console.error("Error during registration:", error);
      setError("Registration failed. Please try again.");
    }
  };
  return (
    <>
      <div className="wraper-login m-auto flex items-center h-screen justify-center">
        <div className="loginContainer shadow-custom-shadow">
          <div className="grid grid-cols-2 w-full max-w-2xl m-auto sm:block">
            <div className="logoside bg-default-green p-10 text-center clip-polygon content-center">
              <img
                src="src/images/loginlogo.png"
                alt="loginlogo"
                className="img-fluid m-auto"
              />
              <p className="text-white mt-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                malesuada vel libero vitae eleifend. Fusce tristique ipsum
                lorem.
              </p>
            </div>
            <div className="form-section p-10">
              <h2 className="text-4xl mb-8">Register</h2>
              {error && <div style={{ color: "red" }}>{error}</div>}
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-5">
                  <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={(e) => setUsernme(e.target.value)}
                    id="name"
                    className="border border-default-green rounded-md w-full p-3"
                    placeholder="username"
                  />
                </div>
                <div className="form-group mb-5">
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    className="border border-default-green rounded-md w-full p-3"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group mb-5">
                  <input
                    type="password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    id="password"
                    className="border border-default-green rounded-md w-full p-3"
                    placeholder="password"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-default-green text-white w-full p-3 rounded-md hover:bg-white hover:text-default-green border border-default-green transition-all duration-200"
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
