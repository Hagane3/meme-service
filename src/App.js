import { Route, Routes, Navigate } from "react-router-dom";

import { Navigation } from "./components/Navigation";
import { MemesList } from "./pages/MemesList";

import { CartProvider } from "./CartContext";

import "./App.css";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Navigation />
        <Routes>
          <Route path="/" element={<Navigate replace to="/hot" />} />
          <Route path="hot" element={<MemesList category="hot" />} />
          <Route path="regular" element={<MemesList category="regular" />} />
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
