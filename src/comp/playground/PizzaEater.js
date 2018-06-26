import React, { Component } from 'react';
import EaterFace from './eater/EaterFace';
import EaterGame from './eater/EaterGame';
import EaterRole from './eater/EaterRole';
import EaterRoom from './eater/EaterRoom';
import mySocket from 'socket.io-client';
import Connect from  './Connect.js';

class PizzaEater extends Component {
    constructor(props){
        super(props);
        this.state = {
            eaterChange:0,
            joinpizza:true,
            gameperson:'',
            gameava:0,
            gamebank:[
                require("../../images/eater/pizza1.svg"),
                require("../../images/eater/eater.svg")
            ],
            gameusers:[],
            myid:null
        }
        
        this.eaterDisplay = this.eaterDisplay.bind(this);
        this.handleName = this.handleName.bind(this);
        this.leaveRoom = this.leaveRoom.bind(this);
        this.handleAva = this.handleAva.bind(this);
        this.joinPizza = this.joinPizza.bind(this);
        this.pickRole = this.pickRole.bind(this);
    }
    
    componentWillUnmount(){
        this.socket.disconnect();
    }
    
    componentDidMount(){
        
    }
    
    eaterDisplay(arg){
        this.setState({
            eaterChange:arg
        })
    }
    
    joinPizza(roomString){
        this.setState({
            eaterChange:2
        });
        
        this.socket = mySocket(Connect.dev3);
        
        this.socket.emit("joinroom", roomString);
        
        this.socket.on("userid", (data)=>{
            this.setState({
                myid:data
            })
            console.log(data);
        });
        
        
    }
    pickRole(){
        
    }
    
    handleName(evt){
        this.setState({
            gameperson:evt.target.value
        })
    }
    
    handleAva(arg){
        /*this.setState({
            gameava:arg.ava,
            eaterChange:3
        })*/
        var player ={
            id:this.state.myid,
            role: arg.role,
            name:this.state.gameperson,
            ava:arg.ava
        }
        this.socket.emit("pickrole", player);
        
        this.socket.on("waiting",(data)=>{
            alert("waiting for your competitor");
            this.setState({
                gameava:arg.ava,
                eaterChange:3,
                 gameusers:data
            });
            
        });
        
        
        
        this.socket.on("samerole",()=>{
            alert("The role has been picked! Get the other role.");
            
        });
        
        this.socket.on("startgame",(data)=>{
            alert("Let's start the game");
            this.setState({
                gameava:arg.ava,
                eaterChange:3,
                gameusers:data
            });
            console.log(data);
        });
        
        this.socket.on("toomany",()=>{
            alert("The playground is full.");
            
        })
        
        /*this.socket.on("pizzauser",(data)=>{
            this.setState({
                gameusers:data
            })
        })*/
    }
    
    leaveRoom(arg){
        this.props.displaySection(arg);
    }
    render() {
        var comp = null;
        if(this.state.eaterChange === 0){
            comp =(
                <div>
                    <EaterFace 
                            eaterDisplay={this.eaterDisplay}
                            />
                </div>
            )
        }else if(this.state.eaterChange === 1){
            comp =(
                <div>
                    <EaterRoom 
                            eaterDisplay={this.eaterDisplay}
                            joinPizza={this.joinPizza}
                            socket={this.socket}/>
                </div>
            )
        }else if(this.state.eaterChange === 2){
            comp =(
                <div>
                    <EaterRole 
                            eaterDisplay={this.eaterDisplay}
                            handleName={this.handleName}
                            gamebank={this.state.gamebank}
                            handleAva={this.handleAva}
                            pickRole={this.pickRole}
                            socket={this.socket}/>
                </div>
            )
        }else if(this.state.eaterChange === 3){
            comp =(
                <div>
                    <EaterGame 
                            gameperson={this.state.gameperson}
                            gamebank={this.state.gamebank}
                            gameava={this.state.gameava}
                            leaveRoom={this.leaveRoom}
                            socket={this.socket}
                            gameusers={this.state.gameusers}
                            myid={this.state.myid}/>
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

export default PizzaEater;