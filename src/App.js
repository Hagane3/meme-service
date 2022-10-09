import { Route, Routes, Navigate } from "react-router-dom";

import { Navigation } from "./components/Navigation";
import { Hot } from "./pages/Hot";
import { Regular } from "./pages/Regular";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate replace to="/regular" />} />
        <Route path="regular" element={<Regular />} />
        <Route path="hot" element={<Hot />} />
      </Routes>
    </div>
  );
}

export default App;
