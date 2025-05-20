import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase/firebase";
import s from "./Login.module.scss"; 

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in Successfully");
      window.location.href = "/";
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <h3 className={s.title}>Login</h3>

      <div className={s.formGroup}>
        <label className={s.label}>Email address</label>
        <input
          type="email"
          className={s.input}
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className={s.formGroup}>
        <label className={s.label}>Password</label>
        <input
          type="password"
          className={s.input}
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className={s.buttonContainer}>
        <button type="submit" className={s.submitButton}>
          Submit
        </button>
      </div>

    </form>
  );
}

export default Login;
