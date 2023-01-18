import React from "react";
import styles from "./ButtonsStyle.css";

function Buttons(props) {
  return (
    <div>
      <button
        style={{
          background: props.active === props.value ? "var(--lightGrey)" : null,
        }}
        onClick={props.onClick}
        className="btn"
      >
        {props.value}
      </button>
    </div>
  );
}

export default Buttons;
