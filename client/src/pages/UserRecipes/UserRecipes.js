import React from "react";
import Recipe from "../../components/Recipe/Recipe";
import styles from "./UserRecipes.module.scss";
import {useParams } from 'react-router-dom';
import { useGetUserRecipesQuery } from "../../app/features/recipe/recipeApi";

const UserRecipes = () => {
    const {user} = useParams();
  const { data: recipes, isLoading } = useGetUserRecipesQuery(user);

  if (isLoading) {
    return <div>Loading</div>;
  }


  return (
    <div className={styles.container}>
      <span className={styles.header}></span>
      <div className={styles.titleContainer}>
        <h1 className={styles.name}>{user}'s Recipes</h1>
      </div>
      <div className={styles.recipes}>
        {recipes.map((recipe) => (
          <Recipe  key={recipe._id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default UserRecipes;
