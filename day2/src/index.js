import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import RecentPost from "./Components/Recent";
import Rightbox1 from "./Components/Rightbox1";
import Rightbox2 from "./Components/Rightbox2";
import Rightbox3 from "./Components/Rightbox3";
import Footer from "./Components/Footer";

ReactDOM.render(
    <>
        <p className="heading">MY BLOG</p>
        <p>Welcome to the blog of <span className="author">JUGESH RAGHAV</span></p>
        <div className="container">
            <div className="half">
             <RecentPost/>
             <RecentPost/> 
             <RecentPost/>
            </div>

            <div className="half">
                <Rightbox1/>
                 <Rightbox2/>
                 <Rightbox2/>
                <Rightbox3/>       
            </div>
        </div>    
        <Footer/>
            
        </>,
            document.getElementById("root")
                            );