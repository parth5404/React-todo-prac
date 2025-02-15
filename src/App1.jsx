

import { useEffect, useState } from "react";
import Keyboard from "react-simple-keyboard";
//import "react-simple-keyboard/build/css/index.css";

const layout = {
  default: [
    "{bksp}",
    "7 8 9",
    "4 5 6",
    "1 2 3",
    "0 . -",
    "{arrowleft} {arrowright}",
    "ClearAll",
  ],
};

function SampleKeyboard() {
  const [inputval, setInputVal] = useState("");
  const [cursur, setCursur] = useState(0);

  const handlebuttonclick = (char) => {
    const left = inputval.slice(0, cursur);
    const right = inputval.slice(cursur);
    setInputVal(left + char + right);
    setCursur(cursur + 1);
  };

  const handlebackspace = () => {
    if (cursur > 0) {
      const left = inputval.slice(0, cursur - 1);
      const right = inputval.slice(cursur);
      setInputVal(left + right);
      setCursur(cursur - 1);
    }
  };

  const handleClearAll = () => {
    setInputVal("");
    setCursur(0);
  };

  const handleToggleSign = () => {
    if (inputval[0] === "-") {
      setInputVal(inputval.slice(1));
      setCursur(cursur > 0 ? cursur - 1 : 0);
    } else {
      setInputVal("-" + inputval);
      setCursur(cursur + 1);
    }
  };

  return (
    <div style={{ width: "200px" }}>
      <input
        type="text"
        style={{ width: "95%", height: "35px" }}
        readOnly={true}
        value={inputval}
      />
      <Keyboard
        layout={layout}
        onKeyPress={(char) => {
          if (char === "{bksp}") {
            handlebackspace();
          } else if (char === "ClearAll") {
            handleClearAll();
          } else if (char === "{arrowleft}") {
            if (cursur > 0) {
              setCursur(cursur - 1);
            }
          } else if (char === "{arrowright}") {
            if (cursur < inputval.length) {
              setCursur(cursur + 1);
            }
          } else if (char === "-") {
            handleToggleSign();
          } else {
            handlebuttonclick(char);
          }
        }}
        rtl={true}
      />
    </div>
  );
}

export default SampleKeyboard;