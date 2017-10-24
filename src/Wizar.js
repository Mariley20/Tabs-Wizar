import React, { Component } from 'react';
import FirstStep from "./First";
import AditionalInfo from "./AditionalInfo";
import LastStep from "./Last";
import './Wizar.css'
class Wizar extends React.Component {
    render(){
        return (
<div className="container text-center">
  <ul className="nav nav-tabs my-nav-Wizar">
    <li className="active">
        <a data-toggle="tab" href="#info"><i className="glyphicon glyphicon-user"></i><br />
        <span>Additional Info</span></a>
    </li>
    <li>
        
        <a data-toggle="tab" href="#perfil"><i class="fa fa-cog" aria-hidden="true"></i><br />
        <span>Additional Info</span></a>
    </li>
    <li>
        <a data-toggle="tab" href="#final"><i class="fa fa-check" aria-hidden="true"></i><br />
        <span>Additional Info</span></a>
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