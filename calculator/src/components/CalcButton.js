import React from "react";

function CalcButton({ label, onClick, style }) {
  const baseButton = {
    border: "none",
    borderRadius: "8px",
    fontSize: "24px",
    cursor: "pointer",
    boxShadow: "inset -2px -2px 4px #aaa, inset 2px 2px 4px #fff",
    ...style,
  };

  return (
    <button style={baseButton} onClick={onClick}>
      {label}
    </button>
  );
}

export default CalcButton;
