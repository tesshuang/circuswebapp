import React, { Component } from 'react';

class ConPlay extends Component {
    constructor(props){
        super(props);
        this.state = {
            allquestion:[],
            myindex:0,
            playscore1:0,
            playscore2:0
        }
        
        this.startGame = this.startGame.bind(this);
        this.changeQuestions = this.changeQuestions.bind(this);
        
    }
    
    componentDidMount(){
        this.socket = this.props.socket;
        
        this.socket.on("points",(data)=>{
            // console.log(data,this.props.conusers);
            var player1 = Object.keys(data).filter(score => score === this.props.conusers[0].id);
            
            var player2 = Object.keys(data).filter(score => score === this.props.conusers[1].id);
            
            this.setState({
                playscore1:data[player1],
                playscore2:data[player2]
            });
        })
    }
    
    startGame(){
/*        fetch('https://contestdata.herokuapp.com/getquiz/'+this.props.roomstring,{
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
        });*/
        this.socket.emit("getquiz",this.props.roomstring);
        this.socket.on("sendquiz",(data)=>{
            /*var view = JSON.parse(data);*/
            this.setState({
                allquestion:data
            });
            // console.log(data);
        })
        
        this.props.dismissHead();
    }
    
    changeQuestions(){
        this.setState({
            myindex:this.state.myindex+1
        });
        var ansobj ={
            index: "",
            key:""
        }
        if(this.refs.ans1.checked){
            ansobj ={
                index: this.state.myindex,
                key:this.refs.ans1.value
            }
            this.socket.emit("answer", ansobj);
            // console.log(this.refs.ans1.value);
        }else if(this.refs.ans2.checked){
            ansobj ={
                index: this.state.myindex,
                key:this.refs.ans2.value
            }
            this.socket.emit("answer", ansobj);
            // console.log(this.refs.ans2.value);
        }else if(this.refs.ans3.checked){
            ansobj ={
                index: this.state.myindex,
                key:this.refs.ans3.value
            }
            this.socket.emit("answer", ansobj);
            // console.log(this.refs.ans3.value);
        }else{
            ansobj ={
                index: this.state.myindex,
                key:this.refs.ans4.value
            }
            this.socket.emit("answer", ansobj);
            // console.log(this.refs.ans4.value);
        }
        
        console.log(this.state.myindex);
        if(this.state.myindex >= 4){
            // console.log(this.state.myindex);
            this.socket.emit("gameend", this.props.myid);
        }
        
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
            if(this.state.myindex <= 4){
                    allqs = (
                    <div>
                    <h1>Test yourself</h1> 
                        <h3>{this.state.allquestion[this.state.myindex].question}</h3>
                        <input ref="ans1" type="radio" name="gender" value={this.state.allquestion[this.state.myindex].ans1}/>{this.state.allquestion[this.state.myindex].ans1}<br/>
                        <input ref="ans2" type="radio" name="gender" value={this.state.allquestion[this.state.myindex].ans2} />{this.state.allquestion[this.state.myindex].ans2}<br/>
                        <input ref="ans3" type="radio" name="gender" value={this.state.allquestion[this.state.myindex].ans3} />{this.state.allquestion[this.state.myindex].ans3}<br/>
                        <input ref="ans4" type="radio" name="gender" value={this.state.allquestion[this.state.myindex].ans4} />{this.state.allquestion[this.state.myindex].ans4}<br/> 
                        <button onClick={this.changeQuestions}>Submit</button>
                    </div>
                );
            }else{
                allqs = (
                    <div>
                        <p>You've finished all the questions.</p>
                    </div>
                );
            }
            
        }
        
        if(this.props.conusers.length >= 2){
            comp= (
                <div>
                    <h2>Player2</h2>
                    <p>{this.props.conusers[1].conname}</p>
                    <img src={this.props.playbank[this.props.conusers[1].conava]} width={150} alt="player"/>
                    <p>Score:{this.state.playscore2}</p>        
                </div>
            )
        }
        return (
          <div>
            <div className="cont_left">
                <h2>Player1</h2>
                <p>{this.props.conusers[0].conname}</p>
            
                <img src={this.props.playbank[this.props.conusers[0].conava]} width={150} alt="player"/>
                <p>Score:{this.state.playscore1}</p>
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
