import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home.jsx'
import CardsTemp from './components/card/Card.jsx'
import {About} from './pages/About.jsx'
import Developers from './pages/Developers.jsx';
import PageTransition from './components/Transition/PageTransition.jsx';


export function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/About" element={<PageTransition><About /></PageTransition>} />
          <Route path="/Developers" element={<PageTransition><Developers /></PageTransition>} />
          <Route path="/CardsTemp" element={<PageTransition><CardsTemp /></PageTransition>} />
        </Routes>
      </Router>
    </div>
  );
}
