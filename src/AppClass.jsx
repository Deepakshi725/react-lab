import { Component } from "react";
import "./App.css"
import DataComponent from './component/DataComponent';


export default class AppClass extends Component{
  
  render() {
    const images = DataComponent(); // Access data from DataComponent
  
    return (
      <div className="App">
        <h1 className="gallery-heading">Kalvium Gallery</h1>
        <div className="image-container">
          {images.map(image => (
            <img key={image.id} src={image.img} alt={`Image ${image.id}`} />
          ))}
        </div>
      </div>
    );
  }
}
