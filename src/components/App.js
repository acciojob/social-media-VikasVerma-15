import React from "react";
import Posts from "./Posts";
import Users from "./Users";
import Notifications from "./Notifications";

export default function App() {
  const path = window.location.pathname;

  return (
    <div className="App">
      <h1>GenZ</h1>

      <a className="button" href="/">Posts</a>
      <a className="button" href="/users">Users</a>
      <a className="button" href="/notifications">Notifications</a>

      {path === "/" && <Posts />}
      {path === "/users" && <Users />}
      {path === "/notifications" && <Notifications />}
    </div>
  );
}
