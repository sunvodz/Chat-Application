import React, { Component } from 'react'
import socketIOClient from 'socket.io-client';
import MessageForm from './MessageForm';
import MessageList from './MessageList';
import { Redirect } from 'react-router-dom';
export default class Chatroom extends Component {
    state = {
        message: [
            { text: "Hello", name: "SunvoDz" },
            { text: "Hi", name: "A" }
        ],
        socket: null
    }
    componentDidMount() {
        if (this.state.socket == null) {
            const socket = socketIOClient('http://localhost:8088');
            socket.on("message", (message) => {
                this.addMessage(message);

            })
            this.setState({ socket: socket });
        }

    }

    onMessageSend = (message) => {
        this.addMessage(message);
        this.state.socket.emit("emit",{...message});
    }
    addMessage = (message) => {
        this.setState({ message: [...this.state.message, { ...message }] });
    }

    render() {

        if (this.props.location.name === null || this.props.location.name === '') {
            return <Redirect to='/chat' />
        }

        const { name } = this.props.location;
        return (
            <div>

                <MessageList message={this.state.message} />
                <MessageForm onMessageSend={this.onMessageSend} currentName={name} />
            </div>
        )
    }
}
