import React, { Component } from 'react';
import axios from 'axios';

class Part1 extends Component {

    constructor(props) {
        super(props)
        this.state = {
            photos: []
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/photos').then(res => {
            this.setState({photos: res.data})
            console.log(this.state.photos);
        })
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Part1;