import  React, {Component} from 'react';
import {Col} from 'reactstrap';
import { Button } from 'react-bootstrap';
import './style.css';
class Payment extends Component {
    render(){
        return (
            <div>
                  <Col xs={8}>
                      <section class="fill">
                          <h2>Shipping Address</h2>
                          <p><span>*</span>Required Fields </p>
                          <form>
                          <div class="form-group">
                            <label name=""><span>*</span>Full Name</label>
                            <input type="text" class="form-control" name="fullname" id=""  placeholder="Enter Full name"/>
                          </div>
                        
                         <div class="form-group">
                            <label name=""><span>*</span> Phone number</label>
                            <input type="text" class="form-control" name="phone" id=""  placeholder="Enter number phone"/>
                          </div>
                         <div class="form-group">
                            <label name=""><span>*</span>Email</label>
                            <input type="email" class="form-control" name="email" id=""  placeholder="Enter Email"/>
                          </div>
                          <div class="form-group">
                            <label name=""><span>*</span>Address</label>
                            <input type="text" class="form-control" name="address" id=""  placeholder="Enter address"/>
                          </div>
                          </form>
                          <Button variant="secondary" >CONTINUE SHOPPING</Button>
                          <Button variant="secondary" >Payment</Button>

                      </section>
                  </Col>

            </div>
        );
    }
   
}

export default Payment;