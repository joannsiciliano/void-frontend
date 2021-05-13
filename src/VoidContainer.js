import React from "react";
import VoidCard from "./VoidCard";

function VoidContainer(props) {
  const displayVoids = () => {
    return props.voids.map((voids) => {
      console.log(voids);
      return <VoidCard key={voids.id} voids={voids} delete={props.delete} />;
    });
  };

  {
    return <div className="void-container">{displayVoids()}</div>;
  }
}

export default VoidContainer;

// fetch("http://localhost:3000/moods")
//   .then((response) => response.json())
//   .then((moods) =>
//     moods.forEach((mood) => {
//       return <option value={mood.id}>{mood.feeling}</option>;
//     })
