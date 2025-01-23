import React, { useState } from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

const Comment = ({
  comment,
  postId,
  onAddComment,
  onUpdateCommentCounters,
}: any) => {
  const [newReply, setNewReply] = useState("");
  const [showReplies, setShowReplies] = useState(false);

  const handleAddReply = () => {
    if (newReply.trim()) {
      onAddComment(postId, newReply, comment.id);
      setNewReply("");
    }
  };

  const getButtonLabel = () => {
    if (showReplies) return "Hide Replies";
    if (comment.comments.length > 0) return "View Replies";
    return "Reply";
  };

  return (
    <div className="comment">
      <div className="comment-content">
        <p>{comment.content}</p>
        <div className="comment-actions">
          <button onClick={() => onUpdateCommentCounters(postId, comment.id, "likes")}>
            <FaThumbsUp /> Like ({comment.likes})
          </button>
          <button onClick={() => onUpdateCommentCounters(postId, comment.id, "dislikes")}>
            <FaThumbsDown /> Dislike ({comment.dislikes})
          </button>
          <button onClick={() => setShowReplies(!showReplies)}>
            {getButtonLabel()}
          </button>
        </div>
      </div>
      {showReplies && (
        <div className="replies">
          {comment.comments.map((reply: any) => (
            <Comment
              key={reply.id}
              comment={reply}
              postId={postId}
              onAddComment={onAddComment}
              onUpdateCommentCounters={onUpdateCommentCounters}
            />
          ))}
          <div className="add-reply">
            <input
              type="text"
              value={newReply}
              onChange={(e) => setNewReply(e.target.value)}
              placeholder="Add a reply..."
            />
            <button onClick={handleAddReply}>Reply</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Comment;
