import React from "react";

const Login = () => {
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
                <h2 className="text-4xl mb-8">Login</h2>
                <form action="">
                    <div className="form-group mb-5">
                        <input type="text" name="username" id="name" className="border border-default-green rounded-md w-full p-3" placeholder="username" />
                    </div>
                    <div className="form-group mb-5">
                        <input type="password" name="password" id="password" className="border border-default-green rounded-md w-full p-3" placeholder="password"/>
                    </div>
                    <button type="submit" className="bg-default-green text-white w-full p-3 rounded-md hover:bg-white hover:text-default-green border border-default-green transition-all duration-200">Login</button>
                </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
