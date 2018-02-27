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
            <button onClick={this.props.joinCon.bind(this,"general")}>GENERAL</button>
            <button onClick={this.props.joinCon.bind(this,"d3")}>D3</button>
            <button onClick={this.props.joinCon.bind(this,"gym")}>GYM</button>
            <button onClick={this.props.joinCon.bind(this,"library")}>LIBRARY</button>
            
          </div>
        );
    }
}

export default ConEntry;