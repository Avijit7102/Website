import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';
import AboutMe from './components/AboutMe/AboutMe';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path = "/">
          <Home></Home>
        </Route>
        <Route path = "/home">
          <Home></Home>
        </Route>
        <Route path="/projects">
          <Projects></Projects>
        </Route>
        <Route path="/resume">
          <Resume></Resume>
        </Route>
        <Route path="/aboutMe">
          <AboutMe></AboutMe>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
