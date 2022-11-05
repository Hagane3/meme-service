import { Route, Routes, Navigate } from "react-router-dom";

import { useState } from "react";

import { Navigation } from "./components/Navigation";
import { MemesList } from "./pages/MemesList";

import "./App.css";

const MEMES = [
  {
    username: "tikemyson",
    id: 1,
    title: "Meme 1",
    upvotes: 6,
    downvotes: 0,
    img: "images/meme1.png",
  },
  {
    username: "jichaelmordan",
    id: 2,
    title: "Meme 2",
    upvotes: 3,
    downvotes: 1,
    img: "images/meme2.png",
  },
  {
    username: "lrucebee",
    id: 3,
    title: "Meme 3",
    upvotes: 5,
    downvotes: 0,
    img: "images/meme3.png",
  },
  {
    username: "parryhotter",
    id: 4,
    title: "Meme 4",
    upvotes: 1,
    downvotes: 5,
    img: "images/meme4.png",
  },
  {
    username: "deonardolicaprio",
    id: 5,
    title: "Meme 5",
    upvotes: 2,
    downvotes: 7,
    img: "images/meme5.png",
  },
  {
    username: "nuckchorris",
    id: 6,
    title: "Meme 6",
    upvotes: 8,
    downvotes: 2,
    img: "images/meme6.png",
  },
];

function App() {
  const [data, setData] = useState(MEMES);

  const setDataHandler = (value) => {
    setData(value);
  };
  return (
    <div className="App">
      <Navigation database={data} setDatabase={setDataHandler} />
      <Routes>
        <Route path="/" element={<Navigate replace to="/hot" />} />
        <Route
          path="hot"
          element={
            <MemesList
              database={data}
              setDatabase={setDataHandler}
              category="hot"
            />
          }
        />
        <Route
          path="regular"
          element={
            <MemesList
              database={data}
              setDatabase={setDataHandler}
              category="regular"
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
