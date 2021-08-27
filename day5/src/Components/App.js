import "./App.css";

const Slot= (props)=>{
    if(props.x===props.y&& props.y===props.z){
        return(
            <>
            <h1>{props.x} {props.y} {props.z}</h1>
            <h3>It's a match!</h3>
            <hr></hr>
            </>
        ) 
    }
    else{
        return(
            <>
            <h1>{props.x} {props.y} {props.z}</h1>
            <h3>Not a match!</h3>
            <hr></hr>
            </>
        ) 
    }
}


const App= ()=>{
    return(
        <>
        <h1 className="heading">Slot Machine</h1>
        <div className="container">
        <Slot x={'😀'} y={'😁'} z={'😀'}/>
        <Slot x={'😁'} y={'😁'} z={'😀'}/>
        <Slot x={'😀'} y={'😀'} z={'😀'}/>
        <Slot x={'🧡'} y={'❤'} z={'💚'}/>
        <Slot x={'1️⃣'} y={'1️⃣'} z={'1️⃣'}/>
        </div>
        </>
    )

}

export default App;