import React, { Component } from 'react';
import axios from 'axios';

class Part1 extends Component {

    constructor(props) {
        super(props)
        this.state = {
            photos: [],
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/photos').then(res => {
            this.setState({photos: res.data})
        })
    }

    deleteRow = (e)=> {

        axios.delete(`https://jsonplaceholder.typicode.com/photos/${e.target.value}`)
    .then(() => {
        const photos = this.state.photos.filter(item=>{
            return item.id!== parseInt(e.target.value);
        });
        this.setState({photos });
    });

    
    }



    render() {
        const {photos} = this.state;
        return (
            <React.Fragment>
                <h1>Photos Table</h1>
                <table>
                    <tbody>
                    {
                        photos.map(photo =>
                            <tr key={photo.id}>
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
                                    <button value={photo.id} onClick={this.deleteRow}>Delete</button>
                                </td>
                            </tr>
                            )
                    }
                    </tbody>
                </table>
                
            </React.Fragment>
        );
    }
}

export default Part1;