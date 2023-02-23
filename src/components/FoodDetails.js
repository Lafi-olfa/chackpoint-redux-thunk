import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const FoodDetails = () => {
  const { foods } = useSelector((state) => state);
  const params = useParams();
  const clickedID = params.id;
  const clickedFood = foods.find((el) => el.food.foodId === clickedID);
  console.log(clickedFood);
  return (
    <div>
      {clickedFood.measures.map((el) => (
        <p>{el.label}</p>
      ))}
    </div>
  );
};

export default FoodDetails;
