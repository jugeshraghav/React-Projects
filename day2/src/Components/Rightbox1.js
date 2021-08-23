import React from "react";
import  fashion from "../images/fashion.jpg";
import "../index.css";

const Rightbox1= ()=>{
    return(
<>
<div className="grid-item image-card box3" >
    <img src={fashion} width="100%" height="30%" alt="" />
        <div className="image-card-content">
            <p className="image-card-heading">MY NAME</p>
                 <p className="description">Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed
                    Just me, myself and I, exploring the universe of uknownment. I have a heart of love and a interest of lorem ipsum and mauris neque quam blog. I want to share my world with you.
                </p>
        </div>
</div>

</>
    )
}

export default Rightbox1;