import React, { useEffect, useState } from "react";

const Statewise = ()=>{

    const [data, setData] = useState([]);

    const getCovidData = async ()=>{
        const res = await fetch ('https://api.covid19india.org/data.json');
        const actualData = await res.json();
      setData(actualData.statewise);
      console.log(actualData.statewise);
     }

    useEffect(()=>{
        getCovidData();
    },[])
  
    return (
        <>
        <h1>hii</h1>
        {
            data.map((currElem, ind)=>{
                return(
                    <h1>{currElem.states}</h1>
                )
    
            })
        }
    
        </>
    )
}

export default Statewise;