import React from "react";
import  woods from "../images/woods.jpg";
import "../index.css";

const RecentPost= ()=>{
    return(
<>
<div className="grid-item image-card">
                    <img src={woods} width="100%" alt="card" />
                        <div className="image-card-content box1s">
                            <p className="image-card-heading">TITLE HEADING</p>
                            <p>Title description,<span className="date"> April 7, 2014</span> </p>
                            <p className="description">Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed
                                mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus
                                at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum.
                                Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.
                            </p>
                            <button>READ MORE</button>
                        </div>
                </div>

</>
    )
}

export default RecentPost;