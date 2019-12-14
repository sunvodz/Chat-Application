import React, { Component } from 'react'
import Message from './Message';
class MessageList extends Component {
    render() {
        const {message} = this.props;
        return message.map(message => (
            <ul>
                <Message message={message}/>
            </ul>
        ))
    }
}

export default MessageList;