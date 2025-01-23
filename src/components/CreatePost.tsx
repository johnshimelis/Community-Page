import React, { useState } from "react";

interface CreatePostProps {
  onAddPost: (content: string, image?: File) => void;
}

const CreatePost: React.FC<CreatePostProps> = ({ onAddPost }) => {
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = () => {
    if (content.trim()) {
      onAddPost(content, image);
      setContent("");
      setImage(null);
    }
  };

  return (
    <div className="create-post">
      <textarea
        placeholder="Write something..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
      />
      <button onClick={handleSubmit}>Post</button>
    </div>
  );
};

export default CreatePost;
