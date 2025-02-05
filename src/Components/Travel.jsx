import React from "react";
import "./travel.css";
import travelPlansData from "../assets/travel-plans.json";
import { useState } from "react";
function Travel() {
  const [destination, setestination] = useState(travelPlansData);
  const deletedestination = () => {
    console.log("deleted");
  };
  return (
    <div className="Travel">
      <h2>Travel Plan </h2>
      {destination.map((plans) => {
        return (
          <div key={plans.id}>
            <h3>{plans.destination}</h3>
            {plans.totalCost <= 350 && <span>Great Deal</span>}
            {plans.totalCost >= 1500 && <span>Premium</span>}
            {plans.allinclusive == true && <span>All inclusive</span>}
            <span className="image-container">
              <img src={plans.image} alt="destination image" />
            </span>
            <button onClick={deletedestination}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}
export default Travel;
