import NavBar from "./NavBar";
import skin1 from "../images/skin1.svg";
import skin2 from "../images/skin2.svg";
import skin3 from "../images/skin3.svg";
import skin4 from "../images/skin4.svg";
import skin5 from "../images/skin5.svg";
import skin6 from "../images/skin6.svg";
import skin7 from "../images/skin7.svg";
import skin8 from "../images/skin8.svg";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { IsLiked ,IsPurchased } from "../redux/action/selectTemp_action";
const Template = () => {
  let dispatch=useDispatch();
  let history=useHistory();
  let arr=[skin1,skin2,skin3,skin4,skin5,skin6,skin7,skin8];
  let Templatestate= useSelector(state=>state.Template);
  console.log(Templatestate);
  return (
    <>
      <NavBar type="Template" />
      <div className="h-auto w-full lg:h-screen bg-TempBackImg3 flex justify-evenly items-center m-0">
        <div className="grid sm:grid-cols-2 sm:grid-rows-5 md:grid-cols-3 md:grid-rows-4 lg:grid-cols-4 lg:grid-rows-2 gap-14 mt-8 mb-8 lg:mt-16">
        {
          Templatestate.map((c,idx)=>{
            let {code,img,purchase,Liked}=c;
            return <div className="h-96 w-64 bg-white p-1 shadow-md hover:shadow-2xl relative" key={idx}>
            <img src={arr[idx]} alt={`img${code}`} className="h-10/12 w-full" onClick={(e)=>{
            purchase?history.push(`/PersonalDetails/${idx}`):history.push("/templates")
            }}   
            />
            
            <span class="material-icons-outlined absolute bottom-2 right-20 text-red-500 z-10 cursor-pointer" onClick={(e)=>{
              if(Liked===true){
                dispatch(IsLiked({idx,Liked:false}));
                e.currentTarget.innerText="favorite";
              }else {
                dispatch(IsLiked({idx,Liked:true}));
                e.currentTarget.innerText="favorite_border";
              }
            }}>favorite_border</span>

            <span className={`h-8 w-12 flex justify-center items-center text-white rounded-lg absolute bottom-2 right-6 cursor-pointer font-semibold ${purchase?"bg-green-400":"bg-purple-400"}`} 
            onClick={(e)=>{
              dispatch(IsPurchased({idx,purchase:true}));
            }}>
              {purchase?"free":"$5"}
            </span>

          </div>
          })
        }
        </div>
      </div>
    </>
  );
};
export default Template;
