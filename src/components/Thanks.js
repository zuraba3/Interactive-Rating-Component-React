import React from "react";
import styles from "./ThanksStyle.css";

function Thanks(props) {
  return (
    <div className="wrapper">
      <img src="images/thanks.svg" alt="Thank Image" className="photo" />
      <div className="para">
        <p className="outcome">You selected {props.rate} out of 5</p>
      </div>
      <h2 className="thk">Thank you !</h2>
      <p className="txt">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}

export default Thanks;
