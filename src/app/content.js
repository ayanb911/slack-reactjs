var React = require("react");

var Content = React.createClass({

  render: function(){
    var active = this.props.active.substring(1);
    var channelChat= "";
    var messageChat = "";
    var sendMessage = this.props.sendMessage;
    if(this.props.channelChat !== []){
        channelChat = this.props.channelChat[active];
    }
    if(this.props.messageChat !== []){
        messageChat = this.props.messageChat[active];
    }

    //console.log(channelChat[active][0]);

    return(
      <div id="chatArea">
        <div id="chatMessage">
          <ChatMessage active={active} channelChat={channelChat} messageChat={messageChat}/>
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
    return(
      <div className="content">
        <div className="profile">
          <div className="avatar"></div>
          <div className="profileInfo">
            <h5>{this.props.active}</h5>
            <p>{time}</p>
          </div>
        </div>
        <div className="sentMessage">
          <p>{this.props.channelChat}</p>
          <p>{this.props.messageChat}</p>
        </div>
      </div>
    )
  }
})

var Chat = React.createClass({
  render: function(){
    var placeholder = "Message "+ this.props.active;
    return(
      <div id="inputChat">
        <div className="inputArea">
          <form id="inputForm" onSubmit={this.typeMessage}>
            <input type="submit" value="+"></input>
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
    this.props.sendMessage(message);
    this.refs.chatSend.value = "";
  }
})


module.exports = Content;
