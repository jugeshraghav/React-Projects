import Navbar from "./Navbar"
import Story from "./Story"
import SideBox from "./SideBox"
import Post from "./Posts"
import Images from "../index"
const App = ()=>{
    return(
        <>
        <Navbar/>
        <div className="main_container">
        <div className="page_content">
        <div className="main_content">
         <Story/>
         <Post postimg={Images.neerajchopra} 
         profilename={'neeraj_chopra'} 
         description={`Still processing this feeling. To all of India and beyond, thank you so much for your support and blessings that have helped me reach this stage.
                            This moment will live with me forever 🙏🏽🇮🇳`}/>
         <Post postimg={Images.msdhoni}
          profilename={'mahi1778'} 
          description={`
          “Be yourself; everyone else is already taken.”`}/>
         <Post postimg={Images.shahid} 
         profilename={'shahid kapoor'}
          description={`“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”`}/>
         <Post postimg={Images.sachin}
          profilename={'tendulkar_sachin'}
           description={`“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`}/>
         <Post postimg={Images.pvsindhu}
         profilename={'pv_sindhu'} 
         description={`Still processing this feeling. To all of India and beyond, thank you so much for your support and blessings that have helped me reach this stage.
                            This moment will live with me forever 🙏🏽🇮🇳`}/>
        </div>
        <SideBox/>
        </div>
        </div>
        </>
    )
   
}

export default App;