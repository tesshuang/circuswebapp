import React, { Component } from 'react';
import mySocket from 'socket.io-client';
import ConFace from './contest/ConFace';
import ConPlay from './contest/ConPlay';
import Connect from  './Connect.js';

class TriviaContest extends Component {
    constructor(props){
        super(props);
        this.state = {
            joincontest:false,
            playname:'',
            playava:0,
            playbank:[
                require("../../images/quiz/a1.svg"),
                require("../../images/quiz/a2.svg"),
                require("../../images/quiz/a3.svg"),
                require("../../images/quiz/a4.svg")
            ],
            conusers:[],
            showgame:false,
            roomstring:""
        }
        
        this.joinCon = this.joinCon.bind(this);
        this.handleName = this.handleName.bind(this);
        this.leaveContest = this.leaveContest.bind(this);
        this.handleAva = this.handleAva.bind(this);
        this.dismissHead = this.dismissHead.bind(this);
    }
    componentWillUnmount(){
        this.socket.disconnect();
    }
    
    joinCon(roomString){
         var usrobj ={
            roomstr: roomString,
            usrinfo:{
                conname:this.state.playname,
                conava:this.state.playava
            }
        }
        
         this.setState({
            roomstring:roomString
        })
         
        this.socket = mySocket(Connect.local4);
        
        this.socket.emit("joinroom", usrobj);
        
        /*this.socket.on("userjoined", (data)=>{
            this.setState({
                joincontest:true,
                conusers:data
            })
            console.log(data);
        });*/
        
        this.socket.on("waiting",(data)=>{
            alert("waiting for your competitor");
            this.setState({
                joincontest:true,
                 conusers:data
            });
            
        });
        
        this.socket.on("startgame",(data)=>{
            alert("Let's start the game");
            this.setState({
                joincontest:true,
                conusers:data,
                showgame:true
            });
            console.log(data);
        });
        
        this.socket.on("toomany",()=>{
            alert("The room is full.");
            /*this.setState({
                joincontest:false
            })*/
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
    
    dismissHead(){
        this.setState({
            showgame:false
        })
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
                            conusers={this.state.conusers}
                            playbank={this.state.playbank}
                            leaveContest={this.leaveContest}
                            showgame={this.state.showgame}
                            dismissHead={this.dismissHead}
                            roomstring={this.state.roomstring}/>
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