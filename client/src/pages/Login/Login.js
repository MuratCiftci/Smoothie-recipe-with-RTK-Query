import styles from "./Login.module.scss";

export default function Login() {
  return (
    <div className={styles.login}>
      <span className={styles.loginTitle}>Login</span>
      <form className={styles.loginForm}>
        <label>Email</label>
        <input className={styles.loginInput} type="text" placeholder="Enter your email..." />
        <label>Password</label>
        <input className={styles.loginInput} type="password" placeholder="Enter your password..." />
        <button className={styles.loginButton}>Login</button>
      </form>
        <button className={styles.loginRegisterButton}>Register</button>
    </div>
  );
}