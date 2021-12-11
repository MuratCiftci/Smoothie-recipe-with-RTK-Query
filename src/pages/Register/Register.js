import styles from "./Register.module.scss"

export default function Register() {
    return (
        <div className={styles.register}>
      <span className={styles.registerTitle}>Register</span>
      <form className={styles.registerForm}>
        <label>Username</label>
        <input className={styles.registerInput} type="text" placeholder="Enter your username..." />
        <label>Email</label>
        <input className={styles.registerInput} type="text" placeholder="Enter your email..." />
        <label>Password</label>
        <input className={styles.registerInput} type="password" placeholder="Enter your password..." />
        <button className={styles.registerButton}>Register</button>
      </form>
        <button className={styles.registerLoginButton}>Login</button>
    </div>
    )
}