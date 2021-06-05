import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import GridArea from "./Grid";
import Navbar from "./Navbar";
import Posts from "./Posts";
import Profile from "./Profile";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/profiles">
          <Navbar />
          <GridArea>
            <Profile/>
          </GridArea>
        </Route>
        <Route exact path="/">
          <Navbar />
          <GridArea>
            <Posts />
          </GridArea>
        </Route>
        <Route exact path="/messages">
          <Navbar />
          <GridArea>
            <div>this is messages</div>
          </GridArea>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
