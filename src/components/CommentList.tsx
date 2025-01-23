import React, { useState } from "react";
import Comment from "../components/Comment.tsx";

interface CommentListProps {
  comments: any[];
  postId: number;
  onAddComment: (postId: number, content: string, parentId?: number) => void;
  onUpdateCommentCounters: (
    postId: number,
    commentId: number,
    action: "like" | "dislike"
  ) => void;
}

const CommentList: React.FC<CommentListProps> = ({
  comments,
  postId,
  onAddComment,
  onUpdateCommentCounters,
}) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggleReplies = () => setExpanded(!expanded);

  return (
    <div className="comment-list">
      {comments.length > 0 && (
        <button onClick={handleToggleReplies}>
          {expanded ? "Hide Replies" : "View Replies"}
        </button>
      )}
      {expanded &&
        comments.map((comment) => (
          <Comment
            key={comment.id}
            comment={comment}
            postId={postId}
            onAddComment={onAddComment}
            onUpdateCommentCounters={onUpdateCommentCounters}
          />
        ))}
    </div>
  );
};

export default CommentList;
