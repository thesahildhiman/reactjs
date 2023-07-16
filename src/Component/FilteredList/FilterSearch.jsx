import React, { useState } from "react";

const dataObj = [
  {
    name: "india",
    code: "IN",
  },
  {
    name: "pakistan",
    code: "PK",
  },
  {
    name: "srilanka",
    code: "SL",
  },
];
const FilterSearch = () => {
  const [data, setData] = useState(dataObj);
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const handleChange = (e) => {
    const searchQ = e.target.value;
    setSearchQuery(searchQ);

    const filtered = dataObj.filter((item) =>
      item.name.toLowerCase().includes(searchQ.toLowerCase())
    );
    setFilteredData(filtered);
    console.log("fill----", filteredData);
  };

  return (
    <>
      <input
        type="text"
        onChange={handleChange}
        name="searchQuery"
        placeholder="search"
      />
      {searchQuery === "" ? (
        data.map((item, i) => (
          <div key={i} style={{ backgroundColor: "pink", margin: "5px" }}>
            {item.name}
          </div>
        ))
      ) : filteredData.length === 0 ? (
        <div>No results found.</div>
      ) : (
        filteredData.map((item, i) => (
          <div key={i} style={{ backgroundColor: "pink", margin: "5px" }}>
            {item.name}
          </div>
        ))
      )}
    </>
  );
};

export default FilterSearch;
