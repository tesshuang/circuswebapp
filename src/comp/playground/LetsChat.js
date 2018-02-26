import React, { Component } from 'react';
import mySocket from 'socket.io-client';
import Chatface from './chat/Chatface';
import ChatIn from './chat/ChatIn';

class LetsChat extends Component {
    constructor(props){
        super(props);
        this.state = {
            joincheck:false,
            usrname:"",
            usravatar:0,
            allusers:[],
            mymsg:"",
            allmsg:[],
            avatarbank:[
                require("../../images/chat/avt1.svg"),
                require("../../images/chat/avt2.svg"),
                require("../../images/chat/avt3.svg"),
                require("../../images/chat/avt4.svg"),
                require("../../images/chat/avt5.svg")
            ]
            
        }
        
        this.joinChat = this.joinChat.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleAva = this.handleAva.bind(this);
        this.handleMsg = this.handleMsg.bind(this);
        this.sendMsg = this.sendMsg.bind(this);
        this.leaveChat = this.leaveChat.bind(this);
        this.userLeave = this.userLeave.bind(this);
    }
    
    componentWillUnmount(){
        this.socket.disconnect();
    }
    
    joinChat(){
        if(this.state.usrname !== ""){
            this.setState({
                joincheck:true,
                
            });
            
            var usrobj = {
                name:this.state.usrname,
                avatar:this.state.usravatar
            }
            
            this.socket = mySocket("https://circussocket.herokuapp.com/");
            console.log(usrobj);
            this.socket.emit("usrinfo", usrobj);
            
            this.socket.on("cuser",(data)=>{
                console.log(data);
                this.setState({
                    allusers:data
                });
            });
            
            this.socket.on("usrmsgs", (data)=>{
                this.setState({
                    allmsg:data
                })
            })
            
            
            
        }else{
            alert("Please type in your name before enter to the chatroom.");
        }
        
    }
    userLeave(){
        console.log("leave chat room");
        /*this.socket.disconnect();*/
/*        this.socket = mySocket("http://localhost:4005");
        var leftuser = this.state.usrname;
        this.socket.emit("usrleft", leftuser);*/
    }
    leaveChat(arg){
        
        this.props.displaySection(arg);
    }
    
    handleName(evt){
        this.setState({
            usrname:evt.target.value
        })
    }
    handleAva(arg){
        
        this.setState({
            usravatar:arg
        })
    }
    
    handleMsg(evt){
        this.setState({
            mymsg:evt.target.value
        })
    }
    
    sendMsg(){
        var msg = {
            name:this.state.usrname,
            avatar:this.state.usravatar,
            msg:this.state.mymsg
        };
        
        this.socket.emit("sendmsg",msg);
        
    }
    render() {
        console.log(this.state.allusers);
        var comp = null;
        if(this.state.joincheck === false){
            comp =(
                <div>
                    <Chatface 
                        joinChat={this.joinChat}
                        handleName={this.handleName}
                        handleAva={this.handleAva}
                        avatarbank={this.state.avatarbank}/>
                </div>
            )
        }else{
            comp =(
                <div>
                    <ChatIn allusers={this.state.allusers}
                            handleMsg={this.handleMsg}
                            sendMsg={this.sendMsg}
                            allmsg={this.state.allmsg}
                            avatarbank={this.state.avatarbank}
                            leaveChat={this.leaveChat}
                            userLeave={this.userLeave}/>
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

export default LetsChat;