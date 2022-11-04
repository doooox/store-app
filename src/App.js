import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import Routes from "./Routes.js";

function App() {
  return (
    <div >
      <nav>
        <ul className="nav">
          <li>
            <Link to="/customers" className="nav-link">Customers</Link>
          </li>
          <li>
            <Link to="/products" className="nav-link">Products</Link>
          </li>
        </ul>
      </nav>
      <Routes />
    </div>
  );
}

export default App;
