import { useState } from "react";

const Search = ({ handleChange }) => {
  return (
    <div>
        <input type="text" name="search" id="search" className="search" placeholder="Search for a city..." onKeyPress={handleChange} />
    </div>
  )
}

export default Search