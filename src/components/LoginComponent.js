import React, { Component, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, FormGroup, Label, Col, Input, Button } from 'reactstrap';
import { postUser } from '../redux/ActionCreators';


function RenderLogin() {

    const [state, setState] = useState({
        email: "",
        password: ""
    })
    const [error, setError] = useState("");
    
    const { email, password } = state;

    let dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError("Please input all the input Field")
        } else {
            dispatch(postUser(state));
            setError("Login Success");
        }
    };

    const handleInputChange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value });
    }



    return (
        <div>
            <div className='user-head d-flex justify-content-center p-2' style={{ border: "1px solid lightgrey" }}>
                <div className='login-head'>
                    <ul className='nav flex-column sticky-top mt-2 font-weight-bold' style={{ borderRight: "1px solid lightgrey" }}>
                        <li className='nav-item'>
                            <a className='nav-link text-secondary' href='/login'>LOGIN</a>
                        </li>
                    </ul>
                </div>
                <div className='register-head'>
                    <ul className='nav flex-column sticky-top mt-2 font-weight-bold'>
                        <li className='nav-item'>
                            <a className='nav-link text-secondary' href='/register'>REGISTER</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='container login-form'>
                <div className='row'>
                    <div className='col-md-4'>

                    </div>
                    <div className='col-md-4'>
                        <div className='btn-google'>
                            <Button color='primary' className='btn btn-primary w-100 mb-4'>
                                <i className="fa fa-google me-2"></i> Sign in With Google
                            </Button>
                            <Button color='primary' className='btn btn-primary w-100 mb-4'>
                            <i className="fa fa-facebook me-2"></i> Sign in With Facebook
                            </Button>
                        </div>
                        <Form onSubmit={handleSubmit} className="mt-4">
                            {error && <h5 style={{ color: "red" }}>{error}</h5>}
                            <FormGroup className='login-body'>
                                <Label htmlFor='email'>Email:</Label>
                                <Col md={12}>
                                    <Input type="text" id='email login-input'
                                        className='form-group'
                                        autoComplete='off'
                                        value={email || ""}
                                        name="email"
                                        onChange={handleInputChange}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup className='login-body'>
                                <Label htmlFor='password'>Password:</Label>
                                <Col md={12}>
                                    <Input type="password" id='password login-input'
                                        className='form-group'
                                        autoComplete='off'
                                        value={password || ""}
                                        name="password"
                                        onChange={handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup className='login-btn'>
                                <Col md={{ size: 6 }}>
                                    <Button type='submit' color='primary' className='btn btn-outline-primary'>SUBMIT</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                    <div className='col-md-4'>

                    </div>
                </div>
            </div>
        </div>
    )
}

class Login extends Component {
    render() {
        return (
            <RenderLogin />
        )
    }
}
export default Login;



// React Login Authentication with JWT Access, Refresh Tokens, Cookies and Axios