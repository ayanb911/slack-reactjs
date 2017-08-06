var React = require("react");
var ReactDOM = require("react-dom");

//Modules required
var SideBar = require("./sidebar");
var Header = require("./header");
var Content = require("./content");


//Styles
require("./css/index.css")
require("./css/reset.css")

//new component
var NewComponent = React.createClass({
  getInitialState: function(){
    return{
      channelList: ["general", "testing", "slack-design"],
      messageList: ['ayan', "person1", "person2", "person3"],
      active: "#general",
      channelChat: [],
      messageChat: []
    }
  },

  componentWillMount: function(){
    // channelChat array
    var channelArray = [];
    var channelList = this.state.channelList.map(function(item, index){
      channelArray[item] = [];
    }.bind(this));
    //console.log(channelArray);
    this.setState({
      channelChat: channelArray
    })

    // messageChat array
    var messageArray = [];
    var messageList = this.state.messageList.map(function(item, index){
      messageArray[item] = [];
    }.bind(this));
    //console.log(messageArray);
    this.setState({
      messageChat: messageArray
    })
  },

  render: function(){
    //console.log(this.state.channelChat);
    //console.log(this.state.messageChat);
    //this.state.messageChat[].push("hello");
    return(
      <div id="slack">
        <SideBar changeActive = {this.changeActive} active={this.state.active} channel = {this.state.channelList} message= {this.state.messageList} />
        <div id="content">
          <Header active={this.state.active}/>
          <Content messageChat = {this.state.messageChat} channelChat = {this.state.channelChat} active={this.state.active}
            sendMessage = {this.sendMessage}
            />
        </div>
      </div>
    )
  },

  // Custom Functions
  changeActive: function(item, sign){
    var updatedActive = sign+item;
    //console.log(active);
    this.setState({
      active: updatedActive
    })
  },

  sendMessage: function(message){
    var channelNames = this.state.channelList;
    var messageNames = this.state.messageList;
    var _channelChat = this.state.channelChat;
    var _messageChat = this.state.messageChat;

    channelNames = channelNames.map(function(item, index){
      if(this.state.active.substring(1) == item){
        _channelChat[item].push(message);
        this.setState({
          channelChat: _channelChat
        })
        return true;
      }
    }.bind(this))

    messageNames = messageNames.map(function(item, index){
      if(this.state.active.substring(1) == item){
        console.log("message");
        _messageChat[item].push(message);
        this.setState({
          messageChat: _messageChat
        })
        return true;
      }
    }.bind(this))

  }
})

//render
ReactDOM.render(<NewComponent />, document.getElementById("slack-wrapper"));
