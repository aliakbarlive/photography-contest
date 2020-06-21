import React, { Component } from 'react';
class Prot extends Component {
    state = { prot:' this is protected Try to Login' }
    HandleChange=(ev)=>{
       console.log(' You are loginto Account ')
    }
    render() { 
        return (  <div>
            <h2>{this.state.prot} </h2>
            <button onClick={this.HandleChange}>Login </button>
        </div>);
    }
}
 
export default Prot;