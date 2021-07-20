import "./RegisterForm.css";
export default function RegisterForm() {
  return (
    <form className="RegisterForm">
      <input type="text" placeholder="username" name="username" id="username" />
      <input
        type="password"
        placeholder="password"
        name="password"
        id="password"
      />
      <input
        type="password"
        placeholder="repeat password"
        name="passwordRepeat"
        id="passwordRepeat"
      />
      <input type="email" placeholder="email" name="email" id="email" />
      <input
        type="email"
        placeholder="repeat email"
        name="emailRepeat"
        id="emailRepeat"
      />
      <button type="submit"> Register! </button>
    </form>
  );
}
