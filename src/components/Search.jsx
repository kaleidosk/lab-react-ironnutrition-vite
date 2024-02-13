import { useState } from "react";

function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    let searchTerm = e.target.value
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search Food"
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;