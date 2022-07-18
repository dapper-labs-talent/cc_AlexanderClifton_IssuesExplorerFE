import React, { useState } from "react";
import styles from "./App.module.css";
import SearchBar from "./components/SearchBar/SearchBar.js";
import Results from "./components/ResultsPage/ResultsPage.js";

const DEFAULT_REPO = "https://github.com/monero-ecosystem/PiNode-XMR";
export default function App() {
  const [repo, setRepo] = useState(DEFAULT_REPO);
  return (
    <div className={styles.App}>
      {!repo ? <SearchBar setRepo={setRepo} /> : <Results repo={repo} />}
    </div>
  );
}
