import React from "react";
import { users } from "../data";

export default function Users() {
  return (
    <ul className="users-list">
      {users.map((user) => (
        <li key={user.id}>
          <a href={`/users/${user.id}`}>{user.name}</a>
        </li>
      ))}
    </ul>
  );
}
