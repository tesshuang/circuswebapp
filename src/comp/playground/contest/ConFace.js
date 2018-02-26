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
                <img key={i} height={50} src={obj} alt="player avatart" onClick={this.props.handleAva.bind(this,i)}/> 
            )
           
        });
        return (
          <div>
            <p>Check your knowledge about BCIT</p>
            {playavt}
            <br/>
            <input type="text" placeholder="tell us your name" onKeyPress={this.checkEntry} onChange={this.props.handleName}/>
            {comp}
          </div>
        );
    }
}

export default ConFace;