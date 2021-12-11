import Search from "../Search/Search";
import styles from "./Navbar.module.scss";
export const Navbar = () => {
  const dummyUser = false;
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.leftNav}>
          <img alt={"logo"} src={"/logo.png"}></img>
        </div>
        <div className={styles.centerNav}>
          <div className={styles.searchContainer}>
            <Search />
          </div>
        </div>
        <div className={styles.rightNav}>
          <div className={styles.link}>Browse</div>
          <div className={styles.link}>Write</div>
          {dummyUser ? (
            "Profile"
          ) : (
            <div className={styles.buttonGroup}>
              <button className={styles.login}>Login</button>
              <button className={styles.sign}>Sign Up</button>
            </div>
          )}
          <div className={styles.theme}>*</div>
        </div>
      </div>
    </div>
  );
};
