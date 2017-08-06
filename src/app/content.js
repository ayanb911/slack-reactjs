var React = require("react");


var Content = React.createClass({
  render: function(){
    return(
      <div id="chatArea">
        <div id="chatMessage">
          <ChatMessage />
        </div>
        <div id="chat">
          <Chat />
        </div>
      </div>
    )
  }
})


// Chat Message Component
var ChatMessage = React.createClass({
  render: function(){
    return(
      <div className="content">
        <div className="profile">
          <div className="avatar"></div>
          <div className="profileInfo">
            <h5>Ayan</h5>
            <p>8:40 PM</p>
          </div>
        </div>
        <div className="sentMessage">
          hey this is ayan
        </div>
      </div>
    )
  }
})

var Chat = React.createClass({
  render: function(){
    return(
      <div id="inputChat">
        <div className="inputArea">
          <form id="inputForm">
            <input type="submit" value="+"></input>
            <input type="text" placeholder="Message here"></input>
          </form>
        </div>
      </div>
    )
  }
})


module.exports = Content;
