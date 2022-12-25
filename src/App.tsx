import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/characters" element={<Characters />} />
            <Route path="/character/:id" element={<CharacterDetails />} /> */}
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
