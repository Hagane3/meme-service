import { Route, Routes, Navigate } from "react-router-dom";

import { Navigation } from "./components/Navigation";
import { HotMemesPage } from "./pages/HotMemesPage";
import { RegularMemesPage } from "./pages/RegularMemesPage";

import { CartProvider } from "./CartContext";

import "./App.css";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Navigation />
        <Routes>
          <Route path="/" element={<Navigate replace to="/hot" />} />
          <Route path="hot" element={<HotMemesPage />} />
          <Route path="regular" element={<RegularMemesPage />} />
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
