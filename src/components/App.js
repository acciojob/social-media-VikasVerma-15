import React from "react";
import Posts from "./Posts";
import Users from "./Users";
import Notifications from "./Notifications";

export default function App() {
  const path = window.location.pathname;

  return (
    <div className="App">
      <h1>GenZ</h1>

      <a href="/">Posts</a>
      <a href="/users">Users</a>
      <a href="/notifications">Notifications</a>

      {path === "/" && <Posts />}
      {path === "/users" && <Users />}
      {path === "/notifications" && <Notifications />}
    </div>
  );
}
