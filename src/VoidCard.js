import React from "react";

function VoidCard(props) {
  const handleDelete = (event) => {
    props.delete(props.voids);
  };

  return (
    <div className="void-card">
      <ul>
        <li>Name : {props.voids.name}</li>
        <li>Message: {props.voids.message}</li>
        <li>Mood: {props.voids.mood_id}</li>
      </ul>
      <button className="delete-button" onClick={handleDelete}>
        X
      </button>
    </div>
  );
}

export default VoidCard;
