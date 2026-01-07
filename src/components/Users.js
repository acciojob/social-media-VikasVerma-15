import React from "react";
import { users } from "../data";
import { Link } from "react-router-dom";
export default function Users() {
  return (
    <ul>
      {users.map((user) => (
       <li key={user.id}>
  <Link to={`/users/${user.id}`}>{user.name}</Link>
</li>
      ))}
    </ul>
  );
}
