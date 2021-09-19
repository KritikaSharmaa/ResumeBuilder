import { useParams } from "react-router";
import Preview from "./Preview";
import SaveOptions from "./SaveOptions";

const DownLoadResume=()=>{
    let {cidx}=useParams();
    return<div className="h-auto w-full flex">
        <div className="w-5/12 h-auto">
            <Preview idx={cidx}/>
        </div>
        <div className="w-7/12 h-screen">
            <SaveOptions/>
        </div>
    </div>
}
export default DownLoadResume;