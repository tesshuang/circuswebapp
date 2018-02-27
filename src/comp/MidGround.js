import React, { Component } from 'react';
import LetsChat from './playground/LetsChat';
import MakeSticker from './playground/MakeSticker';
import TriviaContest from './playground/TriviaContest';
import PizzaEater from './playground/PizzaEater';
import NewSections from './playground/NewSections';

class MidGround extends Component {
    constructor(props){
        super(props);
        
        this.state={
            playset:0
        }
        this.displaySection = this.displaySection.bind(this);
    }
    
    displaySection(arg){
        this.setState({
            playset:arg
        })
    }

    render() {
        var comp = null;
        if(this.state.playset === 0){
            comp = (
                <div>
                    <NewSections displaySection={this.displaySection}/>
                  </div>
            )
        }else if(this.state.playset === 1){
            comp = (
                    <div>
                        <LetsChat displaySection={this.displaySection}
                                    />
                    </div>
                   )
        }else if(this.state.playset === 2){
            comp = (
                    <div>
                        <MakeSticker displaySection={this.displaySection}/>
                    </div>
                   )
        }else if(this.state.playset === 3){
            comp = (
                    <div>
                        <PizzaEater displaySection={this.displaySection}/>
                    </div>
                   )
        }else if(this.state.playset === 4){
            comp = (
                    <div>
                        <TriviaContest displaySection={this.displaySection}/>
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

export default MidGround;