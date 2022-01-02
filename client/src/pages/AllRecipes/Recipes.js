import React, { useEffect, useState } from "react";
import Recipe from "../../components/Recipe/Recipe";
import styles from "./Recipes.module.scss";
import { useGetAllRecipesQuery } from "../../app/features/recipe/recipeApi";
import { useSearchParams } from "react-router-dom";
const Recipes = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  let searchedTerm = searchParams.get("search");
  useEffect(() => {
   if(searchedTerm){
     setSearch(searchedTerm);
   }else{
     setSearch("");
   }
  }, [searchedTerm]);
  const { data: recipes, isLoading } = useGetAllRecipesQuery(search);
  console.log(recipes)
  if (isLoading) {
    return <div>Loading</div>;
  }
  if (recipes.length === 0) {
    return <div>Not found</div>;
  }

  return (
    <div className={styles.container}>
      <span className={styles.header}></span>
      <div className={styles.titleContainer}>
        <h1 className={styles.name}>Recipes</h1>
      </div>
      <div className={styles.recipes}>
        {recipes.map((recipe) => (
          <Recipe key={recipe._id} recipe={recipe} isLoading={isLoading} />
        ))}
      </div>
    </div>
  );
};

export default Recipes;
