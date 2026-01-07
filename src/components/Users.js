import React from "react";
import { users } from "../data";
import { Link } from "react-router-dom";

export default function UserPosts() {
  return (
    <div>
      {users.map((user) => (
        <div key={user.id} className="user-item">
          <Link to={`/users/${user.id}`}>{user.name}</Link>
        </div>
      ))}
    </div>
  );
}

