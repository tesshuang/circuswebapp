import React, { Component } from 'react';

class ConEntry extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
        
    }
    
    render() {

        return (
          <div>
            <button onClick={this.props.joinCon}>GENERAL</button>
            <button onClick={this.props.joinCon}>D3</button>
            <button onClick={this.props.joinCon}>GYM</button>
            <button onClick={this.props.joinCon}>LIBRARY</button>
            
          </div>
        );
    }
}

export default ConEntry;