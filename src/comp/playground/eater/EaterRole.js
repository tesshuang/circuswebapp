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
                <img className="btnimg" src={require('../../../images/eater/pizza1.svg')} alt="eater" height={50} onClick={this.props.handleAva.bind(this,0)}/>
                <img className="btnimg" src={require('../../../images/eater/eater.svg')} alt="pizza" height={50} onClick={this.props.handleAva.bind(this,1)}/>
            </div>
          </div>
        );
    }
}

export default EaterRole;