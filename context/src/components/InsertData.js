
import React, { useState, useContext } from "react";
import { AppContext } from "./AppContext";

const InsertData = () => {
  const { addData } = useContext(AppContext);
  const [newData, setNewData] = useState("");

  const handleInsert = () => {
    addData(newData);
    setNewData("");
  };

  return (
    <div>
      <h2>Insert Data:</h2>
      <input
        type="text"
        value={newData}
        onChange={(e) => setNewData(e.target.value)}
      />
      <button onClick={handleInsert}>Insert</button>
    </div>
  );
};

export default InsertData;
