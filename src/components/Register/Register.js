import React, { useState } from "react";
import styles from "./Register.module.css";
import { Link } from "react-router-dom";

export default function Register() {
  const [data, setdata] = useState({
    email: "",
    username: "",
    password: "",
    number: "",
  });

  return (
    <div>
      <div className={styles.main}>
        <h1 className={styles.head}>Register Page </h1>
        <div className={styles.main1}>
          <form>
            <div className={styles.main2}>
              <h3>Enter Your Email</h3>
              <input
                className={styles.int}
                type="text"
                placeholder="Email"
                name="email"
              />
            </div>
            <div className={styles.main2}>
              <h3>Enter Your Username</h3>
              <input
                className={styles.int}
                type="text"
                placeholder="Username"
                name="usename"
              />
            </div>
            <br />
            <div className={styles.main3}>
              <h3>Enter Your Number</h3>
              <input
                className={styles.int}
                type="password"
                placeholder="Number"
                name="number"
              />
            </div>
            <div className={styles.main2}>
              <h3>Enter Your Username</h3>
              <input
                className={styles.int}
                type="text"
                placeholder="Username"
                name="username"
              />
            </div>

            <br />
            <div className={styles.btn}>
              <Link to="/Login">
                <button className={styles.btn1} type="submit">
                  Register
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
