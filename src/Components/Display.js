import React from "react";
function Display(props) {
  // const [lat,long] = props.runData();
  const lat = props.latitude;
  const long = props.longitude;
  const apiKey = "0f4c6fcf33cf332e6f3deb6b0a92ec5d";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`;
  let showDisplay = false;
  const fetchWeatherData = async () => {
    
    console.log(`Latitude: ${lat} & Longitude: ${long}`);
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Network Response not ok");
      }
      const data = await response.json();
      const mainTemp = data.main.temp;
      const degreeTemp = (mainTemp - 273.15).toFixed(1);
      showDisplay = true;
      const weatherType = data.weather[0].main;
      props.handleTempData(degreeTemp, showDisplay,weatherType); //this sending fetched data to display
      console.log("Maintemp", mainTemp);
      console.log(`the main temperature is ${degreeTemp}`);
    } catch (err) {
      console.log("There is problem with fetch", err);
    }
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={fetchWeatherData}>
        Submit
      </button>
    </div>
  );
}

export default Display;


