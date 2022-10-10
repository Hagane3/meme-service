import { Route, Routes, Navigate } from "react-router-dom";

import { useState } from "react";

import { Navigation } from "./components/Navigation";
import { MemesList } from "./pages/MemesList";

import "./App.css";

const MEMES = [
  {
    title: "Meme 1",
    upvotes: 6,
    downvotes: 0,
    img: "images/meme1.png",
  },
  {
    title: "Meme 2",
    upvotes: 3,
    downvotes: 1,
    img: "images/meme2.png",
  },
  {
    title: "Meme 3",
    upvotes: 5,
    downvotes: 0,
    img: "images/meme3.png",
  },
  {
    title: "Meme 4",
    upvotes: 1,
    downvotes: 5,
    img: "images/meme4.png",
  },
  {
    title: "Meme 5",
    upvotes: 2,
    downvotes: 7,
    img: "images/meme5.png",
  },
  {
    title: "Meme 6",
    upvotes: 8,
    downvotes: 2,
    img: "images/meme6.png",
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
