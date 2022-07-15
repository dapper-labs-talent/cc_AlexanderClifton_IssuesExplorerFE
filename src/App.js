import React, { useState } from "react";
import styles from "./App.module.css";
import SearchBar from "./components/SearchBar/SearchBar.js";
export default function App() {
  return (
    <div className={styles.App}>
      <h1 className={styles.appHeader}>Github Issue Viewer</h1>
      <SearchBar />
    </div>
  );
}
