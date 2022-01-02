import SingleRecipeDetail from '../../components/RecipeDetail/SingleRecipeDetail'
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import {useGetRecipeQuery} from '../../app/features/recipe/recipeApi'
const RecipeDetailPage = () => {
  const { id } = useParams();
  const {data: recipe, isLoading} = useGetRecipeQuery(id);
  if (!recipe) return <div>Missing recipe!</div>
    return (
        <div>
            <SingleRecipeDetail  isLoading={isLoading} recipe={recipe} />
        </div>
    )
}

export default RecipeDetailPage
