import React from "react";
import AppIcon from "../components/appicon";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

export default function SearchPage() {
  const [address, setAddress] = React.useState("");
  const [coordinates, setCoordinates] = React.useState({
    lat: null,
    lng: null,
  });

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    console.log(results[0].formatted_address);
    console.log(results);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(latLng);
  };

  const searchOptions = {
    types: ["geocode"],
  };

  return (
    <div className="container">
      <AppIcon />
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
        searchOptions={searchOptions}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <>
            <h1 className="text" id="searchHeader">
              Search a City
            </h1>
            <input
              id="autocompleteform"
              {...getInputProps({
                placeholder: "Enter a City Name",
              })}
            />

            <div style={{ width: "100vw" }}>
              {loading ? (
                <div style={{ position: "relative", top: "45%" }}>
                  Loading...
                </div>
              ) : null}
              {suggestions.map((suggestion) => {
                const style = {
                  backgroundColor: suggestion.active ? "#41b6e6" : "#fff",
                  position: "relative",
                  top: "5%",
                  border: "solid black",
                };

                return (
                  <div {...getSuggestionItemProps(suggestion, { style })}>
                    <i className="fas fa-map-marker-alt"></i>
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </>
        )}
      </PlacesAutocomplete>
    </div>
  );
}
