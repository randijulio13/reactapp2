import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar";
import Home from "../views/Home";
import About from "../views/About";
import UsersIndex from "../views/users/Index";
import UsersDetail from "../views/users/Detail";
import NotFound from "../views/errors/NotFound";

function index(props) {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <NavBar>
            <Outlet />
          </NavBar>
        }
      >
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<UsersIndex />} />
        <Route path="/users/:id" element={<UsersDetail />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default index;
