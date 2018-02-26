import React, { Component } from 'react';

class EaterRole extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
        
    }

    render() {

        return (
          <div>
            <p>Pick your role</p>
            <input type="text" placeholder="enter your name" onChange={this.props.handleName}/>
            <img src={require('../../../images/boy01.svg')} alt="eater" height={50} onClick={this.props.eaterDisplay.bind(this,3)}/>
            <img src={require('../../../images/girl01.svg')} alt="pizza" height={50} onClick={this.props.eaterDisplay.bind(this,3)}/>
          </div>
        );
    }
}

export default EaterRole;