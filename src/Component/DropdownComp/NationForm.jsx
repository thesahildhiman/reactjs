import React, { useState } from "react";

const NationForm = ({ addNationData }) => {
  const [nationData, setNationData] = useState({});

  const submit = (e) => {
    e.preventDefault();
    addNationData(nationData);
  };

  const handleChange = (e) => {
    setNationData({ ...nationData, [e.target.name]: e.target.value });
  };

  return (
    <form>
      <input
        type="text"
        onChange={handleChange}
        name="name"
        placeholder="name"
      />
      <input
        type="text"
        onChange={handleChange}
        name="code"
        placeholder="code"
      />
      <button onClick={submit}>add</button>
    </form>
  );
};

export default NationForm;
