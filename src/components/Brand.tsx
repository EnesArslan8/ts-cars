import React from "react";
import { useParams } from "react-router-dom";
const Brand = () => {
    const {name}=useParams()
  return (
    <div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium rerum
      perferendis tempora facere, quisquam iusto suscipit sed ipsum magnam nam
      cupiditate beatae porro eum molestias culpa nobis dolorum? Optio,
      doloribus! 
      
      <h1>{name}</h1>
    </div>
  );
};

export default Brand;
