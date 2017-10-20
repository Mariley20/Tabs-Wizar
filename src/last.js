import React, { Component } from 'react';
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';


class LastStep extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }
   render(){
    return (
        <div className="container" >
            <div className="row">
        <div className="col-xs-12 col-lg-12 col-md-12 col-sm-12">
            <h2>Yuhuuu!</h2>
            <small>Click on <b>"Finish"</b>to join our community </small>
        </div>
        <div className="col-xs-12 col-lg-12 col-md-12 col-sm-12">
            <button className="btn btn-back ">Back</button>   
            <button onClick={() => this.setState({ show: true })}>Finish</button>
            <SweetAlert
            type='success'         
              show={this.state.show}
                         title="Good job!"
              text="You clicked the finish button!"
              
              onConfirm={() => this.setState({ show: false })}
            />
        </div></div>
</div>
    )
   }
}

   
export default LastStep;