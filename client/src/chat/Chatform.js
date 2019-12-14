import React, { Component } from 'react'
import { Link } from 'react-router-dom'

 class Chatform extends Component {
     state = {
        name:''
     }

     onChange= e => {
        this.setState({name:e.target.value})
    }

    render() {
        const {name} = this.state;
        return (
            <div>
                <input type="text" value={name} onChange={this.onChange}/>
                <Link to={{pathname:'/chatroom',name:name}}>Join</Link>
            </div>
        )
    }
}
export default Chatform;