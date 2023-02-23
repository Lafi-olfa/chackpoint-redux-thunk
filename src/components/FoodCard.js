import React from "react";
import { Link } from "react-router-dom";

const FoodCard = ({ el }) => {
  return (
    <div id="card"
      style={{
        border: "solid 1px black",
        margin: "10px",
        borderRadius:"0 0px  20px 20px  ",
        width: "300px",
        height: "500px",
      }}
    >
      <img src={el.food.image} alt="erreur" />
      <h2> Label : {el.food.label} </h2>
      <h2> category :{el.food.category} </h2>
      <Link to={`/foods/${el.food.foodId}`}>
        <button className="btn-card" >Details</button>{" "}
      </Link>
    </div>
  );
};

export default FoodCard;
