import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import Blog from './Pages/Blog/Blog';
import ProjectDetails from './Pages/ProjectDetails/ProjectDetails'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/project/:pid" element={<ProjectDetails />} />
          <Route path="/projectDetails" element={<ProjectDetails />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
