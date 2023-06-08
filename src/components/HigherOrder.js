import React from "react";
import { useEffect, useState } from "react";
export default function HigherOrder(title, Component, request) {
  return function HOC() {
    const [data, setData] = useState([]);
    const getUserData = async () => {
      let data = await fetch(`https://jsonplaceholder.typicode.com/${request}`)
        .then((res) => {
          return res;
        })
        .catch((err) => {
          return err;
        });
      setData(await data.json());
    };
    useEffect(() => {
      getUserData();
    }, []);
    return (
      <>
        <h1>{title}</h1>
        <Component data={data} />
      </>
    );
  };
}
