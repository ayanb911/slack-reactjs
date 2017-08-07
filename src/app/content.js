var React = require("react");

// Styles
require("./css/content.css");

//Modules required
var InfoFloater = require("./infoFloater")

var Content = React.createClass({

  render: function(){
    var active = this.props.active.substring(1);
    var sendMessage = this.props.sendMessage;
    var chatMessage = "";
    if(this.props.channelChat[active] !== undefined &&this.props.channelChat[active].length > 0){
        chatMessage = this.props.channelChat[active];
    }

    else if(this.props.messageChat[active] !== undefined && this.props.messageChat[active].length > 0){
        chatMessage = this.props.messageChat[active];
    }
    else{
        chatMessage = "This is your first time talking to " + active;
    }

    console.log(this.props.channelChat[active], this.props.messageChat[active]);

    return(
      <div id="chatArea">
        <div id="chatMessage">
          <ChatMessage active={active} chatMessage={chatMessage} />
        </div>
        <div id="chat">
          <Chat active={active} sendMessage={sendMessage}/>
        </div>
      </div>
    )
  }
})


// Chat Message Component
var ChatMessage = React.createClass({
  render: function(){
    var date = new Date();
    var hours = (date.getHours()>12) ? date.getHours()-12 : date.getHours();
    var minutes = date.getMinutes();
    var time = hours +":"+minutes+((date.getHours()>12)?" PM":" AM");


    var message = this.props.chatMessage;
    if(typeof(message) == "object"){
      message = message.map(function(item, index){
        return <p key={index}>{item}</p>
      }.bind(this))
    }
    else{
      return (<p>{message}</p>);
    }


    console.log(typeof(this.props.chatMessage), this.props.chatMessage);
    return(
      <div className="content">
        <div className="profile">
          <div className="avatar"></div>
          <div className="profileInfo">
            <h5>ayan</h5>
            <p>{time}</p>
          </div>
        </div>
        <div className="sentMessage">
          {message}
        </div>
      </div>
    )
  }
})

var Chat = React.createClass({
  getInitialState: function(){
    return{
      popupIsOpen: false
    }
  },

  render: function(){
    var placeholder = "Message "+ this.props.active;
    return(
      <div id="inputChat">
        <div className="inputArea">
          <form id="inputForm" onSubmit={this.typeMessage}>
            <InfoFloater open={this.state.popupIsOpen}/>
            <a href="https://ayanb911.github.io/portfolio/"><div className="showSocial" ><img src="/app/images/world.png"></img></div></a>
            <input type="text" ref="chatSend" placeholder={placeholder}></input>
          </form>
        </div>
      </div>
    )
    this.refs.chatSend.value = "";
  },

  // Custom Functions
  typeMessage: function(e){
    e.preventDefault();
    var message = this.refs.chatSend.value;
    console.log(message);
    if(this.message != ""){
        this.props.sendMessage(message);
    }
    this.refs.chatSend.value = "";
  },

  infoFloater: function(val){
    this.setState({
      popupIsOpen: !this.state.popupIsOpen
    })
  }
})

module.exports = Content;
