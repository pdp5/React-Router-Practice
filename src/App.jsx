import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import BlueColorPage from "./components/BlueColorPage";
import GreenColorPage from "./components/GreenColorPage";
import RedColorPage from "./components/RedColorPage";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/blue" element={<BlueColorPage />} />
          <Route path="/green" element={<GreenColorPage />} />
          <Route path="/red" element={<RedColorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
