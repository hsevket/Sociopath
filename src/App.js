import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../src/Css/App.css";
import MainLayout from "./MainLayout/MainLayout";
import Posts from "./Posts/Posts";
import Profile from "./Profile/Profile";

function App() {
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    fetch("https://dummyapi.io/data/api/post", {
      headers: { "app-id": "60a19608e057d223a7e800ce" },
    })
      .then((response) => response.json())
      .then((data) => setPosts(data.data));
  }, []);
  return (
    <Router>
      <Switch>
        <Route path="/profiles">
          <MainLayout>
            <Profile />
          </MainLayout>
        </Route>
        <Route exact path="/">
          <MainLayout>
            <Posts Posts={posts} />
          </MainLayout>
        </Route>
        <Route exact path="/messages">
          <MainLayout>
            <div>this is messages</div>
          </MainLayout>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
