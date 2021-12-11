import React from "react";
import Recipe from "../Recipe/Recipe";
import styles from "./Recipes.module.scss";
const Recipes = ({ title }) => {
  return (
    <div className={styles.recipeContainer}>
      <div className={styles.containerTitle}>{title}<p>{`View all ${title} Recipes --> `}</p></div>
      <div className={styles.recipeDetails}>
        <Recipe />
        <Recipe />
        <Recipe />
      </div>
    </div>
  );
};

export default Recipes;
