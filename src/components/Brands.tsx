import React from "react";
import BrandsInfo from "../brands.json";

interface IBrand {
  id: number;
  name: string;
  img: string;
  //   BrandsInfo: { id: number; name: string; img: string; }[]; // Add this line
}

const Brands = () => {
  return (
    <div className="width">
      <div className="brands">
        {BrandsInfo.map((item) => (
          <div className="card" style={{background:`url(${item.background})`}}>
            <img className="logo" src={item.img} alt="logo" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
