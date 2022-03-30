import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Homepage from './Pages/Homepage/Homepage';
import About from './Pages/About/About';
import Skills from './Pages/Skills/Skills';
import Projects from './Pages/Projects/Projects';
import Contact from './Pages/Contact/Contact';
import Resume from './Pages/Resume/Resume';
function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path={'/about'} component={About} />
          <Route exact path={'/skills'} component={Skills} />
          <Route exact path={'/projects'} component={Projects} />
          <Route exact path={'/contact'} component={Contact} />
          <Route exact path={'/resume'} component={Resume} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
