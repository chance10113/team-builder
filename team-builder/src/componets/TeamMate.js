// Building my version of Friend.js
import React from "react";
export default function TeamMate(props) {
  const { name, email, role } = props.details;
  return (
    <div>
      <h2> {name} </h2>
      <p> {email} </p>
      <p> {role} </p>
    </div>
  );
}
