import {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { SaveResumeToDatabase } from "../redux/action/SaveResume_action";
import {DownLoadResume_action} from "../redux/action/DownLoadResume_action";
import React from "react";

const SaveOptions=()=>{
  let [Save,setSave]=useState(false);
  let [LinkClicked,setLinkClicked]=useState(false);
  let {cidx}=useParams();
  let dispatch=useDispatch();
  let {ResumeStore,personalDetails,Education,Skills,Projects,Achievements}=useSelector(state=>state);
  console.log(ResumeStore.rid);
  return <>
  <div class="min-h-screen py-6 flex flex-col justify-center sm:py-12">
  <div class="relative py-3 sm:max-w-xl sm:mx-auto slide-down">
    <div class="absolute inset-0 bg-purple-300 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
    <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
      <div className="max-w-md mx-auto ">
        <div className="divide-y divide-gray-200">
          <div className={`py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7 flex flex-col justify-evenly items-center ${Save && LinkClicked? "mx-20" :"mx-24"}`}>
           <button className="p-2 border-none bg-green-500 text-white text-center font-semibold rounded-md w-52" 
           onClick={()=>{
            setSave(true);
            dispatch(SaveResumeToDatabase({personalDetails,Education,Skills,Projects,Achievements},cidx));
           }}>Save</button>
           <button className={`p-2 border-nonetext-white text-center font-semibold rounded-md w-52 text-white border-none ${Save?"bg-red-400":"bg-red-200"}`} 
           onClick={()=>{
            Save?setLinkClicked(true):setLinkClicked(false);
           }}>Generate Link</button>
           <div className={`text-sm h-9 w-auto rounded-md ${LinkClicked && Save ?"flex":"hidden"} justify-center items-center font-semibold text-gray-800 bg-red-100 px-2`}>{`http://localhost:3000/ResumeBuilder/${ResumeStore.rid}`}
           <span class={"flex absolute h-3 w-3 right-8 -mt-8"}>
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-300 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-red-300"></span>
            </span>
           </div>
           <button className="p-2 border-none bg-LightBrown text-white text-center font-semibold rounded-md w-52" 
           onClick={()=>dispatch(DownLoadResume_action())}>
           <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
           Download</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
}
export default SaveOptions;
