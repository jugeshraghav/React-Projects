import React,{useState} from "react";
import "../index.css"

const App = ()=>{
    const [work, setWork]= useState("");
    const [array , setArray]=useState([]);
    const setBackWork=(event)=>{
        setWork(event.target.value);
     
    }
    const setWorkOnclick=()=>{
        if(work){
            setArray((oldItems)=>{
                return [...oldItems,work]
               });
        }
        else{
            console.log("enter a valid value");
        }
        setWork("");
    }
    const deleteItem = (index)=>{
        setArray((oldItems)=>{
            return oldItems.filter((arrElem,id)=>{
             return id !== index ;
            })
           });
    }
    return(
        <>
        <div className="container">
        <h1>THINGS TO DO :</h1>
        <input type="text" placeholder="Enter your work"
        value={work} onChange={setBackWork}></input>
        <button className="addButton" onClick={setWorkOnclick}>+</button>
        <ul>
        {
            array.map((item,index)=>{
            return(<>
            <div className="item" key={index} id={index}>
            <button className="deleteButton" onClick={()=>{deleteItem(index)}}>-</button>
            <li>{item}</li>
            </div>
            </>
            ) 
            })
        }
        </ul>
        </div>
        </>
    )
}

export default App;