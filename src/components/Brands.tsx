import React from "react";
import BrandsInfo from "../brands.json";
import { Link } from "react-router-dom";

export interface IBrand {
  setIsRoute: React.Dispatch<React.SetStateAction<boolean>>;
  text: string;
  brand: Array<any>;
}

const Brands = ({ setIsRoute, text, brand }: IBrand) => {
  const filteredBrands = brand?.filter((item) => {
    return item.name.toLowerCase().includes(text);
  });
  console.log(filteredBrands)
  const handleClick = () => {
    setIsRoute(true);
  };
  return (
    <div className="width">
      <div className="brands">
        {filteredBrands.map((item) => (
          <Link to={`/brand/${item.name}`} key={item.id}>
            <div
              className="card"
              onClick={handleClick}
              style={{ background: `url(${item.background})` }}
            >
              <img className="logo" src={item.img} alt="logo" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Brands;
