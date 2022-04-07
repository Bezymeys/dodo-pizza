import { useState } from "react";
import { useNavigate } from "react-router-dom";
import css from "./Admin.module.css";

export default function Admin() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState(false);

  const rout = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    // TODO: add login logic
    rout("/dashboard")
  }

  const handleChange = (e) => {
    setLogin(e.target.value);
  }

  return (
    <div className="container mt-5">
      <form onSubmit={submit} className={css.formWrapper}>
        <input 
          required
          type="text" 
          placeholder="Login"
          value={login}
          onChange={handleChange}
        />
        <input 
          required 
          type={passwordType ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div onClick={() => setPasswordType(!passwordType)}>Show</div>
        <button>Enter</button>
      </form>
    </div>
  )
}
