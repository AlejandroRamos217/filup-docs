import { useState } from "react";
import { motion } from "framer-motion";
import "./Login.css";


const Login = ({ onLogin }) => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (user !== "Filup" || pass !== "Filup#2026") {
      setError("Usuario o contraseña incorrectos");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      localStorage.setItem("auth", "true");
      onLogin();
    }, 600);
  };

  return (
    <div className="login-container">
      <motion.form className="login-card" onSubmit={handleSubmit} initial={{ opacity: 0, y: 20, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -20, scale: 0.97 }} transition={{ duration: 0.4, ease: "easeOut" }}>
        <h2>Hola de nuevo!</h2>
        <span id="login-prompt">Por favor inicia sesion para continuar</span>

        <input
          placeholder="Usuario"
          value={user}
          disabled={loading}
          onChange={(e) => setUser(e.target.value)}
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={pass}
          disabled={loading}
          onChange={(e) => setPass(e.target.value)}
        />

        {error && <p className="login-error">{error}</p>}

        <button type="submit" disabled={loading}>
          {loading ? "Entrando..." : "Entrar"}
        </button>
      </motion.form>
    </div>
  );
};

export default Login;
