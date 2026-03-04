import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navigation from './components/Navigation';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import OurTeam from './pages/OurTeam';
import Contact from './pages/Contact';
import Companies from './pages/Companies';
import Coverage from './pages/Coverage';
import Expertise from './pages/Expertise';
import ClaimsReporting from './pages/ClaimsReporting';
import Newsletter from './pages/Newsletter';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Navigation />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/our-team" element={<OurTeam />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/coverage" element={<Coverage />} />
            <Route path="/expertise" element={<Expertise />} />
            <Route path="/claims-reporting" element={<ClaimsReporting />} />
            <Route path="/newsletter" element={<Newsletter />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
