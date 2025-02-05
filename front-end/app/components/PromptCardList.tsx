import React from "react";
import PromptCard from "./PromptCard";
const PromptCardList = ({ prompts }) => {
  if (!prompts || prompts.length === 0) {
    return <div>No prompts available</div>;
  }

  return (
    <div className="mt-16 prompt_layout">
      {prompts.map((item) => (
        <div key={item._id}>
          <PromptCard post={item} />
        </div>
      ))}
    </div>
  );
};

export default PromptCardList;
