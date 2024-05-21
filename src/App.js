import React, { useState } from "react";
import "./App.css";
import Synonyms from "./Synonyms";

function App() {
  const [word, setWord] = useState("");
  const [syn, setSyn] = useState([]);



   const fetchSyn = async (word) => {
    if (!word) return Promise.resolve([]);
    try {
       const res = await fetch(`https://api.datamuse.com/words?rel_syn=${word}`);
       const data = await res.json();
       return data;
     } catch (error) {
       console.error("Error fetching data:", error);
       return [];
     }
  };



  const handleWord = (e) => {
    setWord(e.target.value);
    console.log(word);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Hello");
    fetchSyn(word).then((data) => {
    setSyn(data)
  })
  
  };
  

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>Synonym</label>
        <input
          type="text"
          placeholder="type the word here"
          onChange={handleWord}
        ></input>
        <button type="submit">search synonym</button>
      </form>
      {console.log("synnnnnnnnnnnnnn aapp comp:", syn)}
      <div>
      <Synonyms synonyms={syn} />
      </div>

    </div>
  );
}

export default App;
