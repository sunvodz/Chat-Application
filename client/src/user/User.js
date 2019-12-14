import React, { Component } from 'react';
import axios from 'axios';

class User extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }

    }

    render() {

        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>User name</td>
                            <td>Name</td>
                            <td>Email</td>
                        </tr>
                    </thead>
                    <tbody>

                        {this.props.data === undefined ? (
                            <div/>
                        ) : (
                        this.props.data.map(user => (
                            <tr key={user.id}>
                                <td>{user.username}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                            </tr>
                        )))}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default User;