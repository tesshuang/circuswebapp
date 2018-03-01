import React, { Component } from 'react';

class EaterFace extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
        
        
    }

    render() {

        return (
          <div className="eater_cont">
            <div className="wrapper">
                <img src={require("../../../images/eater/pizzaslice.png")} alt="half_clown" className="pizzaslice"/>
                <h4>How fast can you eat?</h4>
                <button className="join_btn" onClick={this.props.eaterDisplay.bind(this,1)}>Join Game</button>
            </div>
          </div>
        );
    }
}

export default EaterFace;