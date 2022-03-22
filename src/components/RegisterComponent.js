import React, { Component } from 'react'
import { Col, Form, Input, Label, Row } from 'reactstrap';

class Register extends Component {
  render() {
    return (
      <div style={{ background: "#EFEFFB" }}>
        <div className='container'>
          <div className='row account-header'>
            <div className='col-md-6 lg-6 sm-12'>
              <div className='account-create-text'>
                <h5>Create your E-commerce Account</h5>
              </div>
            </div>
            <div className='col-md-6 lg-6 sm-12'>
              <div className='account-member-text'>
                <p>Already Member? <a href='/login'>LOGIN</a> Here</p>
              </div>
            </div>
          </div>
        </div>

        <div className='container register_form'>
          <Form style={{ padding: "20px" }}>
            <div className='row'>
              <div className='col-md-6 sm-12 register_fields'>
                <Row>
                  <Label>Full name *</Label>
                    <Input />
                </Row>
              </div>
              <div className='col-md-6 sm-12'>
                <Row>
                  <Label>Phone Number *</Label>
                  <Input></Input>
                </Row>
              </div>
            </div>
          </Form>
        </div>
      </div>
    )
  }
}
export default Register;
