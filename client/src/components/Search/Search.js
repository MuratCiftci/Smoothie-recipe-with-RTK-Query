import { useState } from "react";
import styles from "./Search.module.scss";
import { Button } from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigateSearch } from "../../hooks/useNavigateSearch";

const Search = () => {
  const [searchedTerm, setSearchedTerm] = useState("");

  let navigate = useNavigateSearch();
  const handleSearch = () => {
    navigate("recipes", { search: searchedTerm });
    setSearchedTerm("");
  };
  return (
    <div className={styles.searchWrapper}>
      <input
        className={styles.searchInput}
        placeholder="Search the recipes you are looking for"
        value={searchedTerm}
        onChange={(e) => setSearchedTerm(e.target.value)}
      />
      <Button onClick={handleSearch} className={styles.searchButton} colorScheme="teal" variant="ghost" >
        <AiOutlineSearch />
      </Button>
    </div>
  );
};

export default Search;
