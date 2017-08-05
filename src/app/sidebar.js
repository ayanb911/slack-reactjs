var React = require("react");

//Styles
require("./css/sidebar.css")

var SideBar = React.createClass({
  getInitialState: function(){
    return{
      channelList: ["general", "testing", "slack-design"],
      messageList: ['ayan', "person1", "person2", "person3"]
    }
  },

  render: function(){
    //channels
    var channels = this.state.channelList;
    channels = channels.map(function(item, index){
      return(
        <ChannelList channel={item} key={index} />
      )
    }.bind(this));

    //messages
    var messages = this.state.messageList;
    messages = messages.map(function(item, index){
      return(
        <MessageList message={item} key={index} />
      )
    }.bind(this));

    return(
      <div id="sidebar">
        <div className = "header">
          <h3>Ayan's Team</h3>
          <p>ayan</p>
        </div>
        <div className="channels">
          <h4 className="title">Channels</h4>
          <ul>
            {channels}
          </ul>
        </div>
        <div className="messages">
          <h4 className="title">Direct Messages</h4>
          <ul>
            {messages}
          </ul>
        </div>
      </div>
    )
  }
})

//message component
var MessageList = React.createClass({
  render: function(){
    return(
      <li className="message-item">{this.props.message}</li>
    )
  }
});

//channel component
var ChannelList = React.createClass({
  render: function(){
    return(
      <li className="channel-item">{this.props.channel}</li>
    );
  }
})



module.exports = SideBar;
