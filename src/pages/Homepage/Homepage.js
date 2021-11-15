import React, { useState, useEffect } from "react";
import Card from "../../Components/Card/Card";
import axios from "axios";
import "./Homepage.css";

const Homepage = () => {
  const [result, setResult] = useState([]);
  const dataFetch = async () => {
    const { data } = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/filter.php?c=Lamb"
    );
    setResult(data.meals);
  };

  useEffect(() => {
    dataFetch();
  }, []);
  return (
    <div className="cardsWrapper">
      {result.map((data) => (
        <Card
          key={data.idMeal}
          title={data.strMeal}
          imageURL={data.strMealThumb}
          id={data.idMeal}
        />
      ))}
    </div>
  );
};

export default Homepage;
