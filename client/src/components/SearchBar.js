import { BiSearch } from "react-icons/bi";
import './SearchBar.css';

function SearchBar(params) {
  return (
    <div className="search-container">
      <div className="searchbar">
        <input type="text" placeholder="Search Groups..." />
      </div>
      <div className="search-icon">
        <BiSearch />
      </div>
  </div>
  );
}

export default SearchBar;