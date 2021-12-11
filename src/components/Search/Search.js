import React from "react";
import styles from "./Search.module.scss";
const Search = () => {
  return (
    <div className={styles.searchWrapper}>
      <input
        className={styles.searchInput}
        placeholder="Search the recipes you are looking for"
      />
      <div className={styles.SearchIcon}></div>
    </div>
  );
};

export default Search;
