import React from "react";
import { useSelector } from "react-redux";
import FoodCard from "./FoodCard";

const FoodList = () => {
  const { foods, loading } = useSelector((state) => state);
  return (
    <div>
      {" "}
      {loading ? (
        <div className="load">
          <div className="one"> </div>
          <div className="two"> </div>
          <div className="three"> </div>
        </div>
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
