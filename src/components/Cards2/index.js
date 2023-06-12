import React from "react";
import ReactDOM from "react-dom";
import EventsList from "./EventsList";
import { eventsData } from "./data";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h4>List created from external data:</h4>
      <EventsList data={eventsData} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);