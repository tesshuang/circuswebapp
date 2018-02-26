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
            LET US PLAY
            {this.props.playname}
            <img src={this.props.playbank[this.props.playava]} height={50} alt="player"/>
            <button onClick={this.props.leaveContest.bind(this,0)}>Leave the Room</button>
          </div>
        );
    }
}

export default ConPlay;