import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Components/Home";
import SignIn from "./Components/SignIn";
import LogIn from "./Components/LogIn";
import Template from "./Components/Template";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/templates" component={Template} />
          <Route path="/SignIn" component={SignIn} />
          <Route path="/Login" component={LogIn} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
