import React from "react";
import emojipedia from "../emojipedia";
import Card from "./Card";

function createCard(emojipedia) {
  return (
    <Card
      key={emojipedia.id}
      name={emojipedia.name}
      emoji={emojipedia.emoji}
      meaning={emojipedia.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className = "dictionary">
      {emojipedia.map(createCard)}
      </dl>
      
    </div>
  );
}

export default App;
