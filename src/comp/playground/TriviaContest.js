import React, { Component } from 'react';
import ConFace from './contest/ConFace';
import ConPlay from './contest/ConPlay';

class TriviaContest extends Component {
    constructor(props){
        super(props);
        this.state = {
            joincontest:false,
            playname:'',
            playava:0,
            playbank:[
                require("../../images/boy01.svg"),
                require("../../images/boy02.svg"),
                require("../../images/girl01.svg"),
                require("../../images/girl02.svg")
            ]
        }
        
        this.joinCon = this.joinCon.bind(this);
        this.handleName = this.handleName.bind(this);
        this.leaveContest = this.leaveContest.bind(this);
        this.handleAva = this.handleAva.bind(this);
    }
    joinCon(roomString){
        
        
        this.socket = mySocket("http://localhost:4007");
        
        this.socket.emit("joinroom", roomString);
        
        this.socket.on("userjoined", (data)=>{
            this.setState({
                conusers:data
            })
        });
        
        this.socket.on("waiting",()=>{
            alert("waiting for your competitor");
            this.setState({
                joincontest:true
            });
        });
        
        this.socket.on("startgame",()=>{
            alert("Let's start the game");
            
            this.setState({
                joincontest:true
            });
        });
        this.socket.on("toomany",()=>{
            alert("The room is full.");
        })
        
    }
    
    handleName(evt){
        this.setState({
            playname:evt.target.value
        })
    }
    
    handleAva(arg){
        this.setState({
            playava:arg
        })
    }
    
    leaveContest(arg){
        this.props.displaySection(arg);
    }
    render() {
        var comp = null;
        if(this.state.joincontest === false){
            comp =(
                <div>
                    <ConFace 
                            joinCon={this.joinCon}
                            handleName={this.handleName}
                            playname={this.state.playname}
                            playbank={this.state.playbank}
                            handleAva={this.handleAva}/>
                </div>
            )
        }else{
            comp =(
                <div>
                    <ConPlay 
                            playname={this.state.playname}
                            playava={this.state.playava}
                            playbank={this.state.playbank}
                            leaveContest={this.leaveContest}/>
                </div>
            )
        }
        return (
          <div>
            {comp}
          </div>
        );
    }
}

export default TriviaContest;