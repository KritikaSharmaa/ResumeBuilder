import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Components/Home";
import SignIn from "./Components/SignIn";
import LogIn from "./Components/LogIn";
import Template from "./Components/Template";
import { useEffect } from "react";
import { auth, firestore } from "./firebase";
import { useDispatch } from "react-redux";
import { ADD_USER } from "./redux/action";

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
