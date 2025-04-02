import React from "react";
import "./Login.css";

export default function Login() {
  return (
    <div className="login-container">
      <h1>Login Page</h1>
      <form>
        <label>Email:</label>
        <input type="email" required />

        <label>Password:</label>
        <input type="password" required />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
