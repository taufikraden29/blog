import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>KUHAKU</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: 8,
          }}
          to="/create"
        >
          New Blog
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
