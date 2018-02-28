import React, { Component } from 'react';

class EaterRoom extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
        
        
    }

    render() {

        return (
          <div className="eater_cont">
            <div className="wrapper">
                <h4>Choose a room</h4>
                <button className="pizzabtn" onClick={this.props.eaterDisplay.bind(this,2)}>
                <img className="btnimg" src={require("../../../images/eater/meat.png")} alt="pizzaslice"/>
                
            </button>
            <button className="pizzabtn" onClick={this.props.eaterDisplay.bind(this,2)}>
                <img className="btnimg" src={require("../../../images/eater/vege.png")} alt="pizzaslice"/>
                
            </button>
            <button className="pizzabtn" onClick={this.props.eaterDisplay.bind(this,2)}>
                <img className="btnimg" src={require("../../../images/eater/cheese.png")} alt="pizzaslice"/>
                
            </button>
            </div>
          </div>
        );
    }
}

export default EaterRoom;