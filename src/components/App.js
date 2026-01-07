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
      <div className="App">
        <h1>GenZ</h1>

        <nav>
          <Link to="/">Posts</Link>
          <Link to="/users">Users</Link>
          <Link to="/notifications">Notifications</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/users" element={<Users />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route path="/users/:id" element={<UserPosts />} />
        </Routes>
      </div>
    </Router>
  );
}

