import React from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
const Header=(props)=>{
  const rederContect=()=>{
    switch(props.user){
      case null:
      return  <li><a href="/">Loading...</a></li>
      case false:
        return <li><a href="/auth/google">SignUp</a></li>
        default:
          return(
            <React.Fragment>
               <li><a href="/api/logout">Logout</a></li>
              <li><Link to="/profile">Profile</Link></li>
            </React.Fragment>
          )
    }
  }
    return(
        <nav>
    <div className="nav-wrapper deep purple darken-2">
      <Link to={props.user ?'/profile': '/'} className="brand-logo">PhotoContest</Link>
      <ul id="nav-mobile" className="right">
      {rederContect()}
      </ul>
    </div>
  </nav>
    )
}
const mapStateToProps=(state)=>{
  return{
    user:state.auth
  }
}
export default  connect(mapStateToProps) (Header)