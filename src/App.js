import './App.css';
import Homepage from './components/Homepage';
import Header from './components/Header';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SignUp from './components/SignUp';
import API from './components/API';
import About from './components/About'
function App() {
  return (
    <Router>

      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path='/api'>
            <API />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
