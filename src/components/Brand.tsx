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
                <h1>{item.model}</h1>
                <p>{item.price}</p>
                <p>{item.year}</p>
              </div>
              {/* <div style={{ background:`url(${item.img})`,height:'500px',backgroundRepeat:'no-repeat',backgroundSize }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia temporibus, voluptatem sunt saepe voluptatibus deleniti
                dolores. Cum eveniet ratione adipisci illo labore qui nam,
                voluptate, at eaque consectetur atque voluptatibus?
              </div> */}
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
