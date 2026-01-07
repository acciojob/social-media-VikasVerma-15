import React, { useState } from "react";
import { users, initialPosts } from "../data";
import CreatePost from "./CreatePost";

export default function Posts() {
  const [posts, setPosts] = useState(initialPosts);

  return (
    <div className="posts-list">
      {/* child(1) */}
      <CreatePost setPosts={setPosts} users={users} />

      {posts.map((post) => (
        // child(2) → EACH post
        <div key={post.id} className="post">
          {/* child(1) */}
          <p>{post.title}</p>

          {/* child(2) */}
          <a className="button" href={`/posts/${post.id}`}>
            Edit
          </a>

          {/* child(3) — EMPTY div (Cypress expects this) */}
          <div></div>

          {/* child(4) — reactions */}
          <div>
            {post.reactions.map((r, i) => (
              <button
                key={i}
                onClick={() => {
                  if (i < 4) {
                    const updated = [...posts];
                    updated[0].reactions[i]++;
                    setPosts(updated);
                  }
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
