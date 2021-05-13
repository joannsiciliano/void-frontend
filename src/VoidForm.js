import React, { useState } from "react";

const voidsURL = "http://localhost:3000/voids";

function VoidForm(props) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [mood, setMood] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(voidsURL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        message: message,
        mood: mood,
      }),
    })
      .then((response) => response.json())
      .then((v) => props.addVoids(v))
      .then(console.log);
    e.target.reset();
  };
  return (
    <div className="void-form-div">
      <form method="POST" onSubmit={handleSubmit} className="void-form">
        <p>name:</p>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          className="name-input"
          placeholder="    who are you?"
          required
        ></input>
        <p>input message:</p>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="textarea"
          name="message"
          rows="6"
          cols="50"
          placeholder="nobody can hear you in the V O I D :) "
          required
        ></textarea>
        <p>current mood:</p>
        <select
          value={mood}
          onChange={(e) => setMood(e.target.value)}
          name="mood"
          className="dropdown"
          required
        >
          <option className="selected-option" selected hidden required>
            *̵͇̖̾̈́ ̸̧̯̣̱̓̓͛̕b̵̠̲̤̒͜ ̶̡̻̏͂̕͝i̵̭͈͒ ̵̫̤͔͎̿g̵̘̹͑ ̵͍̆͝m̷̨̓̓ ̸̱̽o̷̔̅͝ͅ ̴̨̝̋͑̉͂ǫ̴̝̗͘ ̵̯̉d̸͚͕̻͍̍*̵̙̑̑~̴̛̫̪̮̠̍͂͝
          </option>{" "}
          {props.moods.map((mood) => {
            return <option value={mood.id}>{mood.feeling}</option>;
          })}{" "}
        </select>
        <h1>☺︎ ☻ ☺︎</h1>
        <input
          name="submit"
          type="submit"
          value="scream into the digital abyss"
          className="submit-button"
        ></input>
      </form>
    </div>
  );
}

export default VoidForm;
