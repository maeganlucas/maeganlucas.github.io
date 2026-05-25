import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router';
import './App.css';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import pages
import HomePage from './pages/HomePage';

// Import icons
import { linkIcons } from './data/icons';

// Import components
import NavBar from './components/navBar/NavBar';

function App() {
  const [isNavBarToggled, setIsNavBarToggled] = useState(true);

  const NavBarToggled = (navBarStatus) => {
    setIsNavBarToggled(navBarStatus);
    console.log(`NavBar toggle status changed to: ${isNavBarToggled}` );
  }

  return (
    <Router>
      <div className="App">
        <NavBar onNavBarToggled={NavBarToggled}></NavBar>
        <main className="App-main texture">
          <Routes>
            <Route path="/" element={<HomePage statusOfNavBar={isNavBarToggled}/>} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <footer className="App-footer">
          <a href={linkIcons[1].href}>
          <svg xmlns={linkIcons[0].xmlns} viewBox={linkIcons[0].viewBox} className={linkIcons[1].class}>
            <path d={linkIcons[1].d}/>
          </svg>
          </a>
          <a href={linkIcons[2].href}>
            <svg xmlns={linkIcons[0].xmlns} viewBox={linkIcons[0].viewBox} className={linkIcons[2].class}>
              <path d={linkIcons[2].d} />
            </svg>
          </a>
          <a href={linkIcons[3].href}>
            <svg xmlns={linkIcons[0].xmlns} viewBox={linkIcons[0].viewBox} className={linkIcons[3].class}>
              <path d={linkIcons[3].d} />
            </svg>
          </a>
        </footer>
      </div>
    </Router>
  );
}

export default App;
