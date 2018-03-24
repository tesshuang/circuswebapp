import React, { Component } from 'react';
import mySocket from 'socket.io-client';
import Connect from  '../Connect.js';

class StiBoard extends Component {
    constructor(props){
        super(props);
        this.state = {
           myimg1:require("../../../images/stickers/s1@4x.png"),
            stiusers:[],
            myid:null,
            imgbank:[
               require("../../../images/stickers/s1@4x.png"),
                require("../../../images/stickers/s2@4x.png"),
                require("../../../images/stickers/s3@4x.png"),
                require("../../../images/stickers/s4@4x.png"),
               require("../../../images/stickers/s5@4x.png"),
                require("../../../images/stickers/s6@4x.png"),
                require("../../../images/stickers/s7@4x.png"),
                require("../../../images/stickers/s8@4x.png"),
                require("../../../images/stickers/s9@4x.png")
            ],
            stickers:[],
            imgsize:50
        }
        
        
        this.changeImage = this.changeImage.bind(this);
        this.leaveSticker = this.leaveSticker.bind(this);
        this.pickItem = this.pickItem.bind(this);
        this.dropItem = this.dropItem.bind(this);
        this.updateSize = this.updateSize.bind(this);
    }

    componentDidMount(){

        
        this.socket = mySocket(Connect.local2);
        
        this.socket.on("stickeruser", (data)=>{
           this.setState({
               stiusers:data
           })
        });
        
        this.socket.on("yourid",(data)=>{
            this.setState({
                myid:data
            })
        });
        
        this.socket.on("newmove", (data)=>{
            console.log(data.id);
            this.refs["u"+data.id].style.left = data.x+"px";
            this.refs["u"+data.id].style.top = data.y+"px";
            this.refs["u"+data.id].src = data.src;
        });
        
        this.socket.on("newsticker", (data)=>{
            this.setState({
                stickers:data
            })
        });
        
        /*this.socket.on("pickup", (data)=>{
            this.refs["u"+data.id].style.left = data.x+"px";
            this.refs["u"+data.id].style.top = data.y+"px";
            this.refs["u"+data.id].src = data.src;
            this.refs["u"+data.id].width = data.width+"px";
        });*/
        
        this.socket.on("dropdown", (data)=>{
            this.refs["u"+data.id].style.left = data.x+"px";
            this.refs["u"+data.id].style.top = data.y+"px";
            this.refs["u"+data.id].src = data.src;
            this.refs["u"+data.id].width = data.width+"px";
        });
        
/*        this.refs.stiDisplay.addEventListener("mousedown",(ev)=>{
            mouseDown = true;
            ev.preventDefault();
            curImg = this;
            console.log(curImg);
        });
        
        this.refs.stiDisplay.addEventListener("mouseup",(ev)=>{
             mouseDown = false;
            curImg= null;
        });*/
        /*            if(mouseDown == true && curImg != null){
                curImg.style.left = (ev.pageX - curImg.offsetWidth/2)+"px";
                curImg.style.top = (ev.pageY - curImg.offsetHeight/2)+"px";

            }*/
        
        this.refs.stiDisplay.addEventListener("mousemove", (ev)=>{
            if(this.state.myid === null){
               return false; 
            }
            
            this.refs["u"+this.state.myid].style.left = ev.pageX+"px";
            this.refs["u"+this.state.myid].style.top = ev.pageY+"px";
            
            var mymove = {
                x:ev.pageX,
                y:ev.pageY,
                id:this.state.myid,
                src:this.refs["u"+this.state.myid].src
            }
            console.log(this.state.myid);
            this.socket.emit("mymove", mymove);
            

        });
        
        this.refs.stiDisplay.addEventListener("click", (ev)=>{
            this.socket.emit("stick", {
                   x:ev.pageX,
                   y:ev.pageY,
                   src: this.refs["u"+this.state.myid].src,
                   width:this.state.imgsize
               }) 
            });
        

    }
    
    changeImage(evt){
        this.refs["u"+this.state.myid].src = evt.target.src;
    }
    
    leaveSticker(arg){
        console.log('user left');
        this.props.leaveSticker(arg);
        this.socket.disconnect();
    }
    
    updateSize(evt){
        if(evt.key === 'Enter'){
            console.log("You've entered");
            
            this.setState({
                imgsize:evt.target.value
            });
        }
    }
    
    pickItem(ev){
        console.log("pickup");
        this.socket.emit("picksticker", {
                   x:ev.pageX,
                   y:ev.pageY,
                   src: this.refs["u"+this.state.myid].src,
                   id:this.state.myid,
                   width:this.state.imgsize
               })
        
    }
    
    dropItem(ev){
        var dropmove = {
                   x:ev.pageX,
                   y:ev.pageY,
                   src: this.refs["u"+this.state.myid].src,
                   id:this.state.myid,
                   width:this.state.imgsize
               };
        this.socket.emit("dropsticker", dropmove);
        console.log("dropdown",dropmove);
    }
    render() {
        console.log(this.state.stiusers, this.state.myid);
        var allsusers = this.state.stiusers.map((obj,i)=>{
           return(
            <img ref={"u"+obj} src={this.state.myimg1} width={60} className="allSusers" key={i} alt="users"/>
           ) 
        });
        var allimgs = this.state.imgbank.map((obj, i)=>{
            return(
                <img src={obj} width={60}  key={i} alt="imgs" onClick={this.changeImage}/>
            )
            
        });
        
        var allstickers = this.state.stickers.map((obj,i)=>{
            var mystyle = {left:obj.x, top:obj.y, width:obj.width+"px"};
            return(
                <img src={obj.src} key={i} style={mystyle} className="allSusers2" alt="stickers" onMouseDown={this.pickItem} onMouseUp={this.dropItem}/>
            )
        })
        console.log(this.state.imgsize);
        return (
          <div>
            <div className="sti_control">
            <h2>Hi,{this.props.stiname}! Welcome to <br/>the Sticker Room.</h2>
            <br/><br/>
            {allimgs}
            <br/>
            <br/>
            <br/>
            <div className="group">      
              <input type="number" className="imgsize_input" placeholder="eg.70" onKeyPress={this.updateSize}/>
              <span className="bar"></span>
              <label className="mlabel">Adjust Image Size, press enter to change</label>
            </div>
            <br/>
            
            <button className="leave_btn" onClick={this.leaveSticker.bind(this,0)}>Leave the Room</button>
            </div>
            <div ref="stiDisplay" className="sti_display">
            <h2>Playground</h2>
            {allsusers}
            {allstickers}
            </div>
          </div>
        );
    }
}

export default StiBoard;