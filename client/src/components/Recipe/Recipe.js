import React from "react";
import styles from "./Recipe.module.scss";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { Link } from "react-router-dom";
const Recipe = () => {
  return (
    <Link to="/details" className={styles.recipeLink}>
      <div className={styles.recipeWrapper}>
        <img
          alt="recipe"
          src={"./smt.png"}
          className={styles.recipeImage}
        ></img>
        <div className={styles.postDetail}>
          <p className={styles.postUser}>
            <PersonOutlineOutlinedIcon />{" "}
            <span style={{ color: "red" }}>Murat Ciftci</span>
          </p>
          <p className={styles.postDate}>Poster * hours ago</p>
        </div>
        <div className={styles.postText}>
          <p>
            Get your morning started with this quick and easy to make green
            breakfast smoothie.
          </p>
        </div>
      </div>{" "}
    </Link>
  );
};

export default Recipe;
