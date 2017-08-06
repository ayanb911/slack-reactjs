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
      active: ["#general"],
      channelChat: [],
      messageChat: []
    }
  },

  componentWillMount: function(){
    var channelArray = [];
    var channelList = this.state.channelList.map(function(item, index){
      channelArray[item] = [];
    }.bind(this));
    //console.log(channelArray);
    this.setState({
      channelChat: channelArray
    })
  },

  render: function(){
    //console.log(this.state.channelChat);
    return(
      <div id="slack">
        <SideBar changeActive = {this.changeActive} active={this.state.active} channel = {this.state.channelList} message= {this.state.messageList} />
        <div id="content">
          <Header active={this.state.active}/>
          <Content />
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
})

//render
ReactDOM.render(<NewComponent />, document.getElementById("slack-wrapper"));
