import React from "react";

function CalcDisplay({ value }) {
  return (
    <div
      style={{
        width: "100%",
        height: "80px",
        fontSize: "32px",
        textAlign: "right",
        lineHeight: "80px",
        backgroundColor: "white",
        color: "black",
        border: "2px solid #ccc",
        borderRadius: "6px",
        paddingRight: "10px",
        overflowX: "auto",
        whiteSpace: "nowrap",
        marginBottom: "10px",
        boxSizing: "border-box",
      }}
    >
      {value || "0"}
    </div>
  );
}

export default CalcDisplay;
