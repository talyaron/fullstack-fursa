import React, { useState, useEffect } from "react";
import axios from "axios";
const shortid = require("shortid");
require("dotenv");

function isEmpty(obj:object) {
  //returns whether object is empty
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
}

const App = () => {
  const [countries, setCountries] = useState([]); 
  const [searchQuery, setSearchQuery] = useState(""); 

  const hook = () => {
    axios
      .get("https://restcountries.eu/rest/v2/all") 
      .then((res) => {
        setCountries(res.data); 
      });
  };
  useEffect(hook, []); //empty array in second arg means execute effect only on first rendering

  const handleSearchInput = (event:any) => {
    console.log("we are inside handleSearchInput");
    setSearchQuery(event.target.value); //now 'searchQuery' contains what is currently written in input
  };

  const searchResult = (query:string, countries:any) => {
    //returns array of countries that correspond to query
    return countries.filter((x: { name: string; }) =>
      x.name.toLowerCase().includes(query.toLowerCase())
    );
  };

  return (
    <div className="App">
      <div>
        <p>Find Countries</p>
        <input value={searchQuery} onChange={handleSearchInput} />
      </div>
      <div>
        <CountriesToShow
          countries={countries}
          searchQuery={searchQuery}
          searchResult={searchResult}
          setSearchQuery={setSearchQuery}
        />
      </div>
    </div>
  );
};
export default App;