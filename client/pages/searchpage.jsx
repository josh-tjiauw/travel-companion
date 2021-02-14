import React from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import PageTitle from "../components/PageTitle";
import fixCityName from "../lib/fixCityName";

export default function SearchPage(props) {
  const [address, setAddress] = React.useState("");
  const [coordinates, setCoordinates] = React.useState({
    lat: null,
    lng: null,
  });

  const [city, setCity] = React.useState({
    name: null,
    place_id: null,
  });

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    const cityName = results[0].formatted_address;
    const placeId = results[0].place_id;

    setCity({ name: cityName, place_id: placeId });
    setAddress(value);
    setCoordinates(latLng);
    props.getInfo(results);
  };

  const searchOptions = {
    types: ["geocode"],
  };

  return (
    <div
      style={{
        backgroundColor: "#202324",
        display: "flex",
        flexWrap: "wrap",
        height: "100vh",
      }}
    >
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
        searchOptions={searchOptions}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps }) => (
          <>
            <div
              style={{
                display: "flex",
                position: "relative",
                justifyContent: "center",
                top: "10%",
                width: "100vw",
                height: "30px",
              }}
            >
              <PageTitle value="Search a City" />
            </div>
            <div style={{ width: "100%" }}>
              <input
                id="autocompleteform"
                {...getInputProps({
                  placeholder: "Enter a City Name",
                })}
              />
            </div>

            <div style={{ width: "100vw" }}>
              {suggestions.map((suggestion) => {
                const style = {
                  backgroundColor: suggestion.active ? "#41b6e6" : "#fff",
                  width: "100%",
                  border: "solid black",
                };

                return (
                  <div
                    key={suggestion.placeId}
                    {...getSuggestionItemProps(suggestion, { style })}
                  >
                    <i className="fas fa-map-marker-alt"></i>
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </>
        )}
      </PlacesAutocomplete>
      <a
        href={`#city?cityName=${city.name}&placeId=${city.place_id}`}
        className="nav-btn"
        style={{ display: "flex", justifyContent: "center", color: "black" }}
      >
        Enter
      </a>
    </div>
  );
}
