import React from "react";
import "./travel.css";
import travelPlansData from "../assets/travel-plans.json";
function Travel() {
  return (
    <div className="Travel">
      <h2>Travel Plan </h2>
      {travelPlansData.map((plans) => {
        return (
          <div key={plans.id}>
            <h3>{plans.destination}</h3>
            {plans.totalCost <= 350 && <span>Great Deal</span>}
            {plans.totalCost >= 1500 && <span>Premium</span>}
            {plans.allinclusive == true && <span>All inclusive</span>}
            <span className="image-container">
              <img src={plans.image} alt="destination image" />
            </span>
            <button >Delete</button>
          </div>
        );
      })}
    </div>
  );
}
export default Travel;
