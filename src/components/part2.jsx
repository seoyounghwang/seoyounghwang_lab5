import React, { Component } from 'react';

class Part2 extends Component {

    addPhoto = () => {
        
    }

    photoId = React.createRef();
    title = React.createRef();

    render() {
        return (
            <section>
                <form onSubmit={this.addPhoto}>
                    <input ref = {this.photoId} type='text' name='photoId'/>
                    <input ref = {this.title} type='text' name='title'/>
                    <button type='submit'>Add Photo</button>
                </form>
            </section>
        );
    }
}

export default Part2;