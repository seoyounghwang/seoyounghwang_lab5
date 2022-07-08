import React, { Component } from "react";
import axios from "axios";

class Part1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      err: "",
      photos: [],
    };
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/photos").then((res) => {
      this.setState({ photos: res.data });
    });
  }

  deleteRow = (e) => {
    const photos = this.state.photos.filter((item) => {
      return item.id !== parseInt(e.target.value);
    });
    this.setState({ photos });
    axios
      .delete(`https://jsonplaceholder.typicode.com/photos/${e.target.value}`)
      .then(() => {})
      .catch((err) => {
        this.setState({ err });
      });
    // fetch(
    //   `https://jsonplaceholder.typicode.com/photos/${parseInt(e.target.value)}`,
    //   {
    //     method: "DELETE",
    //   }
    // )
    //   .then((res) => res.json())
    //   .then((result) => {
    //     const photos = this.state.photos.filter((item) => {
    //       return item.id !== parseInt(e.target.value);
    //     });

    //     this.setState({ photos });
    //   })
    //   .catch((err) => console.log(err.toString()));
  };

  render() {
    const { err, photos } = this.state;
    return (
      <React.Fragment>
        <h1>Photos Table</h1>
        <p>{err ? err : ""}</p>
        <table>
          <tbody>
            {photos.map((photo) => (
              <tr key={photo.id}>
                <td>{photo.id}</td>
                <td>{photo.title}</td>
                <td>
                  <img src={photo.thumbnailUrl} alt="thumnail" />
                </td>
                <td>
                  <button value={photo.id} onClick={this.deleteRow}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Part1;
