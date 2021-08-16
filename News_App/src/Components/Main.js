import { useState,useEffect} from "react";
import "./style.css";

const Main=()=>{
const[articles, setArticles]=useState([]);
const[search, setSearch]=useState("");

useEffect(()=>{
    const url ="https://newsapi.org/v2/everything?q=bollywood&from=2021-07-09&sortBy=publishedAt&apiKey=ca11ed3396a145ef85d33ae778b57c60";
    fetch(url).then((response)=>response.json())
    .then((data)=>{
        console.log(data);
     setArticles(data.articles);
    })
},[])

const readValue=(value)=>{
    setSearch(value);
}


const searchNews=()=>{
    const url =`https://newsapi.org/v2/everything?q=${search}&from=2021-07-09&sortBy=publishedAt&apiKey=ca11ed3396a145ef85d33ae778b57c60`;
    fetch(url).then((response)=>response.json())
    .then((data)=>{
     setArticles(data.articles);
    })
}

return(
    <div classname="container">
        <div className="filter">
            <input type="search" placeholder="Enter anything you want to search" onChange={((event)=>{readValue(event.target.value)})}></input>
            <button onClick={searchNews}>Search</button>
        </div>

        <h1>ALL NEWS</h1>

        {
            articles.length===0 ? (<h1>NO DATA FOUND</h1>) :
            articles.map((article,index)=>(
                <div className="article" key={index}>
                    <div className="imgContainer">
                        <img src={article.urlToImage} alt="img"></img>
                     </div>
                     <div className="articleDetails">
                    <h1>{article.title}</h1>
                    <p className="author">{article.author}</p>
                    <p>{article.description}</p>
                    <p><a href={article.url}>Read More</a></p>
                    </div>

                </div>
            ))
        }
                
    </div>
            )


}

export default Main;