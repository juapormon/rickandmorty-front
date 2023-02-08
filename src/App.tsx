import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Home from "components/generic/Home";
import "App.css";
import { CharactersPage } from "pages/CharactersPage";
import { EpisodesPage } from "pages/EpisodesPage";
import { LocationsPage } from "pages/LocationsPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/characters" element={<CharactersPage />} />
            <Route path="/episodes" element={<EpisodesPage />} />
            <Route path="/locations" element={<LocationsPage />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
