import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Posts from "./Posts";
import Users from "./Users";
import UserPosts from "./UserPosts";
import Notifications from "./Notifications";
import PostDetails from "./PostDetails";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>GenZ</h1>

        <nav>
          <a href="/">Posts</a>
          <a href="/users">Users</a>
          <a href="/notifications">Notifications</a>
        </nav>

        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<UserPosts />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/posts/:id" element={<PostDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
