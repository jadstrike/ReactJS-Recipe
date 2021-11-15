import React from "react";
import "./card.css";
import { Link } from "react-router-dom";

const Card = ({ title, imageURL, id }) => {
  const buttonClickhandler = () => {
    console.log(title);
  };
  return (
    <div className="cardWrapper">
      <img className="card-img" src={imageURL} alt="" />
      <h2 className="cardTitle">{title}</h2>
      <Link to={`/foodDetails/${id}`}>
        <button onClick={() => buttonClickhandler()} className="cardBtn">
          Watch Detail
        </button>
      </Link>
    </div>
  );
};
export default Card;
