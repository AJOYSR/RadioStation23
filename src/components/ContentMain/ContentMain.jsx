// Import necessary libraries and components
import "./ContentMain.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";
import RadioStaion from "../ListItems/RadioStation";
import Footer from "../FooterCom/Footer";
import { AudioProvider } from "../AudioCom/AudioContext";

const ContentMain = () => {
  const [stations, setStations] = useState([]);
  const [stationCount, setStationCount] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [searchCountry, setSearchCountry] = useState("");
  const [searchLanguage, setSearchLanguage] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    // Fetch radio stations data (replace with your API endpoint)
    axios
      .get(
        "https://de1.api.radio-browser.info/json/stations/bycountrycodeexact/bd?limit=100"
      )
      .then((response) => setStations(response.data))
      .catch((error) => console.error("Error fetching data:", error));

    axios
      .get("https://de1.api.radio-browser.info/json/countries")
      .then((response) => setStationCount(response.data))
      .catch((error) => console.error("Error fetching data:", error));

    // Fetch countries data
    axios
      .get("https://restcountries.com/v3.1/all?fields=name,flags")
      .then((response) => {
        // Sort countries by name in ascending order
        const sortedCountries = response.data.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );
        setCountries(sortedCountries);
      })
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  const filterStations = () => {
    let filteredStations = stations;

    if (searchName) {
      filteredStations = filteredStations.filter((station) =>
        station.name.toLowerCase().includes(searchName.toLowerCase())
      );
    }

    if (searchCountry) {
      filteredStations = filteredStations.filter((station) =>
        station.country.toLowerCase().includes(searchCountry.toLowerCase())
      );
    }

    if (searchLanguage) {
      filteredStations = filteredStations.filter((station) =>
        station.language.toLowerCase().includes(searchLanguage.toLowerCase())
      );
    }

    return filteredStations;
  };

  const countryOptions = countries.map((country) => {
    const matchingStationCount = stationCount.find(
      (count) => count.name === country.name.common
    );

    return {
      value: country.name.common,
      label: (
        <div className="flex gap-2 items-center">
          <img
            src={country.flags.png}
            alt={country.name.common}
            style={{ marginLeft: "5px", width: "20px", height: "12px" }}
          />
          {` ${country.name.common} | ${
            matchingStationCount ? matchingStationCount.stationcount : 0
          } stations`}
        </div>
      ),
    };
  });

  return (
    <AudioProvider>
      <div className="radio-list mt-10">
        <div className="filter-options">
          <Select
            placeholder="Find by Country"
            value={searchCountry}
            className="input-field custom-select"
            classNamePrefix="custom-select"
            onChange={(selectedOption) =>
              setSearchCountry(selectedOption ? selectedOption.value : "")
            }
            options={countryOptions}
          />

          <input
            type="text"
            placeholder="Search by language"
            value={searchLanguage}
            className="input-field"
            onChange={(e) => setSearchLanguage(e.target.value)}
          />

          <input
            type="text"
            placeholder="Search by name"
            value={searchName}
            className="input-field"
            onChange={(e) => setSearchName(e.target.value)}
          />

          {/* Use Select from react-select */}
        </div >
        <ul className="flex flex-wrap items-center gap-8 mx-auto lg:mx-0 lg:flex-row lg:justify-start lg:gap-8 mt-5">
          {filterStations().map((station, index) => (
            <RadioStaion station={station} key={index} className="lg:w-1/2" />
          ))}
        </ul>

        <Footer />
      </div>
    </AudioProvider>
  );
};

export default ContentMain;
