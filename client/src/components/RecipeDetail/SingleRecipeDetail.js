import React from "react";
import styles from "./SingleRecipeDetail.module.scss";

const RecipeDetail = ({ recipe, isLoading }) => {
  const PF = "http://localhost:8000/images/";

  if (isLoading) return <div>Loading..</div>;

  if (recipe) {
    return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.recipeTitle}>{recipe.title}</div>
          <div className={styles.content}>
            <img
              className={styles.recipeImage}
              src={PF + recipe.photo}
              alt="recipe"
            />
              <div className={styles.ingredientContainer}>
                <h3 className={styles.ingTitle}>Ingredients</h3>
                <section className={styles.ingredientsList}>
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className={styles.ingredient}>
                      {ingredient}
                    </li>
                  ))}
                </section>
              </div>
              
          </div>
          <div className={styles.description}>
            <p className={styles.descTitle}>Directions</p>
            {recipe.desc}</div>
        </div>
      </div>
    );
  }
};

export default RecipeDetail;
