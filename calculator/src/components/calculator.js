import React, { useState } from "react";
import CalcButton from "./CalcButton";
import CalcDisplay from "./CalcDisplay";

function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => setInput((prev) => prev + value);
  const handleClear = () => setInput("");
  const handleEqual = () => {
    try {
      setInput(eval(input).toString()); // ⚠️ unsafe in real apps, okay for demo
    } catch {
      setInput("Error");
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
      <div
        style={{
          width: "420px",
          height: "700px",
          padding: "20px",
          borderRadius: "12px",
          background: "#2c2c2c",
          boxShadow: "0px 8px 16px rgba(0,0,0,0.5)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Display */}
        <CalcDisplay value={input} />

        {/* Buttons */}
        <div
          style={{
            flex: 1,
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gridAutoRows: "1fr",
            gap: "10px",
          }}
        >
          <CalcButton label="C" style={{ background: "#d9534f", color: "white" }} onClick={handleClear} />
          <CalcButton label="÷" style={{ background: "#0275d8", color: "white" }} onClick={() => handleClick("/")} />
          <CalcButton label="×" style={{ background: "#0275d8", color: "white" }} onClick={() => handleClick("*")} />
          <CalcButton label="−" style={{ background: "#0275d8", color: "white" }} onClick={() => handleClick("-")} />

          <CalcButton label="7" style={{ background: "#e0e0e0" }} onClick={() => handleClick("7")} />
          <CalcButton label="8" style={{ background: "#e0e0e0" }} onClick={() => handleClick("8")} />
          <CalcButton label="9" style={{ background: "#e0e0e0" }} onClick={() => handleClick("9")} />
          <CalcButton label="+" style={{ background: "#0275d8", color: "white" }} onClick={() => handleClick("+")} />

          <CalcButton label="4" style={{ background: "#e0e0e0" }} onClick={() => handleClick("4")} />
          <CalcButton label="5" style={{ background: "#e0e0e0" }} onClick={() => handleClick("5")} />
          <CalcButton label="6" style={{ background: "#e0e0e0" }} onClick={() => handleClick("6")} />

          <CalcButton
            label="="
            style={{ background: "#5cb85c", color: "white", gridRow: "span 2", fontSize: "28px", fontWeight: "bold" }}
            onClick={handleEqual}
          />

          <CalcButton label="1" style={{ background: "#e0e0e0" }} onClick={() => handleClick("1")} />
          <CalcButton label="2" style={{ background: "#e0e0e0" }} onClick={() => handleClick("2")} />
          <CalcButton label="3" style={{ background: "#e0e0e0" }} onClick={() => handleClick("3")} />

          <CalcButton label="0" style={{ background: "#e0e0e0", gridColumn: "span 2" }} onClick={() => handleClick("0")} />
          <CalcButton label="." style={{ background: "#e0e0e0" }} onClick={() => handleClick(".")} />
        </div>
      </div>
    </div>
  );
}

export default Calculator;
