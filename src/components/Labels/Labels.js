import React from "react";
import styles from "./labels.module.css";

const Labels = ({ issueLabels }) => {
  return (
    <div>
      {issueLabels.map((label) => {
        return <span className={styles.labels}>{label}</span>;
      })}
    </div>
  );
};

export default Labels;
