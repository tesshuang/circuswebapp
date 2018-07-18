import React, { Component } from 'react';

class ChatIn extends Component {
    constructor(props){
        super(props);
        
        this.handleMsg = this.handleMsg.bind(this);
        this.sendMsg = this.sendMsg.bind(this);
        this.leaveChat = this.leaveChat.bind(this);
    }
    
    componentDidMount(){
        
    }
    
    handleMsg(evt){
        this.props.handleMsg(evt);
    }
    sendMsg(){
        this.props.sendMsg();
    }
    
    leaveChat(arg){
        this.props.leaveChat(arg);
        /*this.props.displaySection(arg);*/
    }

    render() {
        var allusers = this.props.allusers.map((obj,i)=>{
            return (
                <div key={i}>
                    <img src={this.props.avatarbank[obj.avatar]} alt="avatar0" className="on_avt"/>
                    <span className="onAnimal"> {obj.name}</span>
                </div>
            )
        });
        
        var allmsg = this.props.allmsg.map((obj,i)=>{
        
           return(
               <div key={i} className="msg_all">
                    
                    <img src={this.props.avatarbank[obj.avatar]} alt="avatar0" className=" msg_avt"/>
                    <div className=" msg_detail">
                        <span className='msg_name'>{obj.name}</span>
                        <span className='msg_msg'>{obj.msg}</span>
                    </div>
                    
               </div>
           ) 
        });
        
        return (
          <div>
            <div className="chat_room">
                <h3>Online Animals</h3>
                
                <div className="user_online">
                    {allusers}
                </div>
                <button className="leave_btn" onClick={this.leaveChat.bind(this,0)}>Leave Chat Room</button>
            </div>
            <div className="chat_box">
                <div className="chat_msg">
                    Messages
                    {allmsg}
                </div>
                <div className="chat_control">
                    <input type="text" placeholder="Type your message." onChange={this.handleMsg} className="send_input"/>
                    <button onClick={this.sendMsg} className="send_btn">Send</button>
                </div>
            </div>
          </div>
        );
    }
}

export default ChatIn;