import React, { useState } from "react";
import "./styles.css";
import Table from "./table.js";

var changeDict = {
  "2000": 0,
  "500": 0,
  "100": 0,
  "20": 0,
  "10": 0,
  "5": 0,
  "1": 0
};

export default function App() {
  // Hooks definition
  const [change, setChange] = useState(changeDict);
  const [message, setMessage] = useState("");

  const [bill, setBill] = useState(0);
  const [given, setGiven] = useState(0);

  const [changeCalc, setChangeCalc] = useState("False");

  function resetDictionary() {
    var notesAvailable = Object.keys(changeDict);
    for (var i = 0; i < notesAvailable.length; i++) {
      changeDict[notesAvailable[i]] = 0;
    }
    console.log("Dictionary reset");
    setChange(changeDict);
  }

  function calculateChange(bill, given) {
    resetDictionary();
    var billInt = Number(bill);
    var givenInt = Number(given);
    if (billInt <= 0 || givenInt <= 0) {
      setMessage("Entered values cannot be 0 or negative");
      return;
    }
    if (billInt > givenInt) {
      console.log("Bill: " + bill + " > Given: " + given);
      setMessage("Bill is higher than given amount");
      return;
    }
    var amount = givenInt - billInt;
    setMessage("Change to be given: " + amount);
    console.log(amount);
    var notesAvailable = Object.keys(changeDict);
    notesAvailable.sort(function (a, b) {
      return b - a;
    });
    var i = 0;
    while (amount !== 0) {
      var qt = Math.floor(amount / notesAvailable[i]);
      changeDict[notesAvailable[i]] = qt;
      amount = amount % notesAvailable[i];
      i++;
    }
    setChange(changeDict);
    console.log(changeDict);
    setChangeCalc(true);
  }

  function updateBill(e) {
    setBill(e.target.value);
    setChangeCalc(false);
    setMessage("");
  }

  function updateGiven(e) {
    setGiven(e.target.value);
    setChangeCalc(false);
    setMessage("");
  }

  return (
    <div className="App">
      <h1>Cash Register Manager</h1>
      <h2>
        Enter the bill amount and cash given by the customer and know minimum
        number of notes to return
      </h2>
      <h3> Bill Amount </h3>
      <input type="number" onChange={(e) => updateBill(e)}></input>
      <h3> Cash Given </h3>
      <input type="number" onChange={(e) => updateGiven(e)}></input>
      <button onClick={() => calculateChange(bill, given)}>Calculate</button>
      {console.log(bill, given)}
      <h3> {message} </h3>
      <Table change={change} bill={bill} given={given} status={changeCalc} />
      <footer>
        <p> Created by Thomas Alex </p>
        <p> As a part of markTen neoGCamp </p>
      </footer>
    </div>
  );
}
