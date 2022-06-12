import React, { useState } from "react";
import Button from "./Button";
import "./Input.css";

const Input = ({
  value,
  onChange,
  placeholder,
  isValid,
  validationMessage,
}) => {
  const [isDirty, setIsDirty] = useState(false);

  return (
    <>
      <div className="input-container">
        <input
          type="text"
          value={value}
          className={`input ${
            isDirty && (isValid ? "input-valid" : "input-invalid")
          }`}
          placeholder={placeholder}
          onChange={(e) => {
            setIsDirty(true);
            onChange(e.target.value);
          }}
        />
        <Button />
      </div>
      <p
        className={`error-message ${
          isDirty && (isValid ? undefined : "invalid")
        }`}
      >
        {validationMessage}
      </p>
    </>
  );
};

export default Input;
