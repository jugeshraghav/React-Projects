import React from "react";
import ReactDOM from "react-dom";

//for external css to be applied index.css is imported.
import "./index.css";

//design object created for internal css
const Design ={};

//date=(year,month,day,hours) change the hour(0-24) and see the magic
const currDate = new Date(2021,5,6,1);
const currTime = currDate.getHours();
let greeting = "";
if(currTime>=1 && currTime<12){
greeting="Good Morning!";
Design.color="green";
}else if(currTime>=12 && currTime<19){
  greeting="Good Evening!";
  Design.color="orange";
}else if(currTime>=19 && currTime<=24){
  greeting="Good Night!";
  Design.color="black";
}

ReactDOM.render(
  <>
    <div className="box">
    <h1><span style={Design}> {greeting} </span>Jugesh</h1>
    </div>
  </>,
  document.getElementById("root")
)