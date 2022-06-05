import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { theme } from "../../store";
import {useRecoilState} from 'recoil'

function Users(props) {
  const [users, setUsers] = useState([]);
  const [currentTheme, setCurrentTheme] = useRecoilState(theme);
  const themeClass = currentTheme == true ? "bg-dark text-white" : "bg-white text-dark";


  const getUsers = async () => {
    try {
      let res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {users.map((user) => {
          return (
            <div className="col-md-4 mb-4" key={user.id}>
              <div className={`card ${themeClass}`}>
                <div className="card-header">{user.name}</div>
                <div className="card-body">
                  <div className="mb-2">
                    <a href={`/${user.website}`} target="_blank">
                      {user.website}
                    </a>
                  </div>
                  <NavLink
                    className="btn btn-primary btn-sm"
                    to={`/users/${user.id}`}
                  >
                    View profile
                  </NavLink>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Users;
