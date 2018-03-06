import React, { Component } from 'react';
import ConEntry from './ConEntry';

class ConFace extends Component {
    constructor(props){
        super(props);
        this.state = {
            entrycheck:false
        }
        
        this.checkEntry = this.checkEntry.bind(this);
    }

    checkEntry(evt){
        if(evt.key === 'Enter'){
            if(this.props.playname !== ''){
                this.setState({
                    entrycheck:true
                });
            }else{
                alert('Tell us your name.');
            }
            
        }
    }
    render() {
        var comp = null;
        if(this.state.entrycheck === true){
            comp = (
                <div>
                    <ConEntry 
                            joinCon={this.props.joinCon}/>
                </div>
            )
        }
        var playavt = this.props.playbank.map((obj,i)=>{
            return(
                <img className="quiz_avt" key={i} width={150} src={obj} alt="player avatart" onClick={this.props.handleAva.bind(this,i)}/> 
            )
           
        });
        return (
          <div className="quiz_cont">
            <div className="wrapper">
                <h2>Check your knowledge about BCIT</h2>
                <h4>Please select your avatar</h4>
                {playavt}
                <br/><br/>
                <input className="input_name" type="text" placeholder="Tell us your name, press enter to continue" onKeyPress={this.checkEntry} onChange={this.props.handleName}/>
                <br/>
                {comp}
            </div>
          </div>
        );
    }
}

export default ConFace;