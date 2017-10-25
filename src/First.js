import React, {Component} from 'react';
import {NavLink } from 'react-router-dom';

class FirstStep extends Component {
    constructor(props){
        super(props)
        this.state = {
            firstName : '',
            lastName : '',
            email: '',
            validateEmail: false,
            validateFirst: false,
            validateLast: false,
        }
    }
    handleUserInput(e){
        let name = e.target.name;
        let value = e.target.value;
        console.log('name:'+name + 'value'+value)
        this.setState({
            [name] : value});
        this.validateField(name, value);
    }
    validateField(fieldName, value) {
        // let emailValid, lastValid, firstValid;
    switch(fieldName) {
      case 'email':
           let emailValid = (this.state.email.match(/^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/))? true : false;
           this.setState({
               validateEmail : emailValid
           })
        break;
      case 'lastName':
           let lastValid =(this.state.lastName =! null)?true:false;
           this.setState({
               validateLast : lastValid
           })
        break;
        case 'firstName':
          let firstValid =(this.state.firstName =! null)?true:false;
           this.setState({
               validateFirst : firstValid
           })
        break;
      default:
            // console.log('name'+nameValid)
        break;
    }
    console.log(this.state.validateEmail +"&&"+this.state.validateFirst+ '&&' +this.state.validateLast)
    console.log(this.state.validateEmail && this.state.validateFirst && this.state.validateLast);
    if(this.state.validateEmail && this.state.validateFirst && this.state.validateLast){
         this.setState({
             valid : false
         })
     }else{
         this.setState({
             valid : true
         })
     }

  }

    render(){
        return(
            <div className="container">
          <div className='col-md-offset-3 col-md-6'>
            <form className="form-group" onSubmit={e => {
                        e.preventDefault();
                        this.validateField()}}>
                <div className="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12"><br/>
                <h4>Please tell us more about yourself.</h4><br/>

                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                        <label className="text-left col-lg-12 col-md-12 col-sm-12 col-xs-12">First Name</label>
                        <span className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <input type="text" name="firstName" className="form-control" placeholder="ex: Andrew"  onChange={e => {this.handleUserInput(e)}}/></span>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                        <label className="text-left col-lg-12 col-md-12 col-sm-12 col-xs-12">Last Name</label>
                        <span className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <input type="text" name="lastName" className="form-control" placeholder="ex: Mike"  onChange={e => {this.handleUserInput(e)}}/></span>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <label className="text-left col-lg-12 col-md-12 col-sm-12 col-xs-12" >Email</label>
                        <span className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <input type="email" className="form-control" name="email" placeholder="Enter email"   onChange={e => {this.handleUserInput(e)}}/></span>
                    </div>
                    <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 text-right">
                        {
                            this.state.valid ?<NavLink to={"/aditionalInfo"}className="btn-next btn">Ingresar</NavLink>
                            :
                            <button type="button" className="btn-next btn" disabled="disabled">Next</button>
                        }
                        
                    </div>
                </div>          
            </form>
            </div>
            </div>
        )
    }
}

export default FirstStep