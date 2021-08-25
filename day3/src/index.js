import React from "react";
import ReactDOM from "react-dom";
import App from './Components/App';

const Images = {
pvsindhu : require('./images/pvsindhu.jpg').default,
neerajchopra : require('./images/neerajchopra.webp').default,
shahid : require('./images/shahid.jpg').default,
sachin : require('./images/sachin.jpg').default,
msdhoni : require('./images/ms dhoni.jpg').default
}

export default Images;

ReactDOM.render(<App/>,document.getElementById("root"));
