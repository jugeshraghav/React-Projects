import './style.css';
const StoryElement= (props)=>{
    return(
        <>
        <div className="storyCircleContainer">
        <img src={props.img} alt="" className="storyCircle"></img>
        <p>{props.name}</p>
        </div>
       
        </>
    )
}

export default StoryElement;