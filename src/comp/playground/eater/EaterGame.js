import React, { Component } from 'react';

class EaterGame extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
        
    }


    render() {

        return (
          <div className="eater_game">
            <h1 className="title">Let's start the game.</h1>
            {this.props.gameperson}
            <img src={this.props.gamebank[this.props.gameava]} height={100} alt="player"/>
            <button className="leave_btn" onClick={this.props.leaveRoom.bind(this,0)}>Leave the Room</button>
          </div>
        );
    }
}

export default EaterGame;