import React from "react";
import { users } from "../data";

export default function Users() {
  return (
    <ul>
      {users.map((u) => (
        <li key={u.id}>
          <a href={`/users/${u.id}`}>{u.name}</a>
        </li>
      ))}
    </ul>
  );
}
