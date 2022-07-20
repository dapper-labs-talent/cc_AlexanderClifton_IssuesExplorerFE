import React, { useState } from "react";
import styles from "./App.module.css";
import SearchBar from "./components/SearchBar/SearchBar.js";
import Results from "./components/ResultsPage/ResultsPage.js";

const DEFAULT_REPO = "https://github.com/monero-ecosystem/PiNode-XMR";
export default function App() {
  const [repo, setRepo] = useState("");
  return (
    <div className={styles.App}>
      {!repo ? (
        <SearchBar setRepo={setRepo} />
      ) : (
        <Results repo={repo} setRepo={setRepo} />
      )}
    </div>
  );
}

/*
I've already put too much time into this.
As I assumed, struggling with the Github API is the hardest part.
I need a new gig asap so I'm not going to work any harder on this.

I don't have the issues call working or the filters.
- Alex

 */
