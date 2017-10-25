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
<div id="wizzard" className="container text-center">
  <ul id="eyeslash" className="nav nav-tabs my-nav-Wizar col-md-12 col-xs-12">
    <li id="eyelash" className="active col-md-4 col-xs-4">
        <NavLink  exact to="/first"><i className="glyphicon glyphicon-user"></i><br />
        <span>Additional Info</span></NavLink>
    </li>
    <li id="eyelash" className="col-md-4 col-xs-4">  
        <NavLink  to="/aditionalInfo"><i className="fa fa-cog" aria-hidden="true"></i><br />
        <span>Additional Info</span></NavLink>
    </li>
    <li id="eyelash" className="col-md-4 col-xs-4">
        <NavLink  to="/last"><i className="fa fa-cog" aria-hidden="true"></i><br />
        <span>Additional Info</span></NavLink>
    </li>
  </ul>

  <div className="tab-content">
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