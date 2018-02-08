import React, { Component } from 'react';
import './App.css';
import Landing from './comp/Landing';
import MidGround from './comp/MidGround';

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            midtoggle:false
        }
        
        this.changeView = this.changeView.bind(this);
    }
    changeView(){
        this.setState({
            midtoggle:true
        })
    }
    render() {
        var comp = null;
        if(this.state.midtoggle === false){
            comp = <Landing changeView={this.changeView}/>;
        }else{
            comp = <MidGround />;
        }
        return (
          <div className="App">
            {comp}
          </div>
        );
    }
}

export default App;
