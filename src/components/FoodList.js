import React from "react";
import { useSelector } from "react-redux";
import FoodCard from "./FoodCard";

const FoodList = () => {
  const { foods, loading } = useSelector((state) => state);
  return (
    <div>
      {" "}
      {loading ? (
        <h1> Loading...</h1>
      ) : (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {foods.map((el, i) => (
            <div key={i}>
              {" "}
              <FoodCard el={el} />{" "}
            </div>
          ))}{" "}
        </div>
      )}{" "}
    </div>
  );
};

export default FoodList;
