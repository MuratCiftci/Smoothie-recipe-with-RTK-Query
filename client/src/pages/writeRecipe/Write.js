import styles from "./Write.module.scss";
import { useReducer, useState} from "react";
import { useAuth } from "../../hooks/useAuth";
import axios from "axios";
import { useAddRecipeMutation } from "../../app/features/recipe/recipeApi";
import { AiFillPlusCircle,AiOutlineDelete } from "react-icons/ai";
import ErrorMessage from "../../components/Error";
import reducer from "../../hooks/useRecipeReducer";
import { useNavigate } from "react-router";
export default function Write() {
  let navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const [ingredients, dispatch] = useReducer(reducer, []);
  const [newIngredient, setNewIngredient] = useState("");
  const { user } = useAuth();
  const [recipe, { isLoading }] = useAddRecipeMutation();
  const [error, setError] = useState([]);
  console.log(ingredients);
  if (error) {
    console.log("aaaa");
  }
  const handleAddClick = () => {
    if (newIngredient === "") {
      return;
    }
    dispatch({ type: "add", item:  newIngredient  });
    setNewIngredient("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newRecipe = {
      username: user.username,
      title,
      desc,
      ingredients,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newRecipe.photo = filename;
      try {
        await axios.post("http://localhost:8000/api/upload", data);
      } catch (err) {}
    }
    try {
      const res = await recipe(newRecipe).unwrap();
      navigate(`/recipe/${res._id}`)
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className={styles.write}>
      <h1 className={styles.pageTitle}>Add Recipe</h1>
      {file && (
        <img
          className={styles.writeImg}
          src={URL.createObjectURL(file)}
          alt=""
        />
      )}

      <form className={styles.writeForm} onSubmit={handleSubmit}>
        {error.length !== 0 && <ErrorMessage message={error} />}
        <div className={styles.writeFormGroup}>
          <label classname={styles.upload} htmlFor="fileInput">
            <AiFillPlusCircle />
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Title"
            className={styles.writeInput}
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={styles.writeFormGroup}>
          <textarea
            placeholder="Description.."
            type="text"
            className={styles.writeText}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
      
        <button className={styles.writeSubmit} type="submit">
          Publish
        </button>
      </form>
      <div className={styles.ingredients}>
          <input
            className={styles.ingredientInput}
            type="text"
            value={newIngredient}
            onChange={(e) => setNewIngredient(e.target.value)}
          />
          <button  className={styles.ingredientButton} type="button" onClick={handleAddClick}>
            Add ingredient
          </button>
        </div>
        {ingredients.map((ingredient, index) => {
          return (
            <div className={styles.ingredients}>
              <span className={styles.ingredientName}>{ingredient}</span>
              <button onClick={() => dispatch({ type: "remove", index })}>
                <AiOutlineDelete />
              </button>
            </div>
          );
        })}
    </div>
  );
}
