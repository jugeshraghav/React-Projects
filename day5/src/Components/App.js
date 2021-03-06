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
        <Slot x={'๐'} y={'๐'} z={'๐'}/>
        <Slot x={'๐'} y={'๐'} z={'๐'}/>
        <Slot x={'๐'} y={'๐'} z={'๐'}/>
        <Slot x={'๐งก'} y={'โค'} z={'๐'}/>
        <Slot x={'1๏ธโฃ'} y={'1๏ธโฃ'} z={'1๏ธโฃ'}/>
        </div>
        </>
    )

}

export default App;