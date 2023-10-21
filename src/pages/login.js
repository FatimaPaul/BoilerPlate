import FInput from "../components/FInput";
import FButton from "../components/FButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginMethod } from "../config/firebaseMethods";

export default function Login() {
  const [loginBody, setLoginBody] = useState({});
  const navigate = useNavigate();

  function handleLogin() {
    // add your page to navigate
    LoginMethod(loginBody)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }

  return (
    <div className="h-body">
      <div className="h-form shadow rounded">
        <form className="form">
          <h1>Login</h1>
          <div className="inp-form">
            <FInput
              label="Email"
              variant="outlined"
              color="secondary"
              type="email"
              sx={{ width: "100%" }}
              value={loginBody.email || ""}
              onchange={(e) =>
                setLoginBody({ ...loginBody, email: e.target.value })
              }
            />
          </div>
          <div className="inp-form">
            <FInput
              label="Password"
              variant="outlined"
              color="secondary"
              type="password"
              sx={{ width: "100%" }}
              value={loginBody.password || ""}
              onchange={(e) =>
                setLoginBody({ ...loginBody, password: e.target.value })
              }
            />
          </div>
          <div>
            <FButton
              variant="contained"
              color="secondary"
              onclick={handleLogin}
            >
              Login
            </FButton>
          </div>
        </form>
      </div>
    </div>
  );
}
