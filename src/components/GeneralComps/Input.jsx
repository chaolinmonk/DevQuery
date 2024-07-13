import React, { useState } from "react";
import "./Input.css";

export default function Input({ Iwidth = 100, mail = false, password = false }) {
  const [message, setMessage] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleChange = (event) => {
    const value = event.target.value;
    setMessage(value);

    if (mail) {
      if(value.includes("@") && !value.includes(" ")){
        setIsValidEmail(true);
      }else{
        setIsValidEmail(false);

      }
    }
  };

  const stl = {
    width: `${Iwidth}`,
    minWidth: `${Iwidth}`,
    height: "35px",
  };

  return (
    <div>
      <input
        type={password ? "password" : "text"}
        className="Ginput"
        style={stl}
        value={message}
        onChange={handleChange}
      />
      {mail && !isValidEmail && (
        <div className="error-message">Correo electrónico inválido</div>
      )}
    </div>
  );
}
