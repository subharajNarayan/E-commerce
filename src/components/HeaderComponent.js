import React from 'react';
import { useSelector } from 'react-redux';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

function RenderCart() {
    // we get a state of additemsReducer
    //Write the name of the file not the function 
    const state = useSelector((state) => state.addItem)

    return (
        <NavItem>
            <NavLink href="/cart" className='nav-link' style={{ color: "white" }}>
                <i className="fa fa-solid fa-cart-arrow-down">({state.length})</i>
            </NavLink>
        </NavItem>
    )
}

export default class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
    }
    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar color="primary" dark expand="md">
                    <NavbarBrand href="/">E-COMMERCE</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNav} />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink href="/">HOME</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/aboutus">ABOUT</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/contact">CONTACT</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/product">PRODUCT</NavLink>
                            </NavItem>
                            <div className='right-nav d-flex'>
                                <NavItem>
                                    <NavLink href="/login" className='nav-link' style={{ color: "white" }}>
                                        <i className="fa fa-solid fa-user"></i></NavLink>
                                </NavItem>

                                <RenderCart />

                            </div>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}