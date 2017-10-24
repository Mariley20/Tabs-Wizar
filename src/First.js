import React, {Component} from 'react';

class FirstStep extends Component {
    render(){
        return(
            <div className="container">
          <div className='col-md-offset-3 col-md-6'>
            <form className="form-group">
                <div className="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12"><br/>
                <h4>Please tell us more about yourself.</h4><br/>

                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                        <label className="text-left col-lg-12 col-md-12 col-sm-12 col-xs-12">First Name</label>
                        <span className="col-lg-12 col-md-12 col-sm-12 col-xs-12"><input type="text" className="form-control" placeholder="ex: Andrew"/></span>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                        <label className="text-left col-lg-12 col-md-12 col-sm-12 col-xs-12">Last Name</label>
                        <span className="col-lg-12 col-md-12 col-sm-12 col-xs-12"><input type="text" className="form-control" placeholder="ex: Mike"/></span>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <label className="text-left col-lg-12 col-md-12 col-sm-12 col-xs-12">Last Name</label>
                        <span className="col-lg-12 col-md-12 col-sm-12 col-xs-12"><input type="email" className="form-control"placeholder="Enter email"/></span>
                    </div>
                    <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 text-right">
                        <button type="submit" className="btn-next btn ">Next</button>
                    </div>
                </div>          
            </form>
            </div>
            </div>
        )
    }
}

export default FirstStep