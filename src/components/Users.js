import React from "react";
import HigherOrder from "./HigherOrder";

function Users({ data }) {
  return (
    <>
      <h1> Hello User Section</h1>
      {data.slice(0, 10).map((users) => {
        return <p>{users.name}</p>;
      })}
    </>
  );
}
const UsersComp = HigherOrder("Users", Users, " users");
export default UsersComp;
