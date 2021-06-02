import logo from './logo.svg';
import './App.css';
//Import Components
import Footer from '../src/components/Footer';
import Header from '../src/components/Header';
import {Route, Switch} from 'react-router-dom';
// Import Pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

function App() {
  // Url from heroku
  const URL = "https://react-express-labjc.herokuapp.com/"
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/projects">
          <Projects URL={URL} />
        </Route>
        <Route path="/about">
          <About URL={URL} />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
