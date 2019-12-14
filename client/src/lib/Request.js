import React,  { Component } from 'react';
import axios from 'axios';

class Request extends Component {
        state = {
            data:[]
        }
        async componentDidMount(){
            const result = await axios.get(this.props.url);
            this.setState({data: result.data});
        }
        render(){
           return (
               this.props.children(this.state.data)
           )
        }
    };
    export default Request;