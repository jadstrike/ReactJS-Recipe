import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { useHistory } from "react-router-dom";
import "./Detailpage.css";

const Detailpage = ({ match }) => {
  const [result, setResult] = useState({});
  const dataFetch = async () => {
    const { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${match.params.id}`
    );
    setResult(data.meals[0]);
  };

  const history = useHistory();
  const backHandler = () => {
    history.push("/");
  };

  useEffect(() => {
    dataFetch();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {result.strMealThumb && (
        <>
          <p className="back" onClick={backHandler}>
            {"<< Back to Home"}
          </p>
          <div className="detailWrapper">
            <img src={result.strMealThumb} alt="" className="detailImg" />
            <div className="detailTextWrapper">
              <h2 className="detailTitle">{result.strMeal}</h2>
              <p className="detailIns">{result.strInstructions}</p>
              <a
                href={result.strYoutube}
                className="cardBtn"
                target="_blank"
                rel="noreferrer"
              >
                Watch Tutorial
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Detailpage;
