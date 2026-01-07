import React, { useState } from "react";
import { users, initialPosts } from "../data";
import CreatePost from "./CreatePost";

export default function Posts() {
  const [posts, setPosts] = useState(initialPosts);

  return (
    <div className="posts-list">
      <CreatePost setPosts={setPosts} users={users} />

      {posts.map((post) => (
  <div className="post" key={post.id}>
    <p>{post.title}</p>
    <a className="button" href={`/posts/${post.id}`}>Edit</a>
    <div></div> {/* placeholder */}
    <div>
      {post.reactions.map((r, i) => (
        <button
          key={i}
          onClick={() => {
            const updated = [...posts];
            updated[0].reactions[i]++;
            setPosts(updated);
          }}
        >
          {r}
        </button>
      ))}
    </div>
  </div>
))}

    </div>
  );
}

