import React from "react";

const Labels = ({ issueLabels }) => {
  return (
    <div>
      {issueLabels.map((label) => {
        return <span>{label}</span>;
      })}
    </div>
  );
};

export default Labels;
