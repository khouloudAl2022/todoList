import React, { useState } from "react";

const Formhooks = () => {
  const [text, setText] = useState("");
  const handletext = (event) => setText(event.target.value);

  return (
    <div>
      <input type="text" onChange={handletext} />
      <h3>{text}</h3>
    </div>
  );
};

export default Formhooks;
