// App.tsx
import React, { useState } from "react";
import Post from "./components/Post.tsx";
import CreatePost from "./components/CreatePost.tsx";
import "./styles/App.scss";

const App: React.FC = () => {
  const [posts, setPosts] = useState<
    {
      id: number;
      content: string;
      image?: string;
      likes: number;
      dislikes: number;
      shares: number;
      comments: any[];
    }[]
  >([]);

  const addPost = (content: string, image?: File) => {
    const newPost = {
      id: Date.now(),
      content,
      image: image ? URL.createObjectURL(image) : undefined,
      likes: 0,
      dislikes: 0,
      shares: 0,
      comments: [],
    };
    setPosts([newPost, ...posts]);
  };

  const addComment = (
    postId: number,
    content: string,
    parentId?: number
  ) => {
    const updateComments = (comments: any[]) =>
      comments.map((comment) =>
        comment.id === parentId
          ? {
              ...comment,
              comments: [
                ...comment.comments,
                { id: Date.now(), content, comments: [], likes: 0, dislikes: 0 },
              ],
            }
          : { ...comment, comments: updateComments(comment.comments) }
      );

    setPosts(
      posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: parentId
                ? updateComments(post.comments)
                : [
                    ...post.comments,
                    {
                      id: Date.now(),
                      content,
                      comments: [],
                      likes: 0,
                      dislikes: 0,
                    },
                  ],
            }
          : post
      )
    );
  };

  const updatePostCounters = (
    postId: number,
    action: "likes" | "dislikes" | "shares"
  ) => {
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              [action]: post[action] + 1,
            }
          : post
      )
    );
  };

  const updateCommentCounters = (
    postId: number,
    commentId: number,
    action: "likes" | "dislikes"
  ) => {
    const updateNestedComments = (comments: any[]) =>
      comments.map((comment) =>
        comment.id === commentId
          ? { ...comment, [action]: comment[action] + 1 }
          : { ...comment, comments: updateNestedComments(comment.comments) }
      );

    setPosts(
      posts.map((post) =>
        post.id === postId
          ? { ...post, comments: updateNestedComments(post.comments) }
          : post
      )
    );
  };

  return (
    <div className="app-container">
      <h1>Community Platform</h1>
      <CreatePost onAddPost={addPost} />
      {posts.map((post) => (
        <Post
          key={post.id}
          post={post}
          onAddComment={addComment}
          onUpdatePostCounters={updatePostCounters}
          onUpdateCommentCounters={updateCommentCounters}
        />
      ))}
    </div>
  );
};

export default App;