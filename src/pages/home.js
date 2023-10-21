import FButton from "../components/FButton";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    function handleNavigateSignup() {
        navigate("/signup");
    }

    function handleNavigateLogin() {
        navigate("/login");
    }

    return <div className="h-body">
        <div>
            <h1 className="display-3">(🩸) BLOOD BANK APPLICATION </h1>
            <div className="text-center">
                <span className="me-2"><FButton variant="contained" color="error" onclick={handleNavigateSignup}>SignUp</FButton></span>
                <span className="me-2"><FButton variant="contained" color="error" onclick={handleNavigateLogin}>Login</FButton></span>
            </div>
        </div>
    </div>
}