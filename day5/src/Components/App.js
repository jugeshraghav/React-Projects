

const Slot= (props)=>{
    if(props.x===props.y&& props.y===props.z){
        return(
            <>
            <h1>{props.x} {props.y} {props.z}</h1>
            <h3>It's a match!</h3>
            </>
        ) 
    }
    else{
        return(
            <>
            <h1>{props.x} {props.y} {props.z}</h1>
            <h3>Not a match!</h3>
            </>
        ) 
    }
}


const App= ()=>{
    return(
        <>
        <Slot x={'😀'} y={'😁'} z={'😀'}/>
        <Slot x={'😁'} y={'😁'} z={'😀'}/>
        <Slot x={'😀'} y={'😀'} z={'😀'}/>
        <Slot x={'😀'} y={'😁'} z={'😀'}/>
        <Slot x={'😀'} y={'😁'} z={'😀'}/>
        </>
    )

}

export default App;