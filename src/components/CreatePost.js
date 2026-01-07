import React, { useState } from "react";

export default function CreatePost({ setPosts, users }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content || !author) return; // prevent empty submissions

    setPosts((p) => [
      ...p,
      {
        id: Date.now().toString(),
        title,
        content,
        author,
        reactions: [0, 0, 0, 0, 0],
      },
    ]);

    // Clear inputs
    setTitle("");
    setContent("");
    setAuthor("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="postTitle"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Post Title"
      />
      <select
        id="postAuthor"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      >
        <option value="">Select Author</option>
        {users.map((u) => (
          <option key={u.id} value={u.id}>
            {u.name}
          </option>
        ))}
      </select>
      <textarea
        id="postContent"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Post Content"
      />
      <button type="submit">Add Post</button>
    </form>
  );
}

