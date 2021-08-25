import './style.css'
import Images from "../index"
import SideBoxImage from "./SideBoxImage"

const SideBox = ()=>{
    return(
        <>
        <div className="sideBox">
            <div>
            <img src={Images.shahid}  className="sideBox_main_image" alt=""></img>
         <div>
         <h3>Jugesh Raghav</h3>
         <p>jugesh_raghav</p>
         </div>
            </div>
            <h3>Suggestions For You</h3>
        <SideBoxImage pro_image={Images.neerajchopra} displayname={'Neeraj Chopra'} actualname={'neeraj_chopra'}/>
         <SideBoxImage pro_image={Images.msdhoni} displayname={'Shubham Gill'} actualname={'shubham@gill'}/>
         <SideBoxImage pro_image={Images.pvsindhu} displayname={'Manvi Khandelwal'} actualname={'@manvi_khandelwal'}/>
         <SideBoxImage pro_image={Images.sachin} displayname={'Jyoti Singh'} actualname={'star_sheen'}/>
         <SideBoxImage pro_image={Images.shahid} displayname={'Sarita Choubey'} actualname={'sazz_choubey'}/>
         <SideBoxImage pro_image={Images.neerajchopra} displayname={'Tanmay Chauhan'} actualname={'@tanmay'}/>
        </div>
        </>
    )
}

export default SideBox