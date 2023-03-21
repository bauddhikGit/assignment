import './App.css';

import React from 'react';
import axios from 'axios';

class MultipartFormDataExample extends React.Component {
  state = {
    pdfFile: null,
    imageFile: null
  }

  handlePdfChange = (event) => {
    this.setState({
      pdfFile: event.target.files[0]
    });
  }

  handleImageChange = (event) => {
    this.setState({
      imageFile: event.target.files[0]
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const url = 'http://example.com/upload';

    // Create multipart form data
    const formData = new FormData();
    formData.append('pdf', this.state.pdfFile);
    formData.append('image', this.state.imageFile);

    // Make POST request with multipart form data
    axios.post(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="file" name="pdf" onChange={this.handlePdfChange} />
        <input type="file" name="image" onChange={this.handleImageChange} />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default MultipartFormDataExample;
