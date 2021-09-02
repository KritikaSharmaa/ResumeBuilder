import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Components/Home";
import SignIn from "./Components/SignIn";
import LogIn from "./Components/LogIn";
import Template from "./Components/Template";
import { useEffect } from "react";
import { auth, firestore } from "./firebase";
import { useDispatch } from "react-redux";
import { ADD_USER } from "./redux/action/addUser_action"
import UserProfile from "./Components/UserProfile";
import PeronalDetails from "./Components/PersonalDetails";
import Preview from "./Components/Preview";
import EducationDetails from "./Components/EducationDetails";
import Skills from "./Components/Skills";
import ProjectDetails from "./Components/ProjectDetails";
import Achievements from "./Components/Achievements";
import DownLoadResume from "./Components/DownLoadResume";

const App = () => {
  let dispatch=useDispatch();

  useEffect(() => {
    let unsub=auth.onAuthStateChanged(async(user) =>{
      if(user){
        let {email,uid}=user;

        dispatch(ADD_USER(email,uid));

        let docRef=firestore.collection("Users").doc(uid);
        let doc= await docRef.get();
        if(!doc.exists){
          docRef.set({uid,email});
        }
      }
    });
    return()=>{
      unsub();
    };
  }, []);

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/DownLoadResume" component={DownLoadResume}/>
          <Route path="/Achievements" component={Achievements}/>
          <Route path="/ProjectDetails" component={ProjectDetails}/>
          <Route path="/Skills" component={Skills}/>
          <Route path="/EducationDetails" component={EducationDetails}/>
          <Route path="/Preview" component={Preview}/>
          <Route path="/PersonalDetails" component={PeronalDetails}/>
          <Route path="/Profile" component={UserProfile}/>
          <Route path="/Login" component={LogIn} />
          <Route path="/SignIn" component={SignIn} />
          <Route path="/templates" component={Template}/>
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
