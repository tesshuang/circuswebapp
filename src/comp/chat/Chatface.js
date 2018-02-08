import React, { Component } from 'react';

class Chatface extends Component {
    constructor(props){
        super(props);
        
        this.state={
            categorie:""
        }
        
        this.joinChat = this.joinChat.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleAva = this.handleAva.bind(this);
    }
    joinChat(){
        this.props.joinChat();
    }
    handleName(evt){
        this.props.handleName(evt);
    }
    handleAva(arg){
        this.props.handleAva(arg);
        this.setState({
            categorie:"selectBox"
        })
    }
    render() {
        var allavatar = this.props.avatarbank.map((obj, i)=>{
            return(
                
                <span key={i}>
                    <img src={require("../../"+obj)} alt="avatar0{i}" style={{width:80, height:80}} onClick={this.handleAva.bind(this,i)} className="avt_cont"/>
                </span>
            )
        })
        return (
          <div className="chatface_cont">
            <div className="wrapper">
            <img src={require("../../images/clown_half.png")} alt="half_clown" className="half_clown"/>
            <input type="text" placeholder="Please type your name" onChange={this.handleName} className="input_name"/>
            <h4>Please select your avatar.</h4>
            <div>
                {allavatar}
            </div>
            <button onClick={this.joinChat} className="join_btn">Join</button>
            </div>
          </div>
        );
    }
}

export default Chatface;