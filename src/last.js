import React, { Component } from 'react';
import SweetAlert from 'sweetalert-react';


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
              <button onClick={() => this.setState({ show: true })}>Alert</button>
      <SweetAlert
        show={this.state.show}
        title="Demo"
        text="SweetAlert in React"
        onConfirm={() => this.setState({ show: false })}
      />
        </div>
        </div>
</div>
    )
   }
}

   
export default LastStep;