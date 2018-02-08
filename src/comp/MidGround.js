import React, { Component } from 'react';
import LetsChat from './LetsChat';
import Sections from './Sections';
import mySocket from 'socket.io-client';

class MidGround extends Component {
    constructor(props){
        super(props);
        
        this.state={
            playset:0
        }
        this.displaySection = this.displaySection.bind(this);
        this.leaveChat = this.leaveChat.bind(this);
    }
    
    displaySection(arg){
        
        this.setState({
            playset:arg
        })
    }
    leaveChat(){
/*        this.socket = mySocket("http://localhost:4005");
        this.socket.disconnect();*/
/*        this.socket.on("disconnect", function(){
        console.log("client disconnected from server");
        });*/
        console.log("leave chat room");
    }
    render() {
        var comp = null;
        if(this.state.playset === 0){
            comp = (
                <div>
                    <Sections displaySection={this.displaySection}/>
                  </div>
            )
        }else if(this.state.playset === 1){
            comp = (
                    <div>
                        <LetsChat displaySection={this.displaySection}
                                    leaveChat={this.leaveChat}/>
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

export default MidGround;