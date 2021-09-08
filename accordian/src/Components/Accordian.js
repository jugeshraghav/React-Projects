import React,{useState} from "react";
import "../index.css"

const Accordian = (props)=>{
    const [show, setShow]= useState(false);
    return (
                    <>
                    <h3><button onClick={()=>{setShow(!show)}}>{show ? "-" : "+"}</button>{props.question}</h3>
                   {
                       show &&   <p>{props.answer}</p>
                   }
                  
                    </>
    )
}

export default Accordian;