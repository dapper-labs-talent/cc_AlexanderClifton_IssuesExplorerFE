import React from "react";
import styles from "./filters.module.css";

const Filters = () => {
  return (
    <div className={styles.filters}>
      <span>All Issues</span>
      <span>Open Issues</span>
      <span>Closed Issues</span>
      <span>Pull Requests</span>
    </div>
  );
};

export default Filters;
