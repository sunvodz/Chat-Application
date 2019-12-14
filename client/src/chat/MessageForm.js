import React, { Component } from 'react'

class MessageForm extends Component {
    state = {
        text: ''
    }

    onChange= e => {
        this.setState({text:e.target.value})
    }
    onSubmit = e => {
        e.preventDefault();
        this.props.onMessageSend({
            text:this.state.text,
            name: this.props.currentName
        })
    }
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input type="text" value={this.state.text} onChange={this.onChange}/>
                <button>Send</button>
            </form>
        )
    }
}

export default MessageForm;