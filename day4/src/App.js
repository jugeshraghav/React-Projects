import './App.css';
import Data from "./Components/Data"

function Card(val,index){
  return(
    <>
    <div key={index}>
      <h1>{val.name}</h1>
      <p>{val.location}</p>
      <p>{val.car}</p>
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
