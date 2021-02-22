import React from "react";

function Row(props) {
  return <div className="row">{props.children}</div>;
}

export default Row;

// frontend port: 3000
// backend port: 8080

// http://localhost8080/whateverrouteyouretryingtoconnectto 