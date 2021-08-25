import "./style.css";


const Post = (props) => {
    return (
        <>
            <div className="post_container">
                <div className="heading_part">
                    <img src={props.postimg} alt="profile_pic" className="profile_pic"></img>
                    <p className="name">{props.profilename}</p>
                </div>
                <div className="image_part">
                    <img src={props.postimg} alt="post_pic" className="post_pic"></img>
                </div>
                <div className="bottom_part">
                    <div>
                        <li><i class="far fa-heart"></i></li>
                        <li><i class="fas fa-location-arrow"></i></li>
                        <li><i class="far fa-comment"></i></li>
                        <li><i class="fas fa-ellipsis-h"></i></li>
                    </div>
                    <div>
                        <img src={props.postimg} alt="liked_by_pic" className="liked_by_pic"></img>
                        <p className="liked_by">Liked by &nbsp; <strong style={{ display: 'inline-block' }}> jugesh_raghav </strong> &nbsp; and &nbsp;<strong> 1,234,988&nbsp; </strong> others.</p>
                    </div>
                    <div>
                        <h4 >{props.profilename}</h4>
                        <p > {props.description}  </p>
                    </div>
                
                </div>
                <div className="comment_part">
                    <p>Add a Comment...</p>
                    <p>Add a Comment...</p>
                    <p>Add a Comment...</p>
                </div>
            </div>

        </>
    )
}

export default Post