// Import necessary components
import React from 'react';
import App2 from './App2';
import PersonalizedLearningPlatform from './PathForge';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

const imagePath2 = '/Olivia Wilson (3).png';

// Navbar component
function Navbar() {
  return (
    <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
      <center />
      <div className="container-fluid">
        <a className="navbar-brand" href="/"><img src={imagePath2} className="logo" alt="..." /></a>
        <div className="scrollmenu" style={{ Align: "center" }}>
          <Link to="/PathForge">Path Forge</Link>
          <Link to="#news">EduHub</Link>
          <Link to="#about">MultiLingo</Link>
          <Link to="#contact">LabGuide</Link>
          <Link to="#about">Other Services</Link>
          <Link to="#about">About Us</Link>
          <Link to="#about">Login/SignUp</Link>
        </div>
        <button style={{ backgroundColor: "black", borderColor: "black" }}
          className="btn btn-primary"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          <span className="navbar-toggler-icon" style={{ backgroundColor: "black" }}></span>
        </button>
        {/* Offcanvas content */}
        <div
          className="offcanvas offcanvas-end"
          tabIndex={-1}
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          {/* ... your offcanvas content */}
        </div>
      </div>
    </nav>
  );
}

// App component
class App extends React.Component {
  // ... your existing code

  render() {
    return (
      <Router>
        <Navbar />
        <div className="header2" style={{ height: 2 }}></div>
        <Routes>
          <Route path="/" element={<App2 />} />
          <Route path="/PathForge" element={<PersonalizedLearningPlatform />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
