import React, { Component } from 'react';

class ConPlay extends Component {
    constructor(props){
        super(props);
        this.state = {
            allquestion:[],
            myindex:0
        }
        
        this.startGame = this.startGame.bind(this);
        this.changeQuestions = this.changeQuestions.bind(this);
        
    }

    startGame(){
        fetch('https://contestdata.herokuapp.com/getquiz/'+this.props.roomstring,{
            method:"GET",
            headers: new Headers({
                'Content-Type': 'application/json'
              })
        }).then((resp)=>{
            return resp.json();
        })
          .then((data)=>{
            console.log(data);
            this.setState({
              allquestion:data,
            })
        });
        this.props.dismissHead();
    }
    
    changeQuestions(){
        this.setState({
            myindex:this.state.myindex+1
        })
    }
    
    render() {
        var comp = null;
        var allqs = null;
        var startgame = null;
        
        if(this.props.showgame === true){
            startgame =(
                <div>
                    <h2>LET US PLAY</h2>
                    <button onClick={this.startGame}>START THE GAME</button>
                </div>
            );
        }
        
        if(this.state.allquestion.length !== 0){
            allqs = (
                <div>
                <h1>Test yourself</h1> 
                    <h3>{this.state.allquestion[this.state.myindex].question}</h3>
                    <input ref="ans1" type="radio" name="gender" value={this.state.allquestion[this.state.myindex].ans1}/>{this.state.allquestion[this.state.myindex].ans1}<br/>
                    <input type="radio" name="gender" value={this.state.allquestion[this.state.myindex].ans2} />{this.state.allquestion[this.state.myindex].ans2}<br/>
                    <input type="radio" name="gender" value={this.state.allquestion[this.state.myindex].ans3} />{this.state.allquestion[this.state.myindex].ans3}<br/>
                    <input type="radio" name="gender" value={this.state.allquestion[this.state.myindex].ans4} />{this.state.allquestion[this.state.myindex].ans4}<br/> 
                    <button onClick={this.changeQuestions}>Submit</button>
                </div>
            );
        }
        
        if(this.props.conusers.length >= 2){
            comp= (
                <div>
                    <h2>Player2</h2>
                    <p>{this.props.conusers[1].conname}</p>
                    <img src={this.props.playbank[this.props.conusers[1].conava]} width={150} alt="player"/>
                </div>
            )
        }
        return (
          <div>
            <div className="cont_left">
                <h2>Player1</h2>
                <p>{this.props.conusers[0].conname}</p>
            
                <img src={this.props.playbank[this.props.conusers[0].conava]} width={150} alt="player"/>
                <button className="leave_btn" onClick={this.props.leaveContest.bind(this,0)}>Leave the Room</button>
            </div>
            <div className="cont_center">
                <div className="cont_upper">
                    {startgame}
                </div>
                {allqs}
            </div>
            <div className="cont_right">
                {comp}
            </div> 
          </div>
        );
    }
}

export default ConPlay;
