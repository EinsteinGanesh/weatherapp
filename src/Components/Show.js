import React from "react";

function Show(props) {
  if(props.display){
  return (

    <div>
      <h3 className="h3">The Temperature in {props.city} is:</h3>
      <div className="display1 f-2">{props.temp}</div>
      <div>It's {props.weathertype} here</div>
    </div>
  );}
}

export default Show;
