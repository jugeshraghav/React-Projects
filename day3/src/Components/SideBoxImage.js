import './style.css'

const SideBoxImage = (props) => {
    return (
        <>
            <div className="SideBoxImageContainer">
                    <img src={props.pro_image} className="sideBox_image" alt=""></img>
                    <div>
                        <h4>{props.displayname}</h4>
                        <p>{props.actualname}</p>
                    </div>
            </div>
        </>
    )
}

export default SideBoxImage