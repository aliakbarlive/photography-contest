import React, { Component } from 'react';
class Content extends Component {
    state = {cont:' this is public page'  }
    render() { 
        return (<div>
            <h3>{this.state.cont}</h3>
        </div>  );
    }
}
 
export default Content;