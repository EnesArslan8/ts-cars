import React, { ChangeEvent, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Caption from "./components/Caption";
import Brands from "./components/Brands";
import { Routes, Route, useParams } from "react-router-dom";
import Brand from "./components/Brand";
import brand from './brands.json'
interface IIsRoute {
  isRoute: boolean;
}
function App() {
  const [isRoute, setIsRoute] = useState(false);
  const [text, setText] = useState<string>("");
  const handleInputChange = (e:ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    
    // brand.filter((item)=>{
    //   if(item.name.includes(text)){
    //     console.log(item)
    //     return item
    //   }
    //   return false
    // })
  };
  
  return (
    <div className="App">
      <Header setIsRoute={setIsRoute} />
      {!isRoute ? (
        <>
          <Caption handleInputChange={handleInputChange} text={text}/>
          <Brands text={text} setIsRoute={setIsRoute} brand={brand} />
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
