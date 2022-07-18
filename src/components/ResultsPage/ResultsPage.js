import React from "react";
import styles from "./resultsPage.module.css";
import Filters from "../Filters/Filters.js";
import { ReactComponent as Close } from "../../_assets/icons/close.svg";
const ResultsPage = ({ repo }) => {
  return (
    <div className={styles.resultsPage}>
      <div className={styles.headerSection}>
        <h1 className={styles.title}>Github Issue Viewer</h1>
        <a className={styles.repo} href="https://www.google.com">
          {repo}
        </a>
      </div>
      <div className={styles.filterWrapper}>
        <Filters />
        <Close className={styles.closeIcon} />
      </div>
    </div>
  );
};

export default ResultsPage;
