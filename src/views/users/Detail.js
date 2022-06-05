import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

function Detail(props) {
  const [user, setUser] = useState([]);
  let { id } = useParams();
  const [query, setQuery] = useSearchParams();

  const getUser = async () => {
    try {
      let res = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      setUser(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUser();
  },[]);

  return <div>{user.name}</div>;
}

export default Detail;
