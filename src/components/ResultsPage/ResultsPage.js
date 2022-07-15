import React from "react";
import styles from "./resultsPage.module.css";
const ResultsPage = ({ userQuery }) => {
  return (
    <div className={styles.resultsPage}>
      <div className={styles.headerSection}>
        <h1 className={styles.title}>Github Issue Viewer</h1>
        <a href="https://www.google.com">{userQuery}</a>
      </div>
    </div>
  );
};

export default ResultsPage;
