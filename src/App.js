import { Route, Router, Navigate } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate replace to="/regular" />} />
        <Route path="regular" />
        <Route path="hot" />
      </Routes>
    </div>
  );
}

export default App;
