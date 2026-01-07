import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Posts from "./Posts";
import Users from "./Users";
import Notifications from "./Notifications";
import PostDetails from "./PostDetails";
import UserPosts from "./UserPosts";

export default function App() {
  return (
    <Router>
      <h1>Shopping Cart</h1>

      <nav>
        <a href="/">Posts</a>
        <a href="/users">Users</a>
        <a href="/notifications">Notifications</a>
        <a href="/posts/1">Post Details</a>
      </nav>

      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:userId" element={<UserPosts />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/posts/:postId" element={<PostDetails />} />
      </Routes>
    </Router>
  );
}
