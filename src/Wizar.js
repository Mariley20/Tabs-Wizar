import React, { Component } from 'react';
import FirstStep from "./First";
import AditionalInfo from "./AditionalInfo";
import LastStep from "./Last";
import './Wizar.css'
class Wizar extends React.Component {
    render(){
        return (
<div id="wizzard" className="container text-center">
  <ul id="eyeslash" className="nav nav-tabs my-nav-Wizar col-md-12 col-xs-12">
    <li id="eyelash" className="active col-md-4 col-xs-4">
        <a data-toggle="tab" href="#info"><i className="glyphicon glyphicon-user"></i><br />
        <span>Personal details</span></a>
    </li>
    <li id="eyelash" className="col-md-4 col-xs-4">  
        <a data-toggle="tab" href="#perfil"><i className="fa fa-cog" aria-hidden="true"></i><br />
        <span>Additional Info</span></a>
    </li>
    <li id="eyelash" className="col-md-4 col-xs-4">
        <a data-toggle="tab" href="#final"><i className="fa fa-check" aria-hidden="true"></i><br />
        <span>Last step</span></a>
    </li>
  </ul>

  <div className="tab-content">
    <div id="info" className="tab-pane fade in active k-padd">
        <FirstStep />
    </div>
    <div id="perfil" className="tab-pane fade k-padd">
        <AditionalInfo />
    </div>
    <div id="final" className="tab-pane fade k-padd">
        <LastStep />
    </div>
  </div>
</div>  
    )
    }
}
export default Wizar;