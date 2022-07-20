import React, { useState } from "react";
import styles from "./searchbar.module.css";
import { ReactComponent as SearchIcon } from "../../_assets/icons/search.svg";
const SearchBar = ({ setRepo }) => {
  const [inputValue, setInputValue] = useState("foo");

  const handleSubmit = (e) => {
    // setRepo(inputValue);
    // setInputValue("");
    e.preventDefault();
    fetch("https://api.github.com/repos/monero-ecosystem/PiNode-XMR")
      .then((res) => res.json())
      .then((res) => {
        console.log("!!! here is the response", res);
      })
      .catch((e) => {
        console.log("!!! ERRORZ", e);
      });
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
    <div className={styles.searchPage}>
      <h1 className={styles.appHeader}>Github Issue Viewer</h1>

      <div className={styles.searchbar}>
        <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
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
    </div>
  );
};

export default SearchBar;
