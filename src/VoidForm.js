import React from "react";

const moodList = document.querySelector(".moods");
const dropdown = document.querySelector("#dropdown");

function VoidForm() {
  fetch("http:localhost:3000/moods")
    .then((response) => response.json())
    .then((moods) =>
      moods.forEach((mood) => {
        const li = document.createElement("li");
        const option = document.createElement("option");
        option.innerText = mood.feeling;
        option.value = mood.id;
        li.innerHTML = ` <a href="mood.html?id=${mood.id}">${mood.feeling}</a>`;
        moodList.append(li);
        dropdown.append(option);
      })
    );

  return (
    <div className="void-form-div">
      <form
        method="POST"
        action="http://localhost:3000/voids"
        className="void-form"
      >
        <p>my name:</p>
        <input type="text" className="name-input"></input>
        <p>input message:</p>
        <textarea
          className="textarea"
          name="message"
          rows="6"
          cols="50"
          placeholder="nobody can hear u in the Void :)"
        ></textarea>
        <p>current mood:</p>
        <select name="mood" className="dropdown"></select>
        <h1>⚘⚘⚘</h1>
        <input
          name="submit"
          type="submit"
          value="scream into void"
          className="submit-button"
        ></input>
      </form>
    </div>
  );
}

export default VoidForm;
