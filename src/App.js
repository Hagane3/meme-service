import { Route, Routes, Navigate } from "react-router-dom";
import { Navigation } from "./components/Navigation";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate replace to="/regular" />} />
        <Route path="regular" />
        <Route path="hot" />
      </Routes>
    </div>
  );
}

export default App;
