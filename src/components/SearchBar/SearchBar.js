import React, { useState } from "react";
import styles from "./searchbar.module.css";
import { ReactComponent as SearchIcon } from "../../_assets/icons/search.svg";
const SearchBar = () => {
  const [inputValue, setInputValue] = useState("foo");

  const handleSubmit = () => {
    setInputValue("");
  };
  const handleChange = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  const handleFocus = () => {
    if (inputValue === "foo") {
      setInputValue("");
    }
  };
  return (
    <div className={styles.searchbar}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <button className={styles.button} type="submit">
          <SearchIcon className={styles.icon} />
        </button>
        <input
          onChange={(event) => handleChange(event)}
          className={styles.input}
          value={inputValue}
          onFocus={handleFocus}
        />
      </form>
    </div>
  );
};

export default SearchBar;
