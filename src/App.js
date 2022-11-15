import { Route, Routes, Navigate } from "react-router-dom";

import { useState } from "react";

import { Navigation } from "./components/Navigation";
import { MemesList } from "./pages/MemesList";
import MEMES from "./utils/memesDatabase";

import "./App.css";

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
