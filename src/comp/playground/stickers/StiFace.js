import React, { Component } from 'react';

class StiFace extends Component {
    constructor(props){
        super(props);
        this.state = {
           
        }
        this.joinSticker = this.joinSticker.bind(this);
        this.handleName = this.handleName.bind(this);
    }
    joinSticker(){
        this.props.joinSticker();
        
    }
    
    handleName(evt){
        this.props.handleName(evt);
    }
    render() {

        return (
          <div className="stiker_cont">
            <div className="wrapper">
            <img src={require("../../../images/stickers/eleicon.png")} alt="half_clown" className="eleicon"/>
            <input className="input_name" type="text" placeholder="tell us your name" onChange={this.handleName}/><br/>
            <button className="join_btn" onClick={this.joinSticker}>Check it out!</button>
            </div>
          </div>
        );
    }
}

export default StiFace;