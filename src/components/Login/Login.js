import React, { useState } from "react";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className={styles.main}>
      <h1 className={styles.head}> Login Page </h1>
      <div className={styles.main1}>
        <form>
          <div className={styles.main2}>
            <h3>Enter Your Username</h3>
            <input className={styles.int} type="text" placeholder="Username" />
          </div>
          <br />
          <div className={styles.main3}>
            <h3>Enter Your Password</h3>
            <input
              className={styles.int}
              type="password"
              placeholder="Password"
            />
          </div>
          <br />
          <div className={styles.btn}>
            <Link to='/'>
            <button className={styles.btn1} type="submit">
              Login
            </button>
            </Link>
          </div>
          <div className={styles.btn}>
            <Link to="/Register">
              <button className={styles.btn1}>Register</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
