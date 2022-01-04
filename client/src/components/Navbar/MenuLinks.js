import React from "react";
import styles from "./Navbar.module.scss";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../app/features/auth/authSlice";
import { useAuth } from "../../hooks/useAuth";

const MenuLinks = () => {
  const dispatch = useDispatch();

  const { user } = useAuth();
  return (
    <div className={styles.menuLinks}>
      <Link to="/recipes" className={styles.link}>
        Browse
      </Link>
      <Link to="/write" className={styles.link}>
        Write
      </Link>
      {user ? (
        <button className={styles.link} onClick={() => dispatch(logout())}>Logout</button>
      ) : (
        <>
          <Link to="/login"  className={styles.link}>
            Login
          </Link>
          <Link to="/register"  className={styles.link}>
            Sign Up
          </Link>
        </>
      )}
      
    </div>
  );
};

export default MenuLinks;
