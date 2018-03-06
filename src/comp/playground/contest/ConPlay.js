import React, { Component } from 'react';

class ConPlay extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
        
    }

    render() {
        var comp = null;
        if(this.props.conusers.length >= 2){
            comp= (
                <div>
                    <h2>Player2</h2>
                    <p>{this.props.conusers[1].conname}</p>
                    <img src={this.props.playbank[this.props.conusers[1].conava]} height={50} alt="player"/>
                </div>
            )
        }
        return (
          <div>
            <div className="cont_left">
                <h2>Player1</h2>
                <p>{this.props.playname}</p>
            
                <img src={this.props.playbank[this.props.conusers[0].conava]} width={150} alt="player"/>
                <button className="leave_btn" onClick={this.props.leaveContest.bind(this,0)}>Leave the Room</button>
            </div>
            <div className="cont_center">
                <h2>LET US PLAY</h2>
            </div>
            <div className="cont_right">
                {comp}
            </div> 
          </div>
        );
    }
}

export default ConPlay;