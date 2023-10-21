import FInput from "../components/FInput";
import FButton from "../components/FButton";
import { useState } from "react";
import { SignUpMethod } from "../config/firebaseMethods";
import { useNavigate, Link } from "react-router-dom";

export default function SignUp() {
  const [signupBody, setSignupBody] = useState({});
  const navigate = useNavigate();

  function handleSignup() {
    // add your page to navigate
    SignUpMethod(signupBody)
      .then((response) => navigate("/bloodBank"))
      .catch((error) => console.log(error));
  }

  return (
    <div className="h-body">
      <div className="h-form shadow rounded">
        <form className="form">
          <h1 className="text-danger">SignUp</h1>
          <div className="inp-form">
            <FInput
              label="Email"
              variant="outlined"
              color="error"
              type="email"
              sx={{ width: "100%" }}
              value={signupBody.email || ""}
              onchange={(e) =>
                setSignupBody({ ...signupBody, email: e.target.value })
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
              value={signupBody.password || ""}
              onchange={(e) =>
                setSignupBody({ ...signupBody, password: e.target.value })
              }
            />
          </div>
          <div>
            <FButton
              variant="contained"
              color="error"
              onclick={handleSignup}
            >
              SignUp
            </FButton>
          </div>
          <div className="mt-3">
            Already SignUp <span><Link  to="/login">Login</Link></span>
          </div>
        </form>
      </div>
    </div>
  );
}
