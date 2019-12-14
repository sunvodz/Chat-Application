import React, { Component } from 'react';
import axios from 'axios';

class Post extends Component {
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
                            <td>User Id</td>
                            <td>Id</td>
                            <td>Title</td>
                            <td>Body</td>
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.data === undefined ? (
                            <div/>
                        ) : (this.props.data.map(post => (
                            <tr key={post.id}>
                                <td>{post.userId}</td>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td>{post.body}</td>
                            </tr>
                        )))}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Post;