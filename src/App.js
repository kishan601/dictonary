import React, { useState } from "react";
import "./App.css";

const dictionary = {
  React: "A JavaScript library for building user interfaces.",
  Component: "A reusable building block in React.",
};

function App() {
  const [word, setWord] = useState("");
  const [definition, setDefinition] = useState("");

  const handleSearch = () => {
    if (!word.trim()) {
      setDefinition("Word not found in dictionary.");
      return;
    }

    const normalizedWord = word.trim().toLowerCase();
    const foundEntry = Object.keys(dictionary).find(
      (key) => key.toLowerCase() === normalizedWord
    );

    if (foundEntry) {
      setDefinition(dictionary[foundEntry]);
    } else {
      setDefinition("Word not found in dictionary.");
    }
  };

  return (
    <div className="app">
      <h1>Dictionary App</h1>
      <input
        type="text"
        value={word}
        onChange={(e) => setWord(e.target.value)}
        placeholder="Enter a word"
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        <strong>Definition:</strong>
        <p>{definition}</p>
      </div>
    </div>
  );
}

export default App;
