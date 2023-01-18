import "./App.css";
import { useState } from "react";
import Star from "../src/components/Star";
import Text from "../src/components/Text";
import Buttons from "../src/components/Buttons";
import Thanks from "../src/components/Thanks";

function App() {
  const buttonsArry = [1, 2, 3, 4, 5];

  let [active, setActive] = useState();
  let [show, setShow] = useState(true);
  let [rate, setRate] = useState();

  function Click(e) {
    setActive(e);
    setRate(e);
  }

  function Show() {
    {
      rate && setShow(false);
    }
  }

  return (
    <div className="container">
      {show ? (
        <div className="card">
          <Star />
          <Text />
          <div
            style={{
              display: "flex",
              gap: "1.7rem",
              margin: "3rem",
            }}
          >
            {buttonsArry.map((el) => {
              return (
                <Buttons value={el} active={active} onClick={() => Click(el)} />
              );
            })}
          </div>
          <div>
            <button className="submit" onClick={Show}>
              Submit
            </button>
          </div>
        </div>
      ) : (
        <div className="card">
          <Thanks rate={rate} />
        </div>
      )}
    </div>
  );
}

export default App;
