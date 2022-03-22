import React, { Component } from 'react'

class Dashboard extends Component {
    render() {
        return (
            // <div className=' dashborad-sidebar'>
                <div className='col-md-3 col-lg-2 sidebar-offcanvas' id='sidebar' role="navigation" style={{ background: "lightgrey" }} >
                    <ul className='nav flex-column sticky-top pl-0 pt-5 p-3 pb-5'>
                        <li className='nav-item mb-2 mt-3'>
                            <a className='nav-link text-secondary'><h4>DASHBOARD</h4> </a>
                        </li>
                        <li className='nav-item mb-2'>
                            <a className='nav-link text-secondary' href='/overview'>
                                <i className='fa fa-user font-weight-bold'>
                                    <span className='ml-3'>Overview</span>
                                </i>
                            </a>
                        </li>
                        <li className='nav-item mb-2'>
                            <a className="nav-link text-secondary dropdown" href='#'>
                                <i className="far fa-file-word font-weight-bold"></i>
                                <span className="ml-3"> PRODUCTS
                                    <i className='fa fa-caret-down'></i>
                                </span>
                            </a>
                            <ul className="list-unstyled flex-column pl-3 dropdown-container">
                                <li className="nav-item mb-2 ">
                                    <a className="nav-link text-secondary" href="">
                                        <i className="fas fa-book-reader"></i>
                                        Data Report
                                    </a>
                                </li>
                                <li className="nav-item mb-2 ">
                                    <a className="nav-link text-secondary" href="">
                                        <i className="fas fa-book-medical"></i>
                                        File Report
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className='nav-item mb-2'>
                            <a className='nav-link text-secondary' href='#'>
                                <i className='fa fa-chart-bar font-weight-bold'>
                                    <span className='ml-3'>Analytics</span>
                                </i>
                            </a>
                        </li>
                        <li className='nav-item mb-2'>
                            <a className='nav-link text-secondary' href='#'>
                                <i className='fa fa-chart-bar font-weight-bold'>
                                    <span className='ml-3'>Analytics</span>
                                </i>
                            </a>
                        </li>
                        <li className='nav-item mb-2'>
                            <a className='nav-link text-secondary' href='#'>
                                <i className='fa fa-chart-bar font-weight-bold'>
                                    <span className='ml-3'>Analytics</span>
                                </i>
                            </a>
                        </li>
                        <li className='nav-item mb-2'>
                            <a className='nav-link text-secondary'>
                                TEMPLATES
                            </a>
                        </li>
                        <li className='nav-item mb-2'>
                            <a className='nav-link text-secondary'>
                                TEMPLATES
                            </a>
                        </li>
                    </ul>
                </div>
            // </div>
        )
    }
}

export default Dashboard;