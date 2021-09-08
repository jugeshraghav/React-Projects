import React, {useState} from "react";
import Questions from "./Questions";
import Accordian from "./Accordian"
import "../index.css"

const App = ()=>{
    const [data, setData]= useState(Questions)
    return (
        <>
        <h1>Some Important ReactJS questions</h1>
        <div className="container">
        {
            data.map((data)=>{
                return(
                 <Accordian
                key={data.id}
                question={data.question}
                 answer={data.answer}
                 />
                )
            })
        }
        </div>
        </>
    )
}

export default App;