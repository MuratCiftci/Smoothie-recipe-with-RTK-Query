import React from "react";
import styles from "./Recipe.module.scss";
import { BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";
const Recipe = ({ recipe }) => {
  const PF = "http://localhost:8000/images/";
  return (
    <Link to={`/recipe/${recipe._id}`} className={styles.recipeLink}>
      <div className={styles.recipeWrapper}>

          <img
            alt="recipe"
            src={PF + recipe.photo}
            className={styles.recipeImage}
          ></img>
 
        <div className={styles.postDetail}>
          <p className={styles.postUser}>
            <BiUser />{" "}
            <Link
              to={`/recipes/${recipe.username}`}
              className={styles.username}
            >
              {recipe.username}
            </Link>
          </p>
          <p className={styles.postDate}>
            {new Date(recipe.createdAt).toDateString()}
          </p>
        </div>
        <div className={styles.postText}>
          <p className={styles.recipeTitle}>{recipe.title}</p>
        </div>
      </div>{" "}
    </Link>
  );
};

export default Recipe;
