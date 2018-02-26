import React, { Component } from 'react';

class EaterGame extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
        
    }


    render() {

        return (
          <div>
            <p>Let's start the game.</p>
            {this.props.gameperson}
            <img src={this.props.gamebank[this.props.gameava]} height={50} alt="player"/>
            <button onClick={this.props.leaveRoom.bind(this,0)}>Leave the Room</button>
          </div>
        );
    }
}

export default EaterGame;