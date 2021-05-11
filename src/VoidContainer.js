import React from "react";
import VoidCard from "./VoidCard";

function VoidContainer(props) {
  const displayVoids = () => {
    return props.voids.map((voids) => {
      return <VoidCard key={voids.id} voids={voids} delete={props.delete} />;
    });
  };

  {
    return (
      <div className="void-container">
        <div className="void-column-grid">{displayVoids()}</div>
      </div>
    );
  }
}

export default VoidContainer;
