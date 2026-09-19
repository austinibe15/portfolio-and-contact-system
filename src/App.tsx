import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Work from "./pages/Work";
import ProjectDetails from "./pages/ProjectDetails";
import About from "./pages/About";
import Engineering from "./pages/Engineering";
import Research from "./pages/Research";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/work" element={<Work />} />

        <Route
          path="/work/:slug"
          element={<ProjectDetails />}
        />

        <Route path="/about" element={<About />} />

        <Route
          path="/engineering"
          element={<Engineering />}
        />

        <Route path="/research" element={<Research />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;