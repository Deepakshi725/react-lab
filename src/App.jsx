import './App.css';
import DataComponent from './component/DataComponent';

function App() {
  const images = DataComponent();
  return (
    <div className="App">
      <h1 className="gallery-heading">Kalvium Gallery</h1>
      <div className="image-container">
      {images.map(image => (
        <img key ={image.id} src={image.img} alt={`Image ${image.id}`}/>
      ))}
      </div>
    </div>
  );
}

export default App;
