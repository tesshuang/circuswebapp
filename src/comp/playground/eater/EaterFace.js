import React, { Component } from 'react';

class EaterFace extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
        
        
    }

    render() {

        return (
          <div>
            <p>Do you know how fast you can be?</p>
            <button onClick={this.props.eaterDisplay.bind(this,1)}>Join Game</button>
          </div>
        );
    }
}

export default EaterFace;