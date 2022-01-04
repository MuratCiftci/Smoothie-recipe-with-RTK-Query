import { Link } from "react-router-dom";
import Search from "../Search/Search";
import styles from "./Navbar.module.scss";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import MenuLinks from "./MenuLinks";
export const Navbar = () => {



  const [sideBar, setsideBar] = useState(false);
  const [menuPosition, setMenuPosition] = useState("-50%");

  function toggleShowMenu() {
    // open or close
    setsideBar(!sideBar);
    if (sideBar) {
      setMenuPosition("-50%");
    } else {
      setMenuPosition("0");
    }
  }
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
          <div className={styles.menu}>
            <MenuLinks />
          </div>
          <button
            onClick={() => toggleShowMenu()}
            className={styles.hamburgerMenu}
          >
            <AiOutlineMenu />
          </button>
          <div style={{ right: menuPosition }} className={styles.sidenav}>
            <button className={styles.closebtn} onClick={() => toggleShowMenu()}> &times;</button>
            <MenuLinks />
          </div>
        </div>
      </div>
    </div>
  );
};
