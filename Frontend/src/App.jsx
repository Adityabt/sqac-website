import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './components/HomePage/HomePage.jsx';
import Footer from './components/Footer.jsx';
import Aboutus from './components/Aboutus/Aboutus.jsx';
import Events from './components/Eventspage/Events.jsx';
import Team from './components/Team/Team.jsx';
import Projects from './components/Projects/Projects.jsx';
import JoinUs from './components/JoinUs/JoinUs.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import useLenisScroll from './utils/smoothScroll';
import Navbar from './components/HomePage/Navbar.jsx';

const App = () => {
  useLenisScroll(); 

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/events" element={<Events />} />
        <Route path="/team" element={<Team />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/recruitment" element={<JoinUs />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
