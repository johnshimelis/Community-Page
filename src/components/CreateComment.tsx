import React, { useState } from "react";

interface CreateCommentProps {
  onAddComment: (content: string) => void;
}

const CreateComment: React.FC<CreateCommentProps> = ({ onAddComment }) => {
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    if (content.trim()) {
      onAddComment(content);
      setContent("");
    }
  };

  return (
    <div className="create-comment">
      <textarea
        placeholder="Write a comment..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={handleSubmit}>Comment</button>
    </div>
  );
};

export default CreateComment;
