import { useSelector } from "react-redux";

const ShowResumeLink=()=>{
    let kuchbhi=useSelector(state=>state.ResumeStore);
    console.log(kuchbhi);
    return<>ShowResumeLink</>
}
export default ShowResumeLink;