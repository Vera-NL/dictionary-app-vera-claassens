import React from "react";
import './App.css';
import Dictionary from "./Dictionary"

export default function App() {
  return (
    <div className="container-fluid">
      <div className="app-shadow-lg" id="app">

        <h1>Dictionary</h1>

        <h3>Which word would you like to look up?</h3>
      
        <main>
          <Dictionary /> 
        </main>

        <div className="Footer">
            <a
              href="https://github.com/Vera-NL/Dictionary-app-Vera"
              target="blank"
              id="open-source-code"
            >
            Open-source code 
            </a> by <a href="https://www.linkedin.com/in/veraclaassens/"
              target="blank"
              id="linkedin">Vera Claassens</a>
        </div>

      </div>
    </div>
  );
}