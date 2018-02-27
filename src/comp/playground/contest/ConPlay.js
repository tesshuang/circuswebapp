import React, { Component } from 'react';

class ConPlay extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
        
    }

    render() {
        
        return (
          <div>
            <div className="cont_left">
                <h2>Player1</h2>
                <p>{this.props.playname}</p>
            
                <img src={this.props.playbank[this.props.playava]} height={50} alt="player"/>
                <button onClick={this.props.leaveContest.bind(this,0)}>Leave the Room</button>
            </div>
            <div className="cont_center">
                <h2>LET US PLAY</h2>
            </div>
            <div className="cont_right">
                <h2>Player2</h2>
                <p>name</p>
                <p>IMAGE</p>
            </div>
          </div>
        );
    }
}

export default ConPlay;