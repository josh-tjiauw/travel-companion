import React from 'react';
import PlacesAutocomplete, {
  geocodeByAddress
} from 'react-places-autocomplete';
import AppIcon from '../components/appicon';
import PageTitle from '../components/PageTitle';

export default function SearchPage(props) {
  const [address, setAddress] = React.useState('');

  const [city, setCity] = React.useState({
    name: null,
    place_id: null
  });

  const handleSelect = async value => {
    const results = await geocodeByAddress(value);
    const cityName = results[0].formatted_address;
    const placeId = results[0].place_id;

    setCity({ name: cityName, place_id: placeId });
    setAddress(value);
    props.getInfo(results);
  };

  const searchOptions = {
    types: ['geocode']
  };

  return (
    <div className='container-fluid'>
      <AppIcon />
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
        searchOptions={searchOptions}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps }) => (
          <>
            <div>
              <PageTitle value='Search a City' />
            </div>
            <div
            className='search_container'
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '50px'
              }}
            >
              <input
                required
                style={{ fontSize: '16px', padding: '5px', width: '100%' }}
                {...getInputProps({
                  placeholder: 'Enter a City Name'
                })}
              />
            </div>

            <div className='suggestion_div'>
              {suggestions.map(suggestion => {
                const style = {
                  backgroundColor: suggestion.active ? '#41b6e6' : '#fff',
                  width: '100%',
                  border: 'solid black'
                };

                return (
                  <div
                    key={suggestion.placeId}
                    {...getSuggestionItemProps(suggestion, { style })}
                  >
                    <i className='fas fa-map-marker-alt'></i>
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </>
        )}
      </PlacesAutocomplete>
      <button
        className={city.name === null ? 'hidden' : 'nav-btn'}
        onClick={e => {
          e.preventDefault();
          window.location.href = `#city?cityName=${city.name}&placeId=${city.place_id}`;
        }}
      >
        Enter
      </button>
    </div>
  );
}
