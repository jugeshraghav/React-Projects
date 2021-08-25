import StoryElement from './StoryElement.js';
import './style.css';
import Images from "../index"
const Story = ()=>{
    return(
<>
<div className="storyBox">
<StoryElement img={Images.neerajchopra} name={'jugesh_raghav'}/>
<StoryElement img={Images.pvsindhu} name={'raghav@sharma'}/>
<StoryElement img={Images.sachin} name={'manvi-tyagi'}/>
<StoryElement img={Images.shahid} name={'neeraj_chopra'}/>
<StoryElement img={Images.msdhoni} name={'jyoti_singh'}/>
<StoryElement img={Images.neerajchopra} name={'Shreya_Raghav'}/>
<StoryElement img={Images.shahid} name={'Geeta_devi'}/>
</div>
</>
    )
}

export default Story;