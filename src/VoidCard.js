import React from "react";

function VoidCard(props) {
  const handleDelete = (event) => {
    props.delete(props.voids);
  };

  return (
    <div className="void-card">
      <ul>
        <li>
          <strong>name:</strong> {props.voids.name}
        </li>
        <li>
          <strong>message:</strong>
          {props.voids.message}
        </li>
        <li>
          <strong>current mood:</strong> {props.voids.mood.feeling}
        </li>
      </ul>
      <button className="delete-button" onClick={handleDelete}>
        X
      </button>
    </div>
  );
}

export default VoidCard;
