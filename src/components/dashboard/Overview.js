import React, { Component, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'reactstrap';
import { deleteUser, loadUsers } from '../../redux/ActionCreators';
import Dashboard from './DashboardComponent';


function RenderLogin() {
    const dispatch = useDispatch();
    const { users } = useSelector(state => state.users)

    useEffect(() => {
        dispatch(loadUsers())
    }, [])

    const handleDelete = (id) => {
        if (window.confirm("Are You Sure")) {
            dispatch(deleteUser(id))
        }
    }

    return (
        <div className='col main pt-1 mt-2'>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/overview">OVERVIEW</a></li>
                    <li className="breadcrumb-item active" aria-current="page">USER-DATA</li>
                </ol>
            </nav>
            <Table>
                <thead>
                    <tr>
                        <th align='center'>Email</th>
                        <th align="center">Password</th>
                        <th align="center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.email}</td>
                            <td>{user.password}</td>
                            <div>
                                <td>
                                    <span onClick={() => handleDelete(user.id)} >
                                        <i className='fa fa-trash' color="danger" ></i>
                                    </span>
                                </td>
                                <td>
                                    <span>
                                        <i className='fa fa-pen'> </i>
                                    </span>
                                </td>
                            </div>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

class Overview extends Component {
    render() {
        return (
            <div className='d-flex'>
                <Dashboard />
                <RenderLogin />
            </div>
        )
    }
}

export default Overview
