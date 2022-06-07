import React from "react";
function Header({ onAdd, addShow }) {
  return (
    <header className="header">
      <h1> Task Tracker </h1>
      <button className="btn" onClick={onAdd}>
        {" "}
        {addShow ? "Close" : "Add"}{" "}
      </button>
    </header>
  );
}

export default Header;
