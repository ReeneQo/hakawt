import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './header/Home.jsx'
import {About} from './pages/About.jsx'
import Developers from './pages/Developers.jsx';

export function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/support" element={<Developers />} />
        </Routes>
      </Router>
    </div>
  );
}
