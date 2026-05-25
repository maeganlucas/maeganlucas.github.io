import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router';
import './App.css';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';


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
        <main className="App-main">
          <Routes>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
