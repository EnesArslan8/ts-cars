import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Caption from "./components/Caption";
import Brands from "./components/Brands";
import { Routes, Route, useParams } from "react-router-dom";
import Brand from "./components/Brand";

interface IIsRoute {
  isRoute: boolean;
}
function App() {
  const [isRoute, setIsRoute] = useState(false);
  return (
    <div className="App">
      <Header setIsRoute={setIsRoute} />
      {!isRoute ? (
        <>
          <Caption />
          <Brands setIsRoute={setIsRoute} />
        </>
      ) : (
        <Routes>
          <Route path={`/brand/:name`} element={<Brand />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
