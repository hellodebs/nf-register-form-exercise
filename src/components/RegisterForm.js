import { useState } from "react";
import "./RegisterForm.css";
export default function RegisterForm() {
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [repeatPasswordError, setRepeatPasswordError] = useState("");
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setRepeatPassword] = useState("");
  const [email, setEmail] = useState("");
  const [emailRepeat, setEmailRepeat] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (password.length < 10) {
      setPasswordError("Password must have at least 10 characters.");
    } else {
      setPasswordError("");
    }
    if (password !== passwordRepeat) {
      setRepeatPasswordError("Passwords don't match!");
    } else {
      setRepeatPasswordError("");
    }
    if (email !== emailRepeat) {
      setEmailError("Emails don't match!");
    } else {
      setEmailError("");
    }
  }
  function handleUsernameChange(e) {
    setUsername(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handlePasswordRepeatChange(e) {
    setRepeatPassword(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handleEmailRepeatChange(e) {
    setEmailRepeat(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit} className="RegisterForm">
      <input
        type="text"
        placeholder="username"
        name="username"
        id="username"
        value={userName}
        onChange={handleUsernameChange}
      />
      {passwordError && <p>{passwordError}</p>}
      <input
        type="password"
        placeholder="password"
        name="password"
        id="password"
        value={password}
        onChange={handlePasswordChange}
      />
      {repeatPasswordError && <p>{repeatPasswordError}</p>}
      <input
        type="password"
        placeholder="repeat password"
        name="passwordRepeat"
        id="passwordRepeat"
        value={passwordRepeat}
        onChange={handlePasswordRepeatChange}
      />
      {emailError && <p>{emailError}</p>}
      <input
        type="email"
        placeholder="email"
        name="email"
        id="email"
        value={email}
        onChange={handleEmailChange}
      />
      <input
        type="email"
        placeholder="repeat email"
        name="emailRepeat"
        id="emailRepeat"
        value={emailRepeat}
        onChange={handleEmailRepeatChange}
      />
      <button type="submit"> Register! </button>
    </form>
  );
}
