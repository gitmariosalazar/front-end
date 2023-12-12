import { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Lógica de autenticación
    console.log("Usuario:", username);
    console.log("Contraseña:", password);
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Iniciar Sesión</h2>
        <form>
          <div className="input-group">
            <label htmlFor="username">Usuario</label>
            <input
              type="text"
              id="username"
              placeholder="Ingresa tu usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              placeholder="Ingresa tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="button-group">
            <button type="button" onClick={handleLogin}>
              Iniciar Sesión
            </button>
          </div>
        </form>
        <div className="additional-options">
          <a href="#forgot-password">¿Olvidaste tu contraseña?</a>
          <span>|</span>
          <a href="#register">¿No tienes una cuenta? Regístrate</a>
        </div>
        <div className="additional-options">
          <button
            onClick={() => {
              const popup = window.open(
                "https://api-marioutn-salazar.onrender.com/auth/microsoft",
                "targetWindow",
                `toolbar=no,
                 location=no,
                 status=no,
                 menubar=no,
                 scrollbars=yes,
                 resizable=yes,
                 width=620,
                 height=700`
              );
              window.addEventListener("message", (event) => {
                if (
                  event.origin === "https://api-marioutn-salazar.onrender.com/"
                ) {
                  if (event.data) {
                    sessionStorage.setItem("user", JSON.stringify(event.data));
                    popup.close();
                  }
                }
              });
            }}
          >
            Sign in with Microsoft Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
