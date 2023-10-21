import FInput from "../components/FInput";
import FButton from "../components/FButton";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { LoginMethod } from "../config/firebaseMethods";
import { imageListClasses } from "@mui/material";


export default function Login() {
  const [loginBody, setLoginBody] = useState({});
  const navigate = useNavigate();

  function handleLogin() {
    // add your page to navigate
    LoginMethod(loginBody)
      .then((response) => navigate("/bloodBank"))
      .catch((error) => console.log(error));
  }

  return (
    <div className="h-body">
      <div className="h-form shadow rounded">
        <form className="form">
          <h1 className="text-danger">Login</h1>
          <div className="inp-form">
            <FInput
              label="Email"
              variant="outlined"
              color="error"
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
              color="error"
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
              color="error"
              onclick={handleLogin}
            >
              Login
            </FButton>
          </div>
          <div className="mt-3">
          Not registered yet? <span><Link to="/signup"> SignUp</Link></span>
          </div>
        </form>
      </div>
    </div>
  );
}
