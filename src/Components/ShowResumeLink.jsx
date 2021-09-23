// import { useSelector } from "react-redux";
 import { useLocation } from "react-router";
// import Preview from "./Preview";

const ShowResumeLink=()=>{
   let query = new URLSearchParams(useLocation().search)
  console.log( query.get('rid'));
    return <>
        <div className="h-40 w-40 bg-gray-800"> hi</div>
    </>
}
export default ShowResumeLink; 