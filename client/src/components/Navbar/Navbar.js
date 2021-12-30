import { Link } from "react-router-dom";
import Search from "../Search/Search";
import styles from "./Navbar.module.scss";
import { useDispatch } from 'react-redux';
import {logout} from "../../app/features/auth/authSlice";
import { useAuth } from "../../hooks/useAuth";
export const Navbar = () => {
  const {user} = useAuth();

   const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.leftNav}>
          <Link to="/">
            <img alt={"logo"} src={"/logo.png"}></img>
          </Link>
        </div>
        <div className={styles.centerNav}>
          <div className={styles.searchContainer}>
            <Search />
          </div>
        </div>
        <div className={styles.rightNav}>
        <Link to="/recipes" className={styles.link}>Browse</Link>
        <Link to="/write" className={styles.link}>Write</Link>
          {user ? (
            <button onClick={() => dispatch(logout())}>Logout</button>
          ) : (
            <div className={styles.buttonGroup}>
              <Link to="/login">
                <button className={styles.login}>Login</button>
              </Link>
              <Link to="/register">
                <button className={styles.sign}>Sign Up</button>
              </Link>
            </div>
          )}
          <div className={styles.theme}>*</div>
        </div>
      </div>
    </div>
  );
};
