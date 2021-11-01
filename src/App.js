import './App.css';
import './Fruit.css';

import Home from './components/Home';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Service from './components/Service';
import Nav from './components/Nav';
import Footer from './components/Footer';

//  import Todolist from './components/Todolist';


import {BrowserRouter, Route, Switch} from 'react-router-dom'
function App() {
  return (
        <BrowserRouter>
          <div className="App">
          {/* <Todolist/> */}
 
          <Nav/> 


                <Switch>
              <Route exact path="/"><Home/></Route>
                <Route path="/About"><About/></Route>
                <Route path="/Service"><Service/></Route>
                <Route path="/ContactUs"><ContactUs/></Route>
              </Switch> 
              <Footer/>

          </div> 

        </BrowserRouter> 
  )
}

export default App;
