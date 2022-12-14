import React, { Component } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src: null,
      crop: { aspect: 16 / 9 },
      image: null,
      output: null,
    };

    this.selectImage = this.selectImage.bind(this);
    this.cropImageNow = this.cropImageNow.bind(this);
  }

  selectImage(file) {
    this.setState({ src: URL.createObjectURL(file) });
    // console.log("h", URL.createObjectURL(this.file));
    // this.setState(URL.createObjectURL(file));
  }

  // console.log(first)

  cropImageNow = () => {
    const canvas = document.createElement("canvas");

    const scaleX = this.state.image?.naturalWidth / this.state.image?.width;
    const scaleY = this.state.image?.naturalHeight / this.state.image?.height;
    console.log("x", scaleX);
    console.log("y", scaleY);

    canvas.width = this.state.crop.width;
    canvas.height = this.state.crop.height;

    const ctx = canvas.getContext("2d");

    const pixelRatio = window.devicePixelRatio;
    canvas.width = this.state.crop.width * pixelRatio;
    canvas.height = this.state.crop.height * pixelRatio;
    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = "high";
    console.log("crop", pixelRatio);
    console.log(this.state.image);

    ctx.drawImage(
      this.state.image,
      this.state.crop.x * scaleX,
      this.state.crop.y * scaleY,
      this.state.crop.width * scaleX,
      this.state.crop.height * scaleY,
      0,
      0,
      this.state.crop.width,
      this.state.crop.height
    );

    // Converting to base64
    const base64Image = canvas.toDataURL("image/jpeg");
    this.setState({ output: base64Image });
    console.log("crop", base64Image);
  };

  render() {
    return (
      <div className="App">
        <center>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              this.selectImage(e.target.files[0]);
            }}
          />
          <br />
          <br />
          <div>
            <div>
              <ReactCrop
                src={this.state.src}
                onImageLoaded={(image) => this.setState({ image })}
                crop={this.state.crop}
                onChange={(crop) => this.setState({ crop })}
              />
              <br />
              <button onClick={this.cropImageNow}>Crop</button>
              <br />
              <br />
            </div>
          </div>
          <div>
            {this.state.output && <img src={this.state.output} alt="" />}
          </div>
        </center>
      </div>
    );
  }
}
