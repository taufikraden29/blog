import React from "react";
import "./index.css";
import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Create from "./Create";
import BlogDetail from "./BlogDetail";

function App() {
  const title = "Welcome To My Blog";
  const like = 50;

  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
          <div className="content">
            <Routes>
              {/* Corrected the route to include a path and element */}
              <Route exacth path="/" element={<Home />} />
            </Routes>
            <Routes>
              {/* Corrected the route to include a path and element */}
              <Route path="/create" element={<Create />} />
            </Routes>
            <Routes>
              {/* Corrected the route to include a path and element */}
              <Route path="/blogs/:id" element={<BlogDetail />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
