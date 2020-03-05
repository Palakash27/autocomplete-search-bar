import React, { useState } from "react";

const SearchBar = props => {
  const [filteredItems, setFilteredItems] = useState(null);
  console.log(filteredItems);

  const onSearchContentChange = e => {
    if (e.target.value.length === 0) {
      setFilteredItems(null);
    } else {
      setFilteredItems(
        props.items.filter(item => item.includes(e.target.value)).slice(0, 10)
      );
    }
  };

  return (
    <div className="search-bar">
      <input onChange={onSearchContentChange} type="text" />
      <ul>{filteredItems && filteredItems.map(item => <li>{item}</li>)}</ul>
    </div>
  );
};
export default SearchBar;
