import React, { Component } from 'react';

class EaterRoom extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
        
        
    }

    render() {

        return (
          <div>
            <button onClick={this.props.eaterDisplay.bind(this,2)}>Room1</button>
            <button onClick={this.props.eaterDisplay.bind(this,2)}>Room2</button>
            <button onClick={this.props.eaterDisplay.bind(this,2)}>Room3</button>
          </div>
        );
    }
}

export default EaterRoom;