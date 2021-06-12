import Welcome from "./components/greeting/Welcome";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewsFeed from "./components/NewsFeed/NewsFeed";

function App() {

  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route path="/news" component={NewsFeed} />
      </Switch>
    </Router>
  );
}

export default App;
