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
  render: function(){
    return(
      <div id="slack">
        <SideBar />
        <Header />
        <Content />
      </div>
    )
  }
})

//render
ReactDOM.render(<NewComponent />, document.getElementById("slack-wrapper"));
