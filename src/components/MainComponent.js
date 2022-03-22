import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom';
import Header from './HeaderComponent';
import Login from './LoginComponent';
import About from './AboutComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import Register from './RegisterComponent';
import Overview from './dashboard/Overview';
import Dashboard from './dashboard/DashboardComponent';
import Product from './ProductComponent';
import Cart from './CartButton';
import ProductDetails from './ProductDetailsComponent';
import Footer from './FooterComponent';

class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/aboutus' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route exact path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/product' element={<Product />} />
                    <Route path='/productdetails/:id' element={<ProductDetails />} />
                    <Route path='/cart' element={<Cart /> } />

                    <Route path='/overview' element={<Overview />} />
                    <Route path='/dashboard' element={< Dashboard />} />
                    <Route>404 Not Found!</Route>
                </Routes>
                <Footer />
            </div>
        )
    }
}
export default Main;
