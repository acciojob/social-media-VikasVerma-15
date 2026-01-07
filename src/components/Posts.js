import React from "react";
import { useState } from "react";
import { users, initialPosts } from "../data";
import CreatePost from "./CreatePost";

export default function Posts() {
  const [posts, setPosts] = useState(initialPosts);

  return (
    <div className="posts-list">
      {/* child(1) */}
      <CreatePost setPosts={setPosts} users={users} />

      {posts.map((post) => (
        // child(2)
        <div key={post.id}>
          {/* child(1) */}
          <p>{post.title}</p>

          {/* child(2) */}
          <a className="button" href={`/posts/${post.id}`}>
            Edit
          </a>

          {/* child(3) — EMPTY placeholder (IMPORTANT) */}
          <div></div>

          {/* child(4) — reactions container */}
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
