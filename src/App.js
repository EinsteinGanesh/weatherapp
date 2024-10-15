import Heading from "./Components/Heading";
import Location from "./Components/Location";
import Display from "./Components/Display";
import Show from "./Components/Show";
import "./App.css";
import { useState} from "react";

function App() {
  const [long, setLong] = useState(null);
  const [lat, setLat] = useState(null);
  const [city, setCity] = useState(null);
  const [type, setType] = useState(null);
  const [temp, setTemp] = useState(null);
  const [display, setDisplay] = useState(null);
  let [newLatitude,newLongitude,newCity]=[null,null,null]
  const getData = (info) => {
  
    newLatitude = info.latitude;
    newLongitude=info.longitude;
    newCity=info.city;
    setLat(newLatitude);
    setLong(newLongitude);
    setCity(newCity);
    console.log("Location data from APP",newLatitude,newLongitude,newCity);
    return [newLatitude,newLongitude,newCity]
  };
  

  const getTemp = (data, show, type) => {
    setTemp(data);
    setDisplay(show);
    setType(type);
  };

  return (
    <div className="App">
      <Heading />
      <Location getLocation={getData} />
      <Display  latitude={lat} longitude={long} handleTempData={getTemp} />
      <Show city={city} temp={temp} display={display} weathertype={type}/>
    </div>
  );
}

export default App;
