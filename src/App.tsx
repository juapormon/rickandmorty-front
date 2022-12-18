import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/location/:id" element={<Location />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
