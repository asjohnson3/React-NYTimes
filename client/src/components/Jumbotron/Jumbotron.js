import React from "react";
import "./Jumbotron.css";

const Jumbotron = () => (
  <div className="jumbotron text-center">
    <h1>
      <strong>
        <i className= "glyphicon glyphicon-search"></i>
        NY Times Article Search
      </strong>
    </h1>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://developer.nytimes.com/"
    >
      Powered by NY Times Developers API
    </a>
  </div>
);

export default Jumbotron;
