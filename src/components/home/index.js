import React from "react";
import "./home.css";
import { Navigate } from "react-router-dom";
const Home = () => {
  return (
    <>
      <h2>Home page component</h2>
      <div className="menu-dev">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
        </ul>
      </div>
    </>
  );
};
export default Home;
