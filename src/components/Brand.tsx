import React from "react";
import { useParams } from "react-router-dom";
import models from "../brands.json";
interface IModel {
  models: string[];
  img: string[];
  price: string[];
  year: number[];
}
const Brand = () => {
  const { name } = useParams();
  //   const model=models.map((model)=>model.name===name)
  //   const items=model.map((item)=>item.models)
  return (
    <div className="width">
      {/* {models.map((model) => (model.name === name ? (<div>{model.models.map((item)=>{item.year}))}</div>) : <div></div>))} */}
      {models.map((model) =>
        model.name === name ? (
          model.models.map((item) => (
            <div className="brandContainer">
              <div className="leftSide">
                <img className="logo" src={item.img} alt="logo" />
              </div>
              <div className="rightSide">
                <h1 className="modelTitle">{item.model}</h1>
                <p className="modelPrice">Price : {item.price} </p>
                <p className="modelYear">Year : {item.year}</p>
              </div>
              
            </div>
          ))
        ) : (
          <div></div>
        )
      )}
    </div>
  );
};

export default Brand;
