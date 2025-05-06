import React, { useState } from "react";
import "./App.css";

function App() {
  const [searchText, setSearchText] = useState("");
  const [result, setResult] = useState("");

  const dictionary = {
    hello: "A greeting or expression of goodwill.",
    world: "The earth, together with all of its countries and peoples.",
    react: "A JavaScript library for building user interfaces."
  };

  const handleSearch = () => {
    const lowerText = searchText.toLowerCase();
    if (dictionary[lowerText]) {
      setResult(dictionary[lowerText]);
    } else {
      setResult("Word not found in dictionary.");
    }
  };

  return (
    <div className="App">
      <h1>Dictionary</h1>
      <input
        id="searchBox"
        type="text"
        placeholder="Enter a word"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button id="searchBtn" onClick={handleSearch}>
        Search
      </button>
      {result && (
        <div id="resultArea">
          <p>{result}</p>
        </div>
      )}
    </div>
  );
}

export default App;
