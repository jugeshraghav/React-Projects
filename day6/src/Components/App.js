import React ,{useState} from "react";
import "../index.css"
const App = ()=>{
    const [FullName , setFullName]= useState();
    const [temp , setTemp]= useState();
    const [Email , setEmail]= useState();
    const [tempEmail , setTempEmail]= useState();
    const PassName = (event)=>{
     setTemp(event.target.value);
    }
    const PassEmail = (event)=>{
        setTempEmail(event.target.value);
       }
    const Clicked = (event)=>{
        event.preventDefault();
        setFullName(temp);
        setEmail(tempEmail);
    }
    return(
        <>
        <form onSubmit={Clicked}>
            <h1>Hello! {FullName}</h1>
            <p>{Email}</p>
            <input type="text"
            placeholder="Enter your Name"
            onChange={PassName}
            />
            <input type="text"
            placeholder="Enter your Email"
            onChange={PassEmail}
            />
            <input type="password"
            placeholder="Enter your Password"
           
            />
            <button >Submit</button>
        </form>
        </>
    )
}

export default App;