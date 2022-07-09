import React, { Component } from "react";

class Part2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      err: "",
      photos: {
        photoId: "",
        title: "",
      },
    };
  }

  addPhoto = (e) => {
    e.preventDefault();
    const photoId = this.photoId.current.value;
    const title = this.title.current.value;
    const photos = { photoId, title };

    fetch(`https://jsonplaceholder.typicode.com/photos`, {
      method: "POST",
      body: JSON.stringify({
        albumId: 1,
        id: parseInt(photos.photoId),
        title: photos.title,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        this.setState({ photos });
        console.log(json);
      })
      .catch((err) => {
        console.log(err.toString());
        this.setState({ err });
      });
  };

  photoId = React.createRef();
  title = React.createRef();

  render() {
    return (
      <section className="container">
        <h1>Upload Photo</h1>
        <div>
          <form onSubmit={this.addPhoto}>
            <input
              ref={this.photoId}
              type="text"
              name="photoId"
              placeholder="photo id"
            />
            <input
              ref={this.title}
              type="text"
              name="title"
              placeholder="title of the photo"
            />
            <button type="submit">Add Photo</button>
          </form>
        </div>

        <p>{this.state.err ? "This photo not able to create" : ""}</p>
      </section>
    );
  }
}

export default Part2;
