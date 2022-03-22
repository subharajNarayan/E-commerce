import React, { Component } from 'react';
import { Button } from 'reactstrap';


class Home extends Component {
    render() {
        return (
            <>
                < div className='container'>
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-100" src="/assets/images/audibest.jpg" alt="First slide" height="500px" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="/assets/images/Mercedescar.jpg" alt="Second slide" height="500px" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="/assets/images/romeocar.jpg" alt="Third slide" height="500px" />
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                    <div>
                        <div className='main'>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-lg-5'>
                                        <div className='image'>
                                            <img src='/assets/images/iphone3.jpg' alt='iphone' width='100%' />
                                        </div>
                                    </div>
                                    <div className='col-lg-7'>
                                        <div className='column'>
                                            <div className='product_detail_title'>
                                                <h1>Iphone</h1>
                                            </div>
                                            <div className='product_detail_price'>
                                                <h4>$ 1000</h4>
                                            </div>
                                            <div className='product_detail_price'>
                                                <h5>Something</h5>
                                            </div>
                                            <div className='product_detail_price'>
                                                <p>One of the best iphone</p>
                                            </div>
                                        </div>
                                        <div className="ui vertical animated button" tabIndex="0">
                                            <div className="hidden content">
                                                <i className="shop icon"></i>
                                            </div>
                                            <div className="visible content">
                                                <Button type='submit'>
                                                    Add To Cart
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Home;