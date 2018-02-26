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
          <div>
            StiFace
            <input type="text" placeholder="tell us your name" onChange={this.handleName}/>
            <button onClick={this.joinSticker}>Check it out!</button>
          </div>
        );
    }
}

export default StiFace;