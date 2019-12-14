import React, { Component } from 'react'
class Message extends Component {
    render() {
        const { message } = this.props;
        return (

            <li>
                <div>
                    {message.name}:{message.text}
                </div>
            </li>

        )
    }
}

export default Message;
