import { useNavigate } from "react-router-dom";
import "../css/Register.css";

function Register() {

  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();

    const user = {
        name: e.target[0].value,
        email: e.target[1].value,
        password: e.target[2].value
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Registration Successful!");

    navigate("/login");
};

  

  return (
    <div className="register-container">

      <form className="register-form" onSubmit={handleRegister}>

        <h2>Create Account</h2>

        <input
          type="text"
          placeholder="Full Name"
          required
        />

        <input
          type="email"
          placeholder="Email Address"
          required
        />

        <input
          type="password"
          placeholder="Password"
          required
        />

        <input
          type="password"
          placeholder="Confirm Password"
          required
        />

        <button type="submit">
          Register
        </button>

      </form>

    </div>
  );
}

export default Register;