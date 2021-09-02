import NavBar from "./NavBar";
import skin1 from "../images/skin1.svg";
import skin2 from "../images/skin2.svg";
import {addTemplate} from "../redux/action/selectTemp_action";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const Template = () => {
  let dispatch=useDispatch();
  let history=useHistory();
  return (
    <>
      <NavBar type="Template" />
      <div className="h-auto w-full lg:h-screen bg-TempBackImg flex justify-evenly items-center m-0">
        <div className="grid sm:grid-cols-2 sm:grid-rows-5 md:grid-cols-3 md:grid-rows-4 lg:grid-cols-4 lg:grid-rows-2 gap-14 mt-8 mb-8 lg:mt-16">
          <div className="h-96 w-64 bg-white p-1 shadow-md hover:shadow-2xl relative" onClick={()=>{
            dispatch(addTemplate("A"));
            history.push("/PersonalDetails");
            }}>
            <img src={skin1} alt="imgA" className="h-10/12 w-full"/>

            <span class="material-icons-outlined absolute bottom-2 right-20 text-red-700 z-10">favorite_border</span>

            <span className="h-8 w-12 flex justify-center items-center bg-purple-400 text-white rounded-lg absolute bottom-2 right-6">Free</span>

          </div>
          <div className="h-96 w-64 bg-white p-1 shadow-md hover:shadow-2xl relative" onClick={()=>{
            dispatch(addTemplate("B"));
            history.push("/PersonalDetails");
            }}>
            <img src={skin2} alt="imgB" className="h-10/12 w-full"/>

            <span class="material-icons-outlined absolute bottom-2 right-20 text-red-700 z-10">favorite_border</span>

            <span className="h-8 w-12 flex justify-center items-center bg-purple-400 text-white rounded-lg absolute bottom-2 right-6">Free</span>

          </div>




          <div className="h-96 w-64 bg-blue-400 shadow-md hover:shadow-2xl" ></div>
          <div className="h-96 w-64 bg-blue-400 shadow-md hover:shadow-2xl"></div>
          <div className="h-96 w-64 bg-blue-400 shadow-md hover:shadow-2xl"></div>
          <div className="h-96 w-64 bg-blue-400 shadow-md hover:shadow-2xl"></div>
          <div className="h-96 w-64 bg-blue-400 shadow-md hover:shadow-2xl"></div>
          <div className="h-96 w-64 bg-blue-400 shadow-md hover:shadow-2xl"></div>
        </div>
      </div>
    </>
  );
};
export default Template;
