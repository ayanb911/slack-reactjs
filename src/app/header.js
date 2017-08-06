var React = require("react");

// Styles
require("./css/header.css");

var Header = React.createClass({
  render: function(){
    return(
      <div id="header">
        <div className="headerTitle">
          {this.props.active}
        </div>
        <InfoComponent />
      </div>
    )
  }
})

// Info component
var InfoComponent = React.createClass({
  getInitialState: function(){
    return{
      isActive: false
    }
  },

  render:function(){
    return(
      <div className="info-section">
        <span className={"myInfo" + (this.state.isActive ? " show" : "")}>Made with ReactJS</span>
        <i className="material-icons" onMouseEnter={this.isActive} onMouseLeave={this.isActive}>info</i>
      </div>
    )
  },

  // Custom Functions
  isActive: function(){
    this.setState({
      isActive : !(this.state.isActive)
    })
  }
})


module.exports = Header;
