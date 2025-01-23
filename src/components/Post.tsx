// Updated Post.tsx
import React, { useState } from "react";
import { FaThumbsUp, FaThumbsDown, FaShare } from "react-icons/fa";
import Comment from "../components/Comment.tsx";

const Post = ({
  post,
  onAddComment,
  onUpdatePostCounters,
  onUpdateCommentCounters,
}: any) => {
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim()) {
      onAddComment(post.id, newComment);
      setNewComment("");
    }
  };

  return (
    <div className="post">
      <div className="post-content">
        <p className="post-caption">{post.content}</p>
        {post.image && <img src={post.image} alt="Post" className="post-image" />}
      </div>
      <div className="post-actions">
        <button onClick={() => onUpdatePostCounters(post.id, "likes")}>
          <FaThumbsUp /> Like ({post.likes})
        </button>
        <button onClick={() => onUpdatePostCounters(post.id, "dislikes")}>
          <FaThumbsDown /> Dislike ({post.dislikes})
        </button>
        <button onClick={() => onUpdatePostCounters(post.id, "shares")}>
          <FaShare /> Share ({post.shares})
        </button>
      </div>
      <div className="add-comment">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
        />
        <button onClick={handleAddComment}>Comment</button>
      </div>
      <div className="comments-section">
        {post.comments.map((comment: any) => (
          <Comment
            key={comment.id}
            comment={comment}
            postId={post.id}
            onAddComment={onAddComment}
            onUpdateCommentCounters={onUpdateCommentCounters}
          />
        ))}
      </div>
    </div>
  );
};

export default Post;
