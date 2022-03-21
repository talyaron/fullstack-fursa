




import React, { useState, useEffect } from "react";



const CountriesToShow = (props) => {
    const { countries, searchQuery, searchResult, setSearchQuery } = props;
  
    if (searchQuery === "")
      return countries.map((x) => <div key={shortid.generate()}>{x.name}</div>);
    //render all countries names
    else {
      const result = searchResult(searchQuery, countries); //get countries matching query
      if (result.length > 10)
        //if > 10 countries found
        return (
          <div>
            <p>
              More than 10 matches, please be less greedy with your searching!
            </p>
          </div>
        );
      else if (result.length > 1 && result.length < 10) {
        //if (1,10) countries found
        return result.map((x) => (
          <div key={shortid.generate()}>
            {x.name}{" "}
            <button onClick={() => setSearchQuery(x.name)}>Show Info</button>
          </div>
        )); //render them
      } else if (result.length === 1) {
        //if search result is 1 country
        let x = result[0];
        return (
          <div>
            <h1>{x.name}</h1>
            <p>Capital: {x.capital}</p>
            <p>Population: {x.population}</p>
            <h2>Languages:</h2>
            <ul>
              {x.languages.map((lang) => (
                <li key={shortid.generate()}>{lang.name}</li>
              ))}
            </ul>
            <img src={x.flag} alt={x.name + " flag"} width="35%" />
            <WeatherData country={x} />
          </div>
        );
      } else
        return (
          <div>
            <p>No matches ;_;</p>
          </div>
        );
    } //this block rendered search results
  };