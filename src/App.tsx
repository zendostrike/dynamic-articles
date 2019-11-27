import React from "react";

import Article from "./components/Article";

const handleContainerClick = () => alert("cli cli cli");
const handleContainerOver = () => alert("hover hover hover");

const lines = [
  {
    content: "What if Medium were dynamic",
    events: {},
  },
  {
    content: "Programmable articles concept.",
    events: {},
  },
  {
    content:
      "As long we know, an article input in Medium can be text, image, video or embed. But how it would be if we also can code on it.",
    events: {},
  },
  {
    content: "Click on me to perform an event",
    events: {
      onContainerClick: handleContainerClick,
    },
  },
  {
    content: "Hover me to perform an event",
    events: {
      onContainerOver: handleContainerOver,
    },
  },
];

function App() {
  return (
    <div>
      App boundaries
      <hr />
      <Article lines={lines} />
    </div>
  );
}

export default App;
