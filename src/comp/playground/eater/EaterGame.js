import React, { Component } from 'react';

class EaterGame extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
        
    }

    componentDidMount(){
        this.socket = this.props.socket;
        
        
        this.refs.gamearea.addEventListener("mousemove",(ev)=>{
           if(this.props.myid === null){
               return false;
           }
            this.refs["u"+this.props.myid].style.left = ev.pageX+"px";
            this.refs["u"+this.props.myid].style.top = ev.pageY+"px";
            
            this.socket.emit("mymove",{
                x:ev.pageX,
                y:ev.pageY,
                id:this.props.myid,
                src: this.refs["u"+this.props.myid].src
            });
        });
        
        this.socket.on("newmove",(data)=>{
            this.refs["u"+data.id].style.left = data.x+"px";
            this.refs["u"+data.id].style.top = data.y+"px";
            this.refs["u"+data.id].src = data.src;
            console.log(data.id);
        });
        
    }
    
    render() {
        
        
        console.log(this.props.gameusers);
        var allusers = this.props.gameusers.map((obj,i)=>{
            var myava = obj.ava;
            return(
                <div key={i}>
                <p>{obj.name}</p>
                <img src={this.props.gamebank[myava]} height={100} alt="player"/>
                </div>
            )
        });
        var players = this.props.gameusers.map((obj,i)=>{
            return(
                <img key={i} ref={"u"+obj.id} src={this.props.gamebank[obj.ava]} height={100} className="moving"/>
            )
        });
        
        return (
          <div className="eater_game">
            <h1 className="title">Let's start the game.</h1>
            <div className="sidearea">
                {allusers}
                <button className="leave_btn" onClick={this.props.leaveRoom.bind(this,0)}>Leave the Room</button>
            </div>
            
            <div className="gamearea" ref="gamearea">
                {players}
            </div>
          </div>
        );
    }
}

export default EaterGame;