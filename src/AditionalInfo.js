import React, { Component } from 'react';
import './AditionalInfo.css';

class AditionalInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName : null,
      lastName : null,
      email: null,
      website : null,
      framework: null,
      lenguage : null,
      bootstrap : null,
      price: null
    }
  }
  render() {
    return (
      <div className="container">
          <div className='col-md-offset-3 col-md-6'>
              <h4>Please give us more details about your platform.</h4><br/>
              <form className="form-group">
                <div className='col-md-12'>
                  <label>Your website:</label>
                  <input className='form-control so-inp' type="text" placeholder='ex: http://www.creative-tim.com'/>
                </div>
                  <div className='col-md-6'>
                    <label>Framework Type:</label>
                    <input className='form-control so-inp' type="text" placeholder='ex: http://www.creative-tim.com'/>
                  </div>
                  <div className='col-md-6'>
                    <label>Language:</label>
                    <select className='form-control  so-inp'>
                        <option>- language -</option>
                        <option selected>English</option>
                        <option>Español</option>
                        <option>Italiano</option>
                        <option>Deutsch</option>
                    </select>
                  </div>
                  <div className='col-md-6'>
                    <label>Bootstrap Version</label>
                    <select className='form-control so-inp'>
                        <option>- version -</option>
                        <option selected>Bootstrap 1.1</option>
                        <option>Bootstrap 2.0</option>
                        <option>Bootstrap 3.0</option>
                        <option>Bootstrap 4.0(alpha)</option>
                    </select>
                  </div>
                  <div className='col-md-6'>
                    <label>Price</label>
                        <input className='form-control so-inp' type="number" placeholder='ex: 19.00'/>
                  </div>
              </form>
              <div  className='col-md-6 text-left'>
                <button className='btn so-back'>Back</button>
              </div>
              <div  className='col-md-6 text-right'>
              <button className='btn so-next'>Next</button>
              </div>
          </div>
      </div>
    );
  }
}

export default AditionalInfo;
