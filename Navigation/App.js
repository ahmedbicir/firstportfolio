import './App.css';
import './Fruit.css';

import Guri from './components/Guri';
import Xog from './components/Xog';
import Maclumad from './components/Maclumad';



import Service from './components/Service';
import Fruits from './components/Fruits'
import Header from './components/Header';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Page404 from './components/Page404';
function App() {
  return (
        <BrowserRouter>
          <div className="App">
              <Header/>
              <Switch>
                <Route exact path="/"><Guri/></Route>

                <Route path="/Xog"><Xog/></Route>
                <Route path="/Maclumad"><Maclumad/></Route>
                <Route path="/fruits"><Fruits/></Route>
                <Route><Page404/></Route>
              </Switch>
          </div> 
        </BrowserRouter>
  )
}

export default App;
