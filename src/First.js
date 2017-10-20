import React, {Component} from 'react';

class FirstStep extends Component {
    render(){
        return(
            <form className="container-fluid">
                <div className="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <label className="text-center col-lg-12 col-md-12 col-sm-12 col-xs-12">Please tell us more about yourself.</label>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                        <label className="text-left col-lg-12 col-md-12 col-sm-12 col-xs-12">First Name</label>
                        <span className="col-lg-12 col-md-12 col-sm-12 col-xs-12"><input type="text" className="form-control" placeholder="First Name"/></span>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                        <label className="text-left col-lg-12 col-md-12 col-sm-12 col-xs-12">Last Name</label>
                        <span className="col-lg-12 col-md-12 col-sm-12 col-xs-12"><input type="text" className="form-control" placeholder="First Name"/></span>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <label className="text-left col-lg-12 col-md-12 col-sm-12 col-xs-12">Last Name</label>
                        <span className="col-lg-12 col-md-12 col-sm-12 col-xs-12"><input type="email" className="form-control"placeholder="Enter email"/></span>
                    </div>
                    <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 text-right">
                        <button type="submit" className="btn btn-primary ">Next</button>
                    </div>
                </div>          
            </form>
        )
    }
}

export default FirstStep