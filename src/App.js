import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { fetchData } from "./redux/action";
import FoodDetails from "./components/FoodDetails";
import FoodList from "./components/FoodList";
import HeaderFoods from "./components/HeaderFoods";


function App() {
  const [text, setText] = useState("");
  // console.log(foods);
  const options = {
    method: "GET",
    url: "https://edamam-food-and-grocery-database.p.rapidapi.com/parser",
    params: { ingr: text },
    headers: {
      "X-RapidAPI-Key": "bb1a2e6162msh25458842d42981ap1ed4a0jsn162f538c0806",
      "X-RapidAPI-Host": "edamam-food-and-grocery-database.p.rapidapi.com",
    },
  };
  const dispatch = useDispatch();

  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchData(options));
  };
  return (
    <div className="App">
    
      <BrowserRouter>
      <HeaderFoods handelSubmit={handelSubmit} text={text} setText={setText} />
        <Routes>
          <Route path={"/"} element={<FoodList />} />
          <Route path={"/foods/:id"} element={<FoodDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
