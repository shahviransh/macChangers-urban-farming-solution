import React from "react";
import PositionCard from "./PositionCard";
import "./Positions.css";
import Filterbar from "./filterbar.jsx";
const Positions = () => {
  return (
    <div class="flex flex-auto">
      <div className="Pos">
        <h1 className="Pos__title">Positions</h1>
        <Filterbar />
        <div className="Pos__container">
          <PositionCard
            Position="Plant Interrogator"
            Company="By Hamilton Planters"
            Description="Help needed handling intrusive plant species situated around the garden.
| Location: Hamilton |
Contact Info: HamiltonPlanters@gmail.com"
            link="https://timothy-leung.vercel.app/"
          />
          <PositionCard
            Position="Irrigation Assistant"
            Company="By Berry Garries"
            Description="Assistance required managing the plant watering and irrigation system.
| Location: Hamilton |
Contact Info: GarriesCo@hotmail.com"
            link="https://timothy-leung.vercel.app/"
          />
          <PositionCard
            Position="Harvestor"
            Company="By Green Beans"
            Description="Helping hands welcome to assist in the harvesting process at our farm!
| Location: Hamilton |
Contact Info: gBeans@gmail.com"
            link="https://timothy-leung.vercel.app/"
          />
          <PositionCard
            Position="Harvestor"
            Company="By Hamilton Planters"
            Description="Helping hands welcome to assist in the harvesting process at our farm!
| Location: Hamilton |
Contact Info: HamiltonPlanters@gmail.com"
            link="https://timothy-leung.vercel.app/"
          />
          <PositionCard
            Position="Distribution Assistant"
            Company="By Green Beans"
            Description=" Looking for people to assist in the transportation and distribution of crop yields.
| Location: Hamilton |
Contact Info: gBeans@gmail.com"
            link="https://timothy-leung.vercel.app/"
          />
          <PositionCard
            Position="Pruner"
            Company="By Green Beans"
            Description=" Help needed with managing and pruning the crops of the Green Bean garden.
| Location: Hamilton |
Contact Info: gBeans@gmail.com"
            link="https://timothy-leung.vercel.app/"
          />
        </div>
      </div>
    </div>
  );
};

export default Positions;
