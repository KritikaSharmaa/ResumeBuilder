import Logo from "../images/Logo.png";
import { useHistory } from "react-router";
import { useState } from "react";
import {auth} from "../firebase";
const NavBar = ({ type }) => {
  let history = useHistory();
  let [popUp,setpopUp]=useState(false);
  return (
    <div
      className={`h-20 flex justify-between shadow-md ${
        type === "Home" ? "bg-MateBlack" : "bg-transparent"
      }`}
    >
      <div className="h-full w-8/12 lg:w-4/12 flex items-center text-lg md:text-3xl font-semibold text-LightPurple ml-1">
        <img src={Logo} alt="img" className="h-8 w-8 md:h-12 md:w-12 bg-cover"></img>
        Resume Builder
      </div>
      <div className="h-full w-0 lg:w-8/12 flex justify-end items-center cursor-default">
        {type === "Template" ? (
          <>
            {" "}
            <button
              className="h-10 w-24 rounded-3xl text-white font-semibold
         bg-LightPurple hidden lg:flex justify-center items-center border-none"
            >
              All
            </button>
            <button
              className="h-10 w-24 rounded-3xl text-white font-semibold
            bg-LightPurple hidden lg:flex justify-center items-center         border-none ml-20"
            >
              Free
            </button>
          </>
        ) : ( 
          type==="Profile"?"":
          <button
            className="h-10 w-24 rounded-3xl text-white font-semibold
         bg-LightPurple hidden lg:flex justify-center items-center border-none"
            onClick={() => history.push("/templates")}
          >
            Templates
          </button>
        )}
        {
          type==="Profile"?"":<>
        <button className="h-10 w-24 rounded-3xl text-white font-semibold
         bg-LightPurple hidden lg:flex justify-center items-center border-none ml-16">
          Liked
          <span className="material-icons-outlined font-semibold ml-1">
          favorite_border</span>
        </button>
        <span className="material-icons-outlined ml-20 text-gray-300 font-semibold">shopping_bag</span>

        <span className="material-icons-outlined ml-20 mr-5 text-gray-300 font-semibold hidden lg:block" onClick={()=>setpopUp(popUp?false:true)}>
          settings</span>
          </>
        }
        <div className={`showPopUp p-2 items-center ${popUp===true?"flex flex-col":"hidden"}`}>
          <div className="h-1/2 w-full rounded-lg flex items-center hover:text-LightPurple" onClick={()=>history.push("/Profile")}>
          <span class="material-icons-outlined">account_circle</span>Profile
          </div>
          <div className="h-1/2 w-full rounded-lg flex items-center hover:text-LightPurple" onClick={()=>{
            auth.signOut();
            history.push("/Login")}} >
            <span class="material-icons-outlined">logout
            </span>Logout</div>
        </div>
      </div>
      <div className="h-full w-16 mr-4 flex justify-center items-center text-gray-300 lg:hidden">
        <span class="material-icons-outlined">menu</span>
      </div>
    </div>
  );
};
export default NavBar;


