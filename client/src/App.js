import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import User from './user/User';
import Post from './post/Post';
import { Route, Link } from 'react-router-dom';
import Request from './lib/Request';
import Chatroom from './chat/Chatroom';
import Chatform from './chat/Chatform';
class App extends Component {
  state = {
    name: "SunvoDz"
  }

  onNameChange = name => {
    this.setState({
      name: name
    })
  }

  render() {
    const { name } = this.state;
    return (
      <div>
        <div>
          SunvoDz {name}
        </div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/users">Users</Link>
          <Link to="/posts">Posts</Link>
          <Link to="/chat">Chat</Link>
        </div>
        <Route path="/users" component={() =>
          <Request url="https://jsonplaceholder.typicode.com/users">
            {(data) => <User data={data} />}
          </Request>
        } />
        <Route path="/posts" component={() =>
          <Request url="https://jsonplaceholder.typicode.com/posts">
            {(data) => <Post data={data} />}
          </Request>
        } />
        <Route path="/chat" component={Chatform}/>
        <Route path="/chatroom" component={Chatroom}/>

      </div>
    );
  }
}

export default App;
