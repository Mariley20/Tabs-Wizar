import React, { Component } from 'react';
import FirstStep from "./First";
import AditionalInfo from "./AditionalInfo";
import LastStep from "./Last";
class Wizar extends React.Component {
    render(){
        return (
            <div className="container text-center">
  <h2>Dynamic Tabs</h2>
  <ul className="nav nav-tabs">
    <li className="active"><a data-toggle="tab" href="#home">Personal details</a></li>
    <li><a data-toggle="tab" href="#menu1">Additional Info</a></li>
    <li><a data-toggle="tab" href="#menu2">Last step</a></li>
  </ul>

  <div className="tab-content">
    <div id="home" className="tab-pane fade in active k-padd">
        <FirstStep />
    </div>
    <div id="menu1" className="tab-pane fade k-padd">
        <AditionalInfo />
    </div>
    <div id="menu2" className="tab-pane fade k-padd">
        <LastStep />
    </div>
  </div>
</div>  
    )
    }
}
export default Wizar;