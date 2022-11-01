import React, { useState } from 'react'
import data from '../dumyData';


const SearchBar = () => {

 const [searchInput, setSearchInput] = useState(data);


const handleChange = (e) => {
  e.preventDefault();
  setSearchInput(e.target.value);
};

if (searchInput.length > 0) {
    searchInput.filter((user) => {
    return user.name.match(searchInput);
});
}

return (<div>

<nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="search users..." aria-label="Search" />
        <button class="btn btn-outline-success" type="submit" >Search</button>
      </form>
    </div>
  </div>
</nav>

</div>)


};

export default SearchBar;