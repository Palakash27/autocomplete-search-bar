import React from "react";
import "./App.css";
import SearchBar from "./SearchBar/SearchBar";
import data from "./data";

function App() {
  return (
    <div className="App">
      <div className="App-Component">
        <h1>Autocomplete Search Bar</h1>
        <SearchBar items={data} />
      </div>
    </div>
  );
}

export default App;
