import React from 'react';
import {connect} from 'react-redux'

const Profile=(props)=>{
    if(!props.user){
        props.history.push('/')
    }
    return(<div>
        <h2>Profile page request  </h2>
    </div>)
}
const mapStateToProps=(state)=>{
    return{
        user:state.auth
    }
}
export default connect(mapStateToProps) (Profile)