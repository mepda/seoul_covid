import './App.css';
import Homepage from './components/Homepage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import microbe from './components/microbe.png';
import SignUp from './components/SignUp';

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/">
          <h1 className="homePageTitle">Seoul Covid API <img alt="An emoticon of a virus" className="homePageTitleImg" src={microbe}></img></h1>
        </Link>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
