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

    deleteRow = ()=> {

    }

    render() {
        const {photos} = this.state;
        return (
            <React.Fragment>
                <h1>Photos Table</h1>
                <table>
                    {
                        photos.map(photo =>
                            <tr>
                                <td>
                                    {photo.id}
                                </td>
                                <td>
                                    {photo.title}
                                </td>
                                <td>
                                    <img src={photo.thumbnailUrl} alt='thumnail'/>
                                </td>
                                <td>
                                    <button onClick={this.deleteRow}>Delete</button>
                                </td>
                            </tr>
                            )
                    }
                </table>
                
            </React.Fragment>
        );
    }
}

export default Part1;