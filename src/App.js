import "./styles.css";
import React from "react";
import User from "./components/Users";
import Post from "./components/Posts";
export default function App() {
  return (
    <div className="App">
      <User />
      <Post />
    </div>
  );
}
