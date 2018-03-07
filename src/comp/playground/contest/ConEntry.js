import React, { Component } from 'react';

class ConEntry extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
        
    }
    
    render() {

        return (
          <div className="btn_wrapper">
            <h4>Pick a genre</h4>
            <button className="join_btn" onClick={this.props.joinCon.bind(this,"general")}>GENERAL</button><br/>
            <button className="join_btn" onClick={this.props.joinCon.bind(this,"d3")}>D3</button><br/>
            <button className="join_btn" onClick={this.props.joinCon.bind(this,"gym")}>RECREATION</button><br/>
            <button className="join_btn" onClick={this.props.joinCon.bind(this,"library")}>LIBRARY</button>
            
          </div>
        );
    }
}

export default ConEntry;