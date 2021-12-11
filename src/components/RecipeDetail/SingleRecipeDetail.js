import React from "react";
import styles from "./SingleRecipeDetail.module.scss";
const RecipeDetail = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.recipeTitle}>Dummy Recipe Title</div>
        <div className={styles.content}>
          <img
            className={styles.recipeImage}
            src={"./recipedetail.jpg"}
            alt="recipe"
          />
          <div className={styles.ingredientContainer}>
            <h3 className={styles.ingTitle}>Ingredient</h3>
            <section className={styles.ingredientsList}>
              <li className={styles.ingredient}>Banana</li>
              <li className={styles.ingredient}>Chia seeds</li>
              <li className={styles.ingredient}>Peanut Butter</li>
              <li className={styles.ingredient}>Milk</li>
              <li className={styles.ingredient}>Oatmeal</li>
            </section>
          </div>
        </div>
        <div className={styles.description}>
          Combine bananas, pineapple, almond butter, and chia seeds in a
          blender; add water. Blend until smooth.
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
