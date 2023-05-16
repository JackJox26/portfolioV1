import logo from './logo.svg';
import "./App.css";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div className = "App">
      <BrowserRouter>
        <Navbar/>
        <Footer/>
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/experience" element = {<Experience />} />
          <Route path = "/projects" element = {<Projects />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
 export default App;








