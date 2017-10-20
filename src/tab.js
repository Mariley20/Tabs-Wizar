import React,{Component} from "react";
import "./Tab.css";

class Tabs extends React.Component{
    render(){
        return(
            
<div className="container">
  <h2>Dynamic Tabs</h2>
  <ul className="nav nav-tabs">
    <li className="active"><a data-toggle="tab" href="#home">Home</a></li>
    <li><a data-toggle="tab" href="#menu1">Profile</a></li>
    <li><a data-toggle="tab" href="#menu2">Messages</a></li>
  </ul>

  <div className="tab-content">
    <div id="home" className="tab-pane fade in active k-padd">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    <div id="menu1" className="tab-pane fade k-padd">
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
    <div id="menu2" className="tab-pane fade k-padd">
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
    </div>
  </div>
</div>
        );
    }
}

export default Tabs;