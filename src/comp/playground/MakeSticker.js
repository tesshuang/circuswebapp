import React, { Component } from 'react';
import StiFace from './stickers/StiFace';
import StiBoard from './stickers/StiBoard';


class MakeSticker extends Component {
    constructor(props){
        super(props);
        this.state = {
            joincheck:false,
            stiname:""
        }
        
        this.joinSticker = this.joinSticker.bind(this);
        this.handleName = this.handleName.bind(this);
        this.leaveSticker = this.leaveSticker.bind(this);
    }
    joinSticker(){
        this.setState({
            joincheck:true
        })
        
        
    }
    
    handleName(evt){
        this.setState({
            stiname:evt.target.value
        })
    }
    
    leaveSticker(arg){
        this.props.displaySection(arg);
    }
    render() {
        var comp = null;
        if(this.state.joincheck === false){
            comp =(
                <div>
                    <StiFace 
                            joinSticker={this.joinSticker}
                            handleName={this.handleName}/>
                </div>
            )
        }else{
            comp =(
                <div>
                    <StiBoard 
                            stiname={this.state.stiname}
                            leaveSticker={this.leaveSticker}/>
                </div>
            )
        }
        return (
          <div>
            {comp}
          </div>
        );
    }
}

export default MakeSticker;