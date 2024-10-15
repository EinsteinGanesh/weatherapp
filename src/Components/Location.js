import {
  CountrySelect,
  StateSelect,
  CitySelect,
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";
import { useState } from "react";

function Location(props) {
  const [countryId, setCountryId] = useState(null);
  const [stateId, setStateId] = useState(null);
 

  const hadleInputs = (input) => {
    const newLocationData = {
      latitude: input.latitude,
      longitude: input.longitude,
      city: input.name,
    };
    console.log(newLocationData)
    props.getLocation(newLocationData)
  };

  

  return (
    <div>
      <div className="d-flex justify-content-center m-3">
        <div className="my-auto m-2"><b>Country:</b></div>
        <CountrySelect
          onChange={(e) => setCountryId(e.id)}
          placeHolder="Select Country"
        />
      </div>
      <div className="d-flex justify-content-center m-3">
        <div className="my-auto m-2"><b>State:</b></div>
        <StateSelect
          countryid={countryId}
          onChange={(e) => setStateId(e.id)}
          placeHolder="Select State"
        />
      </div>
      <div className="d-flex justify-content-center m-3">
        <div className="my-auto m-2"><b>City:</b></div>
        <CitySelect
          countryid={countryId}
          stateid={stateId}
          placeHolder="Select City"
          onChange={(e) => {
            console.log(e);
            hadleInputs(e);
          }}
        />
      </div>
    </div>
  );
}

export default Location;
