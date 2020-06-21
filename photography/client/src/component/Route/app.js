import React, { Component } from 'react';
import Home from './home'
import Public from './public'
import Login from './login'
import Protected from './protected'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
class App extends Component {
   
    render() { 
        return (  <div>
            <BrowserRouter>
            {/* move on same page */}
           <Home/>
            <Switch>
                {/* move the next page */}
                {/* <Route exact path='/' component={Home}/> */}
                <Route exact path ='/content' component={Public} />
                <Route path ='/protected' component={Protected} />
                <Route path='/login' component={Login}/>
               
            </Switch>
            </BrowserRouter>
        </div>);
    }
}
 
export default App;