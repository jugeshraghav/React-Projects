
import Data from "./Data"
import './App.css';

function Card(val,index){
  return(
    <>
    <div className="container" key={index}>
      <h1 className="heading">{val.name}</h1>
      <p className="location">{val.location}</p>
      <p className="car">{val.car}</p>
      </div>
      </>
  )
 
}
function App() {
  return (
 <>{
   Data.map(Card)
 }
 </>
  );
}

export default App;
