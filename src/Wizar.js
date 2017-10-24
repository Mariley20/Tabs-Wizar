import React, { Component } from 'react';

import FirstStep from "./First";
import AditionalInfo from "./AditionalInfo";
import LastStep from "./Last";
import './Wizar.css'
import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
  Redirect
} from 'react-router-dom';
class Wizar extends React.Component {
    render(){
        return (
            <BrowserRouter>
<div className="container text-center">
  <ul className="nav nav-tabs my-nav-Wizar">
    <li className="active">
        <NavLink  exact to="/first"><i className="glyphicon glyphicon-user"></i><br />
        <span>Additional Info</span></NavLink>
    </li>
    <li>
        <NavLink  to="/aditionalInfo"><i className="fa fa-cog" aria-hidden="true"></i><br />
        <span>Additional Info</span></NavLink>
    </li>
    <li>
        <NavLink  to="/last"><i className="fa fa-cog" aria-hidden="true"></i><br />
        <span>Additional Info</span></NavLink>
        {/* <a data-toggle="tab" href="#final"><i class="fa fa-check" aria-hidden="true"></i><br />
        <span>Additional Info</span></a> */}
    </li>
  </ul>

  <div className="tab-content">
    {/* <div id="info" className="tab-pane fade in active k-padd">
        <FirstStep />
    </div>
    <div id="perfil" className="tab-pane fade k-padd">
        <AditionalInfo />
    </div>
    <div id="final" className="tab-pane fade k-padd">
        <LastStep />
    </div> */}
    <Switch> 
            <Route exact path= "/" render={()=><Redirect to="/first" /> } />
            <Route path = "/first" component = {FirstStep}/>
            <Route path = "/aditionalInfo" component = {AditionalInfo}/>
            <Route path = "/last" component = {LastStep}/>
 </Switch>
  </div>
  
</div>
</BrowserRouter> 
    )
    }
}
export default Wizar;