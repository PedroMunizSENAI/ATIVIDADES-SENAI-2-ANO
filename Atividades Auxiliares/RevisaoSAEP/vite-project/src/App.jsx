import { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const LoggedIn = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
  };

  return (
    <section className="Login">
      <h1>Log In</h1>

      <form onSubmit={LoggedIn}>
        <input
          type="email"
          name="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          name="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <button typeSubmit={LoggedIn}>Logar</button>
      </form>
    </section>
  );
}

export default App;
