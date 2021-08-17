import './App.scss';
import {Navbar} from './components/navbar/Navbar'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import { Home } from './components/pages/Home';
import { Products } from './components/pages/Products';
import { Services } from './components/pages/Services';
import { SignUp } from './components/pages/SignUp';
import { Footer } from './components/footer/Footer';


function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/products/:id" exact component={Products}></Route>
        <Route path="/services" exact component={Services}></Route>
        <Route path="/sign-up" exact component={SignUp}></Route>
      </Switch>
      <Footer></Footer>
    </Router>    
  );
}

export default App;
