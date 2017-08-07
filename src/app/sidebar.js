var React = require("react");

//Styles
require("./css/sidebar.css")

var SideBar = React.createClass({
  render: function(){

    //channels
    var channels = this.props.channel;

    channels = channels.map(function(item, index){
      return(
        <ChannelList channel={item} key={index} changeActive={this.props.changeActive}/>
      )
    }.bind(this));

    //messages
    var messages = this.props.message;
    messages = messages.map(function(item, index){
      return(
        <MessageList message={item} key={index} changeActive={this.props.changeActive}/>
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
  getInitialState:function(){
      return{
        isActive: false
      }
  },

  render: function(){
    return(
      <li className={(this.state.isActive ? "message-item active" : "message-item")} onClick={this.headerMessage}>{this.props.message}</li>
    )
  },
  // Custom Functions
  headerMessage: function(){
    this.props.changeActive(this.props.message, "@");
    this.setState({
      isActive: true
    })
  }
});

//channel component
var ChannelList = React.createClass({
  getInitialState:function(){
      return{
        isActive: false
      }
  },
  render: function(){
    return(
      <li className={(this.state.isActive ? "channel-item active" : "channel-item")} onClick={this.headerChannel}>{this.props.channel}</li>
    );
  },

  // Custom Functions
  headerChannel: function(){
    this.props.changeActive(this.props.channel, "#");
    this.setState({
      isActive: true
    })
  }

})

module.exports = SideBar;
