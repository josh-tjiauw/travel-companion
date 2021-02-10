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
    <div className="container">
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
        searchOptions={searchOptions}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps }) => (
          <>
            <div style={{ position: "relative", right: "2%", top: "10%" }}>
              <PageTitle value="Search a City" />
            </div>
            <input
              id="autocompleteform"
              {...getInputProps({
                placeholder: "Enter a City Name",
              })}
            />

            <div style={{ width: "100vw" }}>
              {suggestions.map((suggestion) => {
                const style = {
                  backgroundColor: suggestion.active ? "#41b6e6" : "#fff",
                  position: "relative",
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
        href={`#city?cityName=${fixCityName(city.name)}&placeId=${
          city.place_id
        }`}
      >
        <button className="nav-btn" style={{ justifyContent: "center" }}>
          Enter
        </button>
      </a>
    </div>
  );
}
