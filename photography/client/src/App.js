import React,{useEffect} from 'react';
import './App.css';
import Header from './component/header/header';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './component/header/home';
import Profile from './component/header/profile';
import {connect} from 'react-redux'
import {fetchUserAction} from './component/actions/action'
function App(props) {
  useEffect(()=>{
     props.fetch_user()
  },[])
  return (
   <BrowserRouter>
     <Header />
     <Route exact path="/" component={Home} />
     <Route path="/profile" component={Profile} />
   </BrowserRouter>
  );
}

const mapDispathToProps = (dispatch)=>{
  return {
    fetch_user:()=>{dispatch(fetchUserAction())}
  }
}

export default connect(null,mapDispathToProps)(App);
