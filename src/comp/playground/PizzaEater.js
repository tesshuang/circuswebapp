import React, { Component } from 'react';
import EaterFace from './eater/EaterFace';
import EaterGame from './eater/EaterGame';
import EaterRole from './eater/EaterRole';
import EaterRoom from './eater/EaterRoom';
import mySocket from 'socket.io-client';

class PizzaEater extends Component {
    constructor(props){
        super(props);
        this.state = {
            eaterChange:0,
            joinpizza:true,
            gameperson:'',
            gameava:0,
            gamebank:[
                require("../../images/boy01.svg"),
                require("../../images/girl01.svg")
            ],
            gameusers:[]
        }
        
        this.eaterDisplay = this.eaterDisplay.bind(this);
        this.handleName = this.handleName.bind(this);
        this.leaveRoom = this.leaveRoom.bind(this);
        this.handleAva = this.handleAva.bind(this);
        this.joinPizza = this.joinPizza.bind(this);
    }
    
    /*componentWillUnmount(){
        this.socket.disconnect();
    }*/
    
    eaterDisplay(arg){
        this.setState({
            eaterChange:arg
        })
    }
    
    joinPizza(roomString){
        
        this.socket = mySocket("https://pizsocket.herokuapp.com/");
        
        this.socket.emit("joinroom", roomString);
        
        this.socket.on("pizzauser", (data)=>{
            this.setState({
                eaterChange:2,
                gameusers:data
            })
            console.log(data);
        });
        
        
    }
    
    handleName(evt){
        this.setState({
            gameperson:evt.target.value
        })
    }
    
    handleAva(arg){
        this.setState({
            gameava:arg
        })
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
                            joinPizza={this.joinPizza}/>
                </div>
            )
        }else if(this.state.eaterChange === 2){
            comp =(
                <div>
                    <EaterRole 
                            eaterDisplay={this.eaterDisplay}
                            handleName={this.handleName}
                            gamebank={this.state.gamebank}
                            handleAva={this.handleAva}/>
                </div>
            )
        }else if(this.state.eaterChange === 3){
            comp =(
                <div>
                    <EaterGame 
                            gameperson={this.state.gameperson}
                            gamebank={this.state.gamebank}
                            gameava={this.state.gameava}
                            leaveRoom={this.leaveRoom}/>
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