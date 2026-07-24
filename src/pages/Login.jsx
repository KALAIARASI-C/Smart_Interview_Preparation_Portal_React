import { useNavigate } from "react-router-dom";
import "../css/Login.css";

function Login() {

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        const email = e.target[0].value;
        const password = e.target[1].value;

        const savedUser = JSON.parse(localStorage.getItem("user"));

        if (
            savedUser &&
            email === savedUser.email &&
            password === savedUser.password
        ) {
            alert("Login Successful!");
            navigate("/dashboard");
        } else {
            alert("Invalid Email or Password!");
        }
    };

    return (
        <div className="login-container">

            <form className="login-form" onSubmit={handleLogin}>

                <h2>Login</h2>

                <input
                    type="email"
                    placeholder="Enter Email"
                    required
                />

                <input
                    type="password"
                    placeholder="Enter Password"
                    required
                />

                <button type="submit">
                    Login
                </button>

            </form>

        </div>
    );
}

export default Login;