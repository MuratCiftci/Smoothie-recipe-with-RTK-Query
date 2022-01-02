import { useAuth } from "../../hooks/useAuth";
import styles from "./SingleRecipeDetail.module.scss";
import { AiOutlineEdit, AiOutlineDelete, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import {
  useUpdateRecipeMutation,
  useDeleteRecipeMutation,
} from "../../app/features/recipe/recipeApi";
import { Button, useToast, IconButton } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
const RecipeDetail = ({ recipe, isLoading }) => {
  const PF = "http://localhost:8000/images/";
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(recipe.title);
  const [desc, setDesc] = useState(recipe.desc);
  const [updateRecipe, { isLoading: isUpdating }] = useUpdateRecipeMutation();
  const [deleteRecipe, { isLoading: isDeleting }] = useDeleteRecipeMutation();
  const toast = useToast();
  const navigate = useNavigate();

  if (isLoading) return <div>Loading..</div>;

  const handleUpdate = async (_id, title, desc) => {
    try {
      await updateRecipe({ _id, title, desc }).unwrap();
    } catch (err) {
      toast({
        title: "An error occurred",
        description: "We couldn't save your changes, try again!",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    } finally {
      setIsEditing(false);
    }
  };
  const onCancel = () => {
    setIsEditing(false);
    setTitle(recipe.title);
    setDesc(recipe.desc);
  };

  if (recipe) {
    return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          {isEditing ? (
            <div className={styles.recipeTitle}>
              <input
                type="text"
                value={title}
                className={styles.titleInput}
                autoFocus
                onChange={(e) => setTitle(e.target.value)}
              />
              <Button
                onClick={() => handleUpdate(recipe._id, title, desc)}
                isLoading={isUpdating}
              >
                Update
              </Button>

              <AiOutlineClose
                className={styles.cancelButton}
                onClick={onCancel}
              />
            </div>
          ) : (
            <div className={styles.recipeTitle}>
              {" "}
              {recipe.title}{" "}
              {recipe.username === user?.username && (
                <div className={styles.buttons}>
                  <IconButton
                  colorScheme="linkedin"
                    size="lg"
                    mr={5}
                    variant="ghost"
                    onClick={() => setIsEditing(true)}
                    icon={<AiOutlineEdit className={styles.editIcon} />}
                  />
                  <IconButton
                    colorScheme="red"
                    variant="ghost"
                    size="lg"
                    icon={<AiOutlineDelete className={styles.deleteIcon} />}
                    onClick={() =>
                      deleteRecipe(recipe._id).then(() => navigate("/recipes"))
                    }
                    disabled={isDeleting}
                  />
                </div>
              )}{" "}
            </div>
          )}

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
          {isEditing ? (
            <div className={styles.description}>
              <textarea
                className={styles.description}
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
            </div>
          ) : (
            <div className={styles.description}>{recipe.desc}</div>
          )}
        </div>
      </div>
    );
  }
};

export default RecipeDetail;
