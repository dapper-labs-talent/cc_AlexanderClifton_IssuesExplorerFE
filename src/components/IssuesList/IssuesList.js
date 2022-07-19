import React from "react";
import Issue from "../Issue/Issue.js";
import styles from "./issueslist.module.css";

const IssuesList = () => {
  const issues = [
    { title: "foo", description: "sam", labels: ["label1", "label2"] },
    { title: "foo", description: "sam", labels: ["label1", "label2"] },
    { title: "foo", description: "sam", labels: ["label1", "label2"] },
    { title: "foo", description: "sam", labels: ["label1", "label2"] },
  ];
  return (
    <div className={styles.issuesList}>
      {issues.map((issue) => {
        return <Issue issueData={issue} />;
      })}
    </div>
  );
};

export default IssuesList;
