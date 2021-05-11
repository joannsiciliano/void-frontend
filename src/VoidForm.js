import React from "react";

const VoidForm = () => {
  return (
    <div className="void-form-div">
      <form className="void-form">
        <label for="name" className="name-label">
          i would like to be addressed as:
        </label>
        <input type="text" className="name-input"></input>

        <label for="message" className="message-label">
          ????
        </label>
        <input type="text" className="message-input"></input>
        <br></br>
        <input
          type="submit"
          value="scream into void"
          className="submit-button"
        ></input>
      </form>
    </div>
  );
};

export default VoidForm;
