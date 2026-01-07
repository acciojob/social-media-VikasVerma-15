import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Posts from "./pages/Posts";
import Users from "./pages/Users";
import Notifications from "./pages/Notifications";
import PostDetails from "./pages/PostDetails";
import UserPosts from "./pages/UserPosts";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>GenZ</h1>

        {/* REQUIRED ANCHORS */}
        <a href="/">Posts</a>
        <a href="/users">Users</a>
        <a href="/notifications">Notifications</a>

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
