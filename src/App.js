import { Route, Switch } from "react-router";
import LoginAndRegister from "./components/LoginAndRegister/LoginAndRegister";
import UrlOperation from "./components/UrlOperations/UrlOperation";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={LoginAndRegister}></Route>
        <Route path="/home" exact component={UrlOperation}></Route>
      </Switch>
      {/* <LoginAndRegister/> */}
      {/* <UrlOperation/> */}
    </div>
  );
}

export default App;
