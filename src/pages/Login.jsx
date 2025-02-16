import { useState } from "react";
import { useUserStore } from "../store/userStore";
import "../styles/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const setUser = useUserStore((state) => state.setUser);

  const handleLogin = (e) => {
    e.preventDefault();
    setUser(email);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input 
          type="email" 
          placeholder="Enter email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
