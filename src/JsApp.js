
import './App.css';
/* import Hotel from './components/Hotel'*/
import Home from './components/Home';
 
import About from './components/About';
import Service from './components/Service';
import ContactUs from './components/ContactUs'
import Shaqaale from './components/Shaqaale';
import Students from './components/Students';
import StudentsList from './components/StudentsList';
/* import Web from './components/Web'
 */
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from './components/Header';
import Nav from './components/Nav';
/* 
import Mwanfunzi from './components/Mwanfunzi';
import Contact from './components/Contact';
import Shaqaalelist from './components/Shaqaalelist';
import Todolist from './components/Todolist'; */

function App() {
  return (
    <BrowserRouter>
      <div className="App">

{/*         <Header/>
 */}{/*         <Contact/> 
 */}       
{/*   <Mwanfunzi/>
 */}        <Switch>
{/*            <Route exact path="/" component={Home}/>
 */}         
 {/*  <Route path="/shaqaale" component={Shaqaale}/>
          <Route path="/Shaqaale-list" component={Shaqaalelist}/>
          <Route path="/students" component={Students}/>
          <Route path="/students-list" component={StudentsList}/> */}
          <Nav/>

           <Route exact path="/" component={Home}/>
           <Route path="/About" component={About}/>
          <Route path="/Service" component={Service}/>
          <Route path="/ContactUs" component={ContactUs}/>

        


        {/*  <Web/>
        <Hotel/> */}
        </Switch>

       {/*  <div className="todo-app"><Todolist/>
        </div> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
