import { useState } from "react";
import "./RegisterForm.css";
export default function RegisterForm() {
  // const [emailError, setEmailError] = useState("");
  // const [passwordError, setPasswordError] = useState("");
  // const [repeatPasswordError, setRepeatPasswordError] = useState("");
  // const [userName, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [passwordRepeat, setRepeatPassword] = useState("");
  // const [email, setEmail] = useState("");
  // const [emailRepeat, setEmailRepeat] = useState("");
  const [errorMessages, setErrorMessages] = useState({
    passwordTooShort: false,
    passwordsDontMatch: false,
    emailsDontMatch: false,
  });
  const [contactInfo, setContactInfo] = useState({
    name: "",
    password: "",
    passwordRepeat: "",
    email: "",
    emailRepeat: "",
  });

  // function handleSubmit(e) {
  //   e.preventDefault();

  //   if (key === "password && password.length < 10) {
  //     setPasswordError("Password must have at least 10 characters.");
  //   } else {
  //     setPasswordError("");
  //   }
  //   if (password !== passwordRepeat) {
  //     setRepeatPasswordError("Passwords don't match!");
  //   } else {
  //     setRepeatPasswordError("");
  //   }
  //   if (email !== emailRepeat) {
  //     setEmailError("Emails don't match!");
  //   } else {
  //     setEmailError("");
  //   }
  // }
  // function handleUsernameChange(e) {
  //   setUsername(e.target.value);
  // }

  // function handlePasswordChange(e) {
  //   setPassword(e.target.value);
  // }

  // function handlePasswordRepeatChange(e) {
  //   setRepeatPassword(e.target.value);
  // }

  // function handleEmailChange(e) {
  //   setEmail(e.target.value);
  // }
  // function handleEmailRepeatChange(e) {
  //   setEmailRepeat(e.target.value);
  // }

  function handleOnChange(e) {
    const value = e.target.value;
    const key = e.target.name;
    const newObject = { ...contactInfo, [key]: value };
    setContactInfo(newObject);
  }
  function handleSubmit(e) {
    e.preventDefault();

    setErrorMessages({
      passwordTooShort: contactInfo.password.length < 10,
      passwordsDontMatch: contactInfo.password !== contactInfo.passwordRepeat,
      emailsDontMatch: contactInfo.email !== contactInfo.emailRepeat,
    });
  }

  return (
    <form onSubmit={handleSubmit} className="RegisterForm">
      <input
        type="text"
        placeholder="username"
        name="username"
        id="username"
        value={contactInfo.userName}
        onChange={handleOnChange}
      />
      {errorMessages.passwordTooShort && <p>Password is too short!</p>}
      <input
        type="password"
        placeholder="password"
        name="password"
        id="password"
        value={contactInfo.password}
        onChange={handleOnChange}
      />
      {errorMessages.passwordsDontMatch && <p>Passwords don't match!</p>}
      <input
        type="password"
        placeholder="repeat password"
        name="passwordRepeat"
        id="passwordRepeat"
        value={contactInfo.passwordRepeat}
        onChange={handleOnChange}
      />
      {errorMessages.emailsDontMatch && <p>Emails don't match!</p>}
      <input
        type="email"
        placeholder="email"
        name="email"
        id="email"
        value={contactInfo.email}
        onChange={handleOnChange}
      />
      <input
        type="email"
        placeholder="repeat email"
        name="emailRepeat"
        id="emailRepeat"
        value={contactInfo.emailRepeat}
        onChange={handleOnChange}
      />
      <button type="submit"> Register! </button>
    </form>
  );
}
