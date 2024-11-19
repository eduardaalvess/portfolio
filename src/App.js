import logo from './logo.svg';
import './App.css';
import MyNavbar from './componentes/Navbar/Navbar';
import Header from './componentes/Header/Header';
import About from './componentes/About/About';
import Projects from './componentes/Projects/Projects';
import Certifications from './componentes/Certifications/Certifications';
import Contact from './componentes/Contact/Contact';

function App() {
  return (
    <div>
      <MyNavbar />
      <Header />
      <About />
      <Projects />
      <Certifications />
      <Contact />
    </div>
  );
}

export default App;

