import React, { Component } from 'react';
import './section.css';

class NewSections extends Component {
    constructor(props){
        super(props);
        
        this.displaySection = this.displaySection.bind(this);
        
    }
    
    displaySection(arg){
        this.props.displaySection(arg);
    }
    render() {

        return (
          <div className="scaling-svg-container2">
            <div className="playwrapper">
                <div className="container" onClick={this.displaySection.bind(this,1)}>
                    <img className="image" src={require("../../images/session/clown.png")} alt="playground1" />

                    <div className="middle">
                        <div className="text">CHAT ROOM</div>
                    </div>
                </div>
        
                <div className="container" onClick={this.displaySection.bind(this,2)}>
                    <img  className="image" src={require("../../images/session/elephant.png")} alt="playground2" />

                    <div className="middle">
                        <div className="text">STICKERS WALL</div>
                    </div>
                </div>


                <div className="container" onClick={this.displaySection.bind(this,3)}>
                    <img  className="image" src={require("../../images/session/pizza.png")} alt="playground3" />
                    <div className="middle">
                        <div className="text">PIZZA EATER</div>
                    </div>
                </div>


                <div className="container" onClick={this.displaySection.bind(this,4)}>
                    <img  className="image" src={require("../../images/session/rabbit.png")} alt="playground4" />
                    <div className="middle">
                        <div className="text">MAGICAL QUIZ</div>
                    </div>
                </div>
            </div>            
          </div>
        );
    }
}

export default NewSections;