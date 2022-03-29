import { useState } from "react";
import "./Login.scss";
import GoogleLogin from "react-google-login";

const Login = () => {
  // google auth
  const responseGoogle = (response) => {
    console.log(response);
    localStorage.setItem("user", response.profileObj.googleId);
    response.profileObj.googleId && window.location.replace("/");
  };
  return (
    <div data-testid="login" className="Login">
      <div className="wrapper">
        <div className="signWithGoogle">
          <GoogleLogin
            data-testid="log-btn"
            clientId="1071402783098-k2qgffk6bh3rul9n3cc6uheq3gbauo4u.apps.googleusercontent.com"
            buttonText="Login to continue"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
