import React from "react";
import styles from "./issue.module.css";
import Labels from "../Labels/Labels.js";

const Issue = ({ issueData }) => {
  const { title, description, labels } = issueData;
  return (
    <div className={styles.issue}>
      <h1>{title}</h1>
      <span className={styles.description}>{description}</span>
      <Labels issueLabels={labels} />
    </div>
  );
};

export default Issue;
