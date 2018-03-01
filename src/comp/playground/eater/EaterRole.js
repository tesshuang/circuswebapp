import React, { Component } from 'react';

class EaterRole extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
        
    }

    render() {

        return (
          <div className="eater_cont">
            <div className="wrapper">
                <h4>Pick your role</h4>
                <input className="input_name" type="text" placeholder="enter your name" onChange={this.props.handleName}/><br/>
                <img className="btnimg" src={require('../../../images/boy01.svg')} alt="eater" height={50} onClick={this.props.eaterDisplay.bind(this,3)}/>
                <img className="btnimg" src={require('../../../images/girl01.svg')} alt="pizza" height={50} onClick={this.props.eaterDisplay.bind(this,3)}/>
            </div>
          </div>
        );
    }
}

export default EaterRole;