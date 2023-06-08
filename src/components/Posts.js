import React from "react";
import HigherOrder from "./HigherOrder";

function Posts({ data }) {
  return (
    <>
      <h1>Hello Posts Section</h1>
      {data.slice(0, 10).map((user) => {
        return (
          <>
            <h1>{user.id} </h1>
            <h1>{user.title} </h1>
            <h1>{user.body} </h1>
          </>
        );
      })}
    </>
  );
}

const postsComp = HigherOrder("Posts", Posts, "posts");
export default postsComp;
