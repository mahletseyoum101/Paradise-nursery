import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import AboutUs from "./AboutUs";

function App() {
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="nav-logo">
          Paradise Nursery 🌿
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/plants">Plants</Link>
          <Link to="/cart">Cart</Link>
        </div>
      </nav>

      <main>
        <section className="landing-page">
          <div className="landing-content">
            <h1>Paradise Nursery</h1>

            <p>
              Discover beautiful plants and bring a little more nature
              into your everyday life.
            </p>

            <Link to="/plants">
              <button className="get-started-btn">
                Get Started
              </button>
            </Link>
          </div>
        </section>

        <AboutUs />
      </main>
    </>
  );
}

export default App;
