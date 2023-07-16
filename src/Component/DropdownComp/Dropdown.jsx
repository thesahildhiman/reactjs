import React, { useState } from "react";
import NationForm from "./NationForm";
const nations = [
  { id: 1, name: "India", code: "IN" },
  { id: 2, name: "Pak", code: "PK" },
  { id: 3, name: "Bangladesh", code: "BG" },
];

const Dropdown = () => {
  const [nationData, setNationData] = useState(nations);
  const addNationData = (data) => {
    console.log("--data--", data);
    setNationData([...nationData, { ...data, id: nationData.length + 1 }]);
  };
  const handleSelect = (e) => {
    console.log(e.target.value);
  };
  return (
    <>
      <NationForm addNationData={addNationData} />
      <div>
        <select onChange={handleSelect}>
          {nationData?.map((d, i) => {
            return (
              <option key={i}>
                {d.name}-{d.code}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
};

export default Dropdown;
