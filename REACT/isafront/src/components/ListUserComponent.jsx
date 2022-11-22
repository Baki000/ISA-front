import React, { Component } from 'react';
import UserService from '../services/UserService';

class ListUserComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            users: []
        }
    }
    componentDidMount(){
        UserService.getUsers().then((res) => {
            this.setState({users: res.data});
        })
    }
    render() {
        return (
            <div>
                <h2 className="text-center">Users</h2>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Surname</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Jmbg</th>
                                <th>Sex</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.users.map(
                                    user => 
                                    <tr key = {user.id}>
                                        <td> {user.name}</td>
                                        <td> {user.surname}</td>
                                        <td> {user.email}</td>
                                        <td> {user.phoneNum}</td>
                                        <td>{user.jmbg}</td>
                                        <td>{user.sex}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListUserComponent;