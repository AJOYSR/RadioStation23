// App.js
import "./App.css";
import Sidebar from "./layout/Sidebar/Sidebar";
import Content from "./layout/Content/Content";
import ContentTop from "./components/ContentTop/ContentTop";
import "leaflet/dist/leaflet.css";
import Favourite from "./components/Favourite/Favourite";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Browse from "./components/Browse/Browse";
import About from "./components/About/About";
import RadioMap from "./components/RadioMapCom/RadioMap"; // Ensure correct import path


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <ContentTop />
        <Sidebar />
        <Routes>
          <Route path="/">
            <Route index element={<Content />} />
            <Route path="browse" element={<Browse />} />
            <Route path="radio-map" element={<RadioMap />} />
            <Route path="favourite" element={<Favourite />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
