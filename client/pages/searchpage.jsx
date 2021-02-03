import React from "react";
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

  return (
    <div className="container">
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
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
                  top: "57%",
                  border: "solid black",
                  overflow: "visible",
                };

                return (
                  <div {...getSuggestionItemProps(suggestion, { style })}>
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
