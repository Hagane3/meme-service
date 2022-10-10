import { Route, Routes, Navigate } from "react-router-dom";

import { useState } from "react";

import { Navigation } from "./components/Navigation";
import { Hot } from "./pages/Hot";
import { Regular } from "./pages/Regular";
import { MemesList } from "./pages/MemesList";

import "./App.css";

const MEMES = [
  {
    title: "Mem 1",
    upvotes: 6,
    downvotes: 0,
    img: "",
  },
  {
    title: "Mem 2",
    upvotes: 3,
    downvotes: 1,
    img: "",
  },
  {
    title: "Mem 3",
    upvotes: 5,
    downvotes: 0,
    img: "",
  },
  {
    title: "Mem 4",
    upvotes: 1,
    downvotes: 5,
    img: "",
  },
  {
    title: "Mem 5",
    upvotes: 2,
    downvotes: 7,
    img: "",
  },
  {
    title: "Mem 6",
    upvotes: 8,
    downvotes: 2,
    img: "",
  },
];

function App() {
  const [database, setDatabase] = useState(MEMES);

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate replace to="/regular" />} />
        <Route
          path="regular"
          element={<MemesList database={database} category="regular" />}
        />
        <Route
          path="hot"
          element={<MemesList database={database} category="hot" />}
        />
      </Routes>
    </div>
  );
}

export default App;
