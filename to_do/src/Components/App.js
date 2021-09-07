import React,{useState} from "react";

const App = ()=>{
    const [work, setWork]= useState("");
    const [array , setArray]=useState([]);
    const setBackWork=(event)=>{
        setWork(event.target.value);
    }
    const setWorkOnclick=()=>{
        setArray((oldItems)=>{
         return [...oldItems,work]
        });
        setWork("");
    }
    const deleteItem = ()=>{
console.log("deleted");
    }
    return(
        <>
        <h1>To-do List</h1>
        <input type="text" placeholder="Enter your work"
        value={work} onChange={setBackWork}></input>
        <button onClick={setWorkOnclick}>+</button>
        <ol>
        {
            array.map((item,index)=>{
            return(<>
            <div key={index} id={index}>
            <button onClick={deleteItem}>-</button>
            <li>{item}</li>
            </div>
            </>
            ) 
            })
        }
        </ol>
        </>
    )
}

export default App;